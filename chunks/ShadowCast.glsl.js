/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,a,r,o,d,s,l,t){"use strict";const i=255,n=1/i;function c(e){const c=new t.ShaderBuilder;c.fragment.include(s.RgbaFloatEncoding),c.fragment.include(r.ReadLinearDepth),c.include(d.CameraSpace),c.include(a.ScreenSpacePass);const{pass:h}=e;if(1===h){const{visualization:a,bandsEnabled:r}=e;c.fragment.constants.add("inverseSampleValue","float",i),c.fragment.uniforms.add("shadowCastMap","sampler2D"),c.fragment.uniforms.add("sampleScale","float"),c.fragment.uniforms.add("opacityFromElevation","float");const o=0===a,d=1===a;c.fragment.uniforms.add("color","vec4"),o?r&&c.fragment.uniforms.add("bandSize","float"):d&&c.fragment.uniforms.add("threshold","float"),c.fragment.code.add(l.glsl`
      void main(void) {
        vec4 record = texture2D(shadowCastMap, uv);
        float pixelSamples = record.r * inverseSampleValue;

        if (pixelSamples < 1.0) {
          discard;
        }

        float strength = pixelSamples * sampleScale;

        ${d?l.glsl`
            if (strength <= threshold) {
              discard;
            }`:""}

        ${o&&r?l.glsl`strength = ceil(strength / bandSize) * bandSize;`:""}

        gl_FragColor = vec4(color.xyz, color.a * opacityFromElevation ${o?l.glsl`* strength`:""});
      }
    `)}else 0!==h&&2!==h||(c.include(o.ReadShadowMap),c.fragment.uniforms.add("depthMap","sampler2D"),c.fragment.uniforms.add("inverseView","mat4"),c.fragment.uniforms.add("nearFar","vec2"),0===h?c.fragment.constants.add("sampleValue","float",n):c.fragment.constants.add("shadowColor","vec4",[0,0,0,.8]),c.fragment.code.add(l.glsl`
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
        vec4 worldSpacePos = inverseView * currentPixelPos;

        mat4 shadowMatrix;
        float linearDepth = -currentPixelDepth;
        int i = chooseCascade(linearDepth, shadowMatrix);

        if (i >= uShadowMapNum) {
          discard;
        }

        vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);

        // vertex completely outside? -> no shadow
        if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
          discard;
        }

        vec2 uvShadow = cascadeCoordinates(i, lvpos);

        float depthShadow = readShadowMapDepth(uvShadow, uShadowMapTex);
        bool shadow = depthShadow < lvpos.z;

        if (!shadow) {
          discard;
        }

        gl_FragColor = ${0===h?l.glsl`vec4(sampleValue)`:l.glsl`shadowColor`};
      }
    `));return c}var h=Object.freeze({__proto__:null,shadowCastMaxSamples:i,build:c});e.ShadowCastShader=h,e.build=c,e.shadowCastMaxSamples=i}));
