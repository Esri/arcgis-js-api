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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../Widget","../support/widget","./SearchViewModel","dojo/i18n!./nls/Search"],function(e,r,s,t,l,o,u,i,n){var c={base:"esri-search-result-renderer esri-widget",showMoreResults:"esri-search-result-renderer__more-results--show-more-results",moreResults:"esri-search-result-renderer__more-results",moreResultsList:"esri-search-result-renderer__more-results-list",moreResultsHeader:"esri-search-result-renderer__more-results-header",moreResultsItem:"esri-search-result-renderer__more-results-item",moreResultsListHeader:"esri-search-result-renderer__more-results-list-header"},a=function(e){function r(r){var s=e.call(this)||this;return s.showMoreResultsOpen=!1,s.viewModel=null,s}return s(r,e),r.prototype.render=function(){var e=this,r=this.get("viewModel.selectedResult"),s=this.get("viewModel.results"),t=r&&r.name||"",l=this._countResults(s),o=l>1,i=o&&s.map(function(r){return e._moreResultsList(r)}),a=o?u.jsxFactory.createElement("div",{key:"esri-search-renderer__more-results-button","class":c.moreResultsItem},u.jsxFactory.createElement("a",{href:"#",bind:this,onclick:this._showMoreResultsClick,onkeydown:this._showMoreResultsClick},this.showMoreResultsOpen?n.hideMoreResults:n.showMoreResults)):null,d=o?u.jsxFactory.createElement("div",{key:"esri-search-renderer__more-results-container","class":c.moreResultsList},i):null,h=(m={},m[c.showMoreResults]=this.showMoreResultsOpen,m);return u.jsxFactory.createElement("div",{"class":c.base},u.jsxFactory.createElement("div",{key:"esri-search-renderer__container","class":c.moreResults,classes:h},u.jsxFactory.createElement("div",{key:"esri-search-renderer__result-name","class":c.moreResultsItem},t),u.jsxFactory.createElement("div",{key:"esri-search-renderer__more-results"},a,d)));var m},r.prototype._showMoreResultsClick=function(e){e.preventDefault(),this.showMoreResultsOpen=!this.showMoreResultsOpen;var r=this.get("viewModel.view.popup");r&&r.reposition()},r.prototype._selectResultClick=function(e){e.preventDefault();var r=e.currentTarget,s=r["data-result"];this.viewModel&&this.viewModel.select(s)},r.prototype._moreResultsList=function(e){var r=this,s=e.results,t=s.length,l=!!t,o=this.get("viewModel.selectedResult"),i=1===t&&s[0]===o,n=this._getSourceName(e.source,e.sourceIndex),a=this.get("viewModel.results").length>1&&!i?u.jsxFactory.createElement("div",{key:"esri-search-result-renderer__header-"+e.sourceIndex,"class":c.moreResultsListHeader},n):null,d=l&&s.map(function(e,s){return r._moreResultsListItem(e,s)}),h=l&&!i?u.jsxFactory.createElement("ul",{key:"esri-search-result-renderer__list-"+e.sourceIndex},d):null,m=l?u.jsxFactory.createElement("div",{key:"esri-search-result-renderer__results-"+e.sourceIndex},a,h):null;return m},r.prototype._moreResultsListItem=function(e,r){var s=this.get("viewModel.selectedResult"),t=e!==s?u.jsxFactory.createElement("li",{key:"esri-search-result-renderer__list-item-"+r},u.jsxFactory.createElement("a",{href:"#",tabindex:"0",bind:this,"data-result":e,onclick:this._selectResultClick,onkeydown:this._selectResultClick},e.name)):null;return t},r.prototype._getSourceName=function(e,r){return r===i.ALL_INDEX?n.all:e.name},r.prototype._countResults=function(e){return e?e.reduce(function(e,r){return e+r.results.length},0):0},r}(l.declared(o));return t([u.renderable(),l.property()],a.prototype,"showMoreResultsOpen",void 0),t([l.property(),u.renderable(["viewModel.results","viewModel.selectedResult"])],a.prototype,"viewModel",void 0),t([u.accessibleHandler()],a.prototype,"_showMoreResultsClick",null),t([u.accessibleHandler()],a.prototype,"_selectResultClick",null),a=t([l.subclass("esri.widgets.Search.SearchResultRenderer")],a)});