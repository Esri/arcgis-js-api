// COPYRIGHT © 2022 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","../../polyfill/tsSupport/assign","../../polyfill/tsSupport/spreadarray","../../../geometry/Extent","../../../layers/Field"],(function(e,r,t,i,n,o){"use strict";function l(e){var r=null;return e.domain&&(r="range"===e.domain.type?{type:"range",range:[e.domain.minValue,e.domain.maxValue]}:{type:"codedValue",codedValues:e.domain.toJson().codedValues}),t(t({name:e.name,type:e.type,alias:e.alias},void 0!==e.length?{length:e.length}:{}),{editable:!0===e.editable,nullable:!0===e.nullable,domain:r})}function s(e){return e instanceof Date}Object.defineProperty(r,"__esModule",{value:!0}),r.stableStringify=r.extractServiceUrl=r.toEsriGeometryType=r.layerFieldEsriConstants=r.layerGeometryEsriRestConstants=r.layerGeometryEsriConstants=r.callback=r.errback=r.defaultMaxRecords=r.sameGeomType=r.convertLinearUnitsToCode=r.shapeExtent=r.convertSquareUnitsToCode=r.cloneAttributes=r.equalityTest=r.isDate=r.isArray=r.isNumber=r.isBoolean=r.isString=r.IdState=r.esriFieldToJson=r.cloneField=r.FeatureServiceDatabaseType=void 0,function(e){e[e.Standardised=0]="Standardised",e[e.StandardisedNoInterval=1]="StandardisedNoInterval",e[e.SqlServer=2]="SqlServer",e[e.Oracle=3]="Oracle",e[e.Postgres=4]="Postgres",e[e.PGDB=5]="PGDB",e[e.FILEGDB=6]="FILEGDB",e[e.NotEvaluated=7]="NotEvaluated"}(r.FeatureServiceDatabaseType||(r.FeatureServiceDatabaseType={})),r.cloneField=function(e){return new o(l(e))},r.esriFieldToJson=l,function(e){e[e.InFeatureSet=0]="InFeatureSet",e[e.NotInFeatureSet=1]="NotInFeatureSet",e[e.Unknown=2]="Unknown"}(r.IdState||(r.IdState={})),r.isString=function(e){return"string"==typeof e||e instanceof String},r.isBoolean=function(e){return"boolean"==typeof e},r.isNumber=function(e){return"number"==typeof e},r.isArray=function(e){return e instanceof Array},r.isDate=s,r.equalityTest=function(e,r){return e===r||!(!s(e)||!s(r))&&e.getTime()===r.getTime()},r.cloneAttributes=function(e){var r={};for(var t in e)r[t]=e[t];return r},r.convertSquareUnitsToCode=function(e){if(void 0===e)return null;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":return 109404;case"miles":case"mile":return 109413;case"kilometers":case"kilometer":case"km":return 109414}return null},r.shapeExtent=function(e){if(null===e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.getExtent();case"point":return new n({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null},r.convertLinearUnitsToCode=function(e){if(void 0===e)return null;if("number"==typeof e)return e;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":return 9001;case"miles":case"mile":return 9035;case"kilometers":case"kilometer":case"km":return 9036}return null},r.sameGeomType=function(e,r){return e===r||("point"===e&&"esriGeometryPoint"===r||("polyline"===e&&"esriGeometryPolyline"===r||("polygon"===e&&"esriGeometryPolygon"===r||("extent"===e&&"esriGeometryEnvelope"===r||("multipoint"===e&&"esriGeometryMultipoint"===r||("point"===r&&"esriGeometryPoint"===e||("polyline"===r&&"esriGeometryPolyline"===e||("polygon"===r&&"esriGeometryPolygon"===e||("extent"===r&&"esriGeometryEnvelope"===e||"multipoint"===r&&"esriGeometryMultipoint"===e)))))))))},r.defaultMaxRecords=1e3,r.errback=function(e){return function(r){e.reject(r)}},r.callback=function(e,r){return function(){try{e.apply(null,arguments)}catch(e){r.reject(e)}}},r.layerGeometryEsriConstants={point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"},r.layerGeometryEsriRestConstants={point:"esriGeometryPoint",polygon:"esriGeometryPolygon",polyline:"esriGeometryPolyline",multipoint:"esriGeometryMultipoint",extent:"esriGeometryEnvelope",esriGeometryPoint:"esriGeometryPoint",esriGeometryPolygon:"esriGeometryPolygon",esriGeometryPolyline:"esriGeometryPolyline",esriGeometryMultipoint:"esriGeometryMultipoint",esriGeometryEnvelope:"esriGeometryEnvelope",envelope:"esriGeometryEnvelope"},r.layerFieldEsriConstants={"small-integer":"esriFieldTypeSmallInteger",integer:"esriFieldTypeInteger",long:"esriFieldTypeLong",single:"esriFieldTypeSingle",double:"esriFieldTypeDouble",string:"esriFieldTypeString",date:"esriFieldTypeDate",oid:"esriFieldTypeOID",geometry:"esriFieldTypeGeometry",blob:"esriFieldTypeBlob",raster:"esriFieldTypeRaster",guid:"esriFieldTypeGUID","global-id":"esriFieldTypeGlobalID",xml:"eesriFieldTypeXML",esriFieldTypeSmallInteger:"esriFieldTypeSmallInteger",esriFieldTypeInteger:"esriFieldTypeInteger",esriFieldTypeLong:"esriFieldTypeLong",esriFieldTypeSingle:"esriFieldTypeSingle",esriFieldTypeDouble:"esriFieldTypeDouble",esriFieldTypeString:"esriFieldTypeString",esriFieldTypeDate:"esriFieldTypeDate",esriFieldTypeOID:"esriFieldTypeOID",esriFieldTypeGeometry:"esriFieldTypeGeometry",esriFieldTypeBlob:"esriFieldTypeBlob",esriFieldTypeRaster:"esriFieldTypeRaster",esriFieldTypeGUID:"esriFieldTypeGUID",esriFieldTypeGlobalID:"esriFieldTypeGlobalID",esriFieldTypeXML:"eesriFieldTypeXML"},r.toEsriGeometryType=function(e){switch(e){case"point":return"esriGeometryPoint";case"polygon":return"esriGeometryPolygon";case"multipoint":return"esriGeometryMultipoint";case"polyline":return"esriGeometryPolyline";default:return"esriGeometryPoint"}},r.extractServiceUrl=function(e){return void 0===e?"":e=(e=(e=e.replace(/\/featureserver\/[0-9]*/i,"/FeatureServer")).replace(/\/mapserver\/[0-9]*/i,"/MapServer")).split("?")[0]},r.stableStringify=function(e,r){r||(r={}),"function"==typeof r&&(r={cmp:r});var t,i="boolean"==typeof r.cycles&&r.cycles,n=r.cmp&&(t=r.cmp,function(e){return function(r,i){var n={key:r,value:e[r]},o={key:i,value:e[i]};return t(n,o)}}),o=[];return function e(r){if(r&&r.toJson&&"function"==typeof r.toJson&&(r=r.toJson()),void 0!==r){if("number"==typeof r)return isFinite(r)?""+r:"null";if("object"!=typeof r)return JSON.stringify(r);var t,l;if(Array.isArray(r)){for(l="[",t=0;t<r.length;t++)t&&(l+=","),l+=e(r[t])||"null";return l+"]"}if(null===r)return"null";if(o.includes(r)){if(i)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var s=o.push(r)-1,a=Object.keys(r).sort(n&&n(r));for(l="",t=0;t<a.length;t++){var y=a[t],u=e(r[y]);u&&(l&&(l+=","),l+=JSON.stringify(y)+":"+u)}return o.splice(s,1),"{"+l+"}"}}(e)}}));