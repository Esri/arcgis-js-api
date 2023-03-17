/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./vec4f64","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","./ShadowCastAccumulate.glsl","../views/3d/webgl-engine/shaders/ShadowCastVisualizeTechniqueConfiguration"],(function(e,a,s,l,o,i,r,n,t,d,c,u,g,h){"use strict";let w=function(e){function l(a){var l;return(l=e.call(this)||this).shadowCastMap=a,l.sampleScale=0,l.opacityFromElevation=1,l.color=s.clone(m),l.bandSize=.1,l.threshold=.5,l}return a._inheritsLoose(l,e),l}(d.NoParameters);const m=s.fromValues(.01,0,.25,1);function p(e){const a=new c.ShaderBuilder,s=a.fragment;s.include(r.RgbaFloatEncoding),s.include(o.ReadLinearDepth),a.include(i.CameraSpace),a.include(l.ScreenSpacePass);const{visualization:w,bandsEnabled:m}=e;s.constants.add("inverseSampleValue","float",g.ShadowCastMaxSamples),s.uniforms.add([new u.Texture2DPassUniform("shadowCastMap",(e=>e.shadowCastMap)),new t.FloatPassUniform("sampleScale",(e=>e.sampleScale)),new t.FloatPassUniform("opacityFromElevation",(e=>e.opacityFromElevation)),new n.Float4PassUniform("uColor",(e=>e.color))]);const p=w===h.ShadowCastVisualization.Gradient,S=w===h.ShadowCastVisualization.Threshold;return p&&m?s.uniforms.add(new t.FloatPassUniform("bandSize",(e=>e.bandSize))):S&&s.uniforms.add(new t.FloatPassUniform("threshold",(e=>e.threshold))),s.code.add(d.glsl`
      void main(void) {
        vec4 record = texture2D(shadowCastMap, uv);
        float pixelSamples = record.r * inverseSampleValue;
        if (pixelSamples < 1.0) {
          discard;
        }

        float strength = pixelSamples * sampleScale;

        ${S?d.glsl`
            if (strength <= threshold) {
              discard;
            }`:""}

        ${p&&m?d.glsl`strength = ceil(strength / bandSize) * bandSize;`:""}

        gl_FragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${p?d.glsl`* strength`:""});
      }
    `),a}const S=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastVisualizePassParameters:w,build:p},Symbol.toStringTag,{value:"Module"}));e.ShadowCastVisualize=S,e.ShadowCastVisualizePassParameters=w,e.build=p}));
