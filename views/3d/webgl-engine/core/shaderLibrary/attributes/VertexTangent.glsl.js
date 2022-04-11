/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../ViewingMode","../../shaderModules/interfaces"],(function(e,n,t){"use strict";function a(e,a){e.varyings.add("tbnTangent","vec3"),e.varyings.add("tbnBiTangent","vec3"),a.viewingMode===n.ViewingMode.Global?e.vertex.code.add(t.glsl`void forwardVertexTangent(vec3 n) {
tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), n));
tbnBiTangent = normalize(cross(n, tbnTangent));
}`):e.vertex.code.add(t.glsl`void forwardVertexTangent(vec3 n) {
tbnTangent = vec3(1.0, 0.0, 0.0);
tbnBiTangent = normalize(cross(n, tbnTangent));
}`),e.fragment.code.add(t.glsl`mat3 getTBNMatrix(vec3 n) {
return mat3(tbnTangent, tbnBiTangent, n);
}`)}e.VertexTangent=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
