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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../core/lang","../../core/accessorSupport/decorators","../../layers/CSVLayer","../../layers/FeatureLayer","../../layers/Layer","../../layers/SceneLayer","./SearchSource","./support/featureLayerUtils"],function(e,t,r,s,a,i,l,o,u,n,p,c,h){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.displayField=null,t.exactMatch=null,t.searchFields=null,t.searchQueryParams=null,t.searchTemplate=null,t.suggestionTemplate=null,t.suggestQueryParams=null,t}r(t,e),c=t,Object.defineProperty(t.prototype,"featureLayer",{set:function(e){this._set("featureLayer",e),e&&e.load()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._getFeatureLayerTitle()||""},set:function(e){if(void 0===e)return void this._clearOverride("name");this._override("name",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new c({autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?i.clone(this.outFields):null,placeholder:this.placeholder,popupEnabled:this.popupEnabled,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,searchExtent:this.searchExtent?this.searchExtent.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,displayField:this.displayField,exactMatch:this.exactMatch,featureLayer:this.featureLayer,searchFields:this.searchFields?i.clone(this.searchFields):null,searchQueryParams:this.searchQueryParams?i.clone(this.searchQueryParams):null,suggestionTemplate:this.suggestionTemplate,suggestQueryParams:this.suggestQueryParams?i.clone(this.suggestQueryParams):null,zoomScale:this.zoomScale})},t.prototype.getResults=function(e){return h.getResults(a({source:this},e))},t.prototype.getSuggestions=function(e){return h.getSuggestions(a({source:this},e))},t.prototype._getFirstStringField=function(){var e=this.featureLayer,t="";return e&&e.fields&&e.fields.some(function(e){if("string"===e.type)return t=e.name,!0}),t},t.prototype._getDisplayField=function(){return this.displayField||this.featureLayer.displayField||this._getFirstStringField()},t.prototype._getFeatureLayerTitle=function(){var e=this,t=e.featureLayer,r=e.searchFields;if(t){var s=t.title;if(s){var a=r||[this._getDisplayField()],i="";return a.forEach(function(e,r){i+=0===r?": ":", ";var s=t.getField(e);i+=s&&s.alias||e}),""+s+i}}};var c;return s([l.property({json:{read:{source:"field.name"},write:{target:"field.name"}}})],t.prototype,"displayField",void 0),s([l.property({json:{read:{source:"field.exactMatch"},write:{target:"field.exactMatch"}}})],t.prototype,"exactMatch",void 0),s([l.property({types:{key:"type",base:n,defaultKeyValue:"feature",typeMap:{feature:u,csv:o,scene:p}},value:null})],t.prototype,"featureLayer",null),s([l.property({dependsOn:["featureLayer.title"]})],t.prototype,"name",null),s([l.property()],t.prototype,"searchFields",void 0),s([l.property()],t.prototype,"searchQueryParams",void 0),s([l.property()],t.prototype,"searchTemplate",void 0),s([l.property()],t.prototype,"suggestionTemplate",void 0),s([l.property()],t.prototype,"suggestQueryParams",void 0),t=c=s([l.subclass("esri.widgets.Search.FeatureLayerSearchSource")],t)}(l.declared(c))});