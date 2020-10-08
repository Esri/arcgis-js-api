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

define(["require","exports","tslib","../../../../../../core/promiseUtils","../../../../engine/brushes","../../../../engine/FeatureContainer","../../../../engine/webgl/enums"],(function(e,t,r,n,a,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WGLFeatureView=void 0;var l=function(e){function t(t,r,n){var a=e.call(this,t)||this;return a._pointToCallbacks=new Map,a._layer=n,a._layerView=r,a}return r.__extends(t,e),t.prototype.renderChildren=function(t){this.hasAnimation&&t.painter.effects.integrate.draw(t,t.attributeView);e.prototype.renderChildren.call(this,t)},t.prototype.hitTest=function(e,t){var r=[e,t],a=n.createResolver();return this._pointToCallbacks.set(r,a),this.requestRender(),a.promise},t.prototype.doRender=function(t){var r=this._layer,n=r.minScale,a=r.maxScale,i=t.state.scale;i<=(n||1/0)&&i>=a&&e.prototype.doRender.call(this,t)},Object.defineProperty(t.prototype,"hasAnimation",{get:function(){return this.hasLabels},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasLabels",{get:function(){var e=this._layer.featureReduction,t=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"labelsVisible",{get:function(){return this._layer.labelsVisible},enumerable:!1,configurable:!0}),t.prototype.prepareRenderPasses=function(t){var n=this,i=t.registerRenderPass({name:"label",brushes:[a.brushes.label],target:function(){return n.hasLabels?n.children:null},drawPhase:s.WGLDrawPhase.LABEL|s.WGLDrawPhase.LABEL_ALPHA}),l=t.registerRenderPass({name:"geometry",brushes:[a.brushes.fill,a.brushes.line,a.brushes.marker,a.brushes.text],target:function(){return n.children},effects:[{apply:t.effects.highlight,enable:function(){return!!n._layerView.hasHighlight()}},{apply:t.effects.hittest,enable:function(){return!!n._pointToCallbacks.size},args:function(){return n._pointToCallbacks}}]});return r.__spreadArrays(e.prototype.prepareRenderPasses.call(this,t),[l,i])},t}(i.FeatureContainer);t.WGLFeatureView=l}));