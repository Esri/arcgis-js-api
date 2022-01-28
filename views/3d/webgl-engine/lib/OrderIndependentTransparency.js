/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../webgl/renderState"],(function(e,n){"use strict";const t=n.separateBlendingParams(770,1,771,771),l=n.simpleBlendingParams(1,1),r=n.simpleBlendingParams(0,771);function i(e){return 2===e?null:1===e?r:l}function o(e){return 2===e?n.defaultDepthWriteParams:null}const s=5e5,u={factor:-1,units:-2};function a(e){return e?u:null}function f(e){return 3===e||2===e?513:515}e.OITBlending=i,e.OITDepthTest=f,e.OITDepthWrite=o,e.OITPolygonOffset=u,e.OITPolygonOffsetLimit=s,e.blendingAlpha=r,e.blendingColor=l,e.blendingDefault=t,e.getOITPolygonOffset=a,Object.defineProperty(e,"__esModule",{value:!0})}));
