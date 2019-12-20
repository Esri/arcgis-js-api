
uniform highp sampler2D u_attributeData0;
uniform highp sampler2D u_attributeData1;
uniform highp sampler2D u_attributeData2;
uniform highp sampler2D u_attributeData3;

uniform highp int u_attributeTextureSize; 

highp vec2 getAttributeDataCoords(in highp vec4 id) {
  highp vec4 texel = unpackLocalIdTexel(id); 
  highp float size = float(u_attributeTextureSize);
  highp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256 + int(texel.a) * 256 * 256 * 256);
  highp float col = mod(u32, size);
  highp float row = (u32 - col) / size;  

  highp float u = col / size;
  highp float v = row / size; 

  return vec2(u, v); 
}

highp vec4 getAttributeData0(in highp vec4 id) {
  vec2 coords = getAttributeDataCoords(id);
  
  return texture2D(u_attributeData0, coords); 
}

highp vec4 getAttributeData1(in highp vec4 id) {
  highp vec2 coords = getAttributeDataCoords(id);
  
  return texture2D(u_attributeData1, coords); 
}

highp vec4 getAttributeData2(in highp vec4 id) {
  highp vec2 coords = getAttributeDataCoords(id);
  
  return texture2D(u_attributeData2, coords); 
}

highp vec4 getAttributeData3(in highp vec4 id) {
  highp vec2 coords = getAttributeDataCoords(id);
  
  return texture2D(u_attributeData3, coords); 
}

float u88VVToFloat(in vec2 v) {
  // For u88 encoded vvars, MAX_USHORT denotes NaN
  bool isMagic = v.x == 255.0 && v.y == 255.0;

  if (isMagic) {
    return NAN_MAGIC_NUMBER;
  }
  
  return (v.x + v.y * float(0x100)) - 32768.0;
}

