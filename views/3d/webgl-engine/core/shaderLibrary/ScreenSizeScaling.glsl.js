/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./util/View.glsl","../shaderModules/FloatPassUniform","../shaderModules/interfaces"],(function(e,i,r,n){"use strict";function o(e,o){if(!o.screenSizeEnabled)return;const a=e.vertex;i.addCameraPosition(a,o),a.uniforms.add(new r.FloatPassUniform("perScreenPixelRatio",((e,i)=>i.camera.perScreenPixelRatio))),a.uniforms.add(new r.FloatPassUniform("screenSizeScale",(e=>e.screenSizeScale))),a.code.add(n.glsl`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}e.ScreenSizeScaling=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
