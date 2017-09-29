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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","./coreUtils/GridDataUtil","../supportClasses/conditionalStyling/ConditionalStyleLegendBuilder","esri/dijit/geoenrichment/utils/ObjectUtil","esri/dijit/geoenrichment/utils/TooltipUtil"],function(i,e,t,o,l){return i(null,{_buildComplexTooltip:function(i,l,r){var n="<div>",u=e.getConditionalFormatting(this),d=e.isImageTriggerCell(this);return i&&(n+="<div>"+i+"</div>"),!d||i||isNaN(this._currentNumberValue)||"number"!=typeof this._currentNumberValue||(n+="<div>"+o.formatNumber(this._currentNumberValue)+"</div>"),l&&(n+="<div>"+l+"</div>"),r&&u&&(n+=t.createLegendNode(u,d?"image":"text",this._currentNumberValue).outerHTML),u&&(n="<div class='esriGEAdjustableGridValueField_conditionalStylingTooltip'>"+n+"</div>"),n},_IS_RICH_TEXT_RE:/<\w/,_setValueLabelTooltip:function(i){var t=this;i&&this._IS_RICH_TEXT_RE.test(i)||(e.getConditionalFormatting(this)?l.setTooltipToNode(this.domNode,function(){return t._buildComplexTooltip(i||"",null,!0)}):i&&l.setTooltipToNode(this.valueLabel,i))}})});