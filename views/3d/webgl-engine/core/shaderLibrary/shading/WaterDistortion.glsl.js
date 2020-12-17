/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","./FoamRendering.glsl"],(function(e,t,a){"use strict";function r(e){e.fragment.uniforms.add("texWaveNormal","sampler2D"),e.fragment.uniforms.add("texWavePerturbation","sampler2D"),e.fragment.uniforms.add("waveParams","vec4"),e.fragment.uniforms.add("waveDirection","vec2"),e.include(a.FoamIntensity),e.fragment.code.add(t.glsl`
      const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);

      vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
        return 2.0 * texture2D(_tex, _uv).rg - 1.0;
      }

      float sampleNoiseTexture(vec2 _uv) {
        return texture2D(texWavePerturbation, _uv).b;
      }

      vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
        return 2.0 * texture2D(_tex, _uv).rgb - 1.0;
      }

      float computeProgress(vec2 uv, float time) {
        return fract(time);
      }

      float computeWeight(vec2 uv, float time) {
        float progress = computeProgress(uv, time);
        return 1.0 - abs(1.0 - 2.0 * progress);
      }

      vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
        float flowStrength = waveParams[2];
        float flowOffset = waveParams[3];

        vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;

        float progress = computeProgress(uv, time + phaseOffset);
        float weight = computeWeight(uv, time + phaseOffset);

        vec2 result = uv;
        result -= flowVector * (progress + flowOffset);
        result += phaseOffset;
        result += (time - progress) * FLOW_JUMP;

        return vec3(result, weight);
      }

      const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
      const float TIME_NOISE_STRENGTH = 7.77;

      vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
        float waveStrength = waveParams[0];

        // overall directional shift in uv's for directional wave movement for
        // now we do a hard coded scale for wave speed such that a unit length
        // direction is not too fast.
        vec2 waveMovement = time * -_waveDir;

        float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;

        // compute two perturbed uvs and blend weights
        // then sample the wave normals at the two positions and blend
        vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
        vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);

        vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
        vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;

        // logic to flatten the wave pattern
        // scale xy components of the normal, then adjust z (up) component
        vec3 mixNormal = normalize(normal_A + normal_B);
        mixNormal.xy *= waveStrength;
        mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));

        return mixNormal;
      }

      vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
        float waveTextureRepeat = waveParams[1];
        vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
        float foam  = normals2FoamIntensity(normal, waveParams[0]);
        return vec4(normal, foam);
      }
    `)}!function(e){e.bindUniforms=function(e,t){e.setUniform1i("texWaveNormal",0),e.setUniform1i("texWavePerturbation",1),e.setUniform4f("waveParams",t.waveStrength,t.waveTextureRepeat,t.flowStrength,t.flowOffset),e.setUniform2f("waveDirection",t.waveDirection[0]*t.waveVelocity,t.waveDirection[1]*t.waveVelocity)}}(r||(r={})),e.WaterDistortion=r,Object.defineProperty(e,"__esModule",{value:!0})}));
