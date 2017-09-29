// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../Color","../GeometryUtils"],function(r,t,e,n){var o=function(){function r(t,e){var n;switch(t.type){case"number":n=!0;break;case"color":n=!0,e=r._parseColor(e);break;case"array":n="number"===t.value;break;default:n=!1}n?this.getValue=this._interpolate(e):this.getValue=this._piecewise(e)}return r.prototype._piecewise=function(r){var t=r.stops;return t?function(r){var e=t.length;if(0!==e){for(var n=0,o=0;e>o&&t[o][0]<=r;o++)n=o;return t[n][1]}}:function(){return r}},r.prototype._interpolate=function(r){var t=r.stops;if(t){var e=r.base||1;return function(r){for(var o,i,a=t.length,u=0;a>u;u++){var s=t[u];if(!(s[0]<=r)){i=s;break}o=s}if(o&&i){var f=i[0]-o[0],p=r-o[0],c=1===e?p/f:(Math.pow(e,p)-1)/(Math.pow(e,f)-1);if(Array.isArray(o[1])){for(var l=o[1],v=i[1],h=[],u=0;u<l.length;u++)h.push(n.interpolate(l[u],v[u],c));return h}return n.interpolate(o[1],i[1],c)}return o?o[1]:i?i[1]:void 0}}return function(){return r}},r._parseColor=function(t){if(Array.isArray(t))return t;if("string"==typeof t){var n=new e(t);if(n)return e.toUnitRGBA(n)}if(t&&t.stops)return t.stops=t.stops.map(function(t){return[t[0],r._parseColor(t[1])]}),t;throw new Error("Incorrect color definition "+t)},r}();return o});