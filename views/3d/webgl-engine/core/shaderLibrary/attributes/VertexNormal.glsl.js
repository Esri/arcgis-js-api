/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../ViewingMode","./NormalAttribute.glsl","./VertexPosition.glsl","../../shaderModules/interfaces"],(function(r,o,e,l,a){"use strict";function t(r,t){t.normalType===e.NormalAttributeType.Attribute||t.normalType===e.NormalAttributeType.CompressedAttribute?(r.include(e.NormalAttribute,t),r.varyings.add("vNormalWorld","vec3"),r.varyings.add("vNormalView","vec3"),r.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),r.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),r.vertex.code.add(a.glsl`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===e.NormalAttributeType.Ground?(r.include(l.VertexPosition,t),r.varyings.add("vNormalWorld","vec3"),r.vertex.code.add(a.glsl`
    void forwardNormal() {
      vNormalWorld = ${t.viewingMode===o.ViewingMode.Global?a.glsl`normalize(vPositionWorldCameraRelative);`:a.glsl`vec3(0.0, 0.0, 1.0);`}
    }
    `)):r.vertex.code.add(a.glsl`void forwardNormal() {}`)}function i(r,o){r.setUniformMatrix4fv("viewNormal",o)}r.VertexNormal=t,r.bindVertexNormalUniforms=i,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
