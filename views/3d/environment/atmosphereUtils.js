/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/mathUtils"],(function(e,t){"use strict";function n(e){const n=1e5,o=1e6;return t.clamp((e-n)/(o-n),0,1)}const o=1e4,r=.085,i=1e5;e.atmosphereHeight=i,e.computeInnerAltitudeFade=n,e.innerAtmosphereDepth=o,e.rayLeighScaleHeight=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
