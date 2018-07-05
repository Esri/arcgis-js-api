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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-construct","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/_Invoke","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/WaitingUtil","dojo/i18n!esri/nls/jsapi"],function(t,i,e,n,o,s,h,r,c,d){return d=d.geoenrichment.dijit.ReportPlayer.Infographics,t([o,s,h],{templateString:"<div></div>",nls:d,viewModel:null,theme:null,parentWidget:null,_section:null,_currentInfographicJson:null,updateInfographic:function(t){this.domNode&&(this._currentInfographicJson=t,this.invoke("_doUpdateContent",50))},_doUpdateContent:function(){this.domNode&&this.width&&(this._resizeContent(),this._createSection())},_resizeContent:function(){this._syncJsonDimensions(),n.set(this.domNode,{width:this.width+"px",height:this.height+"px"})},_syncJsonDimensions:function(){this._currentInfographicJson&&(this._currentInfographicJson.style.width=this.width,this._currentInfographicJson.style.height=this.height)},_createSection:function(){var t={};t.class="infographicContainer_Section",t.initialWidth=this.width,t.json=this._currentInfographicJson.sectionJson,t.viewModel=this.viewModel,t.theme=this.theme,t.tableClass="infographicContainerAreaDetailsTable",t.hasFixedLayout=!1,t.parentWidget=this,i.mixin(t,this._prepareSectionCreationParams());var e=this.viewModel.layoutBuilder.createElement("section",t,this.domNode);e.setWidth(this.width),e.setResizedHeight(this.height),e.fitContentNicely(),this._section=e},_prepareSectionCreationParams:function(t){return null},_destroySection:function(){this._section&&this._section.destroy(),this._section=null},notifyShown:function(){this._section&&this._section.notifyShown()},width:0,height:0,resize:function(t,i){void 0!==t&&(this.width=t,this.height=i),this.invoke("_doUpdateContent",50)},toJson:function(){return i.clone(this._currentInfographicJson)},destroy:function(){this._destroySection(),this.inherited(arguments)}})});