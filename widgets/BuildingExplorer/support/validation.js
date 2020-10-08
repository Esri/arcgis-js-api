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

define(["require","exports","../../../core/maybe"],(function(e,n,t){"use strict";function a(e,n){if(0===n.length)return e;if(e===1/0)return n[n.length-1];if(e===-1/0)return n[0];for(var t=n[0],a=Math.abs(t-e),r=0,l=n;r<l.length;r++){var u=l[r],o=Math.abs(u-e);o<a&&(t=u,a=o)}return t}Object.defineProperty(n,"__esModule",{value:!0}),n.findClosest=n.getValidNumber=n.getMax=n.getMin=n.getDomainInfo=void 0,n.getDomainInfo=function(e){for(var n={fieldValueMap:new Map,allowedValues:[]},t=function(e){var t=e.fieldValueMap,a=n.fieldValueMap;t.forEach((function(e,t){a.has(t)||(a.set(t,e),n.allowedValues.push(t))}))},a=0,r=e;a<r.length;a++){t(r[a])}return n.allowedValues.sort((function(e,n){return e-n})),n},n.getMin=function(e){for(var n=null,a=0,r=e;a<r.length;a++){var l=r[a];n=t.isSome(n)?Math.min(n,l):l}return n},n.getMax=function(e){for(var n=null,a=0,r=e;a<r.length;a++){var l=r[a];n=t.isSome(n)?Math.max(n,l):l}return n},n.getValidNumber=function(e,n){return n.allowedValues.length>0?a(e,n.allowedValues):null},n.findClosest=a}));