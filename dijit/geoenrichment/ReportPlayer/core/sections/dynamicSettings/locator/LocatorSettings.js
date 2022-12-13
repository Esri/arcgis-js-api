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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/lists/FlowCheckList","esri/dijit/geoenrichment/utils/MouseUtil","dojo/text!../../../templates/sectionDynamicSettings/LocatorSettings.html","dojo/i18n!esri/nls/jsapi"],(function(i,t,e,s,n,o,m){return i([t,e],{templateString:o,nls:m=m.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,summaryList:null,_provideSummaryList:function(){var i=this;this.summaryList||(this.summaryList=new s({class:"esriGEFlowListSpacedOut",onSelectionChanged:function(){i.onLocatorSummaryChanged({visibleFields:i.summaryList.getSelection()})}},this.summaryListDiv),this.own(this.summaryList))},setSummaryInfos:function(i){var t=[],e=[];i.forEach((function(i){e.push({value:i.fieldName,label:i.label}),i.visible&&t.push(i.fieldName)})),this._provideSummaryList(),this.summaryList.set("items",e),this.summaryList.setSelection(t)},isMouseOver:function(i){return n.isMouseOver(this.domNode)},onLocatorSummaryChanged:function(i){},setVisualState:function(i){i&&i.summaryInfos&&this.setSummaryInfos(i.summaryInfos)}})}));