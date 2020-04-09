
uniform highp vec2 u_mosaicSize;

varying highp vec4 v_id;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
varying lowp vec4 v_color;
varying highp vec2 v_tex;                 // texture coordinates used to sample the glyph atlas
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying lowp float v_transparency;  // the calculated transparency to be applied by the fragment shader. 
