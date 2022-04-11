/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(a,e,s,t,o,r,d,i){"use strict";var l,n;a.ShadowCastPass=void 0,(l=a.ShadowCastPass||(a.ShadowCastPass={}))[l.Accumulate=0]="Accumulate",l[l.Visualize=1]="Visualize",l[l.VisualizeCurrent=2]="VisualizeCurrent",l[l.COUNT=3]="COUNT",a.ShadowCastVisualization=void 0,(n=a.ShadowCastVisualization||(a.ShadowCastVisualization={}))[n.Gradient=0]="Gradient",n[n.Threshold=1]="Threshold";const c=255,h=1/c;function u(l){const n=new i.ShaderBuilder;n.fragment.include(r.RgbaFloatEncoding),n.fragment.include(s.ReadLinearDepth),n.include(o.CameraSpace),n.include(e.ScreenSpacePass);const{pass:u}=l;if(u===a.ShadowCastPass.Visualize){const{visualization:e,bandsEnabled:s}=l;n.fragment.constants.add("inverseSampleValue","float",c),n.fragment.uniforms.add("shadowCastMap","sampler2D"),n.fragment.uniforms.add("sampleScale","float"),n.fragment.uniforms.add("opacityFromElevation","float");const t=e===a.ShadowCastVisualization.Gradient,o=e===a.ShadowCastVisualization.Threshold;n.fragment.uniforms.add("uColor","vec4"),t?s&&n.fragment.uniforms.add("bandSize","float"):o&&n.fragment.uniforms.add("threshold","float"),n.fragment.code.add(d.glsl`
      void main(void) {
        vec4 record = texture2D(shadowCastMap, uv);
        float pixelSamples = record.r * inverseSampleValue;

        if (pixelSamples < 1.0) {
          discard;
        }

        float strength = pixelSamples * sampleScale;

        ${o?d.glsl`
            if (strength <= threshold) {
              discard;
            }`:""}

        ${t&&s?d.glsl`strength = ceil(strength / bandSize) * bandSize;`:""}

        gl_FragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${t?d.glsl`* strength`:""});
      }
    `)}else u!==a.ShadowCastPass.Accumulate&&u!==a.ShadowCastPass.VisualizeCurrent||(n.include(t.ReadShadowMap),n.fragment.uniforms.add("depthMap","sampler2D"),n.fragment.uniforms.add("inverseViewMatrix","mat4"),n.fragment.uniforms.add("nearFar","vec2"),u===a.ShadowCastPass.Accumulate?n.fragment.constants.add("sampleValue","float",h):n.fragment.constants.add("shadowColor","vec4",[0,0,0,.8]),n.fragment.code.add(d.glsl`
      void main(void) {

        float depth = rgba2float(texture2D(depthMap, uv));
        // 0.0 is the clear value of depthMap, which means nothing has been drawn there and we should discard
        if (depth == 0.0) {
          discard;
        }

        float currentPixelDepth = linearDepthFromFloat(depth, nearFar);

        if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
          discard;
        }

        vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
        vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;

        mat4 shadowMatrix;
        float linearDepth = -currentPixelDepth;
        int i = chooseCascade(linearDepth, shadowMatrix);

        if (i >= numCascades) {
          discard;
        }

        vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);

        // vertex completely outside? -> no shadow
        if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
          discard;
        }

        vec2 uvShadow = cascadeCoordinates(i, lvpos);

        float depthShadow = readShadowMapDepth(uvShadow, shadowMapTex);
        bool shadow = depthShadow < lvpos.z;

        if (!shadow) {
          discard;
        }

        gl_FragColor = ${u===a.ShadowCastPass.Accumulate?d.glsl`vec4(sampleValue)`:d.glsl`shadowColor`};
      }
    `));return n}const p=Object.freeze(Object.defineProperty({__proto__:null,get ShadowCastPass(){return a.ShadowCastPass},get ShadowCastVisualization(){return a.ShadowCastVisualization},shadowCastMaxSamples:c,build:u},Symbol.toStringTag,{value:"Module"}));a.ShadowCast=p,a.build=u,a.shadowCastMaxSamples=c}));
