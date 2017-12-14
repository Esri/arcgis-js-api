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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../core/lang","../../tasks/Locator","./SearchSource","./support/locatorUtils","../../core/accessorSupport/decorators"],function(e,t,o,r,s,l,i,n,p,a){var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.categories=null,t.countryCode=null,t.localSearchOptions=null,t.locationToAddressDistance=1500,t.locator=null,t.name="",t.placeholder="",t.searchTemplate="",t.singleLineFieldName=null,t.suggestionsEnabled=null,t.zoomScale=null,t}return o(t,e),n=t,t.prototype.readLocator=function(e,t){var o=t.url;return o?new i({url:o}):null},t.prototype.writeLocator=function(e,t){t.url=e?e.url:null},t.prototype.clone=function(){return new n({autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?l.clone(this.outFields):null,placeholder:this.placeholder,popup:this.popup,popupEnabled:this.popupEnabled,popupOpenOnSelect:this.popupOpenOnSelect,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,searchExtent:this.searchExtent?this.searchExtent.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,categories:this.categories?l.clone(this.categories):null,countryCode:this.countryCode,localSearchOptions:this.localSearchOptions?l.clone(this.localSearchOptions):null,locationToAddressDistance:this.locationToAddressDistance,locator:this.locator,searchTemplate:this.searchTemplate,singleLineFieldName:this.singleLineFieldName,zoomScale:this.zoomScale})},t.prototype.getResults=function(e){return p.getResults(s({source:this},e))},t.prototype.getSuggestions=function(e){return p.getSuggestions(s({source:this},e))},r([a.property()],t.prototype,"categories",void 0),r([a.property()],t.prototype,"countryCode",void 0),r([a.property()],t.prototype,"localSearchOptions",void 0),r([a.property()],t.prototype,"locationToAddressDistance",void 0),r([a.property({type:i})],t.prototype,"locator",void 0),r([a.reader("locator",["url"])],t.prototype,"readLocator",null),r([a.writer("locator")],t.prototype,"writeLocator",null),r([a.property({json:{write:!0}})],t.prototype,"name",void 0),r([a.property({json:{write:!0}})],t.prototype,"placeholder",void 0),r([a.property()],t.prototype,"searchTemplate",void 0),r([a.property({json:{write:!0}})],t.prototype,"singleLineFieldName",void 0),r([a.property({json:{read:{source:"suggest"},write:{target:"suggest"}}})],t.prototype,"suggestionsEnabled",void 0),r([a.property({json:{write:!0}})],t.prototype,"zoomScale",void 0),t=n=r([a.subclass("esri.widgets.Search.LocatorSearchSource")],t);var n}(a.declared(n));return c});