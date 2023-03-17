/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","./Projection.glsl","../terrain/TileComposite.glsl","../../shaderModules/BooleanPassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],(function(e,o,r,s,t,n,i){"use strict";let a=function(e){function r(o,r,s){var t;return(t=e.call(this)||this).common=o,t.u_image=r,t.u_transformGrid=s,t}return o._inheritsLoose(r,e),r}(s.TileCompositePassParameters);function c(e,o){e.include(r.Projection,o),e.fragment.uniforms.add([new i.Texture2DPassUniform("u_image",(e=>e.u_image)),new t.BooleanPassUniform("u_flipY",(e=>e.common.u_flipY)),new t.BooleanPassUniform("u_applyTransform",(e=>e.common.u_applyTransform))]),e.fragment.code.add(n.glsl`vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
if (!u_applyTransform) {
return targetLocation;
}
return projectPixelLocation(targetLocation);
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}
vec4 getPixel(vec2 pixelLocation) {
return texture2D(u_image, pixelLocation);
}`)}e.Common=c,e.CommonPassParameters=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
