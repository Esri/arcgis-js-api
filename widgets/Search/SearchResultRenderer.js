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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../Widget","../support/widget","./SearchViewModel","dojo/i18n!./nls/Search"],function(e,s,r,t,l,o,u,i,n){var c={base:"esri-search-result-renderer esri-widget",showMoreResults:"esri-search-result-renderer__more-results--show-more-results",moreResults:"esri-search-result-renderer__more-results",moreResultsList:"esri-search-result-renderer__more-results-list",moreResultsHeader:"esri-search-result-renderer__more-results-header",moreResultsItem:"esri-search-result-renderer__more-results-item",moreResultsListHeader:"esri-search-result-renderer__more-results-list-header"},d=function(e){function s(s){var r=e.call(this)||this;return r.showMoreResultsOpen=!1,r.viewModel=null,r}return r(s,e),s.prototype.render=function(){var e=this,s=this.get("viewModel.selectedResult"),r=this.get("viewModel.results"),t=s&&s.name||"",l=this._countResults(r),o=l>1,i=o&&r.map(function(s){return e._moreResultsList(s)}),d=o?u.tsx("div",{key:"esri-search-renderer__more-results-button","class":c.moreResultsItem},u.tsx("a",{href:"#",bind:this,onclick:this._showMoreResultsClick,onkeydown:this._showMoreResultsClick},this.showMoreResultsOpen?n.hideMoreResults:n.showMoreResults)):null,a=o?u.tsx("div",{key:"esri-search-renderer__more-results-container","class":c.moreResultsList},i):null,h=(p={},p[c.showMoreResults]=this.showMoreResultsOpen,p);return u.tsx("div",{"class":c.base},u.tsx("div",{key:"esri-search-renderer__container","class":c.moreResults,classes:h},u.tsx("div",{key:"esri-search-renderer__result-name","class":c.moreResultsItem},t),u.tsx("div",{key:"esri-search-renderer__more-results"},d,a)));var p},s.prototype._showMoreResultsClick=function(e){e.preventDefault(),this.showMoreResultsOpen=!this.showMoreResultsOpen;var s=this.get("viewModel.view.popup");s&&s.reposition()},s.prototype._selectResultClick=function(e){e.preventDefault();var s=e.currentTarget,r=s["data-result"];this.viewModel&&this.viewModel.select(r)},s.prototype._moreResultsList=function(e){var s=this,r=e.results,t=r.length,l=!!t,o=this.get("viewModel.selectedResult"),i=1===t&&r[0]===o,n=this._getSourceName(e.source,e.sourceIndex),d=this.get("viewModel.results").length>1&&!i?u.tsx("div",{key:"esri-search-result-renderer__header-"+e.sourceIndex,"class":c.moreResultsListHeader},n):null,a=l&&r.map(function(e,r){return s._moreResultsListItem(e,r)}),h=l&&!i?u.tsx("ul",{key:"esri-search-result-renderer__list-"+e.sourceIndex},a):null,p=l?u.tsx("div",{key:"esri-search-result-renderer__results-"+e.sourceIndex},d,h):null;return p},s.prototype._moreResultsListItem=function(e,s){var r=this.get("viewModel.selectedResult"),t=e!==r?u.tsx("li",{key:"esri-search-result-renderer__list-item-"+s},u.tsx("a",{href:"#",tabindex:"0",bind:this,"data-result":e,onclick:this._selectResultClick,onkeydown:this._selectResultClick},e.name)):null;return t},s.prototype._getSourceName=function(e,s){return s===i.ALL_INDEX?n.all:e.name},s.prototype._countResults=function(e){return e?e.reduce(function(e,s){return e+s.results.length},0):0},t([u.renderable(),l.property()],s.prototype,"showMoreResultsOpen",void 0),t([l.property(),u.renderable(["viewModel.results","viewModel.selectedResult"])],s.prototype,"viewModel",void 0),t([u.accessibleHandler()],s.prototype,"_showMoreResultsClick",null),t([u.accessibleHandler()],s.prototype,"_selectResultClick",null),s=t([l.subclass("esri.widgets.Search.SearchResultRenderer")],s)}(l.declared(o));return d});