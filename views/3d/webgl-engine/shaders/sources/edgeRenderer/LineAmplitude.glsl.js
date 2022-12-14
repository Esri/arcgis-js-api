/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderModules/FloatDrawUniform","../../../core/shaderModules/interfaces","./EdgeUtil.glsl","./UnpackAttributes.glsl"],(function(e,t,d,l,r){"use strict";function s(e,s){const u=e.vertex;switch(e.include(r.UnpackAttributes,s),s.mode){case l.EdgeUtilMode.SOLID:u.code.add(d.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return 0.0;
}`);break;case l.EdgeUtilMode.SKETCH:u.uniforms.add(new t.FloatDrawUniform("strokesAmplitude",(e=>e.strokesTexture.amplitude))),u.code.add(d.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return strokesAmplitude;
}`);break;case l.EdgeUtilMode.MIXED:u.uniforms.add(new t.FloatDrawUniform("strokesAmplitude",(e=>e.strokesTexture.amplitude))),u.code.add(d.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
float type = unpackedAttributes.type;
if (type <= 0.0) {
return strokesAmplitude;
}
else {
return 0.0;
}
}`)}}e.LineAmplitude=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
