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

define(["require","exports","tslib","../../../core/accessorSupport/decorators","../../support/widget"],(function(e,t,n,o,r){Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureContentMixin=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderNodeContent=function(e){return r.isWidget(e)&&!e.destroyed?r.tsx("div",{key:e},e.render()):e instanceof HTMLElement?r.tsx("div",{key:e,bind:e,afterCreate:t._attachToNode}):r.hasDomNode(e)?r.tsx("div",{key:e,bind:e.domNode,afterCreate:t._attachToNode}):null},t}return n.__extends(t,e),t.prototype._attachToNode=function(e){e.appendChild(this)},t=n.__decorate([o.subclass("esri.widgets.Feature.ContentMixin")],t)}(e)}}));