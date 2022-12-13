/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";var o;function i(o){return"global"===o?e.ViewingMode.Global:e.ViewingMode.Local}function l(o){return o===e.ViewingMode.Global?"global":"local"}e.ViewingMode=void 0,(o=e.ViewingMode||(e.ViewingMode={}))[o.Global=1]="Global",o[o.Local=2]="Local",e.stringFromViewingMode=l,e.viewingModeFromString=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
