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

define(["require","exports","tslib","../../../../../../core/promiseUtils","../../../../engine","../../../../engine/FeatureContainer","../../../../engine/webgl/enums"],(function(e,r,t,n,a,i,s){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(r,t,n){var a=e.call(this,r)||this;return a._pointToCallbacks=new Map,a._layer=n,a._layerView=t,a}return t.__extends(r,e),r.prototype.renderChildren=function(r){this.hasAnimation&&r.painter.effects.integrate.draw(r,r.attributeView);e.prototype.renderChildren.call(this,r)},r.prototype.hitTest=function(e,r){var t=[e,r],a=n.createResolver();return this._pointToCallbacks.set(t,a),this.requestRender(),a.promise},r.prototype.doRender=function(r){var t=this._layer,n=t.minScale,a=t.maxScale,i=r.state.scale;i<=(n||1/0)&&i>=a&&e.prototype.doRender.call(this,r)},Object.defineProperty(r.prototype,"hasAnimation",{get:function(){return this.hasLabels},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hasLabels",{get:function(){var e=this._layer.featureReduction,r=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return!!(this._layer.labelingInfo&&this._layer.labelingInfo.length||r)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"labelsVisible",{get:function(){return this._layer.labelsVisible},enumerable:!0,configurable:!0}),r.prototype.prepareRenderPasses=function(r){var n=this,i=r.registerRenderPass({name:"label",brushes:[a.brushes.Label],target:function(){return n._layer.labelsVisible?n.children:null},drawPhase:s.WGLDrawPhase.LABEL|s.WGLDrawPhase.LABEL_ALPHA}),l=r.registerRenderPass({name:"geometry",brushes:[a.brushes.Fill,a.brushes.Line,a.brushes.Marker,a.brushes.Text],target:function(){return n.children},effects:[{apply:r.effects.highlight,enable:function(){return!!n._layerView.hasHighlight()}},{apply:r.effects.hittest,enable:function(){return!!n._pointToCallbacks.size},args:function(){return n._pointToCallbacks}}]});return t.__spreadArrays(e.prototype.prepareRenderPasses.call(this,r),[l,i])},r}(i.FeatureContainer);r.WGLFeatureView=l}));