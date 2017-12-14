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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../Color","../GeometryUtils"],function(t,e,r,i){var o=function(){function t(e,r,i){this.isDataDriven=!1;var o;switch(r.type){case"number":o=!0;break;case"color":o=!0,i=t._parseColor(i);break;case"array":o="number"===r.value;break;default:o=!1}var n=i.stops&&i.stops.length>0;if(this.isDataDriven=!!i.property,this.isDataDriven)if(n)switch(i.type){case"identity":this.getValue=this._buildIdentity(i,r);break;case"categorical":this.getValue=this._buildCategorical(i,r);break;default:o&&"interval"===i.type&&(o=!1),o?this.getValue=this._buildInterpolate(i,r):this.getValue=this._buildInterval(i,r)}else this.getValue=this._buildIdentity(i,r);else n?o?this.getValue=this._buildZoomInterpolate(i):this.getValue=this._buildZoomInterval(i):this.getValue=this._buildSimple(i)}return t.prototype._buildSimple=function(t){return function(){return t}},t.prototype._buildIdentity=function(e,r){return function(i,o){var n;return o&&(n=o.values[e.property],"color"===r.type&&(n=t._parseColor(n))),void 0!==n?n:void 0!==e["default"]?e["default"]:r["default"]}},t.prototype._buildCategorical=function(t,e){var r=this;return function(i,o){var n;return o&&(n=o.values[t.property]),n=r._categorical(n,t.stops),void 0!==n?n:void 0!==t["default"]?t["default"]:e["default"]}},t.prototype._buildInterval=function(t,e){var r=this;return function(i,o){var n;return o&&(n=o.values[t.property]),"number"==typeof n?r._interval(n,t.stops):void 0!==t["default"]?t["default"]:e["default"]}},t.prototype._buildInterpolate=function(t,e){var r=this;return function(i,o){var n;return o&&(n=o.values[t.property]),"number"==typeof n?r._interpolate(n,t.stops,t.base||1):void 0!==t["default"]?t["default"]:e["default"]}},t.prototype._buildZoomInterpolate=function(t){var e=this;return function(r){return e._interpolate(r,t.stops,t.base||1)}},t.prototype._buildZoomInterval=function(t){var e=this;return function(r){return e._interval(r,t.stops)}},t.prototype._categorical=function(t,e){for(var r=e.length,i=0;r>i;i++)if(e[i][0]===t)return e[i][1]},t.prototype._interval=function(t,e){for(var r=e.length,i=0,o=0;r>o&&e[o][0]<=t;o++)i=o;return e[i][1]},t.prototype._interpolate=function(t,e,r){for(var o,n,a=e.length,u=0;a>u;u++){var l=e[u];if(!(l[0]<=t)){n=l;break}o=l}if(o&&n){var s=n[0]-o[0],p=t-o[0],f=1===r?p/s:(Math.pow(r,p)-1)/(Math.pow(r,s)-1);if(Array.isArray(o[1])){for(var d=o[1],v=n[1],c=[],u=0;u<d.length;u++)c.push(i.interpolate(d[u],v[u],f));return c}return i.interpolate(o[1],n[1],f)}return o?o[1]:n?n[1]:void 0},t._isEmpty=function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0},t._parseColor=function(e){if(Array.isArray(e))return e;{if("string"!=typeof e)return e&&e["default"]&&(e["default"]=t._parseColor(e["default"])),e&&e.stops&&(e.stops=e.stops.map(function(e){return[e[0],t._parseColor(e[1])]})),e;var i=new r(e);if(!this._isEmpty(i))return r.toUnitRGBA(i)}},t}();return o});