/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/jsonMap"],(function(e,o){"use strict";function t(e){return"point"===e||"multipoint"===e||"polyline"===e||"polygon"===e}const i=o.strict()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),n=o.strict()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"});e.featureGeometryTypeKebabDictionary=i,e.isFeatureGeometryType=t,e.typeKebabDictionary=n,Object.defineProperty(e,"__esModule",{value:!0})}));
