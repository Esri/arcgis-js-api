
uniform mediump float u_zoomLevel;            // the current zoom level X 10
uniform float u_mapRotation;
uniform float u_mapAligned;
uniform vec2 u_mosaicSize;

varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying mediump vec2 v_tex;                   // texture coordinates used to sample the glyph atlas
varying mediump vec4 v_color;
varying lowp vec4 v_animation;
