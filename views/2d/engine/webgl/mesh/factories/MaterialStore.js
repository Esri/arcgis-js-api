// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../MaterialInfo","../../util/serializationUtils"],function(t,e,r,i){Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(){this._materials=[],this._materialsIndex=new Map}return t.prototype.insert=function(t){var e=this._materials.length;return this._materials.push(t),e},t.prototype._hashGlyph=function(t,e,r){return"G-"+e+"-"+r+"-"+t.page},t.prototype._hashSprite=function(t,e,r){if(t){return"S-"+e+"-"+r+"-"+t.page+"-"+(t.sdf?1:0)}return"S-"+e+"-"+r+"--1}"},t.prototype.createSpriteMaterial=function(t,e,i){var a=this._hashSprite(t,e,i);if(this._materialsIndex.has(a)){return this._materialsIndex.get(a)}var s=this._materials.length,n=r.default.fromSprite(t,e,i);return this._materials.push(n),this._materialsIndex.set(a,s),s},t.prototype.createGlyphMaterial=function(t,e,i){var a=this._hashGlyph(t,e,i);if(this._materialsIndex.has(a)){return this._materialsIndex.get(a)}var s=this._materials.length,n=r.default.fromGlyph(t,e,i);return this._materials.push(n),this._materialsIndex.set(a,s),s},t.prototype.get=function(t){return this._materials[t]},t.prototype.serialize=function(t){return i.serializeList(t,this._materials),t},t.deserialize=function(e){var a=new t;return a._materials=i.deserializeList(e,r.default),a},t}();e.default=a});