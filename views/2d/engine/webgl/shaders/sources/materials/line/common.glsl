varying lowp vec4 v_color;
varying highp vec4 v_id;
varying mediump vec2 v_normal;             // interpolated normal to the line. packed into the two LSBs of the vertex coordinate
varying mediump float v_lineHalfWidth;
varying lowp float v_opacity;
varying highp vec3 v_pos;

#ifdef PATTERN
uniform mediump vec2 u_mosaicSize;

varying mediump vec4 v_tlbr;               // normalized pattern coordinates [0, 1]
varying mediump vec2 v_patternSize;
#endif

#if defined(PATTERN) || defined(SDF)
varying highp float v_accumulatedDistance; // we need to accumulated distance only if it is a pattern or an SDF line
#endif
