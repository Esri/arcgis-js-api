
uniform lowp vec2 u_mosaicSize;            // mosaic size in pixels

varying lowp vec4 v_color;
varying highp vec4 v_id;
varying highp vec4 v_sizeTex; 
varying mediump vec3 v_pos;
varying highp float v_filters;
varying lowp float v_opacity;

#ifdef SDF
varying lowp vec4 v_outlineColor;
varying mediump float v_outlineWidth;
varying mediump float v_distRatio;
varying mediump float v_overridingOutlineColor;
varying mediump float v_isThin;
#endif
