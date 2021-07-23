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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/TriStateItem","esri/dijit/geoenrichment/utils/MouseUtil","dojo/text!../../../templates/sectionDynamicSettings/MapSettings.html","dojo/i18n!esri/nls/jsapi"],(function(e,i,t,n,s,o,d){return e([i,t],{templateString:o,nls:d=d.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,postCreate:function(){this.showLegendCheckbox=new n(this.showLegendCheckboxLabel),this.showLegendCheckbox.onClick=function(){this.onLegendVisibilityChanged(this.showLegendCheckbox.get("checked"))}.bind(this)},setLegendVisible:function(e){this.showLegendCheckbox.set("checked",e)},onLegendVisibilityChanged:function(e){},setVisualState:function(e){this.showLegendCheckbox.set("checked",e&&e.showLegend)},isMouseOver:function(e){return s.isMouseOver(this.domNode)}})}));