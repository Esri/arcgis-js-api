attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;

#ifdef DD
attribute vec4 a_color;
attribute mediump float a_size;
#endif // DD
uniform lowp vec4 u_color;
uniform mediump float u_size;

#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif // ID

varying lowp vec4 v_color;

uniform highp mat3 u_dvsMat3;         // premultiplies DisplayMat3 * ViewMat3 * ScreenMat3
uniform highp mat3 u_displayMat3;     // DisplayMat3
uniform highp mat3 u_displayViewMat3; // DisplayMat3 * ViewMat3

uniform mediump vec2 u_iconTranslation; // "icon-translate" given by the line style layer spec

// the size of the mosaic given in pixels
uniform vec2 u_mosaicSize;

// the z of the layer. Given by the order of the layers in the style
uniform mediump float u_depth;

// the map's rotation from the north
uniform mediump float u_mapRotation;
uniform mediump float u_level;

// indicate whether the current set of iconst should be kept upright when the map is rotated
uniform lowp float u_keepUpright;

// the opacity of the layer given by the painter
uniform mediump float u_opacity;

uniform mediump float u_fadeDuration;

// the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture
varying mediump vec2 v_tex;

// the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the
// opacity of the layer given by the painter
varying lowp float v_opacity;

varying mediump vec2 v_size;

// the vertex offsets are given in integers, therefore in order to maintain a reasonable precision we multiply the values
// by 8 and then at the shader devide by the same number
const float C_OFFSET_PRECISION = 1.0 / 8.0;

const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;

// timing information
uniform highp float u_time;

void main()
{
  // Animated decluttering
  float modded = mod(a_opacityInfo, 128.0);
  float targetOpacity = (a_opacityInfo - modded) / 128.0;
  float startOpacity = modded / 127.0;
  float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
  v_opacity = u_opacity * interpolatedOpacity;

  mediump float a_angle         = a_levelInfo[1];
  mediump float a_minLevel      = a_levelInfo[2];
  mediump float a_maxLevel      = a_levelInfo[3];
  mediump vec2 a_tex            = a_texAngleRange.xy;

  // if the given vertex should not be visible simply clip it by adding it a value that will push it outside the clipping plane
  mediump float delta_z = 0.0;

  // If the label rotates with the map, and if the rotated label is upside down, hide it
  mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
  delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated)); //ie. z += (flip > 0) && (64 <= rotated) && (rotated < 192)

  // u_level is the current service level adjusted for the change in font size
  delta_z += 1.0 - step(a_minLevel, u_level); // Test if (level < minLevel)
  delta_z += step(a_maxLevel, u_level); // Test if (maxLevel <= level)

  // if label had been faded out, clip it
  delta_z += step(v_opacity, 0.0);

  vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;

  v_size = abs(offset);

#ifdef SDF
  offset = (120.0 / 86.0) * offset;
#endif // SDF

#ifdef DD
  mediump float icon_size = a_size * u_size;
#else
  mediump float icon_size = u_size;
#endif // DD

  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(icon_size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
  gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);

#ifdef DD
  v_color = a_color * u_color;
#else
  v_color = u_color;
#endif // DD

#ifdef ID
  v_id = u_id / 255.0;
#endif // ID

  v_tex = a_tex.xy / u_mosaicSize;
  v_opacity *= v_color.w;
}
