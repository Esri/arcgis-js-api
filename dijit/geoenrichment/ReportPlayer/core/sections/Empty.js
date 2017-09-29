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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-class","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","../themes/ReportThemes","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","dojo/text!../templates/Empty.html","dojo/i18n!../../../../../nls/jsapi"],function(e,t,i,n,o,s,r,h,a,d){return d=d.geoenrichment.dijit.ReportPlayer.ReportPlayer,e([n,o],{templateString:a,nls:d,viewModel:null,json:null,initialWidth:null,isSmallSize:!1,_hasImage:!1,postCreate:function(){var e=this.viewModel.reportStyle==s.GRAPHIC;this._hasImage=e,this.json&&(this.isSmallSize=this.json.isSmallSize),this.isSmallSize&&t.add(this.domNode,"emptySmallSize"),this.initialWidth&&this.setWidth(this.initialWidth),r[this._hasImage?"show":"hide"](this.backgroundIcon),this.viewModel.dynamicReportInfo||(this.emptyBorderContainer.innerHTML=e?d.emptySectionTextGraphic:d.emptySectionText)},getSectionType:function(){return h.EMPTY},isEmpty:function(){return!0},isDataSection:function(){return!1},isPageHeader:function(){return!1},isPageFooter:function(){return!1},hasNonEmptyTables:function(){return!1},getSectionName:function(){return""},setWidth:function(e){i.set(this.domNode,"width",e+"px")},getHeight:function(){return i.get(this.domNode,"height")},getResizedHeight:function(){return this.getHeight()},setResizedHeight:function(e){this._hasImage?i.set(this.emptyBorderContainer,"paddingTop",(this.isSmallSize?0:e/2+25)+"px"):i.set(this.emptyBorderContainer,"paddingTop",(this.isSmallSize?0:e/2-25)+"px"),i.set(this.domNode,"height",e+"px")},toJson:function(){return{type:h.EMPTY,isSmallSize:this.isSmallSize}}})});