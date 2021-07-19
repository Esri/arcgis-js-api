/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../core/accessorSupport/ensureType"],(function(e,n){"use strict";function t(e){const t=n.ensureInteger(100*(1-e));return Math.max(0,Math.min(t,100))}function r(e){const n=1-e/100;return Math.max(0,Math.min(n,1))}e.opacityToTransparency=t,e.transparencyToOpacity=r,Object.defineProperty(e,"__esModule",{value:!0})}));
