
uniform vec2 u_mosaicSize;

varying highp vec4 v_id;
varying vec3 v_pos;
varying vec4 v_color;
varying vec2 v_tex;                 // texture coordinates used to sample the glyph atlas
varying float v_opacity;
varying float v_antialiasingWidth;
varying float v_edgeDistanceOffset;
varying lowp float v_transparency;  // the calculated transparency to be applied by the fragment shader. 
