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

define(["require","exports","../../../core/mathUtils","../../../core/maybe"],(function(e,n,a,t){function r(e,n){return t.isSome(n.min)&&t.isSome(n.max)?a.clamp(e,n.min,n.max):e}function l(e,n){if(0===n.length)return e;if(e===1/0)return n[n.length-1];if(e===-1/0)return n[0];for(var a=n[0],t=Math.abs(a-e),r=0,l=n;r<l.length;r++){var u=l[r],o=Math.abs(u-e);o<t&&(a=u,t=o)}return a}Object.defineProperty(n,"__esModule",{value:!0}),n.getDomainInfo=function(e){for(var n={fieldValueMap:new Map,allowedValues:[]},a=function(e){var a=e.fieldValueMap,t=n.fieldValueMap;a.forEach((function(e,a){t.has(a)||(t.set(a,e),n.allowedValues.push(a))}))},t=0,r=e;t<r.length;t++){a(r[t])}return n.allowedValues.sort((function(e,n){return e-n})),n},n.getMin=function(e){for(var n=null,a=0,r=e;a<r.length;a++){var l=r[a];n=t.isSome(n)?Math.min(n,l):l}return n},n.getMax=function(e){for(var n=null,a=0,r=e;a<r.length;a++){var l=r[a];n=t.isSome(n)?Math.max(n,l):l}return n},n.getValidNumber=function(e,n){return n.allowedValues.length>0?l(e,n.allowedValues):r(e,n)},n.getClamped=r,n.findClosest=l}));