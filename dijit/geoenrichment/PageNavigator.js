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

define(["dojo/_base/declare","dojo/on","dojo/string","dojo/dom-class","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/NodeLabelEditor","dojo/text!./templates/PageNavigator.html","dojo/i18n!../../nls/jsapi"],(function(e,t,i,n,a,s,r,o,u,g,d){return e([s,r],{templateString:g,nls:d=d.geoenrichment.dijit.ReportPlayer.PageNavigator,hideForSinglePage:!0,showArrows:!0,_labelEditor:null,_showAsBullets:!1,_currentPageIndex:0,postCreate:function(){var e=this;this.inherited(arguments),this.showAsBullets(!1),this._labelEditor=new u({numericOnly:!0,onApply:function(t){e._showPageAt(t-1),e._updatePageNavigator()},onCancel:function(){e._updatePageNavigator()}}),this.showArrows?(t(this.prevPageButton,"click",(function(){e._showPrevPage()})),t(this.nextPageButton,"click",(function(){e._showNextPage()}))):o.hide([this.prevPageButton,this.nextPageButton]),t(this.currentPageLabel,"click",(function(){e._labelEditor.range={min:1,max:e.getNumPages()},e._labelEditor.editNodeLabel({node:e.currentPageLabel,initialText:e._currentPageIndex+1})}))},_updatePageNavigator:function(){var e=this.getNumPages();if(o[1==e&&this.hideForSinglePage?"hide":"show"](this.domNode),this._showAsBullets){this.bulletsBlock.innerHTML="";for(var s=0;s<e;s++){var r=a.create("div",{class:"dijitInline pageNavigator_bulletNode "+(s===this._currentPageIndex?"bulletNodeCurrentPage":"")},this.bulletsBlock);s!==this._currentPageIndex&&t(r,"click",this._showPageAt.bind(this,s))}}else this.currentPageLabel.innerHTML=i.substitute(d.currentPageOutOfN,{current:this._currentPageIndex+1,total:e}),n[0===this._currentPageIndex?"add":"remove"](this.prevPageButton,"disabled"),n[this._currentPageIndex===e-1?"add":"remove"](this.nextPageButton,"disabled")},_showPrevPage:function(){0!==this._currentPageIndex&&this.setCurrentPageIndex(this._currentPageIndex-1,!0)},_showNextPage:function(){this._currentPageIndex!==this.getNumPages()-1&&this.setCurrentPageIndex(this._currentPageIndex+1,!0)},_showPageAt:function(e){e<0||e>this.getNumPages()-1||e===this._currentPageIndex||this.setCurrentPageIndex(e,!0)},getCurrentPageIndex:function(){return this._currentPageIndex},getNumPages:function(){return 0},setCurrentPageIndex:function(e,t){this._currentPageIndex=e,this._updatePageNavigator(),t&&this.onPageChanged(this._currentPageIndex)},showAsBullets:function(e){this._showAsBullets=e,o.hide([this.textBlock,this.bulletsBlock]),o.show(e?this.bulletsBlock:this.textBlock),this._updatePageNavigator()},reset:function(){this.setCurrentPageIndex(0)},onPageChanged:function(e){}})}));