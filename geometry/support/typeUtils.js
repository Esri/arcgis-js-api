/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/jsonMap"],(function(e,o){"use strict";const t=o.strict()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),i=o.strict()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"});e.featureGeometryTypeKebabDictionary=t,e.isFeatureGeometryType=function(e){return"point"===e||"multipoint"===e||"polyline"===e||"polygon"===e},e.typeKebabDictionary=i,Object.defineProperty(e,"__esModule",{value:!0})}));
