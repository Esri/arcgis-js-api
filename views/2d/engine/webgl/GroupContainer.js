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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../webgl","./WGLContainer"],(function(e,t,r,i,n){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._lastWidth=0,t._lastHeight=0,t}return r.__extends(t,e),t.prototype.dispose=function(){this._renderTarget&&(this._renderTarget.dispose(),this._renderTarget=null)},t.prototype.doRender=function(e){var t=this.createRenderParams(e),r=t.context,i=t.painter,n=t.profiler;this._prevFBO=r.getBoundFramebufferObject(),n.recordContainerStart(this.name);var a=this._getFbo(t),s=i.getRenderTarget();r.bindFramebuffer(a),i.setRenderTarget(a),r.setDepthWriteEnabled(!0),r.setClearColor(0,0,0,0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);for(var o=0,d=this.children;o<d.length;o++){d[o].processRender(t)}i.setRenderTarget(s),r.bindFramebuffer(this._prevFBO),i.beforeRenderLayer(t,this._clippingInfos?255:0,this.opacity),r.setStencilTestEnabled(!1),r.setStencilWriteMask(0),i.blitTexture(r,a.colorTexture,9728),i.compositeLayer(t,this.opacity),n.recordContainerEnd()},t.prototype.createRenderParams=function(t){return r.__assign(r.__assign({},e.prototype.createRenderParams.call(this,t)),{blendMode:this.blendMode,globalOpacity:1})},t.prototype._getFbo=function(e){var t=e.context,r=e.painter,n=t.getViewport(),a=n.width,s=n.height;if(a!==this._lastWidth||s!==this._lastHeight)if(this._lastWidth=a,this._lastHeight=s,this._renderTarget)this._renderTarget.resize(a,s);else{var o={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:a,height:s},d=r.getSharedStencilBuffer();this._renderTarget=new i.FramebufferObject(t,{colorTarget:0,depthStencilTarget:3},o,d)}return this._renderTarget},t}(n.default);t.GroupContainer=a}));