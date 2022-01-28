/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./AlgorithmicColorRamp","./ColorRamp","./MultipartColorRamp"],(function(t,e,o,r){"use strict";const l={key:"type",base:o,typeMap:{algorithmic:e,multipart:r}};function p(t){return t&&t.type?"algorithmic"===t.type?e.fromJSON(t):"multipart"===t.type?r.fromJSON(t):null:null}t.fromJSON=p,t.types=l,Object.defineProperty(t,"__esModule",{value:!0})}));
