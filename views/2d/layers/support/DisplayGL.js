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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../ViewState","../../engine/Container","../../engine/webgl/enums"],(function(e,t,r,i,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DisplayGL=void 0;var o=function(e){function t(t){var r=e.call(this)||this;return r.layerView=t,r._childrenRenderParameters={context:null,pixelRatio:1,state:new i,stationary:!0,painter:null},r._name=r.constructor.name,r.requestRender=r.requestRender.bind(r),r}return r.__extends(t,e),t.prototype.doRender=function(e){if(e.drawPhase===n.WGLDrawPhase.MAP){var t=window.devicePixelRatio,r=e.state,i=e.stationary,a=e.context,o=e.painter,s=e.profiler,d=this._childrenRenderParameters;d.context=a.gl,d.state.copy(r),d.state.pixelRatio=t,d.stationary=i,d.painter=o;var l=this.createRenderParams(e);o.beforeRenderLayer(l,this.clips?255:0,l.globalOpacity),s.recordContainerStart(this._name);var c=a.getBoundFramebufferObject(),p=a.getViewport();a.resetState(),a.bindFramebuffer(c),a.setViewport(p.x,p.y,p.width,p.height),this.layerView._renderTarget.framebufferObject=c.glName,this.layerView._renderTarget.viewport[0]=p.x,this.layerView._renderTarget.viewport[1]=p.y,this.layerView._renderTarget.viewport[2]=p.width,this.layerView._renderTarget.viewport[3]=p.height,this.layerView.render(d),a.enforceState(),o.compositeLayer(l,l.globalOpacity),s.recordContainerEnd()}},t.prototype.createRenderParams=function(e){return r.__assign(r.__assign({},e),{blendMode:this.blendMode,globalOpacity:e.globalOpacity*this.opacity,inFadeTransition:this.inFadeTransition})},t}(a.Container);t.DisplayGL=o,t.default=o}));