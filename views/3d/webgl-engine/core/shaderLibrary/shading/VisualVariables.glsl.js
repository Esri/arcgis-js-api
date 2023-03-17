/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/Float3PassUniform","../../shaderModules/Float4sPassUniform","../../shaderModules/FloatsPassUniform","../../shaderModules/interfaces","../../shaderModules/Matrix3PassUniform","../../../lib/VertexAttribute","../../../materials/VisualVariablePassParameters"],(function(e,o,r,v,t,a,i,s){"use strict";function l(e,l){l.hasVvInstancing&&(l.vvSize||l.vvColor)&&e.attributes.add(i.VertexAttribute.INSTANCEFEATUREATTRIBUTE,"vec4");const n=e.vertex;l.vvSize?(n.uniforms.add(new o.Float3PassUniform("vvSizeMinSize",(e=>e.vvSizeMinSize))),n.uniforms.add(new o.Float3PassUniform("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),n.uniforms.add(new o.Float3PassUniform("vvSizeOffset",(e=>e.vvSizeOffset))),n.uniforms.add(new o.Float3PassUniform("vvSizeFactor",(e=>e.vvSizeFactor))),n.uniforms.add(new a.Matrix3PassUniform("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),n.uniforms.add(new o.Float3PassUniform("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),n.code.add(t.glsl`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),n.code.add(t.glsl`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${l.hasVvInstancing?t.glsl`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):n.code.add(t.glsl`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),l.vvColor?(n.constants.add("vvColorNumber","int",s.vvColorNumber),l.hasVvInstancing&&n.uniforms.add([new v.FloatsPassUniform("vvColorValues",(e=>e.vvColorValues),s.vvColorNumber),new r.Float4sPassUniform("vvColorColors",(e=>e.vvColorColors),s.vvColorNumber)]),n.code.add(t.glsl`
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

      ${l.hasVvInstancing?t.glsl`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):n.code.add(t.glsl`vec4 vvColor() { return vec4(1.0); }`)}e.VisualVariables=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
