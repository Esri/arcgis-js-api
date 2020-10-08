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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../core/arrayUtils","../../../core/maybe"],(function(e,l,i,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.findFieldStatisticsByModelName=l.findFieldCodedValueDomain=l.findFieldInfoByModelName=l.showFullModel=l.findOverviewSublayer=l.findFullModelSublayer=void 0;var o=function(e){return function(l){var i,n=e.toLowerCase();return null!==(i=l.sublayers.find((function(e){var l;return(null===(l=e.modelName)||void 0===l?void 0:l.toLowerCase())===n})))&&void 0!==i?i:null}};function r(e,l){for(var i=0,n=e.allSublayers.items;i<n.length;i++){var o=n[i],r="building-component"===o.type?o.getFieldDomain(l):null;if(r&&"coded-value"===r.type)return r}return null}function u(e,l){var n,o,r,u=null!==(o=null===(n=e.summaryStatistics)||void 0===n?void 0:n.fields)&&void 0!==o?o:[],d=l.toLowerCase();return null!==(r=i.find(u,(function(e){var l;return(null===(l=e.modelName)||void 0===l?void 0:l.toLowerCase())===d})))&&void 0!==r?r:null}l.findFullModelSublayer=o("fullmodel"),l.findOverviewSublayer=o("overview"),l.showFullModel=function(e){var i=l.findFullModelSublayer(e);n.isSome(i)&&(i.visible=!0);var o=l.findOverviewSublayer(e);n.isSome(o)&&(o.visible=!1)},l.findFieldInfoByModelName=function(e,l){var i,o=u(e,l);if(n.isNone(o))return null;var d=o.fieldName;if(n.isNone(d)||!d)return null;for(var a=r(e,d),t=new Map,f=0,v=null!==(i=o.mostFrequentValues)&&void 0!==i?i:[];f<v.length;f++){var s=v[f];"number"==typeof s&&t.set(s,n.isSome(a)?a.getName(s):String(s))}return{fieldName:d,fieldValueMap:t}},l.findFieldCodedValueDomain=r,l.findFieldStatisticsByModelName=u}));