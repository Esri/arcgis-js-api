/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./AlgorithmicColorRamp","./ColorRamp","./MultipartColorRamp"],(function(t,o,e,r){"use strict";const l={key:"type",base:e,typeMap:{algorithmic:o,multipart:r}};function i(t){return t&&t.type?"algorithmic"===t.type?o.fromJSON(t):"multipart"===t.type?r.fromJSON(t):null:null}t.fromJSON=i,t.types=l,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
