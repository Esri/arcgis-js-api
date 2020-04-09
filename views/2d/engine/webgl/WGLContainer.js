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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/assignHelper","../../../../core/maybe","../../engine","../Container","./ClippingInfo","./enums"],(function(e,t,r,s,n,i,a,o,p){Object.defineProperty(t,"__esModule",{value:!0});var h=function(e){function t(t){var r=e.call(this)||this;return r.name=r.constructor.name,r._lastTime=null,r.setClips(t),r}return r(t,e),t.prototype.setClips=function(e){var t=this;n.isSome(this._clippingInfos)&&(this._clippingInfos.forEach((function(e){return e.destroy()})),this._clippingInfos=null),n.isSome(e)&&e.length&&(this._clippingInfos=e.items.map((function(e){return o.default.fromClipArea(t,e)}))),this.requestRender()},t.prototype.doRender=function(e){this.attachChildren(),this.detachChildren();var t=this.createRenderParams(e),r=t.context,s=t.painter,n=t.globalOpacity,i=t.profiler,a=t.drawPhase===p.WGLDrawPhase.LABEL?1:n*this.opacity;i.recordContainerStart(this.name),s.beforeRenderLayer(r,this._clippingInfos?255:0,a),this.updateTransforms(e.state),this.renderChildren(t),s.compositeLayer(r,a),i.recordContainerEnd()},t.prototype.renderChildren=function(e){n.isNone(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(this.stage.painter));for(var t=0,r=this._renderPasses;t<r.length;t++){r[t].render(e)}},t.prototype.createRenderParams=function(e){var t=Date.now(),r=(n.isSome(this._lastTime)?t-this._lastTime:0)/1e3;return this._lastTime=t,s({},e,{context:this.stage.context,painter:this.stage.painter,profiler:this.stage.profiler,renderingOptions:this.stage.renderingOptions,driverTestResult:this.stage.driverTestResult,timeDelta:r,timeline:this.stage.timeline})},t.prototype.prepareRenderPasses=function(e){var t=this;return[e.registerRenderPass({name:"clip",brushes:[i.brushes.Clip],target:function(){return t._clippingInfos},drawPhase:p.WGLDrawPhase.MAP|p.WGLDrawPhase.LABEL|p.WGLDrawPhase.LABEL_ALPHA|p.WGLDrawPhase.DEBUG})]},t.prototype.updateTransforms=function(e){for(var t=0,r=this.children;t<r.length;t++){r[t].setTransform(e)}},t}(a.Container);t.default=h}));