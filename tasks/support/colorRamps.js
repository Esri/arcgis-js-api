/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./ColorRamp","./AlgorithmicColorRamp","./MultipartColorRamp"],(function(t,e,o,r){"use strict";const l={key:"type",base:e,typeMap:{algorithmic:o,multipart:r}};t.fromJSON=function(t){return t&&t.type?"algorithmic"===t.type?o.fromJSON(t):"multipart"===t.type?r.fromJSON(t):null:null},t.types=l,Object.defineProperty(t,"__esModule",{value:!0})}));
