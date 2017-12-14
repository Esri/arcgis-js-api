// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../coreUtils/GridDataUtil","../../supportClasses/conditionalStyling/ConditionalStyleLegendBuilder","esri/dijit/geoenrichment/utils/ObjectUtil","esri/dijit/geoenrichment/utils/TooltipUtil"],function(e,i,t,o){var l={buildComplexTooltip:function(o,l,r,n){var u=o,d="<div>",a=e.getConditionalFormatting(u),s=e.isImageTriggerCell(u);return l&&(d+="<div>"+l+"</div>"),!s||l||isNaN(u._currentNumberValue)||"number"!=typeof u._currentNumberValue||(d+="<div>"+t.formatNumber(u._currentNumberValue)+"</div>"),r&&(d+="<div>"+r+"</div>"),n&&a&&(d+=i.createLegendNode(a,s?"image":"text",u._currentNumberValue).outerHTML),a&&(d="<div class='esriGEAdjustableGridValueField_conditionalStylingTooltip'>"+d+"</div>"),d},_IS_RICH_TEXT_RE:/<\w/,setValueLabelTooltip:function(i,t){t&&l._IS_RICH_TEXT_RE.test(t)||(e.getConditionalFormatting(i)?o.setTooltipToNode(i.domNode,function(){return l.buildComplexTooltip(t||"",null,!0)}):t&&o.setTooltipToNode(i.valueLabel,t))}};return l});