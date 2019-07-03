// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports"],function(a,n){function r(a,n){var r=m[a.toLowerCase()];if(null==r)throw new Error("Function Not Recognised");if(n.length<r.minParams||n.length>r.maxParams)throw new Error("Invalid Parameter count for call to "+a.toUpperCase());return r.evaluate(n)}function t(a,n){var r=m[a.toLowerCase()];return null!=r&&n>=r.minParams&&n<=r.maxParams}function e(a){for(var n=0,r=0;r<a.length;r++)n+=a[r];return n/a.length}function u(a){for(var n=0,r=0;r<a.length;r++)n+=a[r];return n}function l(a){for(var n=e(a),r=a.length,t=0,u=0,l=a;u<l.length;u++){var m=l[u];t+=Math.pow(m-n,2)}return r>1?t/(r-1):0}Object.defineProperty(n,"__esModule",{value:!0}),n.aggregateFunction=r,n.isAggregate=t;var m={min:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.min.apply(Math,a[0])}},max:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.max.apply(Math,a[0])}},avg:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:e(a[0])}},sum:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:u(a[0])}},stddev:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.sqrt(l(a[0]))}},count:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:a[0].length}},var:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:l(a[0])}}}});