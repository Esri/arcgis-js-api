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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-construct","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/_Invoke","../supportClasses/images/DefaultAttachment","esri/dijit/geoenrichment/ImageNavigator"],function(t,i,e,n,o,a,s,r,h){function c(){return g||(g={getAttachments:function(){return[{description:"Esri headquarters in Redlands CA, summer time",getThumbnail:function(){return r}},{description:"Sample image",getThumbnail:function(){return r}},{description:"Sample image",getThumbnail:function(){return r}}]}})}var g;return t([o,a,s],{templateString:"<div data-dojo-attach-point='viewDiv'></div>",viewModel:null,theme:null,imageNavigator:null,_currentInfographicJson:null,postCreate:function(){this.inherited(arguments),this.imageNavigator=new h({showNotes:!0,showThumbnails:!1,canEditNotes:!1,canRemoveNotes:!1}).placeAt(this.viewDiv),this.own(this.imageNavigator)},updateInfographic:function(t){var i=this;if(this.viewDiv){this._currentInfographicJson=t;var e=this.viewModel.getStaticInfographicDefaultStyles(this.theme);n.set(this.viewDiv,"backgroundColor",t.style.backgroundColor||e&&e.backgroundColor),this._resizeContent(),["showNotes","showThumbnails"].forEach(function(e){void 0!==t[e]&&(i.imageNavigator[e]=t[e])}),this.invoke("_doUpdateContent",50)}},_doUpdateContent:function(){var t=this,i=this.viewModel.dynamicReportInfo?this.viewModel.dynamicReportInfo.attachmentsStore:c();this.imageNavigator.update(i,{useCircularMask:this._currentInfographicJson.useCircularMask,alwaysShowCaptions:this._currentInfographicJson.alwaysShowCaptions,scaleToCover:this._currentInfographicJson.scaleToCover,onContentLoadingStart:function(){t.onContentLoadingStart()},onContentLoadingEnd:function(){t.onContentLoadingEnd()}})},_resizeContent:function(){this._currentInfographicJson.style.width=this.width,this._currentInfographicJson.style.height=this.height,n.set(this.viewDiv,{width:this.width+"px",height:this.height+"px"}),this.imageNavigator.setHeight(this.height)},width:null,height:null,resize:function(t,i){void 0!==t&&(this.width=t,this.height=i),this.invoke("_resizeContent",50)},notifyShown:function(){},toJson:function(){return i.clone(this._currentInfographicJson)},getVisualState:function(){return{imageIndex:this.imageNavigator.getImageIndex()}},setVisualState:function(t){t&&void 0!==t.imageIndex&&this.imageNavigator.setImageIndex(t.imageIndex)},onContentLoadingStart:function(){},onContentLoadingEnd:function(){}})});