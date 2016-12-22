// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(r,n){var t=function(){function r(){}return r.copyIntervals=function(r){for(var n=[],t=0;t<r.length;t++){var e=r[t];n.push([e[0],e[1]])}return n},r.convertFaceToIndexRange=function(r,n){for(var t=0;t<r.length;t++){var e=r[t];e[0]=e[0]*n,e[1]=e[1]*n+(n-1)}},r.sortIntervals=function(r){return r.sort(function(r,n){return r[0]===n[0]?r[1]>n[1]?1:r[1]<n[1]?-1:0:r[0]>n[0]?1:r[0]<n[0]?-1:0})},r.intersectIntervals=function(r,n){if(r.length<=0)return[];for(var t=[],e=0;e<r.length;e++){var u=r[e];if(!(u[1]<n[0]||u[0]>n[1])){var o=[u[0],u[1]];o[0]<n[0]&&(o[0]=n[0]),o[1]>n[1]&&(o[1]=n[1]),t.push(o)}}return t},r.mergeIntervals=function(r){if(r.length<=0)return[];var n=[];r=this.sortIntervals(r),n.push(r[0]);for(var t=1;t<r.length;t++){var e=n[n.length-1];e[1]+1<r[t][0]?n.push(r[t]):e[1]<r[t][1]&&(e[1]=r[t][1],n.pop(),n.push(e))}return n},r.invertIntervals=function(r,n){for(var t=[],e=0,u=0;u<r.length;u++){var o=r[u];o[0]>e&&t.push([e,o[0]-1]),e=o[1]+1}return n>=e&&t.push([e,n]),t},r.offsetIntervals=function(r,n){for(var t=[],e=0;e<r.length;e++){var u=r[e];t.push([u[0]+n,u[1]+n])}return t},r}();return t});