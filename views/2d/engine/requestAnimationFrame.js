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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["dojo/sniff","../../../core/now"],function(e,n){var i,t=e("ff"),o=e("ie"),a=e("webkit"),r=e("opera"),w=(new Date).getTime(),m=window.requestAnimationFrame;return m||(i=a&&"webkit"||t&&"moz"||r&&"o"||o&&"ms",m=window[i+"RequestAnimationFrame"],m||(m=function(e){var i=(new Date).getTime(),t=Math.max(0,16-(i-w)),o=window.setTimeout(function(){e(n())},t);return w=i+t,o})),m});