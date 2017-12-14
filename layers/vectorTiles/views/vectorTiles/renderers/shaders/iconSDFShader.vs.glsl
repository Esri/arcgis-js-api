attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_tex;
attribute vec4 a_levelInfo;
attribute vec4 a_vvAttributes;

// the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate
// relative to the tile's upper left corner
// the extrusion vector.
uniform highp mat4 u_transformMatrix;
// the extrude matrix which is responsible for the 'anti-zoom' as well as the rotation
uniform highp mat4 u_extrudeMatrix;
// u_normalized_origin is the tile's upper left corner given in normalized coordinates
uniform highp vec2 u_normalized_origin;
// the size of the mosaic given in pixels
uniform vec2 u_mosaicSize;
// the z of the layer. Given by the order of the layers in the style
uniform mediump float u_depth;
// the map's rotation from the north
uniform mediump float u_mapRotation;
uniform mediump float u_level;
// indicate whether the current set of iconst should be kept upright when the map is rotated
uniform lowp float u_keepUpright;
// the rate of the change in the opacity (fade) of the icons
uniform mediump float u_fadeSpeed;
// the low level we transition (to/from)
uniform mediump float u_minfadeLevel;
// the high level we transition (to/from)
uniform mediump float u_maxfadeLevel;
// the amount of fade given teh current time past the last recorded level
uniform mediump float u_fadeChange;
// the opacity of the layer given by the painter
uniform mediump float u_opacity;

// the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture
varying mediump vec2 v_tex;
// the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the
// opacity of the layer given by the painter
varying lowp float v_transparency;

varying mediump vec2 v_size;

#ifdef VV
#ifdef VV_COLOR
uniform vec4 u_vvColorValues[8];
uniform float u_vvColors[8];
#endif // VV_COLOR
uniform vec4 u_vvSizeInfo;
uniform vec4 u_vvRotationInfo;
uniform vec4 u_vvOpacityInfo;

#ifdef VV_COLOR
varying lowp vec4 v_vvColor;
#endif // VV_COLOR
#endif // VV

// the vertex offsets are given in integers, therefore in order to maintain a reasonable precission we multiply the values
// by 16 and then at the shader devide by the same number
const float offsetPrecision = 1.0 / 64.0;

const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;

#ifdef VV
float getVVSize(float sizeValue) {
  // min value: 0
  // max value: 100
  // min size: 5
  // max size: 65

  // we need to multiply by 8 in order to translate to tile coordinates
  return clamp(((sizeValue  - u_vvSizeInfo.x) / (u_vvSizeInfo.y - u_vvSizeInfo.x)) * (u_vvSizeInfo.w - u_vvSizeInfo.z), u_vvSizeInfo.z, u_vvSizeInfo.w);
}

float getVVOpacity(float opacityValue) {
  // min value: 0
  // max value: 100
  // min size: 5
  // max size: 65

  // we need to multiply by 8 in order to translate to tile coordinates
  return clamp(((opacityValue  - u_vvOpacityInfo.x) / (u_vvOpacityInfo.y - u_vvOpacityInfo.x)) * (u_vvOpacityInfo.w - u_vvOpacityInfo.z), u_vvOpacityInfo.z, u_vvOpacityInfo.w);
}

#ifdef VV_COLOR
const int VV_COLOR_N = 8;

vec4 getVVColor(float colorValue) {
		if (colorValue <= u_vvColors[0]) {
			return u_vvColorValues[0];
		}

		for (int i = 1; i < VV_COLOR_N; ++i) {
			if (u_vvColors[i] >= colorValue) {
				float f = (colorValue - u_vvColors[i-1]) / (u_vvColors[i] - u_vvColors[i-1]);
				return mix(u_vvColorValues[i-1], u_vvColorValues[i], f);
			}
		}

		return u_vvColorValues[VV_COLOR_N - 1];
}
#endif // VV_COLOR

mat4 getVVRotation(float rotationValue) {
    float angle = C_DEG_TO_RAD * clamp(((rotationValue  - u_vvRotationInfo.x) / (u_vvRotationInfo.y - u_vvRotationInfo.x)) * (u_vvRotationInfo.w - u_vvRotationInfo.z), u_vvRotationInfo.z, u_vvRotationInfo.w);

		float sinA = sin(angle);
		float cosA = cos(angle);

		return mat4(cosA, -sinA, 0, 0,
		            sinA,  cosA, 0, 0,
		               0,     0, 1, 0,
		               0,     0, 0, 1);
}
#endif // VV

void main()
{
  mediump float a_labelMinLevel = a_levelInfo[0];
  mediump float a_angle        = a_levelInfo[1];
  mediump float a_minLevel    = a_levelInfo[2];
  mediump float a_maxLevel    = a_levelInfo[3];

  // if the given vertex should not be visible simply clip it by adding it a value that will push it outside the clipping plane
  mediump float delta_z = 0.0;

  // If the label rotates with the map, and if the rotated label is upside down, hide it
  mediump float rotated = mod(a_angle - u_mapRotation, 256.0);
  delta_z += (1.0 - step(u_keepUpright,0.0)) * step(65.0,rotated) * (1.0 - step(193.0,rotated)); //ie. z += (flip > 0) && (65 <= rotated) && (rotated < 193)

  // u_level is the current service level adjusted for the change in font size
  delta_z += 1.0 - step(a_minLevel, u_level); // Test if (level < minLevel)
  delta_z += step(a_maxLevel, u_level); // Test if (maxLevel <= level)

  // calculate the alpha given the change in the fade and the fade-speed
  lowp float alpha = clamp((u_fadeChange - a_labelMinLevel) / u_fadeSpeed, 0.0, 1.0);

  // if the speed is positive we are zooming in and therefore we need to 'fade-in'. Else we need to 'fade-out'
  v_transparency = (u_fadeSpeed >= 0.0 ? alpha : 1.0 - alpha);

  // now deal with the min/max fade-levels. If we exceeded the level we simply snap to 0 or 1
  if (u_maxfadeLevel < a_labelMinLevel)
  {
      v_transparency = 0.0;
  }
  if (u_minfadeLevel >= a_labelMinLevel)
  {
      v_transparency = 1.0;
  }

  // if label had been faded out, clip it
  delta_z += step(v_transparency, 0.0);

  #ifdef VV
    vec2 offset = offsetPrecision * a_vertexOffset * getVVSize(a_vvAttributes.x);
    gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * getVVRotation(a_vvAttributes.w) * vec4(offset, delta_z, 0.0);

  #ifdef VV_COLOR
    v_vvColor = getVVColor(a_vvAttributes.y);
  #endif // VV_COLOR

  #else
    vec2 offset = offsetPrecision * a_vertexOffset;
    gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * vec4(offsetPrecision * a_vertexOffset, delta_z, 0.0);
  #endif

  // we need to count for the rotation of the symbol
  // convert the rotation to radians
  float angle_rad = -a_angle * C_256_TO_RAD;
  float sinAngle = sin(angle_rad);
  float cosAngle = cos(angle_rad);
  mat2 antiRotationMat = mat2(cosAngle, sinAngle, -sinAngle, cosAngle);

  v_size = tileCoordRatio * abs(2.0 * antiRotationMat * offset);

  v_tex = a_tex.xy / u_mosaicSize;
  v_transparency *= u_opacity;
}
