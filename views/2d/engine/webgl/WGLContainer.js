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

define(["require","exports","tslib","../../../../core/has","../../../../core/maybe","../brushes","../Container","./ClippingInfo","./enums"],(function(e,t,r,n,i,s,o,a,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.name=t.constructor.name,t}return r.__extends(t,e),Object.defineProperty(t.prototype,"clips",{set:function(e){this._clips=e,this.children.forEach((function(t){return t.clips=e})),this._updateClippingInfo()},enumerable:!1,configurable:!0}),t.prototype.doRender=function(e){this.updateTransitionProperties(e.deltaTime);var t=this.createRenderParams(e),r=t.painter,n=t.globalOpacity,i=t.profiler,s=t.drawPhase===p.WGLDrawPhase.LABEL?1:n*this.computedOpacity;i.recordContainerStart(this.name),r.beforeRenderLayer(t,this._clippingInfos?255:0,s),this.updateTransforms(e.state),this.renderChildren(t),r.compositeLayer(t,s),i.recordContainerEnd()},t.prototype.renderChildren=function(e){i.isNone(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(var t=0,r=this._renderPasses;t<r.length;t++){var s=r[t];try{s.render(e)}catch(e){n("esri-2d-debug")&&console.debug("Encountered an error while rendering",e)}}},t.prototype.createRenderParams=function(e){return e},t.prototype.prepareRenderPasses=function(e){var t=this;return[e.registerRenderPass({name:"clip",brushes:[s.brushes.clip],target:function(){return t._clippingInfos},drawPhase:p.WGLDrawPhase.MAP|p.WGLDrawPhase.LABEL|p.WGLDrawPhase.LABEL_ALPHA|p.WGLDrawPhase.DEBUG})]},t.prototype.updateTransforms=function(e){for(var t=0,r=this.children;t<r.length;t++){r[t].setTransform(e)}},t.prototype.onAttach=function(){e.prototype.onAttach.call(this),this._updateClippingInfo()},t.prototype.onDetach=function(){e.prototype.onDetach.call(this),this._updateClippingInfo()},t.prototype._updateClippingInfo=function(){var e=this;if(i.isSome(this._clippingInfos)&&(this._clippingInfos.forEach((function(e){return e.destroy()})),this._clippingInfos=null),this.stage){var t=this._clips;i.isSome(t)&&t.length&&(this._clippingInfos=t.items.map((function(t){return a.default.fromClipArea(e.stage,t)}))),this.requestRender()}},t}(o.Container);t.default=c}));