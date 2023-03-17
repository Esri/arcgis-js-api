/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderModules/FloatDrawUniform","../../../core/shaderModules/interfaces","./EdgeUtil.glsl","./UnpackAttributes.glsl"],(function(e,t,d,r,l){"use strict";function a(e,a){const i=e.vertex;switch(e.include(l.UnpackAttributes,a),a.mode){case r.EdgeUtilMode.SOLID:i.code.add(d.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return 0.0;
}`);break;case r.EdgeUtilMode.SKETCH:i.uniforms.add(new t.FloatDrawUniform("strokesAmplitude",(e=>e.strokesTexture.amplitude))),i.code.add(d.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return strokesAmplitude;
}`);break;case r.EdgeUtilMode.MIXED:i.uniforms.add(new t.FloatDrawUniform("strokesAmplitude",(e=>e.strokesTexture.amplitude))),i.code.add(d.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
float type = unpackedAttributes.type;
if (type <= 0.0) {
return strokesAmplitude;
}
else {
return 0.0;
}
}`)}}e.LineAmplitude=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
