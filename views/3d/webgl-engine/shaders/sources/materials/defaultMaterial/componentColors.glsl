
uniform sampler2D uComponentColorTex;
uniform vec2 uComponentColorTexInvDim;

attribute float componentIndex;

vec4 readComponentColor() {
  float normalizedIndex = (componentIndex + 0.5) * uComponentColorTexInvDim.x;
  vec2 indexCoord = vec2(
    mod(normalizedIndex, 1.0),
    (floor(normalizedIndex) + 0.5) * uComponentColorTexInvDim.y
  );
  vec4 componentColor = texture2D(uComponentColorTex, indexCoord);
  // NB: we clear the least significant bit of the blue channel as this contains
  // the castShadows flag
  return vec4( componentColor.r, componentColor.g, componentColor.b - mod(componentColor.b*255.0, 2.0)/255.0, componentColor.a);
}

// returns 1.0 if shadowCasting is enabled and 0.0 otherwise
// this is found by reading the least significant bit of the
// componentColors blue color channel which contains the castShadows flag
bool readComponentCastShadowsFlag(){
  float normalizedIndex = (componentIndex + 0.5) * uComponentColorTexInvDim.x;
  vec2 indexCoord = vec2(
    mod(normalizedIndex, 1.0),
    (floor(normalizedIndex) + 0.5) * uComponentColorTexInvDim.y
  );
  if( mod(texture2D(uComponentColorTex, indexCoord).b*255.0, 2.0) < 1.0 )
      return false;
  return true;
}
