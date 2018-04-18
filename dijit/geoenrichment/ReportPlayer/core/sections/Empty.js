// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-class","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","dojo/text!../templates/Empty.html"],function(t,i,e,n,o,s,d){return t([n,o],{templateString:d,viewModel:null,json:null,initialWidth:null,isSmallSize:!1,postCreate:function(){this.inherited(arguments),this.json&&(this.isSmallSize=this.json.isSmallSize),this.isSmallSize&&i.add(this.domNode,"emptySmallSize"),this.initialWidth&&this.setWidth(this.initialWidth)},getSectionType:function(){return s.EMPTY},getSectionName:function(){return""},isEmpty:function(){return!0},isDataSection:function(){return!1},isPageHeader:function(){return!1},isPageFooter:function(){return!1},hasTablesThatFitHeight:function(){return!1},hasNonEmptyTables:function(){return!1},getWidth:function(){return e.get(this.domNode,"width")},setWidth:function(t){e.set(this.domNode,"width",t+"px")},getHeight:function(){return e.get(this.domNode,"height")},getResizedHeight:function(){return this.getHeight()},setResizedHeight:function(t){e.set(this.domNode,"height",t+"px")},setViewMode:function(t){},toJson:function(){return{type:s.EMPTY,isSmallSize:this.isSmallSize}}})});