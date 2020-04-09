// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../webgl","../../webgl/Texture"],(function(e,t,r,n){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t,i){this._refCount=1,e instanceof r.RenderingContext?this._texture=new n(e,t,i):this._texture=e}return e.prototype.retain=function(){++this._refCount},e.prototype.release=function(){--this._refCount,0===this._refCount&&this._texture.dispose()},Object.defineProperty(e.prototype,"texture",{get:function(){return this._texture},enumerable:!0,configurable:!0}),e.prototype.generateMipmap=function(){this._texture.generateMipmap()},Object.defineProperty(e.prototype,"descriptor",{get:function(){return this._texture.descriptor},enumerable:!0,configurable:!0}),e}();t.TileTexture=i}));