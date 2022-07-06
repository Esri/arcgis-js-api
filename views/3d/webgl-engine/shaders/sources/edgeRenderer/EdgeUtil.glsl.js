/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{MAX_ELEVATION_OFFSET as o}from"../../../collections/Component/Material/shader/ComponentData.glsl.js";import{DoublePrecision as e}from"../../../core/shaderLibrary/util/DoublePrecision.glsl.js";import{RgbaFloatEncoding as r}from"../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl.js";import{Float2Uniform as t}from"../../../core/shaderModules/Float2Uniform.js";import{Float3DrawUniform as a}from"../../../core/shaderModules/Float3DrawUniform.js";import{Float3PassUniform as n}from"../../../core/shaderModules/Float3PassUniform.js";import{FloatPassUniform as l}from"../../../core/shaderModules/FloatPassUniform.js";import{glsl as d}from"../../../core/shaderModules/interfaces.js";import{Matrix3DrawUniform as m}from"../../../core/shaderModules/Matrix3DrawUniform.js";import{Matrix3PassUniform as s}from"../../../core/shaderModules/Matrix3PassUniform.js";import{Matrix4PassUniform as i}from"../../../core/shaderModules/Matrix4PassUniform.js";import{Texture2DUniform as c}from"../../../core/shaderModules/Texture2DUniform.js";import{VertexAttribute as f}from"../../../lib/VertexAttribute.js";function u(u,v){const p=u.vertex;p.include(r),p.uniforms.add(new l("distanceFalloffFactor",(o=>o.distanceFalloffFactor))),p.code.add(d`float distanceBasedPerspectiveFactor(float distance) {
return clamp(sqrt(distanceFalloffFactor / distance), 0.0, 1.0);
}`),p.uniforms.add(new c("componentDataTex")),p.uniforms.add(new t("componentDataTexInvDim")),u.attributes.add(f.COMPONENTINDEX,"float"),p.constants.add("componentColorFieldOffset","float",0),p.constants.add("componentOtherFieldOffset","float",1),p.constants.add("componentVerticalOffsetFieldOffset","float",2),p.constants.add("componentFieldCount","float",3),p.constants.add("lineWidthFractionFactor","float",8),p.constants.add("extensionLengthOffset","float",128),p.constants.add("componentTexWidth","float",4096),p.constants.add("verticalOffsetScale","float",2*o),p.code.add(d`vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
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
float verticalOffset;
};
ComponentData readComponentData() {
vec2 colorIndex = _componentTextureCoords(componentIndex, componentColorFieldOffset);
vec2 otherIndex = _componentTextureCoords(componentIndex, componentOtherFieldOffset);
vec2 verticalOffsetIndex = _componentTextureCoords(componentIndex, componentVerticalOffsetFieldOffset);
vec4 colorValue = texture2D(componentDataTex, colorIndex);
vec4 otherValue = texture2D(componentDataTex, otherIndex);
float verticalOffset = (rgba2float(texture2D(componentDataTex, verticalOffsetIndex)) - 0.5) * verticalOffsetScale;
return ComponentData(
vec4(colorValue.rgb, colorValue.a * otherValue.w),
otherValue.x * (255.0 / lineWidthFractionFactor),
otherValue.y * 255.0 - extensionLengthOffset,
-(otherValue.z * 255.0) + 0.5,
verticalOffset
);
}`),v.legacy?p.code.add(d`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(p.uniforms.add(new m("transformNormalGlobalFromModel",(o=>o.transformNormalGlobalFromModel))),p.code.add(d`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),v.silhouette?(u.attributes.add(f.NORMALA,"vec3"),u.attributes.add(f.NORMALB,"vec3"),p.code.add(d`vec3 worldNormal() {
return _modelToWorldNormal(normalize(normalA + normalB));
}`)):(u.attributes.add(f.NORMAL,"vec3"),p.code.add(d`vec3 worldNormal() {
return _modelToWorldNormal(normal);
}`)),v.legacy?p.code.add(d`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(p.include(e,v),p.include(e,v),p.uniforms.add([new s("transformViewFromCameraRelativeRS",(o=>o.transformViewFromCameraRelativeRS)),new m("transformWorldFromModelRS",(o=>o.transformWorldFromModelRS)),new a("transformWorldFromModelTL",(o=>o.transformWorldFromModelTL)),new a("transformWorldFromModelTH",(o=>o.transformWorldFromModelTH)),new n("transformWorldFromViewTL",(o=>o.transformWorldFromViewTL)),new n("transformWorldFromViewTH",(o=>o.transformWorldFromViewTH))]),p.code.add(d`
      void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
        vec3 rotatedModelPosition = transformWorldFromModelRS * modelPos;

        vec3 transformCameraRelativeFromModel = dpAdd(
          transformWorldFromModelTL,
          transformWorldFromModelTH,
          -transformWorldFromViewTL,
          -transformWorldFromViewTH
        );

        worldPos = transformCameraRelativeFromModel + rotatedModelPosition;

        if (verticalOffset != 0.0) {
          vec3 vUp = ${v.spherical?d`normalize(transformWorldFromModelTL + rotatedModelPosition);`:d`vec3(0.0, 0.0, 1.0);`}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)),p.uniforms.add(new i("transformProjFromView",((o,e)=>e.camera.projectionMatrix))),p.code.add(d`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),p.code.add(d`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function v(o){return o.mode===x.SKETCH||o.mode===x.MIXED}function p(o){return o.mode===x.SOLID||o.mode===x.MIXED}var x;!function(o){o[o.SOLID=0]="SOLID",o[o.SKETCH=1]="SKETCH",o[o.MIXED=2]="MIXED",o[o.COUNT=3]="COUNT"}(x||(x={}));export{u as EdgeUtil,x as EdgeUtilMode,v as usesSketchLogic,p as usesSolidLogic};
