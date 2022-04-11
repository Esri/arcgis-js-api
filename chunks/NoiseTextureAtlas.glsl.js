/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,o,t,g){"use strict";function l(){const e=new g.ShaderBuilder;e.include(o.ScreenSpacePass,!1),e.fragment.uniforms.add("tileRows","float").add("tileSize","float");const l=2,r=8;return e.fragment.code.add(t.glsl`
    float remap(float x, float low1, float high1, float low2, float high2) {
      return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
    }

    float saturate(float x) {
      return clamp(x, 0.0, 1.0);
    }

    vec4 taylorInvSqrt(vec4 r) {
      return 1.79284291400159 - 0.85373472095314 * r;
    }

    vec4 mod289(vec4 x) {
      return x - floor( x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x) {
      return mod289(((x * 34.0) + 1.0) * x);
    }

    vec4 fade(vec4 t) {
      return (t * t * t) * (t * (t * vec4(6.0) - vec4(15.0)) + vec4(10.0));
    }

    float glmPerlin(vec4 Position, vec4 rep) {
      vec4 Pi0 = mod(floor(Position), rep);
      vec4 Pi1 = mod(Pi0 + 1.0, rep);
      vec4 Pf0 = fract(Position);
      vec4 Pf1 = Pf0 - 1.0;
      vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
      vec4 iy = vec4(Pi0.y, Pi0.y, Pi1.y, Pi1.y);

      vec4 ixy = permute(permute(ix) + iy);
      vec4 ixy0 = permute(ixy + vec4(Pi0.z));
      vec4 ixy1 = permute(ixy + vec4(Pi1.z));
      vec4 ixy00 = permute(ixy0 + vec4(Pi0.w));
      vec4 ixy01 = permute(ixy0 + vec4(Pi1.w));
      vec4 ixy10 = permute(ixy1 + vec4(Pi0.w));
      vec4 ixy11 = permute(ixy1 + vec4(Pi1.w));

      vec4 gx00 = ixy00 / 7.0;
      vec4 gy00 = floor(gx00) / 7.0;
      vec4 gz00 = floor(gy00) / 6.0;
      gx00 = fract(gx00) - 0.5;
      gy00 = fract(gy00) - 0.5;
      gz00 = fract(gz00) - 0.5;
      vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
      vec4 sw00 = step(gw00, vec4(0.0));
      gx00 -= sw00 * (step(0.0, gx00) - 0.5);
      gy00 -= sw00 * (step(0.0, gy00) - 0.5);

      vec4 gx01 = ixy01 / 7.0;
      vec4 gy01 = floor(gx01) / 7.0;
      vec4 gz01 = floor(gy01) / 6.0;
      gx01 = fract(gx01) - 0.5;
      gy01 = fract(gy01) - 0.5;
      gz01 = fract(gz01) - 0.5;
      vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
      vec4 sw01 = step(gw01, vec4(0.0));
      gx01 -= sw01 * (step(0.0, gx01) - 0.5);
      gy01 -= sw01 * (step(0.0, gy01) - 0.5);

      vec4 gx10 = ixy10 / 7.0;
      vec4 gy10 = floor(gx10) / 7.0;
      vec4 gz10 = floor(gy10) / 6.0;
      gx10 = fract(gx10) - 0.5;
      gy10 = fract(gy10) - 0.5;
      gz10 = fract(gz10) - 0.5;
      vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
      vec4 sw10 = step(gw10, vec4(0.0));
      gx10 -= sw10 * (step(0.0, gx10) - 0.5);
      gy10 -= sw10 * (step(0.0, gy10) - 0.5);

      vec4 gx11 = ixy11 / 7.0;
      vec4 gy11 = floor(gx11) / 7.0;
      vec4 gz11 = floor(gy11) / 6.0;
      gx11 = fract(gx11) - 0.5;
      gy11 = fract(gy11) - 0.5;
      gz11 = fract(gz11) - 0.5;
      vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
      vec4 sw11 = step(gw11, vec4(0.0));
      gx11 -= sw11 * (step(0.0, gx11) - 0.5);
      gy11 -= sw11 * (step(0.0, gy11) - 0.5);

      vec4 g0000 = vec4(gx00.x, gy00.x, gz00.x, gw00.x);
      vec4 g1000 = vec4(gx00.y, gy00.y, gz00.y, gw00.y);
      vec4 g0100 = vec4(gx00.z, gy00.z, gz00.z, gw00.z);
      vec4 g1100 = vec4(gx00.w, gy00.w, gz00.w, gw00.w);
      vec4 g0010 = vec4(gx10.x, gy10.x, gz10.x, gw10.x);
      vec4 g1010 = vec4(gx10.y, gy10.y, gz10.y, gw10.y);
      vec4 g0110 = vec4(gx10.z, gy10.z, gz10.z, gw10.z);
      vec4 g1110 = vec4(gx10.w, gy10.w, gz10.w, gw10.w);
      vec4 g0001 = vec4(gx01.x, gy01.x, gz01.x, gw01.x);
      vec4 g1001 = vec4(gx01.y, gy01.y, gz01.y, gw01.y);
      vec4 g0101 = vec4(gx01.z, gy01.z, gz01.z, gw01.z);
      vec4 g1101 = vec4(gx01.w, gy01.w, gz01.w, gw01.w);
      vec4 g0011 = vec4(gx11.x, gy11.x, gz11.x, gw11.x);
      vec4 g1011 = vec4(gx11.y, gy11.y, gz11.y, gw11.y);
      vec4 g0111 = vec4(gx11.z, gy11.z, gz11.z, gw11.z);
      vec4 g1111 = vec4(gx11.w, gy11.w, gz11.w, gw11.w);

      vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
      g0000 *= norm00.x;
      g0100 *= norm00.y;
      g1000 *= norm00.z;
      g1100 *= norm00.w;

      vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
      g0001 *= norm01.x;
      g0101 *= norm01.y;
      g1001 *= norm01.z;
      g1101 *= norm01.w;

      vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
      g0010 *= norm10.x;
      g0110 *= norm10.y;
      g1010 *= norm10.z;
      g1110 *= norm10.w;

      vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
      g0011 *= norm11.x;
      g0111 *= norm11.y;
      g1011 *= norm11.z;
      g1111 *= norm11.w;

      float n0000 = dot(g0000, Pf0);
      float n1000 = dot(g1000, vec4(Pf1.x, Pf0.y, Pf0.z, Pf0.w));
      float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.z, Pf0.w));
      float n1100 = dot(g1100, vec4(Pf1.x, Pf1.y, Pf0.z, Pf0.w));
      float n0010 = dot(g0010, vec4(Pf0.x, Pf0.y, Pf1.z, Pf0.w));
      float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
      float n0110 = dot(g0110, vec4(Pf0.x, Pf1.y, Pf1.z, Pf0.w));
      float n1110 = dot(g1110, vec4(Pf1.x, Pf1.y, Pf1.z, Pf0.w));
      float n0001 = dot(g0001, vec4(Pf0.x, Pf0.y, Pf0.z, Pf1.w));
      float n1001 = dot(g1001, vec4(Pf1.x, Pf0.y, Pf0.z, Pf1.w));
      float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
      float n1101 = dot(g1101, vec4(Pf1.x, Pf1.y, Pf0.z, Pf1.w));
      float n0011 = dot(g0011, vec4(Pf0.x, Pf0.y, Pf1.z, Pf1.w));
      float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.z, Pf1.w));
      float n0111 = dot(g0111, vec4(Pf0.x, Pf1.y, Pf1.z, Pf1.w));
      float n1111 = dot(g1111, Pf1);

      vec4 fade_xyzw = fade(Pf0);
      vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
      vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
      vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
      vec2 n_yzw = mix(vec2(n_zw.x, n_zw.y), vec2(n_zw.z, n_zw.w), fade_xyzw.y);
      float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
      return 2.2 * n_xyzw;
    }

    float getPerlinNoise(vec3 pos, float frequency) {
      float octaveFrequencyFactor = 2.0;
      float sum = 0.0;
      float weightSum = 0.0;
      float weight = 1.0;

      for (int oct = 0; oct < 3; oct++) {
        vec3 p = pos * frequency;
        float val = 0.5 + 0.5 * glmPerlin(vec4(p, 0.0), vec4(frequency));
        sum += val * weight;
        weightSum += weight;
        weight *= 0.5;
        frequency *= octaveFrequencyFactor;
      }

      float noise = (sum / weightSum);
      noise = saturate(noise);
      return noise;
    }

    float hash(float p) {
      p = fract(p * 0.1031);
      p *= p + 33.33;
      p *= p + p;
      return fract(p);;
    }

    float noise(vec3 x) {
      vec3 p = floor(x);
      vec3 f = fract(x);

      f = f * f * (3.0 - 2.0 * f);
      float n = p.x + p.y * 57.0 + 113.0 * p.z;

      return mix(
      mix(
        mix(hash(n + 0.0), hash(n + 1.0), f.x),
        mix(hash(n + 57.0), hash(n + 58.0), f.x),
        f.y),
      mix(
        mix(hash(n + 113.0), hash(n + 114.0), f.x),
        mix(hash(n + 170.0), hash(n + 171.0), f.x),
        f.y),
      f.z);
    }

    float worley(vec3 pos, float numCells) {
      vec3 p = pos * numCells;
      float d = 1.0e10;

      for (int x = -1; x <= 1; x++) {
        for (int y = -1; y <= 1; y++) {
          for (int z = -1; z <= 1; z++) {
            vec3 tp = floor(p) + vec3(x, y, z);
            tp = p - tp - noise(mod(tp, numCells));
            d = min(d, dot(tp, tp));
          }
        }
      }

      return 1.0 - clamp(d, 0.0, 1.0);
    }

    vec3 get3Dfrom2D(vec2 uv, float tileRows) {
      vec2 tile = floor(uv);
      float z = floor(tileRows * tile.y + tile.x);
      return vec3(fract(uv), z);
    }

    float getTextureForPointPerlinWorley(vec3 p) {
      float perlinNoise = getPerlinNoise(p, ${t.glsl.float(r)});

      float worley0 = worley(p, ${t.glsl.float(l)} * 2.0);
      float worley1 = worley(p, ${t.glsl.float(l)} * 8.0);
      float worley2 = worley(p, ${t.glsl.float(l)} * 14.0);

      float worleyFBM = worley0 * 0.625 + worley1 * 0.25 + worley2 * 0.125;
      return remap(perlinNoise, 0.0, 1.0, worleyFBM, 1.0);
    }

    float getTextureForPointWorley(vec3 p) {
      float worley0 = worley(p, ${t.glsl.float(l)});
      float worley1 = worley(p, ${t.glsl.float(l)} * 2.0);
      float worley2 = worley(p, ${t.glsl.float(l)} * 4.0);
      float worley3 = worley(p, ${t.glsl.float(l)} * 8.0);

      float FBM0 = worley0 * 0.625 + worley1 * 0.25 + worley2 * 0.125;
      float FBM1 = worley1 * 0.625 + worley2 * 0.25 + worley3 * 0.125;
      float FBM2 = worley2 * 0.75 + worley3 * 0.25;

      return FBM0 * 0.625 + FBM1 * 0.25 + FBM2 * 0.125;
    }
  `),e.fragment.code.add(t.glsl`void main() {
float padWidth = 1.0;
float paddedSize = tileSize + 2.0 * padWidth;
float tileCount = tileRows * tileRows;
vec2 tile = floor((gl_FragCoord.xy - 0.5) / paddedSize);
bool padCell = false;
if (mod(gl_FragCoord.x, paddedSize) == 0.5 || mod(gl_FragCoord.x, paddedSize) == paddedSize - 0.5) {
padCell = true;
}
if (mod(gl_FragCoord.y, paddedSize) == 0.5 || mod(gl_FragCoord.y, paddedSize) == paddedSize - 0.5) {
padCell = true;
}
bool startPadX = false;
bool startPadY = false;
bool endPadX = false;
bool endPadY = false;
if (gl_FragCoord.x == tile.x * paddedSize + 0.5) {
startPadX = true;
}
if (gl_FragCoord.y == tile.y * paddedSize + 0.5) {
startPadY = true;
}
if (gl_FragCoord.x == (tile.x + 1.0) * paddedSize - 0.5) {
endPadX = true;
}
if (gl_FragCoord.y == (tile.y + 1.0) * paddedSize - 0.5) {
endPadY = true;
}
vec2 padding = vec2(2.0 * padWidth) * tile;
vec2 uv;
if (padCell) {
vec2 pixel = gl_FragCoord.xy - padWidth - padding;
if (startPadX) {
pixel.x += tileSize;
}
if (startPadY) {
pixel.y += tileSize;
}
if (endPadX) {
pixel.x -= tileSize;
}
if (endPadY) {
pixel.y -= tileSize;
}
uv = vec2(pixel.xy / tileSize);
} else {
vec2 pixel = gl_FragCoord.xy - padWidth - padding;
uv = vec2(pixel.xy / tileSize);
}
vec3 p_ = get3Dfrom2D(uv, tileRows);
vec3 p = p_;
p.z /= (tileRows * tileRows);
float worleyPerlinNoise = getTextureForPointPerlinWorley(p);
float worleyNoise = getTextureForPointWorley(p);
gl_FragColor.r = saturate(remap(worleyPerlinNoise, worleyNoise, 1.0, 0.0, 1.0));
p_ = mod(p_ + 1.0, tileRows * tileRows);
p = p_;
p.z /= (tileRows * tileRows);
worleyPerlinNoise = getTextureForPointPerlinWorley(p);
worleyNoise = getTextureForPointWorley(p);
gl_FragColor.g = saturate(remap(worleyPerlinNoise, worleyNoise, 1.0, 0.0, 1.0));
gl_FragColor.ba = vec2(0.0, 1.0);
}`),e}const r=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:"Module"}));e.NoiseTextureAtlasShader=r,e.build=l}));
