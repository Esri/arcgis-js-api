
#ifdef PATTERN
uniform mediump vec2 u_mosaicSize;
#endif

#ifdef DOT_DENSITY
uniform float u_dotValue;
uniform float u_tileDotsOverArea; 
uniform vec4 u_isActive[ 2 ]; 
uniform float u_dotTextureDotCount;
uniform float u_tileZoomFactor; 
#endif

varying vec3 v_pos;
varying lowp vec4 v_color;
varying lowp float v_opacity;
varying highp vec4 v_id;

#ifdef PATTERN
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#endif

#ifdef DOT_DENSITY
varying vec4 v_dotThresholds[ 2 ];
varying vec2 v_dotTextureCoords;
#endif
