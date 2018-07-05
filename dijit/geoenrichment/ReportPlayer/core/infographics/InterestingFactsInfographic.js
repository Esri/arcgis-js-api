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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-construct","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/_Invoke","./utils/InfographicThemeUtil","esri/dijit/geoenrichment/utils/DomUtil","dojo/text!../templates/InterestingFactsInfographic.html","dojo/i18n!esri/nls/jsapi"],function(t,e,n,i,o,s,h,r,l,c,a){return a=a.geoenrichment.dijit.ReportPlayer.Infographics,t([o,s,h],{templateString:c,nls:a,viewModel:null,theme:null,_currentInfographicJson:null,postCreate:function(){this.inherited(arguments)},updateInfographic:function(t){if(this.domNode){this._currentInfographicJson=this._applyThemeToJson(t);var e=this.viewModel.getStaticInfographicDefaultStyles(this.theme);i.set(this.domNode,"backgroundColor",t.style.backgroundColor||e&&e.backgroundColor),this.invoke("_doUpdateContent",50)}},_resizeContent:function(){this._syncJsonDimensions(),i.set(this.domNode,{width:this.width+"px",height:this.height+"px"})},_syncJsonDimensions:function(){this._currentInfographicJson},_doUpdateContent:function(){this._resizeContent()},_getAttributesStyle:function(){return this.__getContentStyle("attributesStyle")},_getNotesStyle:function(){return this.__getContentStyle("notesStyle")},__getContentStyle:function(t){var n=this.viewModel.getDocumentDefaultStyles(this.theme);return e.mixin({},n,this.viewModel.getTableDefaultStyles(this.theme,"Default"),this._currentInfographicJson[t])},notifyShown:function(){},width:null,height:null,resize:function(t,e){this.width=t,this.height=e,this._syncJsonDimensions(),this.invoke("_doUpdateContent",50)},_applyThemeToJson:function(t){var e=this.viewModel.getStaticInfographicDefaultStyles(this.theme);return r.applyThemeSettingsToJson(t,e)},toJson:function(){return e.clone(this._currentInfographicJson)},destroy:function(){this.inherited(arguments)}})});