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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/lang","./SearchSource","dojo/i18n!./nls/Search","../../core/accessorSupport/decorators"],function(e,t,r,s,a,i,o,l){var u=p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.displayField=null,t.exactMatch=!1,t.featureLayer=null,t.searchFields=null,t.searchQueryParams=null,t.suggestionTemplate=null,t.suggestQueryParams=null,t.zoomScale=null,t}return r(t,e),Object.defineProperty(t.prototype,"name",{get:function(){return this.name||this._getFeatureLayerName()||o.untitledSource},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new p({autoNavigate:this.autoNavigate,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?a.clone(this.outFields):null,placeholder:this.placeholder,popup:this.popup,popupEnabled:this.popupEnabled,popupOpenOnSelect:this.popupOpenOnSelect,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,searchExtent:this.searchExtent?this.searchExtent.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,zoomScale:this.zoomScale,displayField:this.displayField,exactMatch:this.exactMatch,featureLayer:this.featureLayer,searchFields:this.searchFields?a.clone(this.searchFields):null,searchQueryParams:this.searchQueryParams?a.clone(this.searchQueryParams):null,suggestionTemplate:this.suggestionTemplate,suggestQueryParams:this.suggestQueryParams?a.clone(this.suggestQueryParams):null})},t.prototype._getFirstStringField=function(){var e=this.featureLayer,t="";return e&&e.fields.some(function(e){return"string"===e.type?(t=e.name,!0):void 0}),t},t.prototype._getDisplayField=function(){return this.displayField||this.featureLayer.displayField||this._getFirstStringField()},t.prototype._getFeatureLayerName=function(){var e=this.featureLayer;if(e){var t=e.title,r=this.searchFields||[this._getDisplayField()];return r.forEach(function(r,s){t+=0===s?": ":", ";var a=e.getField(r);t+=a&&a.alias||r}),t}},t}(l.declared(i));s([l.property()],u.prototype,"displayField",void 0),s([l.property()],u.prototype,"exactMatch",void 0),s([l.property()],u.prototype,"featureLayer",void 0),s([l.property()],u.prototype,"name",null),s([l.property()],u.prototype,"searchFields",void 0),s([l.property()],u.prototype,"searchQueryParams",void 0),s([l.property()],u.prototype,"suggestionTemplate",void 0),s([l.property()],u.prototype,"suggestQueryParams",void 0),s([l.property()],u.prototype,"zoomScale",void 0),u=p=s([l.subclass("esri.widgets.Search.FeatureLayerSearchSource")],u);var p;return u});