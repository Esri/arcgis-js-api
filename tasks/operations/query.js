// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../core/maybe","../../core/urlUtils","../../geometry/support/jsonUtils","../../geometry/support/normalizeUtils","./pbfQueryUtils","./PBFWorker","./urlUtils","@dojo/framework/shim/Promise"],function(e,r,t,n,o,u,i,s,a,l,y){function c(e,r){var t=e.geometry,n=e.toJSON(),o=n;if(t&&(o.geometry=JSON.stringify(t),o.geometryType=i.getJsonType(t),o.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference)),n.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(o.objectIds=n.objectIds.join(",")),n.orderByFields&&(o.orderByFields=n.orderByFields.join(",")),!n.outFields||r&&(r.returnCountOnly||r.returnExtentOnly||r.returnIdsOnly)?delete o.outFields:-1!==n.outFields.indexOf("*")?o.outFields="*":o.outFields=n.outFields.join(","),n.outSR?o.outSR=n.outSR.wkid||JSON.stringify(n.outSR):t&&(n.returnGeometry||n.returnCentroid)&&(o.outSR=o.inSR),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(o.outStatistics=JSON.stringify(n.outStatistics)),n.pixelSize&&(o.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(o.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.source&&(o.layer=JSON.stringify({source:n.source}),delete n.source),n.timeExtent){var u=n.timeExtent,s=u.start,a=u.end;null==s&&null==a||(o.time=s===a?s:(null==s?"null":s)+","+(null==a?"null":a)),delete n.timeExtent}return o}function d(e,r,t){return F(e,r,"json",t)}function f(e,r,t,n){var o=t.useWorker?g():null;return F(e,r,"pbf",n).then(function(e){var r=function(r){var t=e;return t.data=r,t};return t.useWorker?o.parseFeatureQuery(e.data,t).then(function(e){return r(e)}):r(a.parsePBFFeatureQuery(e.data,t))})}function p(e,r,t){return F(e,r,"json",t,{returnIdsOnly:!0})}function m(e,r,t){return F(e,r,"json",t,{returnIdsOnly:!0,returnCountOnly:!0})}function S(e,r,t){return F(e,r,"json",t,{returnExtentOnly:!0,returnCountOnly:!0}).then(function(e){var r=e.data;if(r.hasOwnProperty("extent"))return e;if(r.features)throw new Error(O);if(r.hasOwnProperty("count"))throw new Error(O);return e})}function F(e,r,i,a,l){void 0===a&&(a={});var d="string"==typeof e?u.urlToObject(e):e,f=r.geometry?[r.geometry]:[];return a.responseType="pbf"===i?"array-buffer":"json",s.normalizeCentralMeridian(f,null,a).then(function(e){var u=e&&e[0];o.isSome(u)&&(r=r.clone(),r.geometry=u);var s=y.mapParameters(t({},d.query,{f:i},l,c(r,l)));return n(d.path+"/query",t({},a,{query:s}))})}function g(){return null==x&&(x=new l.PBFWorker),x}Object.defineProperty(r,"__esModule",{value:!0});var O="Layer does not support extent calculation.";r.queryToQueryStringParameters=c,r.executeQuery=d,r.executeQueryPBF=f,r.executeQueryForIds=p,r.executeQueryForCount=m,r.executeQueryForExtent=S;var x});