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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../core/urlUtils","../../geometry/support/jsonUtils","../../geometry/support/normalizeUtils","./pbfQueryUtils","./urlUtils"],function(e,t,r,n,i,o,u,s,a){function l(e,t){var r=e.geometry,n=e.toJSON(),i=n;if(r&&(i.geometry=JSON.stringify(r),i.geometryType=o.getJsonType(r),i.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),n.groupByFieldsForStatistics&&(i.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(i.objectIds=n.objectIds.join(",")),n.orderByFields&&(i.orderByFields=n.orderByFields.join(",")),!n.outFields||t&&(t.returnCountOnly||t.returnExtentOnly||t.returnIdsOnly)?delete i.outFields:-1!==n.outFields.indexOf("*")?i.outFields="*":i.outFields=n.outFields.join(","),n.outSR?i.outSR=n.outSR.wkid||JSON.stringify(n.outSR):r&&(n.returnGeometry||n.returnCentroid)&&(i.outSR=i.inSR),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(i.outStatistics=JSON.stringify(n.outStatistics)),n.pixelSize&&(i.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(i.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.source&&(i.layer=JSON.stringify({source:n.source}),delete n.source),n.timeExtent){var u=n.timeExtent;i.time=[null!=u.startTime?u.startTime:"null",null!=u.endTime?u.endTime:"null"],delete n.timeExtent}return i}function y(e,t,r){return m(e,t,"json",r)}function d(e,t,r){return m(e,t,"pbf",r).then(function(e){var t=s.parsePBFFeatureQuery(e.data),r=e;return r.data=t,r})}function c(e,t,r){return m(e,t,"json",r,{returnIdsOnly:!0})}function f(e,t,r){return m(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function p(e,t,r){return m(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(function(e){var t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(S);if(t.hasOwnProperty("count"))throw new Error(S);return e})}function m(e,t,o,s,y){void 0===s&&(s={});var d="string"==typeof e?i.urlToObject(e):e,c=t.geometry?[t.geometry]:[];return s.responseType="pbf"===o?"array-buffer":"json",u.normalizeCentralMeridian(c,null,s).then(function(e){var i=e&&e[0];i&&(t=t.clone(),t.geometry=i);var u=a.mapParameters(r({},d.query,{f:o},y,l(t,y)));return n(d.path+"/query",r({},s,{query:u}))})}Object.defineProperty(t,"__esModule",{value:!0});var S="Layer does not support extent calculation.";t.queryToQueryStringParameters=l,t.executeQuery=y,t.executeQueryPBF=d,t.executeQueryForIds=c,t.executeQueryForCount=f,t.executeQueryForExtent=p});