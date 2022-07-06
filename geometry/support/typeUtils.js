/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{strict as o}from"../../core/jsonMap.js";function e(o){return"point"===o||"multipoint"===o||"polyline"===o||"polygon"===o}const i=o()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),t=o()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"});export{i as featureGeometryTypeKebabDictionary,e as isFeatureGeometryType,t as typeKebabDictionary};
