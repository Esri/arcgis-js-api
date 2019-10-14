
vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {
  vec2 texelStart = floor(coords * texSize);
  
  vec2 coord0 = texelStart / texSize;
  vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;
  vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;
  vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize; 

  vec4 color0 = texture2D(sampler, coord0);
  vec4 color1 = texture2D(sampler, coord1);
  vec4 color2 = texture2D(sampler, coord2);
  vec4 color3 = texture2D(sampler, coord3);

  vec2 blend = fract(coords * texSize); 
  
  vec4 color01 = mix(color0, color1, blend.x);
  vec4 color23 = mix(color2, color3, blend.x);

  return mix(color01, color23, blend.y);
}
