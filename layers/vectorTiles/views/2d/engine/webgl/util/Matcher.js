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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/Logger","../Utils"],function(t,e,i,r,n){Object.defineProperty(e,"__esModule",{value:!0});var a=r.getLogger("esri/views/2d/engine/webgl/util/Matcher"),o=function(){function t(){this._defaultResult=null}return t.prototype.size=function(){return 1},t.prototype.getDefault=function(){return this._defaultResult},t.prototype.setDefault=function(t){this._defaultResult=t},t.prototype.match=function(t,e){return this.getDefault()},t}();e.default=o;var l=function(t){function e(e,i,r,a){var o=t.call(this)||this;return o._intervals=[],o._isMaxInclusive=i,r?o._getValue=n.createArcadeFunction(r):e&&e.length?"function"==typeof e?(o._field=null,o._getValue=e):(o._field=e,o._normalizationInfo=a,o._getValue=o._getValueFromField.bind(o)):o._field=null,o}return i(e,t),e.prototype.add=function(t,e){this._intervals.push({interval:t,result:e}),this._intervals.sort(function(t,e){return t.interval.min-e.interval.min})},e.prototype.size=function(){return t.prototype.size.call(this)+this._intervals.length},e.prototype.match=function(t,e){if(!this._getValue)return this.getDefault();var i=this._getValue(t,e);if(!i&&(null===i||void 0===i||isNaN(i)))return this.getDefault();for(var r=0;r<this._intervals.length;r++){var n=this._intervals[r],a=n.interval,o=n.result,l=i>=a.min,u=this._isMaxInclusive?i<=a.max:i<a.max;if(l&&u)return o}return this.getDefault()},e.prototype._needsNormalization=function(){var t=this._normalizationInfo;return t&&(t.normalizationField||t.normalizationTotal||t.normalizationType)},e.prototype._getValueFromField=function(t){var e=t.attributes[this._field];if(!this._needsNormalization())return e;var i=this._normalizationInfo,r=i.normalizationField,n=i.normalizationTotal,o=i.normalizationType,l=!!r&&t.attributes[r];if(!o)return void a.error("Normalization is required, but no type was set!");switch(o){case"field":return(l||void 0)&&e/l;case"log":return Math.log(e)*Math.LOG10E;case"percent-of-total":return e/n*100;default:return void a.error("Found unknown normalization type: "+o)}},e}(o);e.IntervalMatcher=l;var u=function(t){function e(e,i,r){var a=t.call(this)||this;return a._resultsMap=new Map,r?a._getValue=n.createArcadeFunction(r):e&&e.length?"function"==typeof e[0]?(a._fields=null,a._getValue=e[0]):(a._fields=e,a._seperator=i||"",a._getValue=a._getValueFromFields.bind(a)):a._fields=null,a}return i(e,t),e.prototype.add=function(t,e){this._resultsMap.set(t.toString(),e)},e.prototype.size=function(){return t.prototype.size.call(this)+this._resultsMap.size},e.prototype.match=function(t,e){if(!this._getValue)return this.getDefault();var i=this._getValue(t,e);if(!i&&(null===i||void 0===i))return this.getDefault();var r=i.toString();return this._resultsMap.has(r)?this._resultsMap.get(r):this.getDefault()},e.prototype._getValueFromFields=function(t){for(var e=[],i=0,r=this._fields;i<r.length;i++){var n=r[i],a=t.attributes[n];e.push(a)}return e.join(this._seperator)},e}(o);e.MapMatcher=u});