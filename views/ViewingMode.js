/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(o){"use strict";var e;function i(e){return"global"===e?o.ViewingMode.Global:o.ViewingMode.Local}function n(e){return e===o.ViewingMode.Global?"global":"local"}o.ViewingMode=void 0,(e=o.ViewingMode||(o.ViewingMode={}))[e.Global=1]="Global",e[e.Local=2]="Local",o.stringFromViewingMode=n,o.viewingModeFromString=i,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
