/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../shaderModules/interfaces"],(function(e,a){"use strict";function r(e,r){0===r.output&&r.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(a.glsl`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===r.output||3===r.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(a.glsl`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):e.vertex.code.add(a.glsl`void forwardLinearDepth() {}`)}e.ForwardLinearDepth=r,Object.defineProperty(e,"__esModule",{value:!0})}));
