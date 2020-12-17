/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,t){"use strict";function i(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.code.add(t.glsl`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
      }
      else {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
      }
    }
  `)}!function(e){e.bindOutputHighlight=function(e,t,i){e.bindTexture(i.highlightDepthTexture,5),t.setUniform1i("depthTex",5),t.setUniform4f("highlightViewportPixelSz",0,0,i.inverseViewport[0],i.inverseViewport[1])}}(i||(i={})),e.OutputHighlight=i,Object.defineProperty(e,"__esModule",{value:!0})}));
