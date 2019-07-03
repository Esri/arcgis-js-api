
uniform highp sampler2D u_attributeData0;
uniform highp sampler2D u_attributeData1;
uniform highp sampler2D u_attributeData2;
uniform int u_attributeTextureSize; 

vec2 getAttributeDataCoords(in highp vec4 id) {
  // MG: Is the byte order here system dependent? Do we need to check for endianess?
  // float u32 = float(int(id.r) * 255 * 255 * 255 + int(id.g) * 255 * 255 + int(id.b) * 255 + int(id.a));
  float size = float(u_attributeTextureSize);
  highp float u32 = float(int(id.r) + int(id.g) * 256 + int(id.b) * 256 * 256 + int(id.a) * 256 * 256 * 256);
  highp float col = mod(u32, size);
  highp float row = (u32 - col) / size;  

  highp float u = col / size;
  highp float v = row / size; 

  return vec2(u, v); 
}

vec4 getAttributeData0(in vec4 id) {
  vec2 coords = getAttributeDataCoords(id);
  
  return texture2D(u_attributeData0, coords); 
}

vec4 getAttributeData1(in vec4 id) {
  vec2 coords = getAttributeDataCoords(id);
  
  return texture2D(u_attributeData1, coords); 
}

vec4 getAttributeData2(in vec4 id) {
  vec2 coords = getAttributeDataCoords(id);
  
  return texture2D(u_attributeData2, coords); 
}

float u88VVToFloat(in vec2 v) {
  // For u88 encoded vvars, MAX_USHORT denotes NaN
  bool isMagic = v.x == 255.0 && v.y == 255.0;

  if (isMagic) {
    return NAN_MAGIC_NUMBER;
  }
  
  return (v.x + v.y * float(0x100)) - 32768.0;
}

