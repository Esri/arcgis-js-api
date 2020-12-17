/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../webgl/renderState"],(function(e,n){"use strict";const t=n.separateBlendingParams(770,1,771,771),l=n.simpleBlendingParams(1,1),r=n.simpleBlendingParams(0,771);const i={factor:-1,units:-2};e.OITBlending=function(e){return 2===e?null:1===e?r:l},e.OITDepthTest=function(e){return 3===e||2===e?513:515},e.OITDepthWrite=function(e){return 2===e?n.defaultDepthWriteParams:null},e.OITPolygonOffset=i,e.OITPolygonOffsetLimit=5e5,e.blendingAlpha=r,e.blendingColor=l,e.blendingDefault=t,e.getOITPolygonOffset=function(e){return e?i:null},Object.defineProperty(e,"__esModule",{value:!0})}));
