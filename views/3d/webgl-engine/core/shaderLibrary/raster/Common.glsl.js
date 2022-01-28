/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./Projection.glsl","../../shaderModules/interfaces"],(function(o,e,r){"use strict";function t(o){o.include(e.Projection),o.fragment.uniforms.add("u_image","sampler2D"),o.fragment.uniforms.add("u_isFloatTexture","bool"),o.fragment.uniforms.add("u_flipY","bool"),o.fragment.uniforms.add("u_applyTransform","bool"),o.fragment.uniforms.add("u_opacity","float"),o.fragment.code.add(r.glsl`vec2 getPixelLocation(vec2 coords) {
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
}`)}o.Common=t,Object.defineProperty(o,"__esModule",{value:!0})}));
