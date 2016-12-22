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

define(["require","exports","../../../Color","../GeometryUtils"],function(r,e,t,n){var o=function(){function r(e,t){var n;switch(e.type){case"number":n=!0;break;case"color":n=!0,t=r._parseColor(t);break;case"array":n="number"===e.value;break;default:n=!1}n?this.getValue=this._interpolate(t):this.getValue=this._piecewise(t)}return r.prototype._piecewise=function(r){var e=r.stops;return e?function(r){var t=e.length;if(0!==t){for(var n=0,o=0;t>o&&e[o][0]<=r;o++)n=o;return e[n][1]}}:function(){return r}},r.prototype._interpolate=function(r){var e=r.stops;if(e){var t=r.base||1;return function(r){for(var o,i,a=e.length,u=0;a>u;u++){var s=e[u];if(!(s[0]<=r)){i=s;break}o=s}if(o&&i){var f=i[0]-o[0],p=r-o[0],c=1===t?p/f:(Math.pow(t,p)-1)/(Math.pow(t,f)-1);if(Array.isArray(o[1])){for(var l=o[1],v=i[1],h=[],u=0;u<l.length;u++)h.push(n.interpolate(l[u],v[u],c));return h}return n.interpolate(o[1],i[1],c)}return o?o[1]:i?i[1]:void 0}}return function(){return r}},r._parseColor=function(e){if(Array.isArray(e))return e;if("string"==typeof e){var n=new t(e);if(n)return[n.r/255,n.g/255,n.b/255,n.a||1]}if(e&&e.stops)return e.stops=e.stops.map(function(e){return[e[0],r._parseColor(e[1])]}),e;throw new Error("Incorrect color definition "+e)},r}();return o});