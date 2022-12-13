/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","./ShadowCastAccumulate.glsl","../views/3d/webgl-engine/shaders/ShadowCastVisualizeTechniqueConfiguration"],(function(e,a,s,i,o,l,n,r,d,t,c,u){"use strict";function g(e){const g=new d.ShaderBuilder,h=g.fragment;h.include(o.RgbaFloatEncoding),h.include(s.ReadLinearDepth),g.include(i.CameraSpace),g.include(a.ScreenSpacePass);const{visualization:w,bandsEnabled:m}=e;h.constants.add("inverseSampleValue","float",c.shadowCastMaxSamples),h.uniforms.add([new t.Texture2DPassUniform("shadowCastMap",(e=>e.shadowCastMap)),new n.FloatPassUniform("sampleScale",(e=>e.sampleScale)),new n.FloatPassUniform("opacityFromElevation",(e=>e.opacityFromElevation)),new l.Float4PassUniform("uColor",(e=>e.color))]);const p=w===u.ShadowCastVisualization.Gradient,S=w===u.ShadowCastVisualization.Threshold;return p&&m?h.uniforms.add(new n.FloatPassUniform("bandSize",(e=>e.bandSize))):S&&h.uniforms.add(new n.FloatPassUniform("threshold",(e=>e.threshold))),h.code.add(r.glsl`
      void main(void) {
        vec4 record = texture2D(shadowCastMap, uv);
        float pixelSamples = record.r * inverseSampleValue;
        if (pixelSamples < 1.0) {
          discard;
        }

        float strength = pixelSamples * sampleScale;

        ${S?r.glsl`
            if (strength <= threshold) {
              discard;
            }`:""}

        ${p&&m?r.glsl`strength = ceil(strength / bandSize) * bandSize;`:""}

        gl_FragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${p?r.glsl`* strength`:""});
      }
    `),g}const h=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}));e.ShadowCastVisualize=h,e.build=g}));
