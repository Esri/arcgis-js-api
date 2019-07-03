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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../core/asyncUtils","../../core/maybe","../../core/urlUtils","../../geometry/support/jsonUtils","../../geometry/support/normalizeUtils","./pbfQueryUtils","./PBFWorker","./urlUtils","@dojo/framework/shim/Promise"],function(e,t,r,n,o,u,i,s,a,l,y,c){function d(e,t){var r=e.geometry,n=e.toJSON(),o=n;if(r&&(o.geometry=JSON.stringify(r),o.geometryType=s.getJsonType(r),o.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),n.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(o.objectIds=n.objectIds.join(",")),n.orderByFields&&(o.orderByFields=n.orderByFields.join(",")),!n.outFields||t&&(t.returnCountOnly||t.returnExtentOnly||t.returnIdsOnly)?delete o.outFields:-1!==n.outFields.indexOf("*")?o.outFields="*":o.outFields=n.outFields.join(","),n.outSR?o.outSR=n.outSR.wkid||JSON.stringify(n.outSR):r&&(n.returnGeometry||n.returnCentroid)&&(o.outSR=o.inSR),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(o.outStatistics=JSON.stringify(n.outStatistics)),n.pixelSize&&(o.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(o.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.source&&(o.layer=JSON.stringify({source:n.source}),delete n.source),n.timeExtent){var u=n.timeExtent,i=u.start,a=u.end;null==i&&null==a||(o.time=i===a?i:(null==i?"null":i)+","+(null==a?"null":a)),delete n.timeExtent}return o}function f(e,t,r){return g(e,t,"json",r)}function p(e,t,r,n){return g(e,t,"pbf",n).then(function(e){var t=function(t){var r=e;return r.data=t,r};return r.useWorker?O().parseFeatureQuery(e.data,r).then(function(e){return t(e)}):t(l.parsePBFFeatureQuery(e.data,r))})}function m(e,t,r){return g(e,t,"json",r,{returnIdsOnly:!0})}function S(e,t,r){return g(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function F(e,t,r){return g(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(function(e){var t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(x);if(t.hasOwnProperty("count"))throw new Error(x);return e})}function g(e,t,s,l,y){void 0===l&&(l={});var f="string"==typeof e?i.urlToObject(e):e,p=t.geometry?[t.geometry]:[];return l.responseType="pbf"===s?"array-buffer":"json",o.safeCast(a.normalizeCentralMeridian(p,null,l)).then(function(e){var o=e&&e[0];u.isSome(o)&&(t=t.clone(),t.geometry=o);var i=c.mapParameters(r({},f.query,{f:s},y,d(t,y)));return n(f.path+"/query",r({},l,{query:i}))})}function O(){return null==j&&(j=new y.PBFWorker),j}Object.defineProperty(t,"__esModule",{value:!0});var x="Layer does not support extent calculation.";t.queryToQueryStringParameters=d,t.executeQuery=f,t.executeQueryPBF=p,t.executeQueryForIds=m,t.executeQueryForCount=S,t.executeQueryForExtent=F;var j});