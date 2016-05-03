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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/sniff"],function(e){var n,i=e("ff"),t=e("ie"),o=e("webkit"),a=e("opera"),w=(new Date).getTime(),m=window.requestAnimationFrame;return m||(n=o&&"webkit"||i&&"moz"||a&&"o"||t&&"ms",m=window[n+"RequestAnimationFrame"],m||(m=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-w)),t=window.setTimeout(function(){e(now())},i);return w=n+i,t})),m});