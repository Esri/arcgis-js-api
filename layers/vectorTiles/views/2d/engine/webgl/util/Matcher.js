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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/Logger","../Utils"],(function(t,e,r,i,n){Object.defineProperty(e,"__esModule",{value:!0});var a=i.getLogger("esri/views/2d/engine/webgl/util/Matcher"),o=function(){function t(){this._defaultResult=null}return t.prototype.size=function(){return 1},t.prototype.getDefault=function(){return this._defaultResult},t.prototype.setDefault=function(t){this._defaultResult=t},t.prototype.match=function(t,e){return this.getDefault()},t}();e.default=o;var l=function(t){function e(e,r,i,a){var o=t.call(this)||this;return o._intervals=[],o._isMaxInclusive=r,i?o._getValue=n.createArcadeFunction(i):e&&e.length?"function"==typeof e?(o._field=null,o._getValue=e):(o._field=e,o._normalizationInfo=a,o._getValue=o._getValueFromField.bind(o)):o._field=null,o}return r(e,t),e.prototype.add=function(t,e){this._intervals.push({interval:t,result:e}),this._intervals.sort((function(t,e){return t.interval.min-e.interval.min}))},e.prototype.size=function(){return t.prototype.size.call(this)+this._intervals.length},e.prototype.match=function(t,e){if(!this._getValue)return this.getDefault();var r=this._getValue(t,e);if(!r&&(null==r||isNaN(r)))return this.getDefault();for(var i=0;i<this._intervals.length;i++){var n=this._intervals[i],a=n.interval,o=n.result,l=r>=a.min,u=this._isMaxInclusive?r<=a.max:r<a.max;if(l&&u)return o}return this.getDefault()},e.prototype._needsNormalization=function(){var t=this._normalizationInfo;return t&&(t.normalizationField||t.normalizationTotal||t.normalizationType)},e.prototype._getValueFromField=function(t){var e=t.attributes[this._field];if(!this._needsNormalization())return e;var r=this._normalizationInfo,i=r.normalizationField,n=r.normalizationTotal,o=r.normalizationType,l=!!i&&t.attributes[i];if(o)switch(o){case"field":return l?e/l:void 0;case"log":return Math.log(e)*Math.LOG10E;case"percent-of-total":return e/n*100;default:return void a.error("Found unknown normalization type: "+o)}else a.error("Normalization is required, but no type was set!")},e}(o);e.IntervalMatcher=l;var u=function(t){function e(e,r,i){var a=t.call(this)||this;return a._resultsMap=new Map,i?a._getValue=n.createArcadeFunction(i):e&&e.length?"function"==typeof e[0]?(a._fields=null,a._getValue=e[0]):(a._fields=e,a._seperator=r||"",a._getValue=a._getValueFromFields.bind(a)):a._fields=null,a}return r(e,t),e.prototype.add=function(t,e){this._resultsMap.set(t.toString(),e)},e.prototype.size=function(){return t.prototype.size.call(this)+this._resultsMap.size},e.prototype.match=function(t,e){if(!this._getValue)return this.getDefault();var r=this._getValue(t,e);if(!r&&null==r)return this.getDefault();var i=r.toString();return this._resultsMap.has(i)?this._resultsMap.get(i):this.getDefault()},e.prototype._getValueFromFields=function(t){for(var e=[],r=0,i=this._fields;r<i.length;r++){var n=i[r],a=t.attributes[n];e.push(a)}return e.join(this._seperator)},e}(o);e.MapMatcher=u}));