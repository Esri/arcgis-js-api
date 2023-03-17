/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/has","../../webgl-engine/shaders/RibbonLineTechniqueConfiguration"],(function(e,n,r){"use strict";function t(e){switch(e){case"butt":return r.CapType.BUTT;case"square":return r.CapType.SQUARE;case"round":return r.CapType.ROUND;default:return null}}function a(e){return"diamond"===e?"kite":e}e.parseCapType=t,e.parseLineMarkerStyle=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
