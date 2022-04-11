/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/basicInterfaces","./HeatmapDensity.glsl"],(function(e,a,r,i,d,t,n){"use strict";function s(e){const s=new d.ShaderBuilder,{mode:l}=e;return s.include(a.ScreenSpacePass),s.include(r.DiscardOrAdjustAlpha,{alphaDiscardMode:t.AlphaDiscardMode.Blend}),s.fragment.uniforms.add("densityMap","sampler2D"),s.fragment.uniforms.add("tex","sampler2D"),s.fragment.uniforms.add("densityNormalizer","float"),s.fragment.uniforms.add("minDensity","float"),l===n.HeatmapMode.KernelDensity&&s.fragment.uniforms.add("densityMultiplier","float"),s.fragment.code.add(i.glsl`
    void main() {
      float density = texture2D(densityMap, uv).r${l===n.HeatmapMode.KernelDensity?i.glsl` * densityMultiplier`:""};
      float densityRatio = (density - minDensity) * densityNormalizer;

      vec4 color = texture2D(tex, vec2(clamp(densityRatio, 0.0, 1.0), 0.5));

      discardOrAdjustAlpha(color);
      gl_FragColor = color;
    }
  `),s}const l=Object.freeze(Object.defineProperty({__proto__:null,build:s,get HeatmapMode(){return n.HeatmapMode}},Symbol.toStringTag,{value:"Module"}));e.HeatmapShader=l,e.build=s}));
