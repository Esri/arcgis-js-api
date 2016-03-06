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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["require","exports","../geometry/Geometry","../graphic","../geometry/jsonUtils","./Dictionary","./languageUtils"],function(t,e,r,i,o,s,n){var a=function(){function t(e,n){if(this.geometry=null,this.attributes=null,e instanceof t)this.attributes=e.attributes,this.geometry=e.geometry;else if(e instanceof i)this.geometry=e.geometry,this.attributes=void 0===e.attributes?{}:null===e.attributes?{}:e.attributes;else if(e instanceof s)this.attributes=e.field("attributes"),null!==this.attributes&&(this.attributes=this.attributes instanceof s?this.attributes.attributes:null),this.geometry=e.field("geometry"),null!==this.geometry&&(this.geometry instanceof s?this.geometry=t.parseGeometryFromDictionary(this.geometry):this.geometry instanceof r||(this.geometry=null));else if(n instanceof r||null===n)this.geometry=n,this.attributes=void 0===e?{}:null===e?{}:e;else if("string"==typeof e){var a=JSON.parse(e);null!==a.geometry&&void 0!==a.geometry&&(this.geometry=o.fromJson(a.geometry)),this.attributes=void 0===a.attributes?{}:null===a.attributes?{}:a.attributes}else void 0===e?this.attributes={}:null===e&&(this.attributes={}),this.geometry=null}return t.prototype.field=function(t){var e=t.toLowerCase(),r=this.attributes[t];if(void 0!==r)return r;for(var i in this.attributes)if(i.toLowerCase()===e)return this.attributes[i];throw new Error("Field not Found")},t.prototype.hasField=function(t){var e=t.toLowerCase(),r=this.attributes[t];if(void 0!==r)return!0;for(var i in this.attributes)if(i.toLowerCase()===e)return!0;return!1},t.prototype.keys=function(){var t=[];for(var e in this.attributes)t.push(e);return t=t.sort()},t.fromFeature=function(e){return new t(e)},t.parseGeometryFromDictionary=function(e){var r=t.convertDictionaryToJson(e,!0);return void 0!==r.spatialreference&&(r.spatialReference=r.spatialreference,delete r.spatialreference),o.fromJson(r)},t.convertDictionaryToJson=function(e,r){void 0===r&&(r=!1);var i={};for(var o in e.attributes){var n=e.attributes[o];n instanceof s&&(n=t.convertDictionaryToJson(n)),r?i[o.toLowerCase()]=n:i[o]=n}return i},t.parseAttributesFromDictionary=function(t){var e={};for(var r in t.attributes){var i=t.attributes[r];if(!(n.isString(i)||n.isNumber(i)||n.isBoolean(i)||n.isDate(i)))throw new Error("Illegal Argument");e[r]=i}return e},t.fromJson=function(e){var r=null;null!==e.geometry&&void 0!==e.geometry&&(r=o.fromJson(e.geometry));var i={};if(null!==e.attributes&&void 0!==e.attributes)for(var s in e.attributes){var a=e.attributes[s];if(!(n.isString(a)||n.isNumber(a)||n.isBoolean(a)||n.isDate(a)))throw new Error("Illegal Argument");i[s]=a}return new t(i,r)},t}();return a});