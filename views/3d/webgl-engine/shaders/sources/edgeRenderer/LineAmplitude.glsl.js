/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderModules/interfaces","./EdgeUtil.glsl","./UnpackAttributes.glsl"],(function(e,t,d,l){"use strict";function u(e,u){const i=e.vertex;switch(e.include(l.UnpackAttributes,u),d.usesSketchLogic(u)&&i.uniforms.add("strokesAmplitude","float"),u.mode){case d.EdgeUtilMode.SOLID:i.code.add(t.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return 0.0;
}`);break;case d.EdgeUtilMode.SKETCH:i.code.add(t.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return strokesAmplitude;
}`);break;case d.EdgeUtilMode.MIXED:i.code.add(t.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
float type = unpackedAttributes.type;
if (type <= 0.0) {
return strokesAmplitude;
}
else {
return 0.0;
}
}`)}}e.LineAmplitude=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
