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

define(["require","exports","tslib","../../core/lang","../../core/accessorSupport/decorators","../../tasks/Locator","./SearchSource","./support/locatorUtils"],(function(e,t,o,r,s,i,l,a){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.categories=null,t.countryCode=null,t.defaultZoomScale=null,t.locator=null,t.locationType=null,t.name="",t.placeholder="",t.searchTemplate="",t.singleLineFieldName=null,t.suggestionsEnabled=null,t.zoomScale=null,t.getResults=function(e,r){return a.getResults(o.__assign({source:t},e),r)},t.getSuggestions=function(e,r){return a.getSuggestions(o.__assign({source:t},e),r)},t}var l;return o.__extends(t,e),l=t,t.prototype.readLocator=function(e,t){var o=t.url;return o?new i({url:o}):null},t.prototype.writeLocator=function(e,t){t.url=e?e.url:null},t.prototype.clone=function(){return new l({autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?r.clone(this.outFields):null,placeholder:this.placeholder,popupEnabled:this.popupEnabled,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,categories:this.categories?r.clone(this.categories):null,countryCode:this.countryCode,locationType:this.locationType,locator:this.locator,searchTemplate:this.searchTemplate,singleLineFieldName:this.singleLineFieldName,zoomScale:this.zoomScale})},o.__decorate([s.property()],t.prototype,"categories",void 0),o.__decorate([s.property()],t.prototype,"countryCode",void 0),o.__decorate([s.property({json:{write:!0}})],t.prototype,"defaultZoomScale",void 0),o.__decorate([s.property({type:i})],t.prototype,"locator",void 0),o.__decorate([s.reader("locator",["url"])],t.prototype,"readLocator",null),o.__decorate([s.writer("locator")],t.prototype,"writeLocator",null),o.__decorate([s.property()],t.prototype,"locationType",void 0),o.__decorate([s.property({json:{write:!0}})],t.prototype,"name",void 0),o.__decorate([s.property({json:{write:!0}})],t.prototype,"placeholder",void 0),o.__decorate([s.property()],t.prototype,"searchTemplate",void 0),o.__decorate([s.property({json:{write:!0}})],t.prototype,"singleLineFieldName",void 0),o.__decorate([s.property({json:{read:{source:"suggest"},write:{target:"suggest"}}})],t.prototype,"suggestionsEnabled",void 0),o.__decorate([s.property({json:{write:!0}})],t.prototype,"zoomScale",void 0),t=l=o.__decorate([s.subclass("esri.widgets.Search.LocatorSearchSource")],t)}(l)}));