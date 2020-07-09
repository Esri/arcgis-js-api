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

define(["require","exports","tslib","../../core/Identifiable","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,o,t,r,p,l){return function(e){function o(o){var t=e.call(this,o)||this;return t.autoNavigate=null,t.filter=null,t.getResults=null,t.getSuggestions=null,t.maxResults=null,t.maxSuggestions=null,t.minSuggestCharacters=null,t.outFields=null,t.placeholder="",t.popupEnabled=null,t.popupTemplate=null,t.prefix="",t.resultGraphicEnabled=null,t.resultSymbol=null,t.suggestionsEnabled=null,t.suffix="",t.withinViewEnabled=!1,t.zoomScale=null,t}return t.__extends(o,e),t.__decorate([l.property()],o.prototype,"autoNavigate",void 0),t.__decorate([l.property()],o.prototype,"filter",void 0),t.__decorate([l.property()],o.prototype,"getResults",void 0),t.__decorate([l.property()],o.prototype,"getSuggestions",void 0),t.__decorate([l.property()],o.prototype,"maxResults",void 0),t.__decorate([l.property()],o.prototype,"maxSuggestions",void 0),t.__decorate([l.property()],o.prototype,"minSuggestCharacters",void 0),t.__decorate([l.property()],o.prototype,"outFields",void 0),t.__decorate([l.property()],o.prototype,"placeholder",void 0),t.__decorate([l.property()],o.prototype,"popupEnabled",void 0),t.__decorate([l.property()],o.prototype,"popupTemplate",void 0),t.__decorate([l.property()],o.prototype,"prefix",void 0),t.__decorate([l.property()],o.prototype,"resultGraphicEnabled",void 0),t.__decorate([l.property()],o.prototype,"resultSymbol",void 0),t.__decorate([l.property()],o.prototype,"suggestionsEnabled",void 0),t.__decorate([l.property()],o.prototype,"suffix",void 0),t.__decorate([l.property()],o.prototype,"withinViewEnabled",void 0),t.__decorate([l.property()],o.prototype,"zoomScale",void 0),o=t.__decorate([l.subclass("esri.widgets.Search.SearchSource")],o)}(r.IdentifiableMixin(p.JSONSupport))}));