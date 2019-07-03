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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","../utils/ChartStyleUtil","../utils/ChartTypes","dojo/text!../../templates/MinMaxLegend.html","dojo/i18n!esri/nls/jsapi"],function(e,t,i,l,a,n,s,r,o){return o=o.geoenrichment.dijit.ReportPlayer.MinMaxLegend,e([l,a],{templateString:r,nls:o,viewModel:null,theme:null,chartType:null,refresh:function(e,l){function a(e){var t=e.fieldInfo;return t&&(t.script?t.script.alias:t.alias)||e.label}var r,o,h,m,d=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY;e.forEach(function(e){e.data.forEach(function(t){var i=t.originalValue;i<d&&(d=i,r=t,h=e),i>u&&(u=i,o=t,m=e)})});var p=this.viewModel.getChartDefaultStyles(this.theme),g=t.mixin({},p.minMaxLegend.titleStyle,l.legend.minMax.titleStyle),c=t.mixin({},p.minMaxLegend.minVariableLabelStyle,l.legend.minMax.minVariableLabelStyle),y=t.mixin({},p.minMaxLegend.maxVariableLabelStyle,l.legend.minMax.maxVariableLabelStyle);i.set(this.largestGroupTitleDiv,n.getStyleObjWithUnits(g)),i.set(this.smallestGroupTitleDiv,n.getStyleObjWithUnits(g)),this.largestGroupDiv.innerHTML=a(o.point),this.smallestGroupDiv.innerHTML=a(r.point),i.set(this.largestGroupDiv,n.getStyleObjWithUnits(y)),i.set(this.smallestGroupDiv,n.getStyleObjWithUnits(c)),y.color||(this.largestGroupDiv.style.color=s.isLineLike(this.chartType)?m.params.stroke.color:o.fill),c.color||(this.smallestGroupDiv.style.color=s.isLineLike(this.chartType)?h.params.stroke.color:r.fill)}})});