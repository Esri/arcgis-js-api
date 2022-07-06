/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"./AlgorithmicColorRamp.js";import o from"./ColorRamp.js";import r from"./MultipartColorRamp.js";const m={key:"type",base:o,typeMap:{algorithmic:t,multipart:r}};function p(o){return o&&o.type?"algorithmic"===o.type?t.fromJSON(o):"multipart"===o.type?r.fromJSON(o):null:null}export{p as fromJSON,m as types};
