/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,n){"use strict";function t(e,t){e.varyings.add("tbnTangent","vec3"),e.varyings.add("tbnBiTangent","vec3"),t.spherical?e.vertex.code.add(n.glsl`void forwardVertexTangent(vec3 n) {
tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), n));
tbnBiTangent = normalize(cross(n, tbnTangent));
}`):e.vertex.code.add(n.glsl`void forwardVertexTangent(vec3 n) {
tbnTangent = vec3(1.0, 0.0, 0.0);
tbnBiTangent = normalize(cross(n, tbnTangent));
}`),e.fragment.code.add(n.glsl`mat3 getTBNMatrix(vec3 n) {
return mat3(tbnTangent, tbnBiTangent, n);
}`)}e.VertexTangent=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
