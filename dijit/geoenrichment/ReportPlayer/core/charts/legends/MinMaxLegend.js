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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","../utils/ChartStyleUtil","dojo/text!../../templates/MinMaxLegend.html","dojo/i18n!esri/nls/jsapi"],function(e,t,i,l,o,n,a,s,r,d){return d=d.geoenrichment.dijit.ReportPlayer.MinMaxLegend,e([n,a],{templateString:r,nls:d,viewModel:null,theme:null,refresh:function(e,i){var l,n,a=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;e.forEach(function(e){e.data.forEach(function(e){var t=e.originalValue;t<a&&(a=t,l=e),t>r&&(r=t,n=e)})});var d=this.viewModel.getChartDefaultStyles(this.theme),m=t.mixin({},d.minMaxLegend.titleStyle,i.legend.minMax.titleStyle),h=t.mixin({},d.minMaxLegend.minVariableLabelStyle,i.legend.minMax.minVariableLabelStyle),g=t.mixin({},d.minMaxLegend.maxVariableLabelStyle,i.legend.minMax.maxVariableLabelStyle);o.set(this.largestGroupTitleDiv,s.getStyleObjWithUnits(m)),o.set(this.smallestGroupTitleDiv,s.getStyleObjWithUnits(m)),this.largestGroupDiv.innerHTML=n.point.fieldInfo?n.point.fieldInfo.alias:n.point.label,this.smallestGroupDiv.innerHTML=l.point.fieldInfo?l.point.fieldInfo.alias:l.point.label,o.set(this.largestGroupDiv,s.getStyleObjWithUnits(g)),o.set(this.smallestGroupDiv,s.getStyleObjWithUnits(h)),g.color||(this.largestGroupDiv.style.color=n.stroke&&n.stroke.color||n.fill),h.color||(this.smallestGroupDiv.style.color=l.stroke&&l.stroke.color||l.fill)}})});