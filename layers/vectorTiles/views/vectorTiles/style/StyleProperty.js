// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","../../../Color","../GeometryUtils"],function(t,r,e,o){return function(){function t(r,e,o){this.isDataDriven=!1;var i;switch(e.type){case"number":i=!0;break;case"color":i=!0,o=t._parseColor(o);break;case"array":i="number"===e.value;break;default:i=!1}null==o&&(o=e.default),i&&"interval"===o.type&&(i=!1);var n=o&&o.stops&&o.stops.length>0;if(this.isDataDriven=o&&!!o.property,this.isDataDriven)if(n)switch(o.type){case"identity":this.getValue=this._buildIdentity(o,e);break;case"categorical":this.getValue=this._buildCategorical(o,e);break;default:this.getValue=i?this._buildInterpolate(o,e):this._buildInterval(o,e)}else this.getValue=this._buildIdentity(o,e);else this.getValue=n?i?this._buildZoomInterpolate(o):this._buildZoomInterval(o):this._buildSimple(o)}return t.prototype._buildSimple=function(t){return function(){return t}},t.prototype._buildIdentity=function(r,e){return function(o,i){var n;return i&&(n=i.values[r.property],"color"===e.type&&(n=t._parseColor(n))),void 0!==n?n:void 0!==r.default?r.default:e.default}},t.prototype._buildCategorical=function(t,r){var e=this;return function(o,i){var n;return i&&(n=i.values[t.property]),n=e._categorical(n,t.stops),void 0!==n?n:void 0!==t.default?t.default:r.default}},t.prototype._buildInterval=function(t,r){var e=this;return function(o,i){var n;return i&&(n=i.values[t.property]),"number"==typeof n?e._interval(n,t.stops):void 0!==t.default?t.default:r.default}},t.prototype._buildInterpolate=function(t,r){var e=this;return function(o,i){var n;return i&&(n=i.values[t.property]),"number"==typeof n?e._interpolate(n,t.stops,t.base||1):void 0!==t.default?t.default:r.default}},t.prototype._buildZoomInterpolate=function(t){var r=this;return function(e){return r._interpolate(e,t.stops,t.base||1)}},t.prototype._buildZoomInterval=function(t){var r=this;return function(e){return r._interval(e,t.stops)}},t.prototype._categorical=function(t,r){for(var e=r.length,o=0;o<e;o++)if(r[o][0]===t)return r[o][1]},t.prototype._interval=function(t,r){for(var e=r.length,o=0,i=0;i<e&&r[i][0]<=t;i++)o=i;return r[o][1]},t.prototype._interpolate=function(t,r,e){for(var i,n,a=r.length,u=0;u<a;u++){var l=r[u];if(!(l[0]<=t)){n=l;break}i=l}if(i&&n){var s=n[0]-i[0],p=t-i[0],f=1===e?p/s:(Math.pow(e,p)-1)/(Math.pow(e,s)-1);if(Array.isArray(i[1])){for(var d=i[1],v=n[1],c=[],u=0;u<d.length;u++)c.push(o.interpolate(d[u],v[u],f));return c}return o.interpolate(i[1],n[1],f)}return i?i[1]:n?n[1]:void 0},t._isEmpty=function(t){for(var r in t)if(t.hasOwnProperty(r))return!1;return!0},t._parseColor=function(r){if(Array.isArray(r))return r;{if("string"!=typeof r)return r&&r.default&&(r.default=t._parseColor(r.default)),r&&r.stops&&(r.stops=r.stops.map(function(r){return[r[0],t._parseColor(r[1])]})),r;var o=new e(r);if(!this._isEmpty(o))return e.toUnitRGBA(o)}},t}()});