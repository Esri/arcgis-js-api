// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Identifiable","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,o,t,r,p,l,i){return function(e){function o(o){var t=e.call(this)||this;return t.autoNavigate=null,t.filter=null,t.maxResults=null,t.maxSuggestions=null,t.minSuggestCharacters=null,t.outFields=null,t.placeholder="",t.popupEnabled=null,t.popupTemplate=null,t.prefix="",t.resultGraphicEnabled=null,t.resultSymbol=null,t.searchExtent=null,t.suggestionsEnabled=null,t.suffix="",t.withinViewEnabled=!1,t.zoomScale=null,t}return t(o,e),r([i.property()],o.prototype,"autoNavigate",void 0),r([i.property()],o.prototype,"filter",void 0),r([i.property()],o.prototype,"maxResults",void 0),r([i.property()],o.prototype,"maxSuggestions",void 0),r([i.property()],o.prototype,"minSuggestCharacters",void 0),r([i.property()],o.prototype,"outFields",void 0),r([i.property()],o.prototype,"placeholder",void 0),r([i.property()],o.prototype,"popupEnabled",void 0),r([i.property()],o.prototype,"popupTemplate",void 0),r([i.property()],o.prototype,"prefix",void 0),r([i.property()],o.prototype,"resultGraphicEnabled",void 0),r([i.property()],o.prototype,"resultSymbol",void 0),r([i.property()],o.prototype,"searchExtent",void 0),r([i.property()],o.prototype,"suggestionsEnabled",void 0),r([i.property()],o.prototype,"suffix",void 0),r([i.property()],o.prototype,"withinViewEnabled",void 0),r([i.property()],o.prototype,"zoomScale",void 0),o=r([i.subclass("esri.widgets.Search.SearchSource")],o)}(i.declared(l,p))});