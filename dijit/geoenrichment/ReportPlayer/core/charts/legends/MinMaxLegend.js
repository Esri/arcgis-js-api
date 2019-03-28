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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","../utils/ChartStyleUtil","dojo/text!../../templates/MinMaxLegend.html","dojo/i18n!esri/nls/jsapi"],function(e,t,i,l,n,a,o,s){return s=s.geoenrichment.dijit.ReportPlayer.MinMaxLegend,e([l,n],{templateString:o,nls:s,viewModel:null,theme:null,refresh:function(e,l){var n,o,s=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;e.forEach(function(e){e.data.forEach(function(e){var t=e.originalValue;t<s&&(s=t,n=e),t>r&&(r=t,o=e)})});var d=this.viewModel.getChartDefaultStyles(this.theme),m=t.mixin({},d.minMaxLegend.titleStyle,l.legend.minMax.titleStyle),h=t.mixin({},d.minMaxLegend.minVariableLabelStyle,l.legend.minMax.minVariableLabelStyle),g=t.mixin({},d.minMaxLegend.maxVariableLabelStyle,l.legend.minMax.maxVariableLabelStyle);i.set(this.largestGroupTitleDiv,a.getStyleObjWithUnits(m)),i.set(this.smallestGroupTitleDiv,a.getStyleObjWithUnits(m)),this.largestGroupDiv.innerHTML=o.point.fieldInfo?o.point.fieldInfo.alias:o.point.label,this.smallestGroupDiv.innerHTML=n.point.fieldInfo?n.point.fieldInfo.alias:n.point.label,i.set(this.largestGroupDiv,a.getStyleObjWithUnits(g)),i.set(this.smallestGroupDiv,a.getStyleObjWithUnits(h)),g.color||(this.largestGroupDiv.style.color=o.stroke&&o.stroke.color||o.fill),h.color||(this.smallestGroupDiv.style.color=n.stroke&&n.stroke.color||n.fill)}})});