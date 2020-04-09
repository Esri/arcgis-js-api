// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../request","../../core/maybe","../../core/urlUtils","../../geometry/support/jsonUtils","../../geometry/support/normalizeUtils","./pbfQueryUtils","./PBFWorker","./urlUtils","./zscale","@dojo/framework/shim/Promise"],(function(e,t,r,n,o,u,i,s,a,l,y,c,d,p){Object.defineProperty(t,"__esModule",{value:!0});var f;function S(e,t){var r=e.geometry,n=e.toJSON(),o=n;if(r&&(o.geometry=JSON.stringify(r),o.geometryType=a.getJsonType(r),o.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),n.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(o.objectIds=n.objectIds.join(",")),n.orderByFields&&(o.orderByFields=n.orderByFields.join(",")),!n.outFields||t&&(t.returnCountOnly||t.returnExtentOnly||t.returnIdsOnly)?delete o.outFields:-1!==n.outFields.indexOf("*")?o.outFields="*":o.outFields=n.outFields.join(","),n.outSR?o.outSR=n.outSR.wkid||JSON.stringify(n.outSR):r&&(n.returnGeometry||n.returnCentroid)&&(o.outSR=o.inSR),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(o.outStatistics=JSON.stringify(n.outStatistics)),n.pixelSize&&(o.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(o.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.source&&(o.layer=JSON.stringify({source:n.source}),delete n.source),n.timeExtent){var u=n.timeExtent,i=u.start,s=u.end;null==i&&null==s||(o.time=i===s?i:(null==i?"null":i)+","+(null==s?"null":s)),delete n.timeExtent}return o}function m(e,t,n,o,a){void 0===o&&(o={});var y="string"==typeof e?s.urlToObject(e):e,c=t.geometry?[t.geometry]:[];return o.responseType="pbf"===n?"array-buffer":"json",l.normalizeCentralMeridian(c,null,o).then((function(e){var s=e&&e[0];i.isSome(s)&&((t=t.clone()).geometry=s);var l=d.mapParameters(r({},y.query,{f:n},a,S(t,a)));return u(y.path+"/query",r({},o,{query:l}))}))}t.queryToQueryStringParameters=S,t.executeQuery=function(e,t,r,u){return o(this,void 0,void 0,(function(){var o;return n(this,(function(n){switch(n.label){case 0:return[4,m(e,t,"json",u)];case 1:return o=n.sent(),p.applyFeatureSetZUnitScaling(t,r,o.data),[2,o]}}))}))},t.executeQueryPBF=function(e,t,r,n){var o=r.useWorker?function(){null==f&&(f=new c.PBFWorker);return f}():null;return m(e,t,"pbf",n).then((function(e){var t=function(t){var r=e;return r.data=t,r};return r.useWorker?o.parseFeatureQuery(e.data,r).then((function(e){return t(e)})):t(y.parsePBFFeatureQuery(e.data,r))}))},t.executeQueryForIds=function(e,t,r){return m(e,t,"json",r,{returnIdsOnly:!0})},t.executeQueryForCount=function(e,t,r){return m(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})},t.executeQueryForExtent=function(e,t,r){return m(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((function(e){var t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error("Layer does not support extent calculation.");if(t.hasOwnProperty("count"))throw new Error("Layer does not support extent calculation.");return e}))}}));