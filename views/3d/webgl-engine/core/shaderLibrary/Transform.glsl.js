/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./ForwardLinearDepth.glsl","../shaderModules/interfaces"],(function(e,t,o){"use strict";function r(e,r){if(t.addCalculateLinearDepth(e),r.hasModelTransformation)return e.vertex.code.add(o.glsl`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void e.vertex.code.add(o.glsl`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);e.vertex.code.add(o.glsl`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(o.glsl`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}e.Transform=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
