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

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../engine/FeatureContainer"],function(e,r,t,n,i,o,a){Object.defineProperty(r,"__esModule",{value:!0});var p=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),Object.defineProperty(r.prototype,"hasLabels",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"labelsVisible",{get:function(){return!1},enumerable:!0,configurable:!0}),r.prototype._renderGraphics=function(e,r){for(var t=0,n=this.children;t<n.length;t++){var i=n[t];i.isReady&&i.hasData&&(i.commitChanges(),e.context.setStencilFunction(514,i.stencilRef,255),i._displayList.replay(e,i,r))}},r.prototype.renderChildren=function(r){var t=r.painter;if(this.children.some(function(e){return e.hasData})){e.prototype.renderChildren.call(this,r),this._renderGraphics(r);var n=t.effects.highlight;n.bind(r),this._renderGraphics(r,n.defines),n.draw(r),n.unbind()}},r}(a.FeatureContainer);r.default=p});