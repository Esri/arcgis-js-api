/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./ShaderOutputOptions","../shaderModules/interfaces"],(function(e,r,t){"use strict";function a(e,a){a.output===r.ShaderOutput.Color&&a.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(t.glsl`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):a.output===r.ShaderOutput.Depth||a.output===r.ShaderOutput.Shadow?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("nearFar","vec2"),e.vertex.code.add(t.glsl`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):e.vertex.code.add(t.glsl`void forwardLinearDepth() {}`)}e.ForwardLinearDepth=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
