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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","require","dojo/dom-construct","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/_Invoke","esri/dijit/geoenrichment/ImageNavigator"],function(t,i,e,n,o,a,s,r,h,d){function g(){return u||(u={_loadLogo:function(){var t=new e;return n(["../supportClasses/images/DefaultAttachment"],function(i){t.resolve(i)}),t.promise},getAttachments:function(){var t=this;return[{description:"Esri headquarters in Redlands CA, summer time",getThumbnail:function(){return t._loadLogo()}},{description:"Sample image",getThumbnail:function(){return t._loadLogo()}},{description:"Sample image",getThumbnail:function(){return t._loadLogo()}}]}})}var u;return t([s,r,h],{templateString:"<div data-dojo-attach-point='viewDiv'></div>",viewModel:null,theme:null,imageNavigator:null,_currentInfographicJson:null,postCreate:function(){this.inherited(arguments),this.imageNavigator=new d({showNotes:!0,showThumbnails:!1,canEditNotes:!1,canRemoveNotes:!1}).placeAt(this.viewDiv),this.own(this.imageNavigator)},updateInfographic:function(t){var i=this;if(this.viewDiv){this._currentInfographicJson=t;var e=this.viewModel.getStaticInfographicDefaultStyles(this.theme);a.set(this.viewDiv,"backgroundColor",t.style.backgroundColor||e&&e.backgroundColor),this._resizeContent(),["showNotes","showThumbnails"].forEach(function(e){void 0!==t[e]&&(i.imageNavigator[e]=t[e])}),this.invoke("_doUpdateContent",50)}},_doUpdateContent:function(){var t=this,i=this.viewModel.dynamicReportInfo?this.viewModel.dynamicReportInfo.attachmentsStore:g();this.imageNavigator.update(i,{useCircularMask:this._currentInfographicJson.useCircularMask,alwaysShowCaptions:this._currentInfographicJson.alwaysShowCaptions,scaleToCover:this._currentInfographicJson.scaleToCover,onContentLoadingStart:function(){t.onContentLoadingStart()},onContentLoadingEnd:function(){t.onContentLoadingEnd()}})},_resizeContent:function(){this.domNode&&this.width&&(this._currentInfographicJson.style.width=this.width,this._currentInfographicJson.style.height=this.height,a.set(this.viewDiv,{width:this.width+"px",height:this.height+"px"}),this.imageNavigator.setHeight(this.height))},width:null,height:null,resize:function(t,i){void 0!==t&&(this.width=t,this.height=i),this.invoke("_resizeContent",50)},notifyShown:function(){},toJson:function(){return i.clone(this._currentInfographicJson)},getVisualState:function(){return{imageIndex:this.imageNavigator.getImageIndex()}},setVisualState:function(t){t&&void 0!==t.imageIndex&&this.imageNavigator.setImageIndex(t.imageIndex)},onContentLoadingStart:function(){},onContentLoadingEnd:function(){}})});