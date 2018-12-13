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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../core/requireUtils","../../core/urlUtils","../../core/workers","../../geometry/support/jsonUtils","../../geometry/support/normalizeUtils","./pbfQueryUtils","./PBFWorker","./urlUtils","module"],function(e,t,r,n,o,u,i,s,a,l,y,d,c){function f(e,t){var r=e.geometry,n=e.toJSON(),o=n;if(r&&(o.geometry=JSON.stringify(r),o.geometryType=s.getJsonType(r),o.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),n.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(o.objectIds=n.objectIds.join(",")),n.orderByFields&&(o.orderByFields=n.orderByFields.join(",")),!n.outFields||t&&(t.returnCountOnly||t.returnExtentOnly||t.returnIdsOnly)?delete o.outFields:-1!==n.outFields.indexOf("*")?o.outFields="*":o.outFields=n.outFields.join(","),n.outSR?o.outSR=n.outSR.wkid||JSON.stringify(n.outSR):r&&(n.returnGeometry||n.returnCentroid)&&(o.outSR=o.inSR),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(o.outStatistics=JSON.stringify(n.outStatistics)),n.pixelSize&&(o.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(o.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.source&&(o.layer=JSON.stringify({source:n.source}),delete n.source),n.timeExtent){var u=n.timeExtent;o.time=[null!=u.startTime?u.startTime:"null",null!=u.endTime?u.endTime:"null"],delete n.timeExtent}return o}function p(e,t,r){return O(e,t,"json",r)}function m(e,t,r,n){return O(e,t,"pbf",n).then(function(e){var t=function(t){var r=e;return r.data=t,r};return r.useWorker?x().parseFeatureQuery(e.data,r).then(function(e){return t(e)}):t(l.parsePBFFeatureQuery(e.data,r))})}function S(e,t,r){return O(e,t,"json",r,{returnIdsOnly:!0})}function g(e,t,r){return O(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function F(e,t,r){return O(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(function(e){var t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(j);if(t.hasOwnProperty("count"))throw new Error(j);return e})}function O(e,t,o,i,s){void 0===i&&(i={});var l="string"==typeof e?u.urlToObject(e):e,y=t.geometry?[t.geometry]:[];return i.responseType="pbf"===o?"array-buffer":"json",a.normalizeCentralMeridian(y,null,i).then(function(e){var u=e&&e[0];u&&(t=t.clone(),t.geometry=u);var a=d.mapParameters(r({},l.query,{f:o},s,f(t,s)));return n(l.path+"/query",r({},i,{query:a}))})}function x(){return null==v&&(v=new y,i.open(o.getAbsMid("./PBFWorker",e,c),{strategy:"dedicated"}).then(function(e){return v.thread=e})),v}Object.defineProperty(t,"__esModule",{value:!0});var j="Layer does not support extent calculation.";t.queryToQueryStringParameters=f,t.executeQuery=p,t.executeQueryPBF=m,t.executeQueryForIds=S,t.executeQueryForCount=g,t.executeQueryForExtent=F;var v});