/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Projection as o}from"./Projection.glsl.js";import{TileCompositePassParameters as r}from"../terrain/TileComposite.glsl.js";import{BooleanPassUniform as e}from"../../shaderModules/BooleanPassUniform.js";import{glsl as t}from"../../shaderModules/interfaces.js";import{Texture2DPassUniform as s}from"../../shaderModules/Texture2DPassUniform.js";class i extends r{constructor(o,r,e){super(),this.common=o,this.u_image=r,this.u_transformGrid=e}}function n(r){r.include(o),r.fragment.uniforms.add([new s("u_image",(o=>o.u_image)),new e("u_flipY",(o=>o.common.u_flipY)),new e("u_applyTransform",(o=>o.common.u_applyTransform))]),r.fragment.code.add(t`vec2 getPixelLocation(vec2 coords) {
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
}`)}export{n as Common,i as CommonPassParameters};
