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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["require","exports","./ImmutableArray","./languageUtils","../geometry/Geometry"],function(t,i,r,e,n){return function(){function t(i){this.attributes=null,this.plain=!1,this.immutable=!0,this.attributes=i instanceof t?i.attributes:void 0===i?{}:null===i?{}:i}return t.prototype.field=function(t){var i=t.toLowerCase(),r=this.attributes[t];if(void 0!==r)return r;for(var e in this.attributes)if(e.toLowerCase()===i)return this.attributes[e];throw new Error("Field not Found")},t.prototype.setField=function(t,i){if(this.immutable)throw new Error("Dictionary is Immutable");var r=t.toLowerCase();if(void 0!==this.attributes[t])return void(this.attributes[t]=i);for(var e in this.attributes)if(e.toLowerCase()===r)return void(this.attributes[e]=i);this.attributes[t]=i},t.prototype.hasField=function(t){var i=t.toLowerCase();if(void 0!==this.attributes[t])return!0;for(var r in this.attributes)if(r.toLowerCase()===i)return!0;return!1},t.prototype.keys=function(){var t=[];for(var i in this.attributes)t.push(i);return t=t.sort()},t.prototype.castToText=function(){var t="";for(var i in this.attributes){""!==t&&(t+=",");var o=this.attributes[i];null==o?t+=JSON.stringify(i)+":null":e.isBoolean(o)||e.isNumber(o)||e.isString(o)?t+=JSON.stringify(i)+":"+JSON.stringify(o):o instanceof n?t+=JSON.stringify(i)+":"+e.toStringExplicit(o):o instanceof r?t+=JSON.stringify(i)+":"+e.toStringExplicit(o):o instanceof Array?t+=JSON.stringify(i)+":"+e.toStringExplicit(o):o instanceof Date?t+=JSON.stringify(i)+":"+JSON.stringify(o):null!==o&&"object"==typeof o&&void 0!==o.castToText&&(t+=JSON.stringify(i)+":"+o.castToText())}return"{"+t+"}"},t}()});