/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/vec4f64","../util/WebGL2Utils","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform","../../shaderModules/TextureSizeUniformType"],(function(e,t,o,l,i,g){"use strict";const r=t.fromValues(1,1,0,1),d=t.fromValues(1,0,1,1);function a(e,t){e.fragment.uniforms.add(i.createTexture2DPassSizeUniforms("depthTex",((e,t)=>t.highlightDepthTexture),t.hasWebGL2Context?g.TextureSizeUniformType.None:g.TextureSizeUniformType.InvSize)),e.fragment.constants.add("occludedHighlightFlag","vec4",r).add("unoccludedHighlightFlag","vec4",d),e.fragment.code.add(l.glsl`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${o.texelFetch(t,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}e.OutputHighlight=a,e.occludedHighlightFlag=r,e.unoccludedHighlightFlag=d,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
