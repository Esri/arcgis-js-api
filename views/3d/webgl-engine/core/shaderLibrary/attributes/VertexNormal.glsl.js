/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./NormalAttribute.glsl","./VertexPosition.glsl","../../shaderModules/interfaces"],(function(o,r,e,l){"use strict";function a(o,a){0===a.normalType||1===a.normalType?(o.include(r.NormalAttribute,a),o.varyings.add("vNormalWorld","vec3"),o.varyings.add("vNormalView","vec3"),o.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),o.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),o.vertex.code.add(l.glsl`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===a.normalType?(o.include(e.VertexPosition,a),o.varyings.add("vNormalWorld","vec3"),o.vertex.code.add(l.glsl`
    void forwardNormal() {
      vNormalWorld = ${1===a.viewingMode?l.glsl`normalize(vPositionWorldCameraRelative);`:l.glsl`vec3(0.0, 0.0, 1.0);`}
    }
    `)):o.vertex.code.add(l.glsl`void forwardNormal() {}`)}!function(o){function r(o,r){o.setUniformMatrix4fv("viewNormal",r)}o.bindUniforms=r}(a||(a={})),o.VertexNormal=a,Object.defineProperty(o,"__esModule",{value:!0})}));
