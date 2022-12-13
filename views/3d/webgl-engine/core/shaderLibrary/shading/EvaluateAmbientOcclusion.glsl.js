/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../util/WebGL2Utils","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform","../../shaderModules/TextureSizeUniformType","../../../lib/SSAOHelper"],(function(e,s,t,r,i,n){"use strict";function o(e,o){const l=e.fragment;o.receiveAmbientOcclusion?(l.uniforms.add(r.createTexture2DPassSizeUniforms("ssaoTex",((e,s)=>s.ssaoHelper.colorTexture),o.hasWebGL2Context?i.TextureSizeUniformType.None:i.TextureSizeUniformType.InvSize)),l.constants.add("blurSizePixelsInverse","float",1/n.blurSizePixels),l.code.add(t.glsl`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${s.textureSize(o,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):l.code.add(t.glsl`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}e.EvaluateAmbientOcclusion=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
