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

define(["require","exports","../../../../../Color","../GeometryUtils"],function(t,e,r,i){return function(){function t(e,r,i){this.isDataDriven=!1;var a;switch(r.type){case"number":a=!0;break;case"color":a=!0,i=t._parseColor(i);break;case"array":a="number"===r.value;break;default:a=!1}null==i&&(i=r.default),a&&"interval"===i.type&&(a=!1);var o=i&&i.stops&&i.stops.length>0;if(o)for(var n=0,u=i.stops;n<u.length;n++){var l=u[n];l[1]=this._validate(l[1],r)}if(this.isDataDriven=!!i&&!!i.property,this.isDataDriven)if(void 0!==i.default&&(i.default=this._validate(i.default,r)),o)switch(i.type){case"identity":this.getValue=this._buildIdentity(i,r);break;case"categorical":this.getValue=this._buildCategorical(i,r);break;default:this.getValue=a?this._buildInterpolate(i,r):this._buildInterval(i,r)}else this.getValue=this._buildIdentity(i,r);else o?this.getValue=a?this._buildZoomInterpolate(i):this._buildZoomInterval(i):(i=this._validate(i,r),this.getValue=this._buildSimple(i))}return t.prototype._validate=function(t,e){if("number"===e.type){if(t<e.minimum)return e.minimum;if(t>e.maximum)return e.maximum}return t},t.prototype._buildSimple=function(t){return function(){return t}},t.prototype._buildIdentity=function(e,r){var i=this;return function(a,o){var n;return o&&(n=o.values[e.property],"color"===r.type&&(n=t._parseColor(n))),void 0===n&&(n=e.default),void 0!==n?i._validate(n,r):r.default}},t.prototype._buildCategorical=function(t,e){var r=this;return function(i,a){var o;return a&&(o=a.values[t.property]),o=r._categorical(o,t.stops),void 0!==o?o:void 0!==t.default?t.default:e.default}},t.prototype._buildInterval=function(t,e){var r=this;return function(i,a){var o;return a&&(o=a.values[t.property]),"number"==typeof o?r._interval(o,t.stops):void 0!==t.default?t.default:e.default}},t.prototype._buildInterpolate=function(t,e){var r=this;return function(i,a){var o;return a&&(o=a.values[t.property]),"number"==typeof o?r._interpolate(o,t.stops,t.base||1):void 0!==t.default?t.default:e.default}},t.prototype._buildZoomInterpolate=function(t){var e=this;return function(r){return e._interpolate(r,t.stops,t.base||1)}},t.prototype._buildZoomInterval=function(t){var e=this;return function(r){return e._interval(r,t.stops)}},t.prototype._categorical=function(t,e){for(var r=e.length,i=0;i<r;i++)if(e[i][0]===t)return e[i][1]},t.prototype._interval=function(t,e){for(var r=e.length,i=0,a=0;a<r&&e[a][0]<=t;a++)i=a;return e[i][1]},t.prototype._interpolate=function(t,e,r){for(var a,o,n=e.length,u=0;u<n;u++){var l=e[u];if(!(l[0]<=t)){o=l;break}a=l}if(a&&o){var s=o[0]-a[0],p=t-a[0],f=1===r?p/s:(Math.pow(r,p)-1)/(Math.pow(r,s)-1);if(Array.isArray(a[1])){for(var d=a[1],v=o[1],c=[],u=0;u<d.length;u++)c.push(i.interpolate(d[u],v[u],f));return c}return i.interpolate(a[1],o[1],f)}return a?a[1]:o?o[1]:void 0},t._isEmpty=function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0},t._parseColor=function(e){if(Array.isArray(e))return e;{if("string"!=typeof e)return e&&e.default&&(e.default=t._parseColor(e.default)),e&&e.stops&&(e.stops=e.stops.map(function(e){return[e[0],t._parseColor(e[1])]})),e;var i=new r(e);if(!this._isEmpty(i))return r.toUnitRGBA(i)}},t}()});