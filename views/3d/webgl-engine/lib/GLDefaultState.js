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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports"],function(){var n=function(){function n(n){this.cullEnabled=!1,this.blendFuncSrc=770,this.blendFuncDst=771,this.depthFunc=513,this._gl=n}return n.prototype.apply=function(){this.cullEnabled?this._gl.enable(2884):this._gl.disable(2884),this._gl.blendFunc(this.blendFuncSrc,this.blendFuncDst),this._gl.depthFunc(this.depthFunc)},n}();return n});