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

define(["require","exports"],(function(a,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isAggregate=n.aggregateFunction=void 0,n.aggregateFunction=function(a,n){var t=r[a.toLowerCase()];if(null==t)throw new Error("Function Not Recognised");if(n.length<t.minParams||n.length>t.maxParams)throw new Error("Invalid Parameter count for call to "+a.toUpperCase());return t.evaluate(n)},n.isAggregate=function(a,n){var t=r[a.toLowerCase()];return null!=t&&n>=t.minParams&&n<=t.maxParams};var r={min:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.min.apply(Math,a[0])}},max:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.max.apply(Math,a[0])}},avg:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:t(a[0])}},sum:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:function(a){for(var n=0,r=0;r<a.length;r++)n+=a[r];return n}(a[0])}},stddev:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.sqrt(e(a[0]))}},count:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:a[0].length}},var:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:e(a[0])}}};function t(a){for(var n=0,r=0;r<a.length;r++)n+=a[r];return n/a.length}function e(a){for(var n=t(a),r=a.length,e=0,u=0,l=a;u<l.length;u++){var m=l[u];e+=Math.pow(m-n,2)}return r>1?e/(r-1):0}}));