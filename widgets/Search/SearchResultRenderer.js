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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./nls/Search","../../core/accessorSupport/decorators","../Widget","./SearchViewModel","../support/widget"],function(e,s,r,t,l,o,u,i,n){var c={base:"esri-search-result-renderer esri-widget",showMoreResults:"esri-search-result-renderer__more-results--show-more-results",moreResults:"esri-search-result-renderer__more-results",moreResultsList:"esri-search-result-renderer__more-results-list",moreResultsHeader:"esri-search-result-renderer__more-results-header",moreResultsItem:"esri-search-result-renderer__more-results-item",moreResultsListHeader:"esri-search-result-renderer__more-results-list-header"};return function(e){function s(s){var r=e.call(this)||this;return r.showMoreResultsOpen=!1,r.viewModel=null,r}return r(s,e),s.prototype.render=function(){var e=this,s=this.get("viewModel.selectedResult"),r=this.get("viewModel.results"),t=s&&s.name||"",o=this._countResults(r),u=o>1,i=u&&r.map(function(s){return e._moreResultsList(s)}),d=u?n.tsx("div",{key:"esri-search-renderer__more-results-button",class:c.moreResultsItem},n.tsx("a",{href:"#",bind:this,onclick:this._showMoreResultsClick,onkeydown:this._showMoreResultsClick},this.showMoreResultsOpen?l.hideMoreResults:l.showMoreResults)):null,a=u?n.tsx("div",{key:"esri-search-renderer__more-results-container",class:c.moreResultsList},i):null,h=(p={},p[c.showMoreResults]=this.showMoreResultsOpen,p);return n.tsx("div",{class:c.base},n.tsx("div",{key:"esri-search-renderer__container",class:c.moreResults,classes:h},n.tsx("div",{key:"esri-search-renderer__result-name",class:c.moreResultsItem},t),n.tsx("div",{key:"esri-search-renderer__more-results"},d,a)));var p},s.prototype._showMoreResultsClick=function(e){e.preventDefault(),this.showMoreResultsOpen=!this.showMoreResultsOpen;var s=this.get("viewModel.view.popup");s&&s.reposition()},s.prototype._selectResultClick=function(e){e.preventDefault();var s=e.currentTarget,r=s["data-result"];this.viewModel&&this.viewModel.select(r)},s.prototype._moreResultsList=function(e){var s=this,r=e.results,t=r.length,l=!!t,o=this.get("viewModel.selectedResult"),u=1===t&&r[0]===o,i=this._getSourceName(e.source,e.sourceIndex),d=this.get("viewModel.results").length>1&&!u?n.tsx("div",{key:"esri-search-result-renderer__header-"+e.sourceIndex,class:c.moreResultsListHeader},i):null,a=l&&r.map(function(e,r){return s._moreResultsListItem(e,r)}),h=l&&!u?n.tsx("ul",{key:"esri-search-result-renderer__list-"+e.sourceIndex},a):null;return l?n.tsx("div",{key:"esri-search-result-renderer__results-"+e.sourceIndex},d,h):null},s.prototype._moreResultsListItem=function(e,s){return e!==this.get("viewModel.selectedResult")?n.tsx("li",{key:"esri-search-result-renderer__list-item-"+s},n.tsx("a",{href:"#",tabindex:"0",bind:this,"data-result":e,onclick:this._selectResultClick,onkeydown:this._selectResultClick},e.name)):null},s.prototype._getSourceName=function(e,s){return s===i.ALL_INDEX?l.all:e.name},s.prototype._countResults=function(e){return e?e.reduce(function(e,s){return e+s.results.length},0):0},t([n.renderable(),o.property()],s.prototype,"showMoreResultsOpen",void 0),t([o.property(),n.renderable(["viewModel.results","viewModel.selectedResult"])],s.prototype,"viewModel",void 0),t([n.accessibleHandler()],s.prototype,"_showMoreResultsClick",null),t([n.accessibleHandler()],s.prototype,"_selectResultClick",null),s=t([o.subclass("esri.widgets.Search.SearchResultRenderer")],s)}(o.declared(u))});