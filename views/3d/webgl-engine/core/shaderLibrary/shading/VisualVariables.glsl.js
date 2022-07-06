/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Float3PassUniform as e}from"../../shaderModules/Float3PassUniform.js";import{Float4sPassUniform as o}from"../../shaderModules/Float4sPassUniform.js";import{FloatsPassUniform as r}from"../../shaderModules/FloatsPassUniform.js";import{glsl as v}from"../../shaderModules/interfaces.js";import{Matrix3PassUniform as t}from"../../shaderModules/Matrix3PassUniform.js";import{VertexAttribute as a}from"../../../lib/VertexAttribute.js";import{vvColorNumber as i}from"../../../materials/VisualVariablePassParameters.js";function s(s,n){n.hasVvInstancing&&(n.vvSize||n.vvColor)&&s.attributes.add(a.INSTANCEFEATUREATTRIBUTE,"vec4");const l=s.vertex;n.vvSize?(l.uniforms.add(new e("vvSizeMinSize",(e=>e.vvSizeMinSize))),l.uniforms.add(new e("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),l.uniforms.add(new e("vvSizeOffset",(e=>e.vvSizeOffset))),l.uniforms.add(new e("vvSizeFactor",(e=>e.vvSizeFactor))),l.uniforms.add(new t("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),l.uniforms.add(new e("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),l.code.add(v`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),l.code.add(v`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${n.hasVvInstancing?v`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):l.code.add(v`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),n.vvColor?(l.constants.add("vvColorNumber","int",i),n.hasVvInstancing&&l.uniforms.add([new r("vvColorValues",(e=>e.vvColorValues),i),new o("vvColorColors",(e=>e.vvColorColors),i)]),l.code.add(v`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${n.hasVvInstancing?v`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):l.code.add(v`vec4 vvColor() { return vec4(1.0); }`)}export{s as VisualVariables};
