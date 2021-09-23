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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-class","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","dojo/text!../templates/Empty.html"],(function(t,i,e,n,s,h){return t([e,n],{templateString:h,isSection:!0,viewModel:null,json:null,initialWidth:null,initialHeight:null,isSmallSize:!1,_width:0,_height:0,postCreate:function(){this.inherited(arguments),this.json&&(this.isSmallSize=this.json.isSmallSize),this.isSmallSize&&i.add(this.domNode,"emptySmallSize"),this.initialWidth&&this.setWidth(this.initialWidth),this.initialHeight&&this.setHeight(this.initialHeight)},getSectionType:function(){return s.EMPTY},getSectionName:function(){return""},isEmpty:function(){return!0},isDataSection:function(){return!1},isPageHeader:function(){return!1},isPageFooter:function(){return!1},hasTablesThatFitHeight:function(){return!1},hasNonEmptyTables:function(){return!1},getWidth:function(){return this._width},setWidth:function(t){t=Math.max(0,t),this._width=t,this.domNode.style.width=t+"px"},getHeight:function(){return this._height},getResizedHeight:function(){return this.getHeight()},setHeight:function(t){t=Math.max(0,t),this._height=t,this.domNode.style.height=t+"px"},setViewMode:function(t){},toJson:function(){return{type:s.EMPTY,isSmallSize:this.isSmallSize}}})}));