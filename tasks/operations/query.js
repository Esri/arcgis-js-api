// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../core/urlUtils","../../geometry/support/jsonUtils","../../geometry/support/normalizeUtils","./pbfQueryUtils","./urlUtils"],function(e,t,r,n,i,o,u,s,a){function l(e){var t=e.geometry,r=e.toJSON(),n=r;if(t&&(n.geometry=JSON.stringify(t),n.geometryType=o.getJsonType(t),n.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference)),r.groupByFieldsForStatistics&&(n.groupByFieldsForStatistics=r.groupByFieldsForStatistics.join(",")),r.objectIds&&(n.objectIds=r.objectIds.join(",")),r.orderByFields&&(n.orderByFields=r.orderByFields.join(",")),r.outFields&&(-1!==r.outFields.indexOf("*")?n.outFields="*":n.outFields=r.outFields.join(",")),r.outSR?n.outSR=r.outSR.wkid||JSON.stringify(r.outSR):t&&(r.returnGeometry||r.returnCentroid)&&(n.outSR=n.inSR),r.returnGeometry&&delete r.returnGeometry,r.outStatistics&&(n.outStatistics=JSON.stringify(r.outStatistics)),r.pixelSize&&(n.pixelSize=JSON.stringify(r.pixelSize)),r.quantizationParameters&&(n.quantizationParameters=JSON.stringify(r.quantizationParameters)),r.source&&(n.layer=JSON.stringify({source:r.source}),delete r.source),r.timeExtent){var i=r.timeExtent;n.time=[null!=i.startTime?i.startTime:"null",null!=i.endTime?i.endTime:"null"],delete r.timeExtent}return n}function y(e,t,r){return m(e,t,"json",r)}function c(e,t,r){return m(e,t,"pbf",r).then(function(e){var t=s.parsePBFFeatureQuery(e.data),r=e;return r.data=t,r})}function d(e,t,r){return m(e,t,"json",r,{returnIdsOnly:!0})}function f(e,t,r){return m(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function p(e,t,r){return m(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(function(e){var t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(S);if(t.hasOwnProperty("count"))throw new Error(S);return e})}function m(e,t,o,s,y){void 0===s&&(s={});var c="string"==typeof e?i.urlToObject(e):e,d=t.geometry?[t.geometry]:[];return s.responseType="pbf"===o?"array-buffer":"json",u.normalizeCentralMeridian(d).then(function(e){var i=e&&e[0];i&&(t=t.clone(),t.geometry=i);var u=a.mapParameters(r({},c.query,{f:o},y,l(t)));return n(c.path+"/query",r({},s,{query:u,callbackParamName:"callback"}))})}Object.defineProperty(t,"__esModule",{value:!0});var S="Layer does not support extent calculation.";t.queryToQueryStringParameters=l,t.executeQuery=y,t.executeQueryPBF=c,t.executeQueryForIds=d,t.executeQueryForCount=f,t.executeQueryForExtent=p});