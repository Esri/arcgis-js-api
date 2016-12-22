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

define(["require","exports","./Util","../../../webgl/enums"],function(t,e,n,i){var s=function(){function t(t){this._enabled=!1,this._rctx=t}return t.prototype.enable=function(){this._enabled=!0,this._rctx.setStencilTestEnabled(!0)},t.prototype.disable=function(){this._enabled=!1,this._rctx.setStencilTestEnabled(!1)},t.prototype.getIsSupported=function(){return!!this._rctx.contextAttributes.stencil},t.prototype.setEnableState=function(t){t?this.enable():this.disable()},t.prototype.getEnableState=function(){return this._enabled},t.prototype.prepareStencilWritePass=function(){n.assert(this.getEnableState());var t=this._rctx;t.setClearStencil(0),t.setStencilFunction(519,1,255),t.setStencilOp(7680,7680,7681),t.setStencilWriteMask(255)},t.prototype.prepareStencilReadPass=function(){n.assert(this.getEnableState());var t=this._rctx;t.setStencilFunction(517,1,255),t.setStencilWriteMask(0)},t.prototype.prepareStencilDisabledPass=function(){n.assert(this.getEnableState());var t=this._rctx;t.setStencilFunction(519,0,0),t.setStencilWriteMask(0)},t}();return s});