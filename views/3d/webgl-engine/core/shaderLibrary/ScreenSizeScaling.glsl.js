/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../shaderModules/interfaces"],(function(e,i){"use strict";function r(e){e.vertex.uniforms.add("cameraPosition","vec3").add("perScreenPixelRatio","float").add("screenSize","float"),e.vertex.code.add(i.glsl`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance*perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSize * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function n(e,i,r){e.setUniform1f("perScreenPixelRatio",r.camera.perScreenPixelRatio),e.setUniform1f("screenSize",i.screenSize)}e.ScreenSizeScaling=r,e.bindScreenSizeScalingUniforms=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
