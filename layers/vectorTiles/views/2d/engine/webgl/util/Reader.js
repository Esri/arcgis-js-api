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

define(["require","exports"],(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this._pos=0,this._buffer=e,this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer)}return e.prototype.readInt32=function(){return this._i32View[this._pos++]},e.prototype.readF32=function(){return this._f32View[this._pos++]},e}();t.default=i}));