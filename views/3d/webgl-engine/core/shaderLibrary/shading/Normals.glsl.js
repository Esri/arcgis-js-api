/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/compilerUtils","../../shaderModules/interfaces"],(function(e,a,r){"use strict";function o(o,d){const i=o.fragment;switch(i.code.add(r.glsl`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),d.doubleSidedMode){case e.NormalsDoubleSidedMode.None:i.code.add(r.glsl`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case e.NormalsDoubleSidedMode.View:i.code.add(r.glsl`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case e.NormalsDoubleSidedMode.WindingOrder:i.code.add(r.glsl`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:a.neverReached(d.doubleSidedMode);case e.NormalsDoubleSidedMode.COUNT:}}var d;e.NormalsDoubleSidedMode=void 0,(d=e.NormalsDoubleSidedMode||(e.NormalsDoubleSidedMode={}))[d.None=0]="None",d[d.View=1]="View",d[d.WindingOrder=2]="WindingOrder",d[d.COUNT=3]="COUNT",e.Normals=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
