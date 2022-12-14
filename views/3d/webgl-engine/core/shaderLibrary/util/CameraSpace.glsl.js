/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/vec2","../../../../../../chunks/vec2f64","../../../../../../chunks/vec4","../../../../../../chunks/vec4f64","../../shaderModules/Float2PassUniform","../../shaderModules/Float4PassUniform","../../shaderModules/interfaces"],(function(e,a,t,r,o,n,c,s){"use strict";function f(e){e.fragment.uniforms.add(new c.Float4PassUniform("projInfo",((e,a)=>l(a)))),e.fragment.uniforms.add(new n.Float2PassUniform("zScale",((e,a)=>u(a)))),e.fragment.code.add(s.glsl`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function l(e){const a=e.camera.projectionMatrix;return 0===a[11]?r.set(i,2/(e.camera.fullWidth*a[0]),2/(e.camera.fullHeight*a[5]),(1+a[12])/a[0],(1+a[13])/a[5]):r.set(i,-2/(e.camera.fullWidth*a[0]),-2/(e.camera.fullHeight*a[5]),(1-a[8])/a[0],(1-a[9])/a[5])}const i=o.create();function u(e){return 0===e.camera.projectionMatrix[11]?a.set(d,0,1):a.set(d,1,0)}const d=t.create();e.CameraSpace=f,e.getZScale=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
