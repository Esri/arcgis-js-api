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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/text!../../../templates/sectionDynamicSettings/ComparisonSettings.html","dojo/i18n!esri/nls/jsapi"],function(t,i,e,n,o,s){return s=s.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,t([e,n],{templateString:o,nls:s,_isChartShownFlag:!0,postCreate:function(){var t=this;this.inherited(arguments),i(this.toggleViewButton,"click",function(){t._isChartShownFlag=!t._isChartShownFlag,t._updateControlsForView(),t.onShowChart(t._isChartShownFlag)})},_updateControlsForView:function(){this.toggleViewButton.innerHTML=this._isChartShownFlag?s.viewTable:s.viewChart},setSettings:function(t){this._isChartShownFlag=t.isChartView,this._updateControlsForView()},setVisualState:function(t){var i=t&&t.stackElements[0]&&t.stackElements[0].cells&&t.stackElements[0].cells[0];i&&(this._isChartShownFlag=i.isChartView,this._updateControlsForView())},onShowChart:function(t){}})});