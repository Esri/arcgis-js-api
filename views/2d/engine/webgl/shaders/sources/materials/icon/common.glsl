
uniform vec2 u_mosaicSize;            // mosaic size in pixels

varying vec3 v_pos;
varying lowp vec4 v_color;
varying lowp float v_opacity;
varying highp vec4 v_id;
varying vec2 v_tex;                   // texture coordinates used to sample the sprite atlas
varying vec2 v_size;                  // icon size in px
varying float v_filters;

#ifdef SDF
varying float v_isThin;
varying float v_overridingOutlineColor;
varying lowp vec4 v_outlineColor;
varying mediump float v_outlineWidth;
varying mediump float v_distRatio;
#endif
