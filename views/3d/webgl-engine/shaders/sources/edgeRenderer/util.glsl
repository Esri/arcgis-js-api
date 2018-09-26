uniform float uDistanceFalloffFactor;

float distanceBasedPerspectiveFactor(float distance) {
  return clamp(sqrt(uDistanceFalloffFactor / distance), 0.0, 1.0);
}

uniform sampler2D uComponentDataTex;
uniform vec2 uComponentDataTexInvDim;

attribute float aComponentIndex;

#define COMPONENT_COLOR_FIELD_OFFSET 0.0
#define COMPONENT_OTHER_FIELDS_OFFSET 1.0
#define COMPONENT_FIELD_COUNT 2.0

#define LINE_WIDTH_FRACTION_FACTOR 8.0
#define EXTENSION_LENGTH_OFFSET 128.0

#define COMPONENT_TEX_WIDTH 4096.0

vec2 componentTextureCoords(float componentIndex, float fieldOffset) {
  float fieldIndex = COMPONENT_FIELD_COUNT * componentIndex + fieldOffset;

  float rowIndex = floor(fieldIndex / COMPONENT_TEX_WIDTH);
  float colIndex = mod(fieldIndex, COMPONENT_TEX_WIDTH);

  vec2 linearIndex = vec2(
    (colIndex + 0.5) / COMPONENT_TEX_WIDTH,
    (rowIndex + 0.5) * uComponentDataTexInvDim.y
  );

  return linearIndex;
}

struct ComponentData {
  vec4 color;
  float lineWidth;
  float extensionLength;
  float type;
};

ComponentData readComponentData() {
  vec2 colorIndex = componentTextureCoords(aComponentIndex, COMPONENT_COLOR_FIELD_OFFSET);
  vec2 otherIndex = componentTextureCoords(aComponentIndex, COMPONENT_OTHER_FIELDS_OFFSET);

  vec4 colorValue = texture2D(uComponentDataTex, colorIndex);
  vec4 otherValue = texture2D(uComponentDataTex, otherIndex);

  return ComponentData(
    vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
    otherValue.x * (255.0 / LINE_WIDTH_FRACTION_FACTOR),
    otherValue.y * 255.0 - EXTENSION_LENGTH_OFFSET,
    -(otherValue.z * 255.0) + 0.5 // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
  );
}

vec3 modelToWorldNormal(vec3 normal) {
  return (uModel * vec4(normal, 0)).xyz;
}

vec3 silhouetteWorldNormal(vec3 normalA, vec3 normalB) {
  return modelToWorldNormal(normalize(normalA + normalB));
}

// Fall-off extension length for shorter strokes, starting from strokes that are 256 size,
// fall-off exponentially
float calculateExtensionLength(float extensionLength, float lineLength) {
  return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}

#ifdef SILHOUETTE

// #uniforms: uView, uModel
bool isSilhouetteEdge(vec4 viewPos, vec3 normalA, vec3 normalB) {
  // transform the two face normals
  vec3 viewNormalA = (uView * uModel * vec4(normalA, 0.0)).xyz;
  vec3 viewNormalB = (uView * uModel * vec4(normalB, 0.0)).xyz;

  // compute the direction from the edge to the camera
  vec3 viewDir = -viewPos.xyz;

  // check which of the two faces are visible
  // display the edge if exactly one of the two is visible
  float faceAVisible = dot(viewDir, viewNormalA); // positive if visible
  float faceBVisible = dot(viewDir, viewNormalB); // positive if visible

  // 1 if exactly one face visible, 0 otherwise
  return faceAVisible * faceBVisible < 0.0;
}

#endif /* SILHOUETTE */
