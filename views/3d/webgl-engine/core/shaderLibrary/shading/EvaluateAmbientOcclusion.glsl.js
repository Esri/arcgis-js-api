/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../util/WebGL2Utils","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform","../../shaderModules/TextureSizeUniformType","../../../lib/SSAOHelper"],(function(e,t,s,r,n,i){"use strict";function o(e,o){const a=e.fragment;o.receiveAmbientOcclusion?(a.uniforms.add(r.createTexture2DPassSizeUniforms("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture),o.hasWebGL2Context?n.TextureSizeUniformType.None:n.TextureSizeUniformType.InvSize)),a.constants.add("blurSizePixelsInverse","float",1/i.blurSizePixels),a.code.add(s.glsl`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${t.textureSize(o,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):a.code.add(s.glsl`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}e.EvaluateAmbientOcclusion=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
