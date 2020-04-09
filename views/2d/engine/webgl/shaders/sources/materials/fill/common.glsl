
#ifdef PATTERN
uniform mediump vec2 u_mosaicSize;
#endif

#ifdef DOT_DENSITY
uniform lowp vec4 u_isActive[ 2 ]; 
uniform highp float u_dotValue;
uniform highp float u_tileDotsOverArea; 
uniform highp float u_dotTextureDotCount;
uniform mediump float u_tileZoomFactor; 
#endif

varying vec3 v_pos;
varying lowp float v_opacity;
varying lowp vec4 v_color;
varying highp vec4 v_id;
varying highp float v_flags;

#ifdef PATTERN
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#endif

#ifdef DOT_DENSITY
varying highp vec2 v_dotTextureCoords;
varying highp vec4 v_dotThresholds[ 2 ];
#endif
