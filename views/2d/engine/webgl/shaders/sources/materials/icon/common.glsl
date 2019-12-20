
uniform lowp vec2 u_mosaicSize;            // mosaic size in pixels

varying lowp vec4 v_color;
varying highp vec4 v_id;
varying vec4 v_sizeTex; 
varying vec3 v_pos;
varying float v_filters;
varying lowp float v_opacity;

#ifdef SDF
varying lowp vec4 v_outlineColor;
varying mediump float v_outlineWidth;
varying mediump float v_distRatio;
varying float v_overridingOutlineColor;
varying float v_isThin;
#endif
