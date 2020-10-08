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

define(["require","exports","tslib","../../engine/FeatureContainer"],(function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),Object.defineProperty(t.prototype,"hasLabels",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"labelsVisible",{get:function(){return!1},enumerable:!1,configurable:!0}),t.prototype._renderGraphics=function(e,t){for(var r=0,n=this.children;r<n.length;r++){var i=n[r];i.isReady&&i.hasData&&(i.commitChanges(e),e.context.setStencilFunction(514,i.stencilRef,255),i._displayList.replay(e,i,t))}},t.prototype.renderChildren=function(t){var r=t.painter;if(this.children.some((function(e){return e.hasData}))){e.prototype.renderChildren.call(this,t),this._renderGraphics(t);var n=r.effects.highlight;n.bind(t),this._renderGraphics(t,n.defines),n.draw(t),n.unbind()}},t}(n.FeatureContainer);t.default=i}));