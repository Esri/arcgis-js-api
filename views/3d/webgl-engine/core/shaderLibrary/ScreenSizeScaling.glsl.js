/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{addCameraPosition as e}from"./util/View.glsl.js";import{FloatPassUniform as i}from"../shaderModules/FloatPassUniform.js";import{glsl as r}from"../shaderModules/interfaces.js";function o(o,n){if(!n.screenSizeEnabled)return;const c=o.vertex;e(c,n),c.uniforms.add(new i("perScreenPixelRatio",((e,i)=>i.camera.perScreenPixelRatio))),c.uniforms.add(new i("screenSizeScale",(e=>e.screenSizeScale))),c.code.add(r`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}export{o as ScreenSizeScaling};
