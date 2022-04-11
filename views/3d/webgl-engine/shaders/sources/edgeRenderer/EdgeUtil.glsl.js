/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderLibrary/util/DoublePrecision.glsl","../../../core/shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,o,t,n){"use strict";function r(e,r){const l=e.vertex;l.uniforms.add("distanceFalloffFactor","float"),l.code.add(t.glsl`float distanceBasedPerspectiveFactor(float distance) {
return clamp(sqrt(distanceFalloffFactor / distance), 0.0, 1.0);
}`),l.uniforms.add("componentDataTex","sampler2D"),l.uniforms.add("componentDataTexInvDim","vec2"),e.attributes.add(n.VertexAttribute.COMPONENTINDEX,"float"),l.constants.add("componentColorFieldOffset","float",0),l.constants.add("componentOtherFieldOffset","float",1),l.constants.add("componentFieldCount","float",2),l.constants.add("lineWidthFractionFactor","float",8),l.constants.add("extensionLengthOffset","float",128),l.constants.add("componentTexWidth","float",4096),l.code.add(t.glsl`vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
float fieldIndex = componentFieldCount * componentIndex + fieldOffset;
float rowIndex = floor(fieldIndex / componentTexWidth);
float colIndex = mod(fieldIndex, componentTexWidth);
vec2 linearIndex = vec2(
(colIndex + 0.5) / componentTexWidth,
(rowIndex + 0.5) * componentDataTexInvDim.y
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
vec2 colorIndex = _componentTextureCoords(componentIndex, componentColorFieldOffset);
vec2 otherIndex = _componentTextureCoords(componentIndex, componentOtherFieldOffset);
vec4 colorValue = texture2D(componentDataTex, colorIndex);
vec4 otherValue = texture2D(componentDataTex, otherIndex);
return ComponentData(
vec4(colorValue.rgb, colorValue.a * otherValue.w),
otherValue.x * (255.0 / lineWidthFractionFactor),
otherValue.y * 255.0 - extensionLengthOffset,
-(otherValue.z * 255.0) + 0.5
);
}`),r.legacy?l.code.add(t.glsl`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (view * model * vec4(normal, 0.0)).xyz;
}`):(l.uniforms.add("transformNormalGlobalFromModel","mat3"),l.code.add(t.glsl`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),r.silhouette?(e.attributes.add(n.VertexAttribute.NORMALA,"vec3"),e.attributes.add(n.VertexAttribute.NORMALB,"vec3"),l.code.add(t.glsl`vec3 worldNormal() {
return _modelToWorldNormal(normalize(normalA + normalB));
}`)):(e.attributes.add(n.VertexAttribute.NORMAL,"vec3"),l.code.add(t.glsl`vec3 worldNormal() {
return _modelToWorldNormal(normal);
}`)),r.legacy?l.code.add(t.glsl`vec3 worldFromModelPosition(vec3 position) {
return (model * vec4(position, 1.0)).xyz;
}
vec3 viewFromModelPosition(vec3 position) {
return (view * vec4(worldFromModelPosition(position), 1.0)).xyz;
}
vec4 projFromViewPosition(vec3 position) {
return proj * vec4(position, 1.0);
}`):(e.vertex.include(o.DoublePrecision,r),l.code.add(t.glsl`vec3 worldFromModelPosition(vec3 position) {
vec3 rotatedModelPosition = transformWorldFromModelRS * position;
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 viewFromModelPosition(vec3 position) {
return transformViewFromCameraRelativeRS * worldFromModelPosition(position);
}
vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`)),l.code.add(t.glsl`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function l(o){return o.mode===e.EdgeUtilMode.SKETCH||o.mode===e.EdgeUtilMode.MIXED}function d(o){return o.mode===e.EdgeUtilMode.SOLID||o.mode===e.EdgeUtilMode.MIXED}var a;e.EdgeUtilMode=void 0,(a=e.EdgeUtilMode||(e.EdgeUtilMode={}))[a.SOLID=0]="SOLID",a[a.SKETCH=1]="SKETCH",a[a.MIXED=2]="MIXED",a[a.COUNT=3]="COUNT",e.EdgeUtil=r,e.usesSketchLogic=l,e.usesSolidLogic=d,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
