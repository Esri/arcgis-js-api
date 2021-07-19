/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,r,a,t,o,n){"use strict";function l(e){const l=new n.ShaderBuilder;return l.include(r.ScreenSpacePass),1===e.output&&(l.fragment.include(a.ReadLinearDepth),l.fragment.uniforms.add("normalMap","sampler2D").add("depthMap","sampler2D").add("tex","sampler2D").add("blurSize","vec2").add("g_BlurFalloff","float").add("projScale","float").add("nearFar","vec2").add("zScale","vec2"),l.fragment.code.add(o.glsl`
      float blurFunction(vec2 uv, float r, float center_d, inout float w_total, float sharpness) {
        float c = texture2D(tex, uv).r;
        float d = linearDepthFromTexture(depthMap, uv, nearFar);

        float ddiff = d - center_d;

        float w = exp(-r*r*g_BlurFalloff - ddiff*ddiff*sharpness);

        w_total += w;

        return w*c;
      }

      void main(void) {
        float b = 0.0;
        float w_total = 0.0;

        float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

        float sharpness = -0.05 * projScale/(center_d*zScale.x+zScale.y);
        for (int r = -${o.glsl.int(e.radius)}; r <= ${o.glsl.int(e.radius)}; ++r) {
          float rf = float(r);
          vec2 uvOffset = uv + rf*blurSize;
          b += blurFunction(uvOffset, rf, center_d, w_total, sharpness);
        }

        gl_FragColor = vec4(b/w_total);
      }
    `)),0===e.output&&(l.fragment.include(a.ReadLinearDepth),l.include(t.CameraSpace),l.fragment.uniforms.add("projMatrixInv","mat4").add("normalMap","sampler2D").add("depthMap","sampler2D").add("intensity","float").add("projScale","float").add("radius","float").add("nearFar","vec2").add("screenDimensions","vec2").add("rnmScale","vec2").add("rnm","sampler2D"),l.fragment.code.add(o.glsl`
    uniform vec3 pSphere[${o.glsl.int(e.samples)}];

    float fallOffFunction(float vv, float vn, float bias) {
      float radius2 = radius * radius;
      float f = max(radius2 - vv, 0.0);
      return f * f * f * max(vn-bias, 0.0);
    }
    `),l.fragment.code.add(o.glsl`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),l.fragment.code.add(o.glsl`
      void main(void) {
        vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
        float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

        if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
          gl_FragColor = vec4(0.0);
          return;
        }

        vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

        // get the normal of current fragment
        vec4 norm4 = texture2D(normalMap, uv);
        vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
        bool isTerrain = norm4.w<0.5;

        float sum = .0;

        vec4 occluderFragment;
        vec3 ray;

        vec3 tapPixelPos;

        // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
        // bug or deviation from CE somewhere else?
        float ps = projScale/(2.0*currentPixelPos.z*zScale.x+zScale.y);

        for(int i = 0; i < ${o.glsl.int(e.samples)}; ++i) {
          // get a vector (randomized inside of a sphere with radius 1.0) from a texture and reflect it
          //float ssR;
          //vec2 unitOffset = tapLocation(i, randomPatternRotationAngle, ssR);
          // get the depth of the occluder fragment
          //vec2 offset = vec2(-unitOffset*radius*ssR*ps);

          vec2 unitOffset = reflect(pSphere[i], fres).xy;
          vec2 offset = vec2(-unitOffset*radius*ps);

          //don't use current or very nearby samples
          if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

          vec2 tc = vec2(gl_FragCoord.xy + offset);
          if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenDimensions.x || tc.y > screenDimensions.y) continue;
          vec2 tcTap = tc/screenDimensions;
          float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

          if (isTerrain) {
            bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
            if (isTerrainTap) {
              continue;
            }
          }

          tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

          sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
        }

        // output the result

        float A = max(1.0-sum*intensity/float(${o.glsl.int(e.samples)}),0.0);

        // Anti-tone map to reduce contrast and drag dark region farther
        // (x^0.2 + 1.2 * x^4)/2.2
        A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

        //gl_FragColor = vec4(norm/2.0+0.5, 1.0);
        //gl_FragColor = vec4(-currentPixelDepth/1000.0);
        //gl_FragColor = vec4(tapPixelPos.x/100.0);
        gl_FragColor = vec4(A);
      }
    `)),l}var s=Object.freeze({__proto__:null,build:l});e.SSAOShader=s,e.build=l}));
