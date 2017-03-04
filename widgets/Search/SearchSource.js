// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/Identifiable","dojo/i18n!./nls/Search"],function(e,o,r,t,p,i,n,l){var a=function(e){function o(o){var r=e.call(this)||this;return r.autoNavigate=!0,r.maxResults=6,r.maxSuggestions=6,r.minSuggestCharacters=1,r.outFields=null,r.placeholder="",r.popup=null,r.popupEnabled=!0,r.popupOpenOnSelect=!0,r.prefix="",r.resultGraphicEnabled=!0,r.resultSymbol=null,r.searchExtent=null,r.suggestionsEnabled=!0,r.suffix="",r.withinViewEnabled=!1,r.zoomScale=null,r}return r(o,e),Object.defineProperty(o.prototype,"name",{get:function(){return this.name||l.untitledSource},enumerable:!0,configurable:!0}),o}(p.declared(i,n));return t([p.property()],a.prototype,"autoNavigate",void 0),t([p.property()],a.prototype,"maxResults",void 0),t([p.property()],a.prototype,"maxSuggestions",void 0),t([p.property()],a.prototype,"minSuggestCharacters",void 0),t([p.property()],a.prototype,"name",null),t([p.property()],a.prototype,"outFields",void 0),t([p.property()],a.prototype,"placeholder",void 0),t([p.property()],a.prototype,"popup",void 0),t([p.property()],a.prototype,"popupEnabled",void 0),t([p.property()],a.prototype,"popupOpenOnSelect",void 0),t([p.property()],a.prototype,"prefix",void 0),t([p.property()],a.prototype,"resultGraphicEnabled",void 0),t([p.property()],a.prototype,"resultSymbol",void 0),t([p.property()],a.prototype,"searchExtent",void 0),t([p.property()],a.prototype,"suggestionsEnabled",void 0),t([p.property()],a.prototype,"suffix",void 0),t([p.property()],a.prototype,"withinViewEnabled",void 0),t([p.property()],a.prototype,"zoomScale",void 0),a=t([p.subclass("esri.widgets.Search.SearchSource")],a)});