/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ScreenSpacePass as e}from"../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.js";import{ReadLinearDepth as r}from"../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js";import{CameraSpace as o}from"../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js";import{RgbaFloatEncoding as a}from"../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js";import{Float4PassUniform as s}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{FloatPassUniform as i}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as n}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as l}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as d}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";import{s as t}from"./ShadowCastAccumulate.glsl.js";import{ShadowCastVisualization as c}from"../views/3d/webgl-engine/shaders/ShadowCastVisualizeTechniqueConfiguration.js";function m(m){const g=new l,u=g.fragment;u.include(a),u.include(r),g.include(o),g.include(e);const{visualization:p,bandsEnabled:w}=m;u.constants.add("inverseSampleValue","float",t),u.uniforms.add([new d("shadowCastMap",(e=>e.shadowCastMap)),new i("sampleScale",(e=>e.sampleScale)),new i("opacityFromElevation",(e=>e.opacityFromElevation)),new s("uColor",(e=>e.color))]);const h=p===c.Gradient,f=p===c.Threshold;return h&&w?u.uniforms.add(new i("bandSize",(e=>e.bandSize))):f&&u.uniforms.add(new i("threshold",(e=>e.threshold))),u.code.add(n`
      void main(void) {
        vec4 record = texture2D(shadowCastMap, uv);
        float pixelSamples = record.r * inverseSampleValue;
        if (pixelSamples < 1.0) {
          discard;
        }

        float strength = pixelSamples * sampleScale;

        ${f?n`
            if (strength <= threshold) {
              discard;
            }`:""}

        ${h&&w?n`strength = ceil(strength / bandSize) * bandSize;`:""}

        gl_FragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${h?n`* strength`:""});
      }
    `),g}const g=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}));export{g as S,m as b};
