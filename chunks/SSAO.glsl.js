/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,r,a,t,o,n){"use strict";function l(e){const l=new n.ShaderBuilder;return l.include(r.ScreenSpacePass),1===e.output&&(l.fragment.include(a.ReadLinearDepth),l.fragment.uniforms.add("normalMap","sampler2D").add("depthMap","sampler2D").add("tex","sampler2D").add("blurSize","vec2").add("projScale","float").add("nearFar","vec2"),l.fragment.code.add(o.glsl`
      void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
        float c = texture2D(tex, uv).r;
        float d = linearDepthFromTexture(depthMap, uv, nearFar);

        float ddiff = d - center_d;

        float w = exp(-r * r * ${o.glsl.float(e.blurFalloff)} - ddiff * ddiff * sharpness);
        wTotal += w;
        bTotal += w * c;
      }
    `),l.fragment.code.add(o.glsl`
      void main(void) {
        float b = 0.0;
        float w_total = 0.0;

        float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

        float sharpness = -0.05 * projScale/center_d;
        for (int r = -${o.glsl.int(e.filterRadius)}; r <= ${o.glsl.int(e.filterRadius)}; ++r) {
          float rf = float(r);
          vec2 uvOffset = uv + rf * blurSize;
          blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
        }

        gl_FragColor = vec4(b / w_total);
      }
    `)),0===e.output&&(l.fragment.include(a.ReadLinearDepth),l.include(t.CameraSpace),l.fragment.uniforms.add("normalMap","sampler2D").add("depthMap","sampler2D").add("intensity","float").add("projScale","float").add("radius","float").add("nearFar","vec2").add("screenDimensions","vec2").add("rnmScale","vec2").add("rnm","sampler2D"),l.fragment.code.add(o.glsl`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),l.fragment.code.add(o.glsl`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),l.fragment.code.add(o.glsl`
      void main(void) {
        fillSphere();
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
        vec3 tapPixelPos;

        // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
        // bug or deviation from CE somewhere else?
        float ps = projScale/(2.0 * currentPixelPos.z * zScale.x + zScale.y);

        for(int i = 0; i < ${o.glsl.int(e.samples)}; ++i) {
          vec2 unitOffset = reflect(sphere[i], fres).xy;
          vec2 offset = vec2(-unitOffset * radius * ps);

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

        // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
        A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
        gl_FragColor = vec4(A);
      }
    `)),l}var s=Object.freeze({__proto__:null,build:l});e.SSAOShader=s,e.build=l}));
