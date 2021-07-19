/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,a,r,o,l,d,s,t){"use strict";const i=255,n=1/i;function c(e){const c=new t.ShaderBuilder;c.fragment.include(d.RgbaFloatEncoding),c.fragment.include(r.ReadLinearDepth),c.include(l.CameraSpace),c.include(a.ScreenSpacePass);const{pass:p}=e;if(1===p){const{visualization:a,bandsEnabled:r}=e;c.fragment.constants.add("inverseSampleValue","float",i),c.fragment.uniforms.add("shadowAccumulationMap","sampler2D"),c.fragment.uniforms.add("sampleScale","float"),c.fragment.uniforms.add("opacityFromElevation","float"),0===a?(c.fragment.uniforms.add("colorRamp","sampler2D"),c.fragment.uniforms.add("rampSize","float"),c.fragment.code.add(s.glsl`vec4 sampleColorRamp(sampler2D ramp, float rampSize, float u) {
float rampU = (u * (rampSize - 1.0) + 0.5) / rampSize;
return texture2D(ramp, vec2(rampU, 0.5));
}`),r&&c.fragment.uniforms.add("bandSize","float")):1===a&&(c.fragment.uniforms.add("threshold","float"),c.fragment.uniforms.add("colors","vec4",2)),c.fragment.code.add(s.glsl`
      void main(void) {
        vec4 record = texture2D(shadowAccumulationMap, uv);
        float pixelSamples = record.r * inverseSampleValue;

        if (pixelSamples < 1.0) {
          discard;
        }

        float strength = pixelSamples * sampleScale;

        ${0===a&&r?s.glsl`strength = ceil(strength / bandSize) * bandSize;`:""}

        gl_FragColor = ${0===a?s.glsl`sampleColorRamp(colorRamp, rampSize, strength)`:s.glsl`strength <= threshold ? colors[0] : colors[1]`};

        gl_FragColor.a *= opacityFromElevation;
      }
    `)}else 0!==p&&2!==p||(c.include(o.ReadShadowMap),c.fragment.uniforms.add("depthMap","sampler2D"),c.fragment.uniforms.add("inverseView","mat4"),c.fragment.uniforms.add("nearFar","vec2"),0===p?c.fragment.constants.add("sampleValue","float",n):c.fragment.constants.add("shadowColor","vec4",[0,0,0,.8]),c.fragment.code.add(s.glsl`
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

        gl_FragColor = ${0===p?s.glsl`vec4(sampleValue)`:s.glsl`shadowColor`};
      }
    `));return c}var p=Object.freeze({__proto__:null,shadowAccumulationMaxSamples:i,build:c});e.ShadowAccumulationShader=p,e.build=c,e.shadowAccumulationMaxSamples=i}));
