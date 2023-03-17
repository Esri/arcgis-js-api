/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/accessorSupport/ensureType"],(function(e,t){"use strict";function n(e){const n=t.ensureInteger(100*(1-e));return Math.max(0,Math.min(n,100))}function r(e){const t=1-e/100;return Math.max(0,Math.min(t,1))}e.opacityToTransparency=n,e.transparencyToOpacity=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
