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

define(["require","exports","tslib","../../core/accessorSupport/decorators","../Widget","./SearchViewModel","../support/widget"],(function(e,r,s,t,l,o,i){var n="esri-search-result-renderer esri-widget",u="esri-widget__anchor",d="esri-search-result-renderer__more-results--show-more-results",c="esri-search-result-renderer__more-results",a="esri-search-result-renderer__more-results-list",h="esri-search-result-renderer__more-results-item",p="esri-search-result-renderer__more-results-list-header";return function(e){function r(r,s){var t=e.call(this,r,s)||this;return t.messages=null,t.showMoreResultsOpen=!1,t.viewModel=null,t}return s.__extends(r,e),r.prototype.render=function(){var e,r=((e={})[d]=this.showMoreResultsOpen,e);return i.tsx("div",{class:n},i.tsx("div",{key:"esri-search-renderer__container",class:this.classes(c,r)},this.renderSearchResultName(),this.renderMoreResults()))},r.prototype.renderMoreResults=function(){return i.tsx("div",{key:"esri-search-renderer__more-results"},this.renderMoreResultsButton(),this.renderMoreResultsLists())},r.prototype.renderSearchResultName=function(){var e,r=null===(e=this.viewModel)||void 0===e?void 0:e.selectedResult,s=r&&r.name||"";return i.tsx("div",{key:"esri-search-renderer__result-name",class:h},s)},r.prototype.renderMoreResultsLists=function(){var e,r=this,s=null===(e=this.viewModel)||void 0===e?void 0:e.results;if(this.viewModel.resultCount<2)return null;var t=s.map((function(e){return r.renderMoreResultsList(e)}));return i.tsx("div",{key:"esri-search-renderer__more-results-container",class:a},t)},r.prototype.renderMoreResultsButton=function(){var e=this.messages;return this.viewModel.resultCount<2?null:i.tsx("div",{key:"esri-search-renderer__more-results-button",class:h},i.tsx("a",{class:u,href:"#",bind:this,onclick:this._showMoreResultsClick,onkeydown:this._showMoreResultsClick},this.showMoreResultsOpen?e.hideMoreResults:e.showMoreResults))},r.prototype.renderMoreResultsHeader=function(e,r){return i.tsx("div",{key:"esri-search-result-renderer__header-"+r,class:p},e)},r.prototype.renderMoreResultsList=function(e){var r,s,t=this,l=e.results,o=l.length,n=!!o,u=null===(r=this.viewModel)||void 0===r?void 0:r.selectedResult,d=1===o&&l[0]===u,c=this._getSourceName(e.source,e.sourceIndex),a=(null===(s=this.viewModel)||void 0===s?void 0:s.results.length)>1&&!d?this.renderMoreResultsHeader(c,e.sourceIndex):null,h=n&&l.map((function(e,r){return t.renderMoreResultsListItem(e,r)})),p=n&&!d?i.tsx("ul",{key:"esri-search-result-renderer__list-"+e.sourceIndex},h):null;return n?i.tsx("div",{key:"esri-search-result-renderer__results-"+e.sourceIndex},a,p):null},r.prototype.renderMoreResultsListItem=function(e,r){return e!==this.get("viewModel.selectedResult")?i.tsx("li",{key:"esri-search-result-renderer__list-item-"+r},i.tsx("a",{class:u,href:"#",tabindex:"0",bind:this,"data-result":e,onclick:this._selectResultClick,onkeydown:this._selectResultClick},e.name)):null},r.prototype._showMoreResultsClick=function(e){e.preventDefault(),this.showMoreResultsOpen=!this.showMoreResultsOpen;var r=this.get("viewModel.view.popup");r&&r.reposition()},r.prototype._selectResultClick=function(e){e.preventDefault();var r=e.currentTarget["data-result"];this.viewModel&&this.viewModel.select(r)},r.prototype._getSourceName=function(e,r){return r===o.ALL_INDEX?this.messages.all:e.name},s.__decorate([t.property(),i.renderable(),i.messageBundle("esri/widgets/Search/t9n/Search")],r.prototype,"messages",void 0),s.__decorate([i.renderable(),t.property()],r.prototype,"showMoreResultsOpen",void 0),s.__decorate([t.property(),i.renderable(["viewModel.results","viewModel.selectedResult","viewModel.resultCount"])],r.prototype,"viewModel",void 0),s.__decorate([i.accessibleHandler()],r.prototype,"_showMoreResultsClick",null),s.__decorate([i.accessibleHandler()],r.prototype,"_selectResultClick",null),r=s.__decorate([t.subclass("esri.widgets.Search.SearchResultRenderer")],r)}(l)}));