// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/string","dojo/dom-construct","dojo/dom-geometry","esri/dijit/geoenrichment/when","dojo/i18n!../../../nls/jsapi","dojo/text!./templates/DataCollectionsPage.html","dijit/layout/ContentPane","../Pagination","./SearchTextBox"],(function(t,e,i,a,n,s,r,o){return t(null,{templateString:o,nls:r=r.geoenrichment.dijit.DataCollectionsPage,baseClass:"DataCollectionsPage",lastDataCollectionID:null,manager:null,_grid:null,postCreate:function(){this.inherited(arguments),this._grid=this.manager.createVariableGrid({groupCategories:!1},this.divVariables),this.own(this._grid),this.manager.allowShoppingCart&&(this._grid.animateSelection=e.hitch(this.manager,this.manager.animateSelection)),this.pagination.autoCenter=!0,this.pagination.scrollAnimation="slide",this.pagination.createItemContainer=function(){var t=a.create("div",{class:"DataCollectionButtonContainer"});return a.create("div",{class:"DataCollectionButton DataBrowser_Clickable TrimWithEllipses"},t),t},this.pagination.updateItemContainer=function(t,e){t.children[0].innerHTML=e.title,t.data=e}},_setPageIsActiveAttr:function(t){this._started&&(this._grid.setVariables([]),this.pagination.set("items",[]),this.txbSearch.set("value",""),t&&this._querySelectedCategory())},startup:function(){this._started||(this.inherited(arguments),this._grid.startup(),this._querySelectedCategory())},resize:function(){this.inherited(arguments),this.pagination.resize()},_querySelectedCategory:function(){var t=this;s(this.showProgress(this.manager.getCategory()),(function(e){e&&t._showCategory(e)}))},_showCategory:function(t){this._prepareCategoryTitle(t),this.spnShowAll.innerHTML=i.substitute(this.nls.showAll,{categoryName:t.name});var e=this.manager.variables.getPopularVariables(t,{sort:[{attribute:"popularity",descending:!0}],start:0,count:3});this._grid.setVariables(e);var a=this.manager.composeQuery("categoryID");this.set("items",this._getDataCollections(a,{sort:[{attribute:"title"}]}))},_getDataCollections:function(t,e){return this.manager.variables.dataCollections.query(t,e)},_prepareCategoryTitle:function(t){this.categoryName.innerHTML=i.substitute(this.nls.categoryName,{categoryName:t.name})},_setItemsAttr:function(t){if(this.pagination.set("items",t),this._started&&(this.resize(),this.lastDataCollectionID)){t=this.pagination.items;for(var e=0;e<t.length;e++){if(t[e].id==this.lastDataCollectionID){this.pagination.selectPageByItemIndex(e,!0);break}}this.lastDataCollectionID=null}},_onSelectCollection:function(t){var e=t.data;if(!this.isLeftToRight()){var i=n.position(t),a=window.innerWidth-i.x-i.w;t.style.right=a+"px"}this._animateButtonClick(t),this.isLeftToRight()||(t.style.right="auto"),this.manager.variableQuery.dataCollectionID=e.id,this.onSelect()},_animateButtonClick:function(t){return this.manager.flyAnim.fly(t.children[0],"Breadcrumb_SelectDC")},_showAll:function(){this.manager.variableQuery.searchString="*",this.onSelect()},_search:function(){var t=e.trim(this.txbSearch.get("value"));if(t){this.manager.variableQuery.searchString=t;var a=this;s(this.showProgress(this.manager.queryVariables()),(function(e){e.length?a._onSearch(e):(delete a.manager.variableQuery.searchString,a.txbSearch.showTooltip(i.substitute(a.nls.noResults,{seachKey:t})))}))}else this.txbSearch.set("value","")},_onSearch:function(t){this.onSelect(t)},onSelect:function(){}})}));