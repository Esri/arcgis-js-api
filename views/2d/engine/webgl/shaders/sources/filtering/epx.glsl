// See https://en.wikipedia.org/wiki/Pixel-art_scaling_algorithm
// Based on the simple set of rules, we break the current texel into 4,
// and then do a bilinear interpolation
// 1=P; 2=P; 3=P; 4=P;
//         A                      1   2
//     C   P   B,   expand P to   3   4
//         D
// 
// IF C==A AND C!=D AND A!=B => 1=A
// IF A==B AND A!=C AND B!=D => 2=B
// IF D==C AND D!=B AND C!=A => 3=C
// IF B==D AND B!=A AND D!=C => 4=D
vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {
  vec2 invSize = 1.0 / texSize;
  vec2 texel = coords * texSize;
  vec2 texel_i = floor(texel);
  vec2 texel_frac = fract(texel);

  vec4 colorP = texture2D(sampler, texel_i * invSize);
  
  vec4 colorP1 = vec4(colorP);
  vec4 colorP2 = vec4(colorP);
  vec4 colorP3 = vec4(colorP);
  vec4 colorP4 = vec4(colorP);
  
  vec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);
  vec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);
  vec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);
  vec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);

  if (colorC == colorA && colorC != colorD && colorA != colorB) {
    colorP1 = colorA;
  }

  if (colorA == colorB && colorA != colorC && colorB != colorD) {
    colorP2 = colorB; 
  }

  if (colorD == colorC && colorD != colorB && colorC != colorA) {
    colorP3 = colorC;
  }

  if (colorB == colorD && colorB != colorA && colorD != colorC) {
    colorP4 = colorD; 
  }

  vec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);
  vec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);

  return mix(colorP12, colorP34, texel_frac.y);
}
