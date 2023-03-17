/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./vec3","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,r,a,o,t,l,n,s,d,i,c){"use strict";const u=4;function f(){const e=new d.ShaderBuilder,f=e.fragment;e.include(a.ScreenSpacePass);const w=(u+1)/2,g=1/(2*w*w);return f.include(o.ReadLinearDepth),f.uniforms.add([new c.Texture2DPassUniform("depthMap",(e=>e.depthTexture)),new i.Texture2DDrawUniform("tex",(e=>e.colorTexture)),new t.Float2DrawUniform("blurSize",(e=>e.blurSize)),new n.FloatPassUniform("projScale",((e,a)=>{const o=r.distance(a.camera.eye,a.camera.center);return o>5e4?Math.max(0,e.projScale-(o-5e4)):e.projScale})),new l.Float2PassUniform("nearFar",((e,r)=>r.camera.nearFar))]),f.code.add(s.glsl`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.glsl.float(g)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),f.code.add(s.glsl`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${s.glsl.int(u)}; r <= ${s.glsl.int(u)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),e}const w=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}));e.SSAOBlur=w,e.build=f}));
