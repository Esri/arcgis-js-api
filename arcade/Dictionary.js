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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./languageUtils","../geometry/Geometry","./ImmutableArray"],function(t,i,r,e,s){var n=function(){function t(i){this.attributes=null,this.plain=!1,this.immutable=!0,i instanceof t?this.attributes=i.attributes:void 0===i?this.attributes={}:null===i?this.attributes={}:this.attributes=i}return t.prototype.field=function(t){var i=t.toLowerCase(),r=this.attributes[t];if(void 0!==r)return r;for(var e in this.attributes)if(e.toLowerCase()===i)return this.attributes[e];throw new Error("Field not Found")},t.prototype.setField=function(t,i){if(this.immutable)throw new Error("Dictionary is Immutable");var r=t.toLowerCase(),e=this.attributes[t];if(void 0!==e)return void(this.attributes[t]=i);for(var s in this.attributes)if(s.toLowerCase()===r)return void(this.attributes[s]=i);this.attributes[t]=i},t.prototype.hasField=function(t){var i=t.toLowerCase(),r=this.attributes[t];if(void 0!==r)return!0;for(var e in this.attributes)if(e.toLowerCase()===i)return!0;return!1},t.prototype.keys=function(){var t=[];for(var i in this.attributes)t.push(i);return t=t.sort()},t.prototype.castToText=function(){var t="";for(var i in this.attributes){""!==t&&(t+=",");var n=this.attributes[i];null==n?n="null":r.isBoolean(n)||r.isNumber(n)||r.isString(n)?t+=JSON.stringify(i)+":"+JSON.stringify(n):n instanceof e?t+=JSON.stringify(i)+":"+r.toStringExplicit(n):n instanceof s?t+=JSON.stringify(i)+":"+r.toStringExplicit(n):n instanceof Array?t+=JSON.stringify(i)+":"+r.toStringExplicit(n):n instanceof Date?t+=JSON.stringify(i)+":"+JSON.stringify(n):null!==n&&"object"==typeof n&&void 0!==n.castToText&&(t+=JSON.stringify(i)+":"+n.castToText())}return"{"+t+"}"},t}();return n});