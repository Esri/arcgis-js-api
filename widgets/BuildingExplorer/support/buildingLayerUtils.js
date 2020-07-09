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

define(["require","exports","../../../core/arrayUtils","../../../core/maybe"],(function(e,l,n,i){Object.defineProperty(l,"__esModule",{value:!0});var r=function(e){return function(l){var n,i=e.toLowerCase();return null!==(n=l.sublayers.find((function(e){var l;return(null===(l=e.modelName)||void 0===l?void 0:l.toLowerCase())===i})))&&void 0!==n?n:null}};function o(e,l){for(var n=0,i=e.allSublayers.items;n<i.length;n++){var r=i[n],o="building-component"===r.type?r.getFieldDomain(l):null;if(o&&"coded-value"===o.type)return o}return null}function u(e,l){var i,r,o,u=null!==(r=null===(i=e.summaryStatistics)||void 0===i?void 0:i.fields)&&void 0!==r?r:[],a=l.toLowerCase();return null!==(o=n.find(u,(function(e){var l;return(null===(l=e.modelName)||void 0===l?void 0:l.toLowerCase())===a})))&&void 0!==o?o:null}l.findFullModelSublayer=r("fullmodel"),l.findOverviewSublayer=r("overview"),l.showFullModel=function(e){var n=l.findFullModelSublayer(e);i.isSome(n)&&(n.visible=!0);var r=l.findOverviewSublayer(e);i.isSome(r)&&(r.visible=!1)},l.findFieldInfoByModelName=function(e,l){var n,r=u(e,l);if(i.isNone(r))return null;var a=r.fieldName;if(i.isNone(a)||!a)return null;for(var t=o(e,a),d=new Map,v=0,f=null!==(n=r.mostFrequentValues)&&void 0!==n?n:[];v<f.length;v++){var s=f[v];"number"==typeof s&&d.set(s,i.isSome(t)?t.getName(s):String(s))}return{fieldName:a,fieldValueMap:d}},l.findFieldCodedValueDomain=o,l.findFieldStatisticsByModelName=u}));