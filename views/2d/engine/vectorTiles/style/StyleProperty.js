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

define(["require","exports","../../../../../Color","../GeometryUtils","../expression/definition","../expression/expression"],(function(t,e,r,i,a,o){"use strict";return function(){function t(e,r){var i;switch(this.isDataDriven=!1,e.type){case"number":i=!0;break;case"color":i=!0,r=t._parseColor(r);break;case"array":i="number"===e.value;break;default:i=!1}if(null==r&&(r=e.default),Array.isArray(r)&&r.length>0&&a.ops[r[0]])try{var n=o.createExpression(r);this.getValue=this._buildExpression(n,e),this.isDataDriven=!0}catch(t){console.log(t.message),this.getValue=this._buildSimple(e.default)}else{i&&"interval"===r.type&&(i=!1);var u=r&&r.stops&&r.stops.length>0;if(u)for(var s=0,l=r.stops;s<l.length;s++){var p=l[s];p[1]=this._validate(p[1],e)}if(this.isDataDriven=!!r&&!!r.property,this.isDataDriven)if(void 0!==r.default&&(r.default=this._validate(r.default,e)),u)switch(r.type){case"identity":this.getValue=this._buildIdentity(r,e);break;case"categorical":this.getValue=this._buildCategorical(r,e);break;default:this.getValue=i?this._buildInterpolate(r,e):this._buildInterval(r,e)}else this.getValue=this._buildIdentity(r,e);else u?this.getValue=i?this._buildZoomInterpolate(r):this._buildZoomInterval(r):(r=this._validate(r,e),this.getValue=this._buildSimple(r))}}return t.prototype._validate=function(t,e){if("number"===e.type){if(t<e.minimum)return e.minimum;if(t>e.maximum)return e.maximum}return t},t.prototype._buildSimple=function(t){return function(){return t}},t.prototype._buildExpression=function(t,e){return function(r,i){try{return t.evaluate(i,r)}catch(t){return console.log(t.message),e.default}}},t.prototype._buildIdentity=function(e,r){var i=this;return function(a,o){var n;return o&&(n=o.values[e.property],"color"===r.type&&(n=t._parseColor(n))),void 0===n&&(n=e.default),void 0!==n?i._validate(n,r):r.default}},t.prototype._buildCategorical=function(t,e){var r=this;return function(i,a){var o;return a&&(o=a.values[t.property]),void 0!==(o=r._categorical(o,t.stops))?o:void 0!==t.default?t.default:e.default}},t.prototype._buildInterval=function(t,e){var r=this;return function(i,a){var o;return a&&(o=a.values[t.property]),"number"==typeof o?r._interval(o,t.stops):void 0!==t.default?t.default:e.default}},t.prototype._buildInterpolate=function(t,e){var r=this;return function(i,a){var o;return a&&(o=a.values[t.property]),"number"==typeof o?r._interpolate(o,t.stops,t.base||1):void 0!==t.default?t.default:e.default}},t.prototype._buildZoomInterpolate=function(t){var e=this;return function(r){return e._interpolate(r,t.stops,t.base||1)}},t.prototype._buildZoomInterval=function(t){var e=this;return function(r){return e._interval(r,t.stops)}},t.prototype._categorical=function(t,e){for(var r=e.length,i=0;i<r;i++)if(e[i][0]===t)return e[i][1]},t.prototype._interval=function(t,e){for(var r=e.length,i=0,a=0;a<r&&e[a][0]<=t;a++)i=a;return e[i][1]},t.prototype._interpolate=function(t,e,r){for(var a,o,n=e.length,u=0;u<n;u++){var s=e[u];if(!(s[0]<=t)){o=s;break}a=s}if(a&&o){var l=o[0]-a[0],p=t-a[0],f=1===r?p/l:(Math.pow(r,p)-1)/(Math.pow(r,l)-1);if(Array.isArray(a[1])){var d=a[1],v=o[1],c=[];for(u=0;u<d.length;u++)c.push(i.interpolate(d[u],v[u],f));return c}return i.interpolate(a[1],o[1],f)}return a?a[1]:o?o[1]:void 0},t._isEmpty=function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0},t._parseColor=function(e){if(Array.isArray(e))return e;if("string"==typeof e){var i=new r(e);return this._isEmpty(i)?void 0:r.toUnitRGBA(i)}return e&&e.default&&(e.default=t._parseColor(e.default)),e&&e.stops&&(e.stops=e.stops.map((function(e){return[e[0],t._parseColor(e[1])]}))),e},t}()}));