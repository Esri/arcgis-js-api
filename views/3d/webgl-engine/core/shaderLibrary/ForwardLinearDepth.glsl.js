/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./ShaderOutput","./attributes/VertexPosition.glsl","../shaderModules/Float2PassUniform","../shaderModules/interfaces"],(function(e,a,r,t,d){"use strict";function o(e){e.varyings.add("linearDepth","float")}function i(e){e.vertex.uniforms.add(new t.Float2PassUniform("nearFar",((e,a)=>a.camera.nearFar)))}function n(e){e.vertex.code.add(d.glsl`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function l(e,t){const{vertex:l}=e;switch(t.output){case a.ShaderOutput.Color:if(t.receiveShadows)return o(e),void l.code.add(d.glsl`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case a.ShaderOutput.Depth:case a.ShaderOutput.Shadow:case a.ShaderOutput.ShadowHighlight:case a.ShaderOutput.ShadowExludeHighlight:return e.include(r.VertexPosition,t),o(e),i(e),n(e),void l.code.add(d.glsl`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}l.code.add(d.glsl`void forwardLinearDepth() {}`)}e.ForwardLinearDepth=l,e.addCalculateLinearDepth=n,e.addLinearDepth=o,e.addNearFar=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
