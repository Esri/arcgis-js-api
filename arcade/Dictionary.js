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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["require","exports","./ImmutableArray","./languageUtils","../geometry/Geometry"],(function(t,i,r,e,n){"use strict";function s(t,i){void 0===i&&(i=!1);var r=null;if(null===t);else if(e.isNumber(t))r=e.toNumber(t);else if(e.isBoolean(t))r=e.toBoolean(t);else if(e.isString(t))r=e.toString(t);else if(e.isDate(t))r=e.toDate(t);else if(e.isArray(t)){r=[];for(var n=0,a=t;n<a.length;n++){var u=a[n];r.push(s(u,i))}}else{if(0===Object.keys(t).length)return null;var l=new o;l.immutable=!1;for(var f=0,c=Object.keys(t);f<c.length;f++){var v=c[f],b=t[v];void 0!==b&&l.setField(v,s(b,i))}l.immutable=i,r=l}return r}var o=function(){function t(i){this.declaredClass="esri.arcade.Dictionary",this.attributes=null,this.plain=!1,this.immutable=!0,this.attributes=i instanceof t?i.attributes:void 0===i?{}:null===i?{}:i}return t.prototype.field=function(t){var i=t.toLowerCase(),r=this.attributes[t];if(void 0!==r)return r;for(var e in this.attributes)if(e.toLowerCase()===i)return this.attributes[e];throw new Error("Field not Found : "+t)},t.prototype.setField=function(t,i){if(this.immutable)throw new Error("Dictionary is Immutable");var r=t.toLowerCase();if(void 0===this.attributes[t]){for(var e in this.attributes)if(e.toLowerCase()===r)return void(this.attributes[e]=i);this.attributes[t]=i}else this.attributes[t]=i},t.prototype.hasField=function(t){var i=t.toLowerCase();if(void 0!==this.attributes[t])return!0;for(var r in this.attributes)if(r.toLowerCase()===i)return!0;return!1},t.prototype.keys=function(){var t=[];for(var i in this.attributes)t.push(i);return t=t.sort()},t.prototype.castToText=function(){var t="";for(var i in this.attributes){""!==t&&(t+=",");var s=this.attributes[i];null==s?t+=JSON.stringify(i)+":null":e.isBoolean(s)||e.isNumber(s)||e.isString(s)?t+=JSON.stringify(i)+":"+JSON.stringify(s):s instanceof n?t+=JSON.stringify(i)+":"+e.toStringExplicit(s):s instanceof r?t+=JSON.stringify(i)+":"+e.toStringExplicit(s):s instanceof Array?t+=JSON.stringify(i)+":"+e.toStringExplicit(s):s instanceof Date?t+=JSON.stringify(i)+":"+JSON.stringify(s):null!==s&&"object"==typeof s&&void 0!==s.castToText&&(t+=JSON.stringify(i)+":"+s.castToText())}return"{"+t+"}"},t.convertObjectToArcadeDictionary=function(i,r){void 0===r&&(r=!0);var e=new t;for(var n in e.immutable=!1,i){var o=i[n];void 0!==o&&e.setField(n.toString(),s(o))}return e.immutable=r,e},t}();return o}));