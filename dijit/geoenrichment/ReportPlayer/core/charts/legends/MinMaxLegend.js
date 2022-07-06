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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","../utils/ChartStyleUtil","../utils/ChartTypes","dojo/text!../../templates/MinMaxLegend.html","dojo/i18n!esri/nls/jsapi"],(function(e,t,i,l,a,n,s,r,o){return e([l,a],{templateString:r,nls:o=o.geoenrichment.dijit.ReportPlayer.MinMaxLegend,viewModel:null,theme:null,chartType:null,refresh:function(e,l){var a,r,o,h,m=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;if(e.forEach((function(e){e.data.forEach((function(t){var i=t.originalValue;i<m&&(m=i,a=t,o=e),i>d&&(d=i,r=t,h=e)}))})),r&&a){var u=this.viewModel.getChartDefaultStyles(this.theme),p=t.mixin({},u.minMaxLegend.titleStyle,l.legend.minMax.titleStyle),g=t.mixin({},u.minMaxLegend.minVariableLabelStyle,l.legend.minMax.minVariableLabelStyle),c=t.mixin({},u.minMaxLegend.maxVariableLabelStyle,l.legend.minMax.maxVariableLabelStyle);i.set(this.largestGroupTitleDiv,n.getStyleObjWithUnits(p)),i.set(this.smallestGroupTitleDiv,n.getStyleObjWithUnits(p)),this.largestGroupDiv.innerHTML=y(r.point),this.smallestGroupDiv.innerHTML=y(a.point),i.set(this.largestGroupDiv,n.getStyleObjWithUnits(c)),i.set(this.smallestGroupDiv,n.getStyleObjWithUnits(g)),c.color||(this.largestGroupDiv.style.color=s.isLineLike(this.chartType)?h.params.stroke.color:r.fill),g.color||(this.smallestGroupDiv.style.color=s.isLineLike(this.chartType)?o.params.stroke.color:a.fill)}function y(e){var t=e.fieldInfo;return t&&(t.script?t.script.alias:t.alias)||e.label}}})}));