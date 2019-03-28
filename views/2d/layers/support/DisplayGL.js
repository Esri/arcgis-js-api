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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../ViewState","../../engine/DisplayObject","../../engine/webgl/enums"],function(e,t,r,a,n,i){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t){var r=e.call(this)||this;return r.layerView=t,r._childrenRenderParameters={context:null,pixelRatio:1,state:new a,stationary:!0},r.requestRender=r.requestRender.bind(r),r}return r(t,e),t.prototype.attach=function(){return e.prototype.attach.call(this)},t.prototype.detach=function(){e.prototype.detach.call(this)},t.prototype.doRender=function(e){if(e.drawPhase===i.WGLDrawPhase.MAP&&this.layerView.attached){var t=window.devicePixelRatio,r=this.stage.context,a=e.state,n=this._childrenRenderParameters;n.context=r.gl,n.state.copy(a),n.state.pixelRatio=t,n.stationary=e.stationary;var o=r.getBoundFramebufferObject();r.resetState(),r.bindFramebuffer(o),this.layerView.render(n),r.enforceState()}},t}(n.DisplayObject);t.DisplayGL=o,t.default=o});