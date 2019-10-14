precision mediump float;

uniform lowp sampler2D u_sourceTexture;
uniform lowp sampler2D u_maskTexture;
uniform mediump float u_zoomLevel;

uniform highp float u_timeDelta;
uniform highp float u_animationTime;

varying highp vec2 v_texcoord;

#include <materials/utils.glsl>

void main()
{
#ifdef DELTA
  vec4 texel = texture2D(u_sourceTexture, v_texcoord);
  vec4 data0 = texture2D(u_maskTexture, v_texcoord);

  float flags = data0.r * 255.0;
  float groupMinZoom = data0.g * 255.0;

  float isVisible = getFilterBit(flags, 0);
  float wouldClip = step(groupMinZoom, u_zoomLevel);

  // MG: We can make this more generic to track/integrate multiple animation states
  float direction = wouldClip * 1.0 + (1.0 - wouldClip) * -1.0;
  float dt = u_timeDelta / max(u_animationTime, 0.0001);
  vec4 nextState = vec4(texel + direction * dt); 
      
  gl_FragColor =  vec4(nextState);

#elif defined(UPDATE)
  vec4 texel = texture2D(u_sourceTexture, v_texcoord);

  gl_FragColor = texel;

#endif
}
