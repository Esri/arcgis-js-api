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

define(["require","exports","tslib","../../../../core/maybe","../../engine","../../ViewState"],(function(e,t,r,i,a,n){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var r=e.call(this)||this;return r.layerView=t,r._lastTime=null,r._childrenRenderParameters={context:null,pixelRatio:1,state:new n,stationary:!0,painter:null},r._name=r.constructor.name,r.requestRender=r.requestRender.bind(r),r}return r.__extends(t,e),t.prototype.doRender=function(e){if(e.drawPhase===a.enums.WGLDrawPhase.MAP){var t=window.devicePixelRatio,r=this.stage,i=r.context,n=r.painter,s=r.profiler,o=e.state,l=e.stationary,d=this._childrenRenderParameters;d.context=i.gl,d.state.copy(o),d.state.pixelRatio=t,d.stationary=l,d.painter=n;var h=this.createRenderParams(e);n.beforeRenderLayer(h,this.clips?255:0,h.globalOpacity),s.recordContainerStart(this._name);var c=i.getBoundFramebufferObject(),p=i.getViewport();i.resetState(),i.bindFramebuffer(c),i.setViewport(p.x,p.y,p.width,p.height),this.layerView._renderTarget.framebufferObject=c.glName,this.layerView._renderTarget.viewport[0]=p.x,this.layerView._renderTarget.viewport[1]=p.y,this.layerView._renderTarget.viewport[2]=p.width,this.layerView._renderTarget.viewport[3]=p.height,this.layerView.render(d),i.enforceState(),n.compositeLayer(h,h.globalOpacity),s.recordContainerEnd()}},t.prototype.createRenderParams=function(e){var t=Date.now(),a=(i.isSome(this._lastTime)?t-this._lastTime:0)/1e3;return this._lastTime=t,r.__assign(r.__assign({},e),{context:this.stage.context,painter:this.stage.painter,profiler:this.stage.profiler,renderingOptions:this.stage.renderingOptions,driverTestResult:this.stage.driverTestResult,timeDelta:a,timeline:this.stage.timeline,blendMode:this.blendMode,globalOpacity:e.globalOpacity*this.opacity})},t}(a.Container);t.DisplayGL=s,t.default=s}));