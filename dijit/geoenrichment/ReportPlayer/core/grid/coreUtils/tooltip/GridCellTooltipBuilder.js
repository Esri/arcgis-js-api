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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","../GridDataUtil","../../../supportClasses/conditionalStyling/ConditionalStyleLegendBuilder","../../valueField/utils/ValueFieldTextTrimmer","./_ScriptExpressionBuilder","esri/dijit/geoenrichment/utils/ObjectUtil","esri/dijit/geoenrichment/utils/TooltipUtil","esri/dijit/geoenrichment/ReportPlayer/config","dojo/i18n!esri/nls/jsapi"],function(e,i,t,l,n,o,s,a,d){d=d.geoenrichment.dijit.ReportPlayer.Grid;var r=e(null,{_content:"",getContent:function(){return this._content?"<div class='esriGEAdjustableGridValueField_cellTooltipContent'>"+this._content+"</div>":null},addValue:function(e){this._content+="<div class='esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentValue'>"+e+"</div>"},addImageValue:function(e){var t=i.getNumericCellValue(e);if(!isNaN(t)&&"number"==typeof t){var l=e.numberFormatFunction?e.numberFormatFunction(t):o.formatNumber(t);this._content+="<div class='esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentValue'>"+l+"</div>"}},addAlias:function(e){this._content+="<div class='esriGERowHigh'><b>"+d.variable+"</b> "+e+"</div>"},addExpression:function(e,i,t){var l=n.buildTooltipExpression(e,i);l&&(this._content+="<div class='esriGERowHigh'>"+d.variableIsBasedOnExpression+"</div>",this._content+="<div class='esriGERowHigh'>"+l+"</div>")},addConditionalStyleLegend:function(e){var l=i.getNumericCellValue(e),n=i.getConditionalFormatting(e),o=i.getFieldInfo(e).isImage;this._content+=t.createLegendNode(n,o?"image":"text",l).outerHTML},addTextBlock:function(e){this._content+="<div class='esriGERowHigh'>"+e+"</div>"}}),c=/<\w/,u={setDynamicTooltipToCell:function(e,t,l){var n=i.getFieldInfo(e);(e.hasOverflowText()||i.isVariableFieldCell(e)||i.isImageTriggerCell(e))&&e.own(s.setTooltipToNode(e.domNode,function(){return u.renderCellTooltip(e,t,l)},{classes:"esriGEAdjustableGridValueField_cellTooltip",stayOnHover:n&&(n.script||n.expressionText)}))},renderCellTooltip:function(e,t,n){n=n||{};var o=n.getExpressionText||function(e){return a.modules.complexCellTooltips&&e.expressionText},s=l.getFullText(e),d=i.getConditionalFormatting(e),u=i.getFieldInfo(e),p=u&&(u.hasVariable||u.script),g=u&&u.isImage,f=u&&u.isRichText||s&&c.test(s),m=new r;if(!s||f||g||n.hideValue||m.addValue(s),p){m.addAlias(u.script?u.script.alias:u.alias);var v=o(u);v&&m.addExpression(v,t,n.makeExpressionExpandable)}else g&&d&&d.fieldInfo&&(!n.hideValue&&m.addImageValue(e),m.addAlias(d.fieldInfo.script?d.fieldInfo.script.alias:d.fieldInfo.alias),(v=o(d.fieldInfo))&&m.addExpression(v,t,n.makeExpressionExpandable));return d&&a.modules.complexCellTooltips&&(n.conditionalLegendDesc&&m.addTextBlock(n.conditionalLegendDesc),m.addConditionalStyleLegend(e)),m.getContent()}};return u});