/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,v,o){"use strict";function r(e,r){r.vvInstancingEnabled&&(r.vvSize||r.vvColor)&&e.attributes.add(o.VertexAttribute.INSTANCEFEATUREATTRIBUTE,"vec4"),r.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(v.glsl`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(v.glsl`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${r.vvInstancingEnabled?v.glsl`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(v.glsl`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),r.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(v.glsl`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

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

      ${r.vvInstancingEnabled?v.glsl`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(v.glsl`vec4 vvColor() { return vec4(1.0); }`)}function t(e,v){v.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",v.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",v.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",v.vvSizeOffset),e.setUniform3fv("vvSizeFactor",v.vvSizeFactor)),v.vvColorEnabled&&(e.setUniform1fv("vvColorValues",v.vvColorValues),e.setUniform4fv("vvColorColors",v.vvColorColors))}function i(e,v){t(e,v),v.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",v.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",v.vvOpacityOpacities))}function a(e,v){t(e,v),v.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",v.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",v.vvSymbolRotationMatrix))}e.VisualVariables=r,e.bindVisualVariablesUniforms=t,e.bindVisualVariablesUniformsForSymbols=a,e.bindVisualVariablesUniformsWithOpacity=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
