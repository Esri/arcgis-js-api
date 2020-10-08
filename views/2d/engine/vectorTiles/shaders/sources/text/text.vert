attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;

uniform lowp vec4 u_color; // always defined as halo does not support data driven but text does
#ifdef DD
attribute vec4 a_color;
#endif // DD
varying lowp vec4 v_color;

uniform mediump float u_size;
#ifdef DD
attribute mediump float a_size;
#endif // DD
varying mediump float v_size;

#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif // ID


uniform highp mat3 u_dvsMat3;         // premultiplies DisplayMat3 * ViewMat3 * ScreenMat3
uniform highp mat3 u_displayMat3;     // DisplayMat3
uniform highp mat3 u_displayViewMat3; // DisplayMat3 * ViewMat3

uniform mediump vec2 u_textTranslation; // "text-translate" given by the line style layer spec

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
varying lowp vec2 v_tex;

// the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the
// opacity of the layer given by the painter
varying lowp float v_opacity;

// the vertex offsets are given in integers, therefore in order to maintain a reasonable precision we multiply the values
// by 8 and then at the shader divide by the same number
const float offsetPrecision = 1.0 / 8.0;

// outline position and appearance
const mediump float edgePos = 0.75; // defined by the SDF encoding
uniform mediump float u_edgeDistance;
uniform mediump float u_edgeBlur;
uniform mediump float u_antialiasingWidth; // antialiasing (factors in the pixel_ratio for high res devices)

varying mediump float v_edgeDistance; // will factor in the size
varying mediump float v_edgeWidth; // will factor in the size

uniform lowp float u_halo; // needed to avoid using the color attribute for halo

const float sdfFontScale = 1.0 / 24.0;

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

  mediump float a_angle       = a_levelInfo[1]; // main label angle (from the symbol anchor)
  mediump float a_minLevel    = a_levelInfo[2];
  mediump float a_maxLevel    = a_levelInfo[3];
  mediump vec2 a_tex           = a_texAngleRange.xy;

  // the angle range that would display this vertex upright
  mediump float a_visMinAngle    = a_texAngleRange.z;
  mediump float a_visMaxAngle    = a_texAngleRange.w;

  // if the given vertex should not be visible simply clip it by adding it a value that will push it outside the clipping plane
  mediump float delta_z = 0.0;

  // TODO: force clipping the vertex in case that the vertex isn't visible
  //delta_z += a_visible ? 0.0 : 1.0;

  // If the label rotates with the map, and if the rotated label is upside down, hide it
  // combine the label angle with the map rotation
  mediump float angle = mod(a_angle + u_mapRotation, 256.0);
  // hide the label if not in the visible range (the test is different if the range overlaps 0)
  if (a_visMinAngle < a_visMaxAngle)
  {
    delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle))); // a_visMaxAngle <= angle || angle < a_visMinAngle
  }
  else
  {
    delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle))); // a_visMaxAngle <= angle && angle < a_visMinAngle
  }

  // u_level is the current service level adjusted for the change in font size
  delta_z += 1.0 - step(a_minLevel, u_level); // Test if (level < minLevel)
  delta_z += step(a_maxLevel, u_level); // Test if (maxLevel <= level)

  // if label has been faded out, clip it
  delta_z += step(v_opacity, 0.0);

  v_tex = a_tex.xy / u_mosaicSize;

#ifdef DD
  if (u_halo > 0.5)
  {
    v_color = u_color;
  }
  else
  {
    v_color = a_color * u_color;
    // opacity already factored in a_color
  }
#else
  v_color = u_color;
#endif // DD

#ifdef DD
  v_size = a_size * u_size;
#else
  v_size = u_size;
#endif // DD

#ifdef ID
  v_id = u_id / 255.0;
#endif // ID

  v_edgeDistance = edgePos - u_edgeDistance / v_size;
  v_edgeWidth = (u_antialiasingWidth + u_edgeBlur) / v_size;

  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * v_size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
  gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}
