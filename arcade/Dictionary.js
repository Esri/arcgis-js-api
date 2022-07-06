// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","./polyfill/tsSupport/awaiter","./polyfill/tsSupport/generator","./ImmutableArray","./languageUtils","../geometry/Geometry"],(function(t,i,r,e,n,s,o){"use strict";function a(t,i){if(void 0===i&&(i=!1),null==t)return null;if(s.isNumber(t))return s.toNumber(t);if(s.isBoolean(t))return s.toBoolean(t);if(s.isString(t))return s.toString(t);if(s.isDate(t))return s.toDate(t);if(s.isArray(t)){for(var r=[],e=0,n=t;e<n.length;e++){var o=n[e];r.push(a(o,i))}return r}var l=new u;l.immutable=!1;for(var c=0,f=Object.keys(t);c<f.length;c++){var v=f[c];void 0!==(r=t[v])&&l.setField(v,a(r,i))}return l.immutable=i,l}var u=function(){function t(i){this.declaredClass="esri.arcade.Dictionary",this.attributes=null,this.plain=!1,this.immutable=!0,this.attributes=i instanceof t?i.attributes:void 0===i?{}:null===i?{}:i}return t.prototype.field=function(t){var i=t.toLowerCase(),r=this.attributes[t];if(void 0!==r)return r;for(var e in this.attributes)if(e.toLowerCase()===i)return this.attributes[e];throw new Error("Field not Found : "+t)},t.prototype.setField=function(t,i){if(this.immutable)throw new Error("Dictionary is Immutable");var r=t.toLowerCase();if(void 0===this.attributes[t]){for(var e in this.attributes)if(e.toLowerCase()===r)return void(this.attributes[e]=i);this.attributes[t]=i}else this.attributes[t]=i},t.prototype.hasField=function(t){var i=t.toLowerCase();if(void 0!==this.attributes[t])return!0;for(var r in this.attributes)if(r.toLowerCase()===i)return!0;return!1},t.prototype.keys=function(){var t=[];for(var i in this.attributes)t.push(i);return t=t.sort()},t.prototype.castToText=function(){var t="";for(var i in this.attributes){""!==t&&(t+=",");var r=this.attributes[i];null==r?t+=JSON.stringify(i)+":null":s.isBoolean(r)||s.isNumber(r)||s.isString(r)?t+=JSON.stringify(i)+":"+JSON.stringify(r):r instanceof o?t+=JSON.stringify(i)+":"+s.toStringExplicit(r):r instanceof n?t+=JSON.stringify(i)+":"+s.toStringExplicit(r):r instanceof Array?t+=JSON.stringify(i)+":"+s.toStringExplicit(r):r instanceof Date?t+=JSON.stringify(i)+":"+JSON.stringify(r):null!==r&&"object"==typeof r&&void 0!==r.castToText&&(t+=JSON.stringify(i)+":"+r.castToText())}return"{"+t+"}"},t.convertObjectToArcadeDictionary=function(i,r){void 0===r&&(r=!0);var e=new t;for(var n in e.immutable=!1,i){var s=i[n];void 0!==s&&e.setField(n.toString(),a(s))}return e.immutable=r,e},t.convertJsonToArcade=function(t,i){return void 0===i&&(i=!1),a(t,i)},t.prototype.castAsJson=function(t){void 0===t&&(t=null);var i={};for(var r in this.attributes){var e=this.attributes[r];void 0!==e&&((null==t?void 0:t.keyTranslate)&&(r=t.keyTranslate(r)),i[r]=s.castAsJson(e,t))}return i},t.prototype.castDictionaryValueAsJsonAsync=function(t,i,n,o,a){return void 0===o&&(o=null),r(this,void 0,void 0,(function(){var r;return e(this,(function(e){switch(e.label){case 0:return[4,s.castAsJsonAsync(n,o,a)];case 1:return r=e.sent(),t[i]=r,[2,r]}}))}))},t.prototype.castAsJsonAsync=function(t,i){return void 0===t&&(t=null),void 0===i&&(i=null),r(this,void 0,void 0,(function(){var r,n,a,u;return e(this,(function(e){switch(e.label){case 0:for(a in r={},n=[],this.attributes)u=this.attributes[a],(null==i?void 0:i.keyTranslate)&&(a=i.keyTranslate(a)),void 0!==u&&(s.isSimpleType(u)||u instanceof o||u instanceof Date?r[a]=s.castAsJson(u,i):n.push(this.castDictionaryValueAsJsonAsync(r,a,u,t,i)));return n.length>0?[4,Promise.all(n)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2,r]}}))}))},t}();return u}));