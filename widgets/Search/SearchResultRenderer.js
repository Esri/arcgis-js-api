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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./nls/Search","../../core/accessorSupport/decorators","../Widget","./SearchViewModel","../support/widget"],(function(e,s,r,t,l,o,i,u,n){var c="esri-search-result-renderer esri-widget",d="esri-widget__anchor",a="esri-search-result-renderer__more-results--show-more-results",h="esri-search-result-renderer__more-results",p="esri-search-result-renderer__more-results-list",_="esri-search-result-renderer__more-results-item",w="esri-search-result-renderer__more-results-list-header";return function(e){function s(s){var r=e.call(this,s)||this;return r.showMoreResultsOpen=!1,r.viewModel=null,r}return r(s,e),s.prototype.render=function(){var e,s=this,r=this.get("viewModel.selectedResult"),t=this.get("viewModel.results"),o=r&&r.name||"",i=this._countResults(t)>1,u=i&&t.map((function(e){return s._moreResultsList(e)})),w=i?n.tsx("div",{key:"esri-search-renderer__more-results-button",class:_},n.tsx("a",{class:d,href:"#",bind:this,onclick:this._showMoreResultsClick,onkeydown:this._showMoreResultsClick},this.showMoreResultsOpen?l.hideMoreResults:l.showMoreResults)):null,v=i?n.tsx("div",{key:"esri-search-renderer__more-results-container",class:p},u):null,R=((e={})[a]=this.showMoreResultsOpen,e);return n.tsx("div",{class:c},n.tsx("div",{key:"esri-search-renderer__container",class:this.classes(h,R)},n.tsx("div",{key:"esri-search-renderer__result-name",class:_},o),n.tsx("div",{key:"esri-search-renderer__more-results"},w,v)))},s.prototype._showMoreResultsClick=function(e){e.preventDefault(),this.showMoreResultsOpen=!this.showMoreResultsOpen;var s=this.get("viewModel.view.popup");s&&s.reposition()},s.prototype._selectResultClick=function(e){e.preventDefault();var s=e.currentTarget["data-result"];this.viewModel&&this.viewModel.select(s)},s.prototype._moreResultsList=function(e){var s=this,r=e.results,t=r.length,l=!!t,o=this.get("viewModel.selectedResult"),i=1===t&&r[0]===o,u=this._getSourceName(e.source,e.sourceIndex),c=this.get("viewModel.results").length>1&&!i?n.tsx("div",{key:"esri-search-result-renderer__header-"+e.sourceIndex,class:w},u):null,d=l&&r.map((function(e,r){return s._moreResultsListItem(e,r)})),a=l&&!i?n.tsx("ul",{key:"esri-search-result-renderer__list-"+e.sourceIndex},d):null;return l?n.tsx("div",{key:"esri-search-result-renderer__results-"+e.sourceIndex},c,a):null},s.prototype._moreResultsListItem=function(e,s){return e!==this.get("viewModel.selectedResult")?n.tsx("li",{key:"esri-search-result-renderer__list-item-"+s},n.tsx("a",{class:d,href:"#",tabindex:"0",bind:this,"data-result":e,onclick:this._selectResultClick,onkeydown:this._selectResultClick},e.name)):null},s.prototype._getSourceName=function(e,s){return s===u.ALL_INDEX?l.all:e.name},s.prototype._countResults=function(e){return e?e.reduce((function(e,s){return e+s.results.length}),0):0},t([n.renderable(),o.property()],s.prototype,"showMoreResultsOpen",void 0),t([o.property(),n.renderable(["viewModel.results","viewModel.selectedResult"])],s.prototype,"viewModel",void 0),t([n.accessibleHandler()],s.prototype,"_showMoreResultsClick",null),t([n.accessibleHandler()],s.prototype,"_selectResultClick",null),s=t([o.subclass("esri.widgets.Search.SearchResultRenderer")],s)}(o.declared(i))}));