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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../core/lang","../../core/accessorSupport/decorators","./SearchSource","./support/layerSearchUtils"],(function(e,t,r,s,i,a,l,o,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.displayField=null,t.exactMatch=null,t.orderByFields=null,t.searchFields=null,t.searchQueryParams=null,t.searchTemplate=null,t.suggestionTemplate=null,t.suggestQueryParams=null,t.getResults=function(e,r){return n.getResults(i({source:t},e),r)},t.getSuggestions=function(e,r){return n.getSuggestions(i({source:t},e),r)},t}var o;return r(t,e),o=t,Object.defineProperty(t.prototype,"layer",{set:function(e){this._set("layer",e),e&&e.load().catch((function(){}))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._getLayerTitle()||""},set:function(e){void 0!==e?this._override("name",e):this._clearOverride("name")},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new o({autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?a.clone(this.outFields):null,placeholder:this.placeholder,popupEnabled:this.popupEnabled,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,searchExtent:this.searchExtent?this.searchExtent.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,displayField:this.displayField,exactMatch:this.exactMatch,layer:this.layer,searchFields:this.searchFields?a.clone(this.searchFields):null,searchQueryParams:this.searchQueryParams?a.clone(this.searchQueryParams):null,suggestionTemplate:this.suggestionTemplate,suggestQueryParams:this.suggestQueryParams?a.clone(this.suggestQueryParams):null,zoomScale:this.zoomScale})},t.prototype._getFirstStringField=function(){var e=this.layer,t="";return e&&e.fields&&e.fields.some((function(e){return"string"===e.type&&(t=e.name,!0)})),t},t.prototype._getDisplayField=function(){return this.displayField||this.layer.displayField||this._getFirstStringField()},t.prototype._getSearchFieldsString=function(){var e=this.layer,t=this.searchFields;return e.loaded?": "+(t||[this._getDisplayField()]).map((function(t){var r=e.getField(t);return r&&r.alias||t})).join(", "):""},t.prototype._getLayerTitle=function(){var e=this.layer;if(e){var t=e.title;if(t)return""+t+this._getSearchFieldsString()}},s([l.property({json:{read:{source:"field.name"},write:{target:"field.name"}}})],t.prototype,"displayField",void 0),s([l.property({json:{read:{source:"field.exactMatch"},write:{target:"field.exactMatch"}}})],t.prototype,"exactMatch",void 0),s([l.property({value:null})],t.prototype,"layer",null),s([l.property({dependsOn:["layer.title","layer.loaded"]})],t.prototype,"name",null),s([l.property({type:[String],json:{write:!0}})],t.prototype,"orderByFields",void 0),s([l.property()],t.prototype,"searchFields",void 0),s([l.property()],t.prototype,"searchQueryParams",void 0),s([l.property()],t.prototype,"searchTemplate",void 0),s([l.property()],t.prototype,"suggestionTemplate",void 0),s([l.property()],t.prototype,"suggestQueryParams",void 0),t=o=s([l.subclass("esri.widgets.Search.LayerSearchSource")],t)}(l.declared(o))}));