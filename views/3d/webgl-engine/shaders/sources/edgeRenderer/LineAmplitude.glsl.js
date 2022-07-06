/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{FloatUniform as e}from"../../../core/shaderModules/FloatUniform.js";import{glsl as t}from"../../../core/shaderModules/interfaces.js";import{usesSketchLogic as r,EdgeUtilMode as s}from"./EdgeUtil.glsl.js";import{UnpackAttributes as a}from"./UnpackAttributes.glsl.js";function d(d,u){const i=d.vertex;switch(d.include(a,u),r(u)&&i.uniforms.add(new e("strokesAmplitude")),u.mode){case s.SOLID:i.code.add(t`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return 0.0;
}`);break;case s.SKETCH:i.code.add(t`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return strokesAmplitude;
}`);break;case s.MIXED:i.code.add(t`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
float type = unpackedAttributes.type;
if (type <= 0.0) {
return strokesAmplitude;
}
else {
return 0.0;
}
}`)}}export{d as LineAmplitude};
