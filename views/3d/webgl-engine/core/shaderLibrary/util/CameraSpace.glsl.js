/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/vec2","../../../../../../chunks/vec2f64","../../../../../../chunks/vec4","../../../../../../chunks/vec4f64","../../shaderModules/Float2PassUniform","../../shaderModules/Float4PassUniform","../../shaderModules/interfaces"],(function(e,t,a,r,o,n,c,s){"use strict";function f(e){e.fragment.uniforms.add(new c.Float4PassUniform("projInfo",((e,t)=>i(t)))),e.fragment.uniforms.add(new n.Float2PassUniform("zScale",((e,t)=>u(t)))),e.fragment.code.add(s.glsl`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function i(e){const t=e.camera.projectionMatrix;return 0===t[11]?r.set(l,2/(e.camera.fullWidth*t[0]),2/(e.camera.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):r.set(l,-2/(e.camera.fullWidth*t[0]),-2/(e.camera.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const l=o.create();function u(e){return 0===e.camera.projectionMatrix[11]?t.set(d,0,1):t.set(d,1,0)}const d=a.create();e.CameraSpace=f,e.getZScale=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
