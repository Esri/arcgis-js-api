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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/lang","./SearchSource","../../core/accessorSupport/decorators"],function(e,t,o,s,r,i,l){var a=n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.categories=null,t.countryCode=null,t.localSearchOptions=null,t.locationToAddressDistance=1500,t.locator=null,t.searchTemplate="",t.singleLineFieldName=null,t}return o(t,e),t.prototype.clone=function(){return new n({autoNavigate:this.autoNavigate,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?r.clone(this.outFields):null,placeholder:this.placeholder,popup:this.popup,popupEnabled:this.popupEnabled,popupOpenOnSelect:this.popupOpenOnSelect,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,searchExtent:this.searchExtent?this.searchExtent.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,zoomScale:this.zoomScale,categories:this.categories?r.clone(this.categories):null,countryCode:this.countryCode,localSearchOptions:this.localSearchOptions?r.clone(this.localSearchOptions):null,locationToAddressDistance:this.locationToAddressDistance,locator:this.locator,searchTemplate:this.searchTemplate,singleLineFieldName:this.singleLineFieldName})},t}(l.declared(i));s([l.property()],a.prototype,"categories",void 0),s([l.property()],a.prototype,"countryCode",void 0),s([l.property()],a.prototype,"localSearchOptions",void 0),s([l.property()],a.prototype,"locationToAddressDistance",void 0),s([l.property()],a.prototype,"locator",void 0),s([l.property()],a.prototype,"searchTemplate",void 0),s([l.property()],a.prototype,"singleLineFieldName",void 0),a=n=s([l.subclass("esri.widgets.Search.LocatorSearchSource")],a);var n;return a});