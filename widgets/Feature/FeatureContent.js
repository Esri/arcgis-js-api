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

define(["require","exports","tslib","../../core/arrayUtils","../../core/accessorSupport/decorators","../Widget","./FeatureContent/FeatureContentViewModel","./support/featureUtils","../support/widget"],(function(e,t,r,o,a,i,n,d,s){var l="esri-feature-content",c="esri-feature-content__loader-container",u="esri-feature-content__loader";return function(e){function t(t,r){var a=e.call(this,t,r)||this;return a.creator=null,a.graphic=null,a.viewModel=null,a._addTargetToAnchors=function(e){o.from(e.querySelectorAll("a")).forEach((function(e){d.shouldOpenInNewTab(e.href)&&!e.hasAttribute("target")&&e.setAttribute("target","_blank")}))},a}return r.__extends(t,e),t.prototype.renderLoading=function(){return s.tsx("div",{class:c,key:"loader"},s.tsx("div",{class:u}))},t.prototype.renderCreated=function(){var e,t=null===(e=this.viewModel)||void 0===e?void 0:e.created;return t?t instanceof HTMLElement?s.tsx("div",{key:t,bind:t,afterCreate:this._attachToNode}):s.isWidget(t)?s.tsx("div",{key:t},!t.destroyed&&t.render()):s.tsx("div",{key:t,innerHTML:t,afterCreate:this._addTargetToAnchors}):null},t.prototype.render=function(){var e,t=null===(e=this.viewModel)||void 0===e?void 0:e.state;return s.tsx("div",{class:l},"loading"===t?this.renderLoading():this.renderCreated())},t.prototype._attachToNode=function(e){e.appendChild(this)},r.__decorate([a.aliasOf("viewModel.creator")],t.prototype,"creator",void 0),r.__decorate([a.aliasOf("viewModel.graphic")],t.prototype,"graphic",void 0),r.__decorate([s.renderable(["viewModel.created","viewModel.state"]),a.property({type:n})],t.prototype,"viewModel",void 0),t=r.__decorate([a.subclass("esri.widgets.Feature.FeatureContent")],t)}(i)}));