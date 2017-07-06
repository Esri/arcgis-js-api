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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/Identifiable"],function(e,p,o,t,r,i,l){var a=function(e){function p(p){var o=e.call(this)||this;return o.autoNavigate=!0,o.filter=null,o.maxResults=6,o.maxSuggestions=6,o.minSuggestCharacters=1,o.name="",o.outFields=null,o.placeholder="",o.popup=null,o.popupEnabled=!0,o.popupTemplate=null,o.popupOpenOnSelect=!0,o.prefix="",o.resultGraphicEnabled=!0,o.resultSymbol=null,o.searchExtent=null,o.suggestionsEnabled=!0,o.suffix="",o.withinViewEnabled=!1,o.zoomScale=null,o}return o(p,e),p}(r.declared(i,l));return t([r.property()],a.prototype,"autoNavigate",void 0),t([r.property()],a.prototype,"filter",void 0),t([r.property()],a.prototype,"maxResults",void 0),t([r.property()],a.prototype,"maxSuggestions",void 0),t([r.property()],a.prototype,"minSuggestCharacters",void 0),t([r.property()],a.prototype,"name",void 0),t([r.property()],a.prototype,"outFields",void 0),t([r.property()],a.prototype,"placeholder",void 0),t([r.property()],a.prototype,"popup",void 0),t([r.property()],a.prototype,"popupEnabled",void 0),t([r.property()],a.prototype,"popupTemplate",void 0),t([r.property()],a.prototype,"popupOpenOnSelect",void 0),t([r.property()],a.prototype,"prefix",void 0),t([r.property()],a.prototype,"resultGraphicEnabled",void 0),t([r.property()],a.prototype,"resultSymbol",void 0),t([r.property()],a.prototype,"searchExtent",void 0),t([r.property()],a.prototype,"suggestionsEnabled",void 0),t([r.property()],a.prototype,"suffix",void 0),t([r.property()],a.prototype,"withinViewEnabled",void 0),t([r.property()],a.prototype,"zoomScale",void 0),a=t([r.subclass("esri.widgets.Search.SearchSource")],a)});