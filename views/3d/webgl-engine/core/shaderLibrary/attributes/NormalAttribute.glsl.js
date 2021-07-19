/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../util/DecodeNormal.glsl","../../shaderModules/interfaces"],(function(e,r,o){"use strict";function d(e,d){0===d.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(o.glsl`vec3 normalModel() {
return normal;
}`)),1===d.normalType&&(e.include(r.DecodeNormal),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(o.glsl`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===d.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.glsl`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}e.NormalAttribute=d,Object.defineProperty(e,"__esModule",{value:!0})}));
