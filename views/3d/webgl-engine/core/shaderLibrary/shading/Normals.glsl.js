/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(a,e){"use strict";function r(a,r){const o=a.fragment;o.code.add(e.glsl`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===r.doubleSidedMode?o.code.add(e.glsl`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===r.doubleSidedMode?o.code.add(e.glsl`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):o.code.add(e.glsl`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}a.Normals=r,Object.defineProperty(a,"__esModule",{value:!0})}));
