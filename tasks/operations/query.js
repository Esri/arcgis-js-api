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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../request","../../core/maybe","../../core/promiseUtils","../../core/urlUtils","../../geometry/support/jsonUtils","../../geometry/support/normalizeUtils","../../layers/graphics/OptimizedFeatureSet","./pbfQueryUtils","./urlUtils","./zscale","@dojo/framework/shim/Promise"],(function(e,t,r,n,i,o,u,s,a,l,y,d,c){Object.defineProperty(t,"__esModule",{value:!0});function p(e,t){var r=e.geometry,n=e.toJSON(),i=n;if(r&&(i.geometry=JSON.stringify(r),i.geometryType=s.getJsonType(r),i.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),n.groupByFieldsForStatistics&&(i.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(i.objectIds=n.objectIds.join(",")),n.orderByFields&&(i.orderByFields=n.orderByFields.join(",")),!n.outFields||t&&(t.returnCountOnly||t.returnExtentOnly||t.returnIdsOnly)?delete i.outFields:-1!==n.outFields.indexOf("*")?i.outFields="*":i.outFields=n.outFields.join(","),n.outSR?i.outSR=n.outSR.wkid||JSON.stringify(n.outSR):r&&(n.returnGeometry||n.returnCentroid)&&(i.outSR=i.inSR),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(i.outStatistics=JSON.stringify(n.outStatistics)),n.pixelSize&&(i.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(i.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.source&&(i.layer=JSON.stringify({source:n.source}),delete n.source),n.timeExtent){var o=n.timeExtent,u=o.start,a=o.end;null==u&&null==a||(i.time=u===a?u:(null==u?"null":u)+","+(null==a?"null":a)),delete n.timeExtent}return i}function f(e,t,o,s,l){void 0===s&&(s={});var y="string"==typeof e?u.urlToObject(e):e,c=t.geometry?[t.geometry]:[];return s.responseType="pbf"===o?"array-buffer":"json",a.normalizeCentralMeridian(c,null,s).then((function(e){var u=e&&e[0];i.isSome(u)&&((t=t.clone()).geometry=u);var a=d.mapParameters(r.__assign(r.__assign(r.__assign(r.__assign({},y.query),{f:o}),l),p(t,l)));return n(y.path+"/query",r.__assign(r.__assign({},s),{query:a}))}))}t.queryToQueryStringParameters=p,t.executeQuery=function(e,t,n,i){var o;return r.__awaiter(this,void 0,void 0,(function(){var u,s;return r.__generator(this,(function(r){switch(r.label){case 0:return(null===(o=t.timeExtent)||void 0===o?void 0:o.isEmpty)?(s={data:{features:[]}},[3,3]):[3,1];case 1:return[4,f(e,t,"json",i)];case 2:s=r.sent(),r.label=3;case 3:return u=s,c.applyFeatureSetZUnitScaling(t,n,u.data),[2,u]}}))}))},t.executeQueryPBF=function(e,t,r,n){var i;return(null===(i=t.timeExtent)||void 0===i?void 0:i.isEmpty)?o.resolve({data:new l.default}):f(e,t,"pbf",n).then((function(e){var t,n;return t=y.parsePBFFeatureQuery(e.data,r),(n=e).data=t,n}))},t.executeQueryForIds=function(e,t,r){var n;return(null===(n=t.timeExtent)||void 0===n?void 0:n.isEmpty)?o.resolve({data:{objectIds:[]}}):f(e,t,"json",r,{returnIdsOnly:!0})},t.executeQueryForCount=function(e,t,r){var n;return(null===(n=t.timeExtent)||void 0===n?void 0:n.isEmpty)?o.resolve({data:{count:0}}):f(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})},t.executeQueryForExtent=function(e,t,r){var n;return(null===(n=t.timeExtent)||void 0===n?void 0:n.isEmpty)?o.resolve({data:{count:0,extent:null}}):f(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((function(e){var t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error("Layer does not support extent calculation.");if(t.hasOwnProperty("count"))throw new Error("Layer does not support extent calculation.");return e}))},t.runQuery=f}));