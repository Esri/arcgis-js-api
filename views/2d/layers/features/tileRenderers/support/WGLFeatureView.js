// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/assignHelper","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/tsSupport/generatorHelper","../../../../../../core/tsSupport/awaiterHelper","../../../../../../core/promiseUtils","../../../../engine","../../../../engine/FeatureContainer","../../../../engine/webgl/enums"],function(e,r,t,n,a,i,s,l,o,p){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(r,t,n){var a=e.call(this,r,t.clips)||this;return a._pointToCallbacks=new Map,a._layer=n,a._layerView=t,a}return n(r,e),r.prototype.renderChildren=function(r){if(this.hasAnimation){r.painter.effects.integrate.draw(r,r.attributeView)}e.prototype.renderChildren.call(this,r)},r.prototype.hitTest=function(e,r){var t=[e,r],n=s.createResolver();return this._pointToCallbacks.set(t,n),this.requestRender(),n.promise},r.prototype.doRender=function(r){var t=this._layer,n=t.minScale,a=t.maxScale,i=r.state.scale;i<=(n||1/0)&&i>=a&&e.prototype.doRender.call(this,r)},Object.defineProperty(r.prototype,"hasAnimation",{get:function(){return this.hasLabels},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hasLabels",{get:function(){return!(!this._layer.labelingInfo||!this._layer.labelingInfo.length)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"labelsVisible",{get:function(){return this._layer.labelsVisible},enumerable:!0,configurable:!0}),r.prototype.prepareRenderPasses=function(r){var t=this,n=r.registerRenderPass({name:"label",brushes:[l.brushes.Label],target:function(){return t._layer.labelsVisible?t.children:null},drawPhase:p.WGLDrawPhase.LABEL|p.WGLDrawPhase.LABEL_ALPHA}),a=r.registerRenderPass({name:"geometry",brushes:[l.brushes.Fill,l.brushes.Line,l.brushes.Marker,l.brushes.Text],target:function(){return t.children},effects:[{apply:r.effects.highlight,enable:function(){return!!t._layerView.hasHighlight()}},{apply:r.effects.hittest,enable:function(){return!!t._pointToCallbacks.size},args:function(){return t._pointToCallbacks}}]});return e.prototype.prepareRenderPasses.call(this,r).concat([a,n])},r}(o.FeatureContainer);r.WGLFeatureView=u});