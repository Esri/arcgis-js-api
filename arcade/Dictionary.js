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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","./polyfill/tsSupport/awaiter","./polyfill/tsSupport/generator","./ArcadeDate","./executionError","./ImmutableArray","./languageUtils","../geometry/Geometry"],(function(t,r,i,e,n,o,s,a,u){"use strict";function l(t,r,i){if(void 0===i&&(i=!1),null==t)return null;if(a.isNumber(t))return a.toNumber(t);if(a.isBoolean(t))return a.toBoolean(t);if(a.isString(t))return a.toString(t);if(a.isDate(t))return a.toDate(t,r);if(a.isArray(t)){for(var e=[],n=0,o=t;n<o.length;n++){var s=o[n];e.push(l(s,r,i))}return e}var u=new c;u.immutable=!1;for(var f=0,v=Object.keys(t);f<v.length;f++){var d=v[f];void 0!==(e=t[d])&&u.setField(d,l(e,r,i))}return u.immutable=i,u}var c=function(){function t(r){this.declaredClass="esri.arcade.Dictionary",this.attributes=null,this.plain=!1,this.immutable=!0,this.attributes=r instanceof t?r.attributes:void 0===r?{}:null===r?{}:r}return t.prototype.field=function(t){var r=t.toLowerCase(),i=this.attributes[t];if(void 0!==i)return i;for(var e in this.attributes)if(e.toLowerCase()===r)return this.attributes[e];throw new o.ArcadeExecutionError(null,o.ExecutionErrorCodes.FieldNotFound,null,{key:t})},t.prototype.setField=function(t,r){if(this.immutable)throw new o.ArcadeExecutionError(null,o.ExecutionErrorCodes.Immutable,null);if(a.isFunctionParameter(r))throw new o.ArcadeExecutionError(null,o.ExecutionErrorCodes.NoFunctionInDictionary,null);var i=t.toLowerCase();if(r instanceof Date&&(r=n.ArcadeDate.dateJSToArcadeDate(r)),void 0===this.attributes[t]){for(var e in this.attributes)if(e.toLowerCase()===i)return void(this.attributes[e]=r);this.attributes[t]=r}else this.attributes[t]=r},t.prototype.hasField=function(t){var r=t.toLowerCase();if(void 0!==this.attributes[t])return!0;for(var i in this.attributes)if(i.toLowerCase()===r)return!0;return!1},t.prototype.keys=function(){var t=[];for(var r in this.attributes)t.push(r);return t=t.sort()},t.prototype.castToText=function(t){void 0===t&&(t=!1);var r="";for(var i in this.attributes){""!==r&&(r+=",");var e=this.attributes[i];null==e?r+=JSON.stringify(i)+":null":a.isBoolean(e)||a.isNumber(e)||a.isString(e)?r+=JSON.stringify(i)+":"+JSON.stringify(e):e instanceof u?r+=JSON.stringify(i)+":"+a.toStringExplicit(e):e instanceof s?r+=JSON.stringify(i)+":"+a.toStringExplicit(e,null,t):e instanceof Array?r+=JSON.stringify(i)+":"+a.toStringExplicit(e,null,t):e instanceof n.ArcadeDate?r+=t?JSON.stringify(i)+":"+JSON.stringify(e.getTime()):JSON.stringify(i)+":"+e.stringify():null!==e&&"object"==typeof e&&void 0!==e.castToText&&(r+=JSON.stringify(i)+":"+e.castToText(t))}return"{"+r+"}"},t.convertObjectToArcadeDictionary=function(r,i,e){void 0===e&&(e=!0);var n=new t;for(var o in n.immutable=!1,r){var s=r[o];void 0!==s&&n.setField(o.toString(),l(s,i))}return n.immutable=e,n},t.convertJsonToArcade=function(t,r,i){return void 0===i&&(i=!1),l(t,r,i)},t.prototype.castAsJson=function(t){void 0===t&&(t=null);var r={};for(var i in this.attributes){var e=this.attributes[i];void 0!==e&&((null==t?void 0:t.keyTranslate)&&(i=t.keyTranslate(i)),r[i]=a.castAsJson(e,t))}return r},t.prototype.castDictionaryValueAsJsonAsync=function(t,r,n,o,s){return void 0===o&&(o=null),i(this,void 0,void 0,(function(){var i;return e(this,(function(e){switch(e.label){case 0:return[4,a.castAsJsonAsync(n,o,s)];case 1:return i=e.sent(),t[r]=i,[2,i]}}))}))},t.prototype.castAsJsonAsync=function(t,r){return void 0===t&&(t=null),void 0===r&&(r=null),i(this,void 0,void 0,(function(){var i,o,s,l;return e(this,(function(e){switch(e.label){case 0:for(s in i={},o=[],this.attributes)l=this.attributes[s],(null==r?void 0:r.keyTranslate)&&(s=r.keyTranslate(s)),void 0!==l&&(a.isSimpleType(l)||l instanceof u||l instanceof n.ArcadeDate?i[s]=a.castAsJson(l,r):o.push(this.castDictionaryValueAsJsonAsync(i,s,l,t,r)));return o.length>0?[4,Promise.all(o)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2,i]}}))}))},t}();return c}));