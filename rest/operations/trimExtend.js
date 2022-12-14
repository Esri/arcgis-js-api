/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../core/jsonMap"],(function(e,t){"use strict";const n=new t.JSONMap({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});function o(e){const{extendHow:t,polylines:o,trimExtendTo:r}=e.toJSON(),i={};return i.extendHow=n.toJSON(t),o&&o.length&&(i.polylines=JSON.stringify(o),i.sr=JSON.stringify(o[0].spatialReference)),r&&(i.trimExtendTo=JSON.stringify(r)),i}e.trimExtendToRESTParameters=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
