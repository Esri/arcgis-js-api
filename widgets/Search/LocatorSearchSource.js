// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../core/lang","../../core/accessorSupport/decorators","../../tasks/Locator","./SearchSource","./support/locatorUtils"],function(e,t,o,r,l,s,i,n,a,p){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.categories=null,t.countryCode=null,t.defaultZoomScale=null,t.locator=null,t.locationType=null,t.name="",t.placeholder="",t.searchTemplate="",t.singleLineFieldName=null,t.suggestionsEnabled=null,t.zoomScale=null,t.getResults=function(e){return p.getResults(l({source:t},e))},t.getSuggestions=function(e){return p.getSuggestions(l({source:t},e))},t}o(t,e),a=t,t.prototype.readLocator=function(e,t){var o=t.url;return o?new n({url:o}):null},t.prototype.writeLocator=function(e,t){t.url=e?e.url:null},t.prototype.clone=function(){return new a({autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?s.clone(this.outFields):null,placeholder:this.placeholder,popupEnabled:this.popupEnabled,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,searchExtent:this.searchExtent?this.searchExtent.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,categories:this.categories?s.clone(this.categories):null,countryCode:this.countryCode,locationType:this.locationType,locator:this.locator,searchTemplate:this.searchTemplate,singleLineFieldName:this.singleLineFieldName,zoomScale:this.zoomScale})};var a;return r([i.property()],t.prototype,"categories",void 0),r([i.property()],t.prototype,"countryCode",void 0),r([i.property({json:{write:!0}})],t.prototype,"defaultZoomScale",void 0),r([i.property({type:n})],t.prototype,"locator",void 0),r([i.reader("locator",["url"])],t.prototype,"readLocator",null),r([i.writer("locator")],t.prototype,"writeLocator",null),r([i.property()],t.prototype,"locationType",void 0),r([i.property({json:{write:!0}})],t.prototype,"name",void 0),r([i.property({json:{write:!0}})],t.prototype,"placeholder",void 0),r([i.property()],t.prototype,"searchTemplate",void 0),r([i.property({json:{write:!0}})],t.prototype,"singleLineFieldName",void 0),r([i.property({json:{read:{source:"suggest"},write:{target:"suggest"}}})],t.prototype,"suggestionsEnabled",void 0),r([i.property({json:{write:!0}})],t.prototype,"zoomScale",void 0),t=a=r([i.subclass("esri.widgets.Search.LocatorSearchSource")],t)}(i.declared(a))});