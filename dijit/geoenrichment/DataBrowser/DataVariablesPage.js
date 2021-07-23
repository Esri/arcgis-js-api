// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/string","esri/dijit/geoenrichment/when","dojo/i18n!../../../nls/jsapi","dojo/text!./templates/DataVariablesPage.html","dijit/layout/ContentPane"],(function(e,a,t,i,s,r){return e(null,{templateString:r,nls:s=s.geoenrichment.dijit.DataVariablesPage,baseClass:"DataVariablesPage",searchResults:null,manager:null,_grid:null,postCreate:function(){this.inherited(arguments),this._grid=this.manager.createVariableGrid({groupCategories:!0},this.divTree),this.manager.allowShoppingCart&&(this._grid.animateSelection=a.hitch(this.manager,this.manager.animateSelection))},_setPageIsActiveAttr:function(e){this._started&&(this._grid.setVariables([]),e&&this._querySelectedVariables())},startup:function(){this._started||(this.inherited(arguments),this._grid.startup(),this._querySelectedVariables())},_querySelectedVariables:function(){this.varCountNode.innerHTML="";var e=this.searchResults||this.manager.queryVariables();this.searchResults=null,i(this.showProgress(e),a.hitch(this,this._showVariables))},_showVariables:function(e){this._composeVarTitle(e.length),this._grid.setVariables(e)},_composeVarTitle:function(e){var a=this.manager.variableQuery,i=a.searchString,r=a.dataCollectionID?this.manager.getDataCollection()||{}:a.categoryID?this.manager.getCategory()||{}:null;"*"==i&&r&&(i=null);var n=r?i?s.searchInGroupVariables:s.groupVariables:a.favorites?s.favoriteVariables:"*"==i?s.allVariables:s.searchVariables,l={searchKey:i,groupName:r&&(r.title||r.name||"?")};this.varCountNode.innerHTML=t.substitute(n,l)+" ("+e+")";var h=["c:"+(a.countryID||"_")];l.searchKey&&h.push("s:"+l.searchKey),l.groupName&&h.push("g:"+l.groupName),a.favorites&&h.push("f"),this._grid.queryID=h.join("/")}})}));