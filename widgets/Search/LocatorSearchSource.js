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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../core/lang","../../tasks/Locator","./SearchSource","./support/locatorUtils","../../core/accessorSupport/decorators"],function(e,t,o,s,r,i,l,n,a,p){var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.categories=null,t.countryCode=null,t.localSearchOptions=null,t.locationToAddressDistance=1500,t.locator=null,t.searchTemplate="",t.singleLineFieldName=null,t}return o(t,e),n=t,t.prototype.castLocator=function(e){return"string"==typeof e?new l({url:e}):e},t.prototype.clone=function(){return new n({autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?i.clone(this.outFields):null,placeholder:this.placeholder,popup:this.popup,popupEnabled:this.popupEnabled,popupOpenOnSelect:this.popupOpenOnSelect,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,searchExtent:this.searchExtent?this.searchExtent.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,categories:this.categories?i.clone(this.categories):null,countryCode:this.countryCode,localSearchOptions:this.localSearchOptions?i.clone(this.localSearchOptions):null,locationToAddressDistance:this.locationToAddressDistance,locator:this.locator,searchTemplate:this.searchTemplate,singleLineFieldName:this.singleLineFieldName,zoomScale:this.zoomScale})},t.prototype.getResults=function(e){return a.getResults(r({source:this},e))},t.prototype.getSuggestions=function(e){return a.getSuggestions(r({source:this},e))},s([p.property()],t.prototype,"categories",void 0),s([p.property()],t.prototype,"countryCode",void 0),s([p.property()],t.prototype,"localSearchOptions",void 0),s([p.property()],t.prototype,"locationToAddressDistance",void 0),s([p.property()],t.prototype,"locator",void 0),s([p.cast("locator")],t.prototype,"castLocator",null),s([p.property()],t.prototype,"searchTemplate",void 0),s([p.property()],t.prototype,"singleLineFieldName",void 0),t=n=s([p.subclass("esri.widgets.Search.LocatorSearchSource")],t);var n}(p.declared(n));return c});