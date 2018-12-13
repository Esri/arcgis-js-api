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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../MaterialInfo","../../util/serializationUtils"],function(t,e,n,i){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function r(){this._materials=[],this._materialsIndex=new Map}return r.prototype.insert=function(t){var e=this._materials.length;return this._materials.push(t),e},r.prototype._hashGlyph=function(t,e,r){return"G-"+e+"-"+r+"-"+t.page},r.prototype._hashSprite=function(t,e,r){return t?"S-"+e+"-"+r+"-"+t.page+"-"+(t.sdf?1:0):"S-"+e+"-"+r+"--1}"},r.prototype.createSpriteMaterial=function(t,e,r){var i=this._hashSprite(t,e,r);if(this._materialsIndex.has(i))return this._materialsIndex.get(i);var a=this._materials.length,s=n.default.fromSprite(t,e,r);return this._materials.push(s),this._materialsIndex.set(i,a),a},r.prototype.createGlyphMaterial=function(t,e,r){var i=this._hashGlyph(t,e,r);if(this._materialsIndex.has(i))return this._materialsIndex.get(i);var a=this._materials.length,s=n.default.fromGlyph(t,e,r);return this._materials.push(s),this._materialsIndex.set(i,a),a},r.prototype.get=function(t){return this._materials[t]},r.prototype.hydrateObjects=function(t){for(var e=0,r=t;e<r.length;e++)for(var i=0,a=r[e].displayRecords;i<a.length;i++){var s=a[i];s.materialInfo=this.get(s.materialIndex)}return t},r.prototype.serialize=function(t){return i.serializeList(t,this._materials),t},r.deserialize=function(t){var e=new r;return e._materials=i.deserializeList(t,n.default),e},r}();e.default=r});