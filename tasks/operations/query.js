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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../core/urlUtils","../../geometry/support/jsonUtils","../../geometry/support/normalizeUtils","./urlUtils"],function(e,t,r,n,i,o,u,s){function a(e){var t=e.geometry,r=e.toJSON(),n=r;if(t&&(n.geometry=JSON.stringify(t),n.geometryType=o.getJsonType(t),n.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference)),r.groupByFieldsForStatistics&&(n.groupByFieldsForStatistics=r.groupByFieldsForStatistics.join(",")),r.objectIds&&(n.objectIds=r.objectIds.join(",")),r.orderByFields&&(n.orderByFields=r.orderByFields.join(",")),r.outFields&&(n.outFields=r.outFields.join(",")),r.outSR?n.outSR=r.outSR.wkid||JSON.stringify(r.outSR):t&&(r.returnGeometry||r.returnCentroid)&&(n.outSR=n.inSR),r.returnGeometry&&delete r.returnGeometry,r.outStatistics&&(n.outStatistics=JSON.stringify(r.outStatistics)),r.pixelSize&&(n.pixelSize=JSON.stringify(r.pixelSize)),r.quantizationParameters&&(n.quantizationParameters=JSON.stringify(r.quantizationParameters)),r.source&&(n.layer=JSON.stringify({source:r.source}),delete r.source),r.timeExtent){var i=r.timeExtent;n.time=[null!=i.startTime?i.startTime:"null",null!=i.endTime?i.endTime:"null"],delete r.timeExtent}return n}function l(e,t,r){return m(e,t,r)}function y(e,t,r){return m(e,t,r,{returnIdsOnly:!0})}function c(e,t,r){return m(e,t,r,{returnIdsOnly:!0,returnCountOnly:!0})}function d(e,t,r){return m(e,t,r,{returnExtentOnly:!0,returnCountOnly:!0}).then(function(e){var t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(f);if(t.hasOwnProperty("count"))throw new Error(f);return e})}function m(e,t,o,l){var y="string"==typeof e?i.urlToObject(e):e,c=t.geometry?[t.geometry]:[];return u.normalizeCentralMeridian(c).then(function(e){var i=e&&e[0];i&&(t=t.clone(),t.geometry=i);var u=s.mapParameters(r({},y.query,{f:"json"},l,a(t)));return n(y.path+"/query",r({},o,{query:u,callbackParamName:"callback"}))})}Object.defineProperty(t,"__esModule",{value:!0});var f="Layer does not support extent calculation.";t.queryToQueryStringParameters=a,t.executeQuery=l,t.executeQueryForIds=y,t.executeQueryForCount=c,t.executeQueryForExtent=d});