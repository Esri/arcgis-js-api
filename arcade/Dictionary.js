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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","./polyfill/tsSupport/awaiter","./polyfill/tsSupport/generator","./executionError","./ImmutableArray","./languageUtils","../geometry/Geometry"],(function(t,r,i,e,n,o,s,a){"use strict";function u(t,r){if(void 0===r&&(r=!1),null==t)return null;if(s.isNumber(t))return s.toNumber(t);if(s.isBoolean(t))return s.toBoolean(t);if(s.isString(t))return s.toString(t);if(s.isDate(t))return s.toDate(t);if(s.isArray(t)){for(var i=[],e=0,n=t;e<n.length;e++){var o=n[e];i.push(u(o,r))}return i}var a=new l;a.immutable=!1;for(var c=0,f=Object.keys(t);c<f.length;c++){var v=f[c];void 0!==(i=t[v])&&a.setField(v,u(i,r))}return a.immutable=r,a}var l=function(){function t(r){this.declaredClass="esri.arcade.Dictionary",this.attributes=null,this.plain=!1,this.immutable=!0,this.attributes=r instanceof t?r.attributes:void 0===r?{}:null===r?{}:r}return t.prototype.field=function(t){var r=t.toLowerCase(),i=this.attributes[t];if(void 0!==i)return i;for(var e in this.attributes)if(e.toLowerCase()===r)return this.attributes[e];throw new n.ArcadeExecutionError(null,n.ExecutionErrorCodes.FieldNotFound,null,{key:t})},t.prototype.setField=function(t,r){if(this.immutable)throw new n.ArcadeExecutionError(null,n.ExecutionErrorCodes.Immutable,null);if(s.isFunctionParameter(r))throw new n.ArcadeExecutionError(null,n.ExecutionErrorCodes.NoFunctionInDictionary,null);var i=t.toLowerCase();if(void 0===this.attributes[t]){for(var e in this.attributes)if(e.toLowerCase()===i)return void(this.attributes[e]=r);this.attributes[t]=r}else this.attributes[t]=r},t.prototype.hasField=function(t){var r=t.toLowerCase();if(void 0!==this.attributes[t])return!0;for(var i in this.attributes)if(i.toLowerCase()===r)return!0;return!1},t.prototype.keys=function(){var t=[];for(var r in this.attributes)t.push(r);return t=t.sort()},t.prototype.castToText=function(t){void 0===t&&(t=!1);var r="";for(var i in this.attributes){""!==r&&(r+=",");var e=this.attributes[i];null==e?r+=JSON.stringify(i)+":null":s.isBoolean(e)||s.isNumber(e)||s.isString(e)?r+=JSON.stringify(i)+":"+JSON.stringify(e):e instanceof a?r+=JSON.stringify(i)+":"+s.toStringExplicit(e):e instanceof o?r+=JSON.stringify(i)+":"+s.toStringExplicit(e,null,t):e instanceof Array?r+=JSON.stringify(i)+":"+s.toStringExplicit(e,null,t):e instanceof Date?r+=t?JSON.stringify(i)+":"+JSON.stringify(e.getTime()):JSON.stringify(i)+":"+JSON.stringify(e):null!==e&&"object"==typeof e&&void 0!==e.castToText&&(r+=JSON.stringify(i)+":"+e.castToText(t))}return"{"+r+"}"},t.convertObjectToArcadeDictionary=function(r,i){void 0===i&&(i=!0);var e=new t;for(var n in e.immutable=!1,r){var o=r[n];void 0!==o&&e.setField(n.toString(),u(o))}return e.immutable=i,e},t.convertJsonToArcade=function(t,r){return void 0===r&&(r=!1),u(t,r)},t.prototype.castAsJson=function(t){void 0===t&&(t=null);var r={};for(var i in this.attributes){var e=this.attributes[i];void 0!==e&&((null==t?void 0:t.keyTranslate)&&(i=t.keyTranslate(i)),r[i]=s.castAsJson(e,t))}return r},t.prototype.castDictionaryValueAsJsonAsync=function(t,r,n,o,a){return void 0===o&&(o=null),i(this,void 0,void 0,(function(){var i;return e(this,(function(e){switch(e.label){case 0:return[4,s.castAsJsonAsync(n,o,a)];case 1:return i=e.sent(),t[r]=i,[2,i]}}))}))},t.prototype.castAsJsonAsync=function(t,r){return void 0===t&&(t=null),void 0===r&&(r=null),i(this,void 0,void 0,(function(){var i,n,o,u;return e(this,(function(e){switch(e.label){case 0:for(o in i={},n=[],this.attributes)u=this.attributes[o],(null==r?void 0:r.keyTranslate)&&(o=r.keyTranslate(o)),void 0!==u&&(s.isSimpleType(u)||u instanceof a||u instanceof Date?i[o]=s.castAsJson(u,r):n.push(this.castDictionaryValueAsJsonAsync(i,o,u,t,r)));return n.length>0?[4,Promise.all(n)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2,i]}}))}))},t}();return l}));