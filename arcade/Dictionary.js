// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["require","exports","./ImmutableArray","./languageUtils","./polyfill/promiseUtils","../geometry/Geometry"],(function(t,i,r,e,n,s){"use strict";function o(t,i){if(void 0===i&&(i=!1),null==t)return null;if(e.isNumber(t))return e.toNumber(t);if(e.isBoolean(t))return e.toBoolean(t);if(e.isString(t))return e.toString(t);if(e.isDate(t))return e.toDate(t);if(e.isArray(t)){for(var r=[],n=0,s=t;n<s.length;n++){var u=s[n];r.push(o(u,i))}return r}var l=new a;l.immutable=!1;for(var f=0,c=Object.keys(t);f<c.length;f++){var v=c[f];void 0!==(r=t[v])&&l.setField(v,o(r,i))}return l.immutable=i,l}var a=function(){function t(i){this.declaredClass="esri.arcade.Dictionary",this.attributes=null,this.plain=!1,this.immutable=!0,this.attributes=i instanceof t?i.attributes:void 0===i?{}:null===i?{}:i}return t.prototype.field=function(t){var i=t.toLowerCase(),r=this.attributes[t];if(void 0!==r)return r;for(var e in this.attributes)if(e.toLowerCase()===i)return this.attributes[e];throw new Error("Field not Found : "+t)},t.prototype.setField=function(t,i){if(this.immutable)throw new Error("Dictionary is Immutable");var r=t.toLowerCase();if(void 0===this.attributes[t]){for(var e in this.attributes)if(e.toLowerCase()===r)return void(this.attributes[e]=i);this.attributes[t]=i}else this.attributes[t]=i},t.prototype.hasField=function(t){var i=t.toLowerCase();if(void 0!==this.attributes[t])return!0;for(var r in this.attributes)if(r.toLowerCase()===i)return!0;return!1},t.prototype.keys=function(){var t=[];for(var i in this.attributes)t.push(i);return t=t.sort()},t.prototype.castToText=function(){var t="";for(var i in this.attributes){""!==t&&(t+=",");var n=this.attributes[i];null==n?t+=JSON.stringify(i)+":null":e.isBoolean(n)||e.isNumber(n)||e.isString(n)?t+=JSON.stringify(i)+":"+JSON.stringify(n):n instanceof s?t+=JSON.stringify(i)+":"+e.toStringExplicit(n):n instanceof r?t+=JSON.stringify(i)+":"+e.toStringExplicit(n):n instanceof Array?t+=JSON.stringify(i)+":"+e.toStringExplicit(n):n instanceof Date?t+=JSON.stringify(i)+":"+JSON.stringify(n):null!==n&&"object"==typeof n&&void 0!==n.castToText&&(t+=JSON.stringify(i)+":"+n.castToText())}return"{"+t+"}"},t.convertObjectToArcadeDictionary=function(i,r){void 0===r&&(r=!0);var e=new t;for(var n in e.immutable=!1,i){var s=i[n];void 0!==s&&e.setField(n.toString(),o(s))}return e.immutable=r,e},t.convertJsonToArcade=function(t,i){return void 0===i&&(i=!1),o(t,i)},t.prototype.castAsJson=function(t){void 0===t&&(t=null);var i={};for(var r in this.attributes){var n=this.attributes[r];void 0!==n&&((null==t?void 0:t.keyTranslate)&&(r=t.keyTranslate(r)),i[r]=e.castAsJson(n,t))}return i},t.prototype.castDictionaryValueAsJsonAsync=function(t,i,r,n,s){return void 0===n&&(n=null),e.castAsJsonAsync(r,n,s).then((function(r){return t[i]=r,r}))},t.prototype.castAsJsonAsync=function(t,i){void 0===t&&(t=null),void 0===i&&(i=null);var r={},o=[];for(var a in this.attributes){var u=this.attributes[a];(null==i?void 0:i.keyTranslate)&&(a=i.keyTranslate(a)),void 0!==u&&(e.isSimpleType(u)||u instanceof s||u instanceof Date?r[a]=e.castAsJson(u,i):o.push(this.castDictionaryValueAsJsonAsync(r,a,u,t,i)))}return o.length>0?n.all(o).then((function(){return r})):n.resolve(r)},t}();return a}));