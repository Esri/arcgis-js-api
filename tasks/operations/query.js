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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../core/urlUtils","../../geometry/support/jsonUtils","../../geometry/support/normalizeUtils","./pbfQueryUtils","./PBFWorker","./urlUtils"],function(e,t,r,n,u,o,i,s,a,l){function y(e,t){var r=e.geometry,n=e.toJSON(),u=n;if(r&&(u.geometry=JSON.stringify(r),u.geometryType=o.getJsonType(r),u.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),n.groupByFieldsForStatistics&&(u.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(u.objectIds=n.objectIds.join(",")),n.orderByFields&&(u.orderByFields=n.orderByFields.join(",")),!n.outFields||t&&(t.returnCountOnly||t.returnExtentOnly||t.returnIdsOnly)?delete u.outFields:-1!==n.outFields.indexOf("*")?u.outFields="*":u.outFields=n.outFields.join(","),n.outSR?u.outSR=n.outSR.wkid||JSON.stringify(n.outSR):r&&(n.returnGeometry||n.returnCentroid)&&(u.outSR=u.inSR),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(u.outStatistics=JSON.stringify(n.outStatistics)),n.pixelSize&&(u.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(u.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.source&&(u.layer=JSON.stringify({source:n.source}),delete n.source),n.timeExtent){var i=n.timeExtent,s=i.start,a=i.end;null==s&&null==a||(u.time=s===a?s:(null==s?"null":s)+","+(null==a?"null":a)),delete n.timeExtent}return u}function c(e,t,r){return F(e,t,"json",r)}function d(e,t,r,n){return F(e,t,"pbf",n).then(function(e){var t=function(t){var r=e;return r.data=t,r};return r.useWorker?m().parseFeatureQuery(e.data,r).then(function(e){return t(e)}):t(s.parsePBFFeatureQuery(e.data,r))})}function f(e,t,r){return F(e,t,"json",r,{returnIdsOnly:!0})}function p(e,t,r){return F(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function S(e,t,r){return F(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(function(e){var t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(g);if(t.hasOwnProperty("count"))throw new Error(g);return e})}function F(e,t,o,s,a){void 0===s&&(s={});var c="string"==typeof e?u.urlToObject(e):e,d=t.geometry?[t.geometry]:[];return s.responseType="pbf"===o?"array-buffer":"json",i.normalizeCentralMeridian(d,null,s).then(function(e){var u=e&&e[0];u&&(t=t.clone(),t.geometry=u);var i=l.mapParameters(r({},c.query,{f:o},a,y(t,a)));return n(c.path+"/query",r({},s,{query:i}))})}function m(){return null==O&&(O=new a.PBFWorker),O}Object.defineProperty(t,"__esModule",{value:!0});var g="Layer does not support extent calculation.";t.queryToQueryStringParameters=y,t.executeQuery=c,t.executeQueryPBF=d,t.executeQueryForIds=f,t.executeQueryForCount=p,t.executeQueryForExtent=S;var O});