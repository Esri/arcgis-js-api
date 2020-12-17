/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/accessorSupport/ensureType"],(function(e,n){"use strict";e.opacityToTransparency=function(e){const t=n.ensureInteger(100*(1-e));return Math.max(0,Math.min(t,100))},e.transparencyToOpacity=function(e){const n=1-e/100;return Math.max(0,Math.min(n,1))},Object.defineProperty(e,"__esModule",{value:!0})}));
