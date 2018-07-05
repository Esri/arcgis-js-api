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

define(["dojo/_base/declare","dojo/_base/lang","dijit/_WidgetBase","dijit/_TemplatedMixin","./simpleInfographic/SimpleInfographic","./dynamic/DynamicInfographic","./AttachmentsInfographic","./AreaDetailsInfographic","./InterestingFactsInfographic","./locator/LocatorTableInfographic","esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes","dojo/text!../templates/InfographicContainer.html"],function(t,n,e,i,r,a,o,c,h,s,g,u){return t([e,i],{templateString:u,viewModel:null,theme:null,parentWidget:null,adjustElementsWhenResized:!1,_currentInfographic:null,getInnerInfographic:function(){return this._currentInfographic},_prepareCreationParameters:function(t){return null},_getSimpleInfographicClass:function(){return r},_getDynamicInfographicClass:function(){return a},_getAttachmentsInfographicClass:function(){return o},_getAreaDetailsInfographicClass:function(){return c},_getInterestingFactsInfographicClass:function(){return h},_getLocatorTableInfographicClass:function(){return s},updateInfographic:function(t){function e(e){return n.mixin({viewModel:i.viewModel,theme:i.theme,parentWidget:i,width:i.width,height:i.height,adjustElementsWhenResized:i.adjustElementsWhenResized,onContentLoadingStart:function(){i.onContentLoadingStart()},onContentLoadingEnd:function(){i.onContentLoadingEnd()}},i._prepareCreationParameters(t),e)}var i=this;if(this.viewDiv&&t&&g.isSupported(t.type)){if(this._type=t.type,!this._currentInfographic){switch(t.type){case g.STATIC:this._currentInfographic=new(this._getSimpleInfographicClass())(e());break;case g.ATTACHMENTS:this._currentInfographic=new(this._getAttachmentsInfographicClass())(e());break;case g.AREA_DETAILS:this._currentInfographic=new(this._getAreaDetailsInfographicClass())(e());break;case g.INTERESTING_FACTS:this._currentInfographic=new(this._getInterestingFactsInfographicClass())(e());break;case g.LOCATOR_TABLE:this._currentInfographic=new(this._getLocatorTableInfographicClass())(e());break;default:g.isDynamic(t.type)&&(this._currentInfographic=new(this._getDynamicInfographicClass())(e()))}this._currentInfographic.placeAt(this.viewDiv)}this._currentInfographic.updateInfographic(t)}},_type:null,getType:function(){return this._type},width:null,height:null,resize:function(t,n){this.width=t,this.height=n,this._currentInfographic&&this._currentInfographic.resize(t,n)},getPreferredHeight:function(){return this._currentInfographic.getPreferredHeight&&this._currentInfographic.getPreferredHeight()},collapseContent:function(){this._currentInfographic.collapseContent&&this._currentInfographic.collapseContent()},toJson:function(){return this._currentInfographic&&this._currentInfographic.toJson()},getVisualState:function(){return this._currentInfographic&&this._currentInfographic.getVisualState&&this._currentInfographic.getVisualState()},setVisualState:function(t){return this._currentInfographic&&this._currentInfographic.setVisualState&&this._currentInfographic.setVisualState(t)},notifyShown:function(){this._currentInfographic&&this._currentInfographic.notifyShown&&this._currentInfographic.notifyShown()},onContentLoadingStart:function(){},onContentLoadingEnd:function(){},destroy:function(){this._currentInfographic&&this._currentInfographic.destroy(),this.inherited(arguments)}})});