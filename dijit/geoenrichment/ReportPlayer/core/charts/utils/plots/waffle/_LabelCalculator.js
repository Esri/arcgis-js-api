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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["../labelsRendering/LabelsUtil"],(function(e){return{getValueLabelInfo:function(o,l,t){var a,i=l.series.waffleValueFont||l.series.dataLabelsFont;a=l.series.waffleValueFontColorFromConditionalStyling?o.fill:l.series.waffleValueFontColor||l.series.dataLabelsColor;var n=l.series.waffleValueFontSize||(t.isSingle?50:13),r=e.getSimpleLabelInfo({text:void 0!==t.progress?o.tooltip.formatFunc(o.tooltip.value*t.progress):o.tooltip.valueLabel,font:i,fontSize:n,fontColor:a,textDecoration:l.series.waffleValueTextDecoration});return r.isValue=!0,r},getPointLabelInfo:function(o,l,t){var a,i=l.series.waffleLabelFont||l.series.dataLabelsFont;a=l.series.waffleLabelFontColorFromConditionalStyling?o.fill:l.series.waffleLabelFontColor||l.series.dataLabelsColor;var n=l.series.waffleLabelFontSize||(t.isSingle?30:13),r=e.getSimpleLabelInfo({text:o.tooltip.label,font:i,fontSize:n,fontColor:a,textDecoration:l.series.waffleLabelTextDecoration});return r.isLabel=!0,r}}}));