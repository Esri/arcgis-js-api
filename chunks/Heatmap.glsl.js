/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlphaBlend.glsl","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,s,r,i,n,a,t){"use strict";function o(e){const o=new a.ShaderBuilder;o.include(s.ScreenSpacePass),o.include(r.DiscardOrAdjustAlphaBlend);const{usesHalfFloat:d}=e;return o.fragment.uniforms.add([new t.Texture2DPassUniform("densityMap",(e=>e.densityMap)),new t.Texture2DPassUniform("tex",(e=>e.colorRamp)),new i.FloatPassUniform("densityNormalizer",(e=>1/(e.maxDensity-e.minDensity))),new i.FloatPassUniform("minDensity",(e=>e.minDensity))]),o.fragment.uniforms.add(new i.FloatPassUniform("densityMultiplier",(e=>3/(e.searchRadius*e.searchRadius*Math.PI)))),d&&o.constants.add("compressionFactor","float",4),o.fragment.code.add(n.glsl`
    void main() {
      float density = texture2D(densityMap, uv).r * densityMultiplier${d?n.glsl` * compressionFactor`:""};
      float densityRatio = (density - minDensity) * densityNormalizer;

      vec4 color = texture2D(tex, vec2(clamp(densityRatio, 0.0, 1.0), 0.5));

      discardOrAdjustAlpha(color);
      gl_FragColor = color;
    }
  `),o}const d=Object.freeze(Object.defineProperty({__proto__:null,build:o},Symbol.toStringTag,{value:"Module"}));e.HeatmapShader=d,e.build=o}));
