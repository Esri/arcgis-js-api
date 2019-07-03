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

define(["dojo/_base/declare","../GridDataUtil","../../../supportClasses/conditionalStyling/ConditionalStyleLegendBuilder","../../valueField/supportClasses/ValueFieldTextTrimmer","./_ScriptExpressionBuilder","esri/dijit/geoenrichment/utils/ObjectUtil","esri/dijit/geoenrichment/utils/TooltipUtil","esri/dijit/geoenrichment/ReportPlayer/config","dojo/i18n!esri/nls/jsapi"],function(e,i,t,n,o,l,a,s,d){d=d.geoenrichment.dijit.ReportPlayer.Grid;var r=e(null,{_content:"",getContent:function(){return this._content?"<div class='esriGEAdjustableGridValueField_cellTooltipContent'>"+this._content+"</div>":null},addValue:function(e){this._content+="<div class='esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentValue'>"+e+"</div>"},addImageValue:function(e){var t=i.getNumericCellValue(e);if(!isNaN(t)&&"number"==typeof t){var n=e.numberFormatFunction?e.numberFormatFunction(t):l.formatNumber(t);this._content+="<div class='esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentValue'>"+n+"</div>"}},addAlias:function(e){this._content+="<div class='esriGERowHigh'><b>"+d.variable+"</b> "+e+"</div>"},addExpression:function(e,i,t){var n=o.buildTooltipExpression(e,i);n&&(this._content+="<div class='esriGERowHigh'>"+d.variableIsBasedOnExpression+"</div>",this._content+="<div class='esriGERowHigh'>"+n+"</div>")},addConditionalStyleLegend:function(e){var n=i.getNumericCellValue(e),o=i.getConditionalFormatting(e),l=i.getFieldInfo(e).isImage;this._content+=t.createLegendNode(o,l?"image":"text",n).outerHTML},addTextBlock:function(e){this._content+="<div class='esriGERowHigh'>"+e+"</div>"},addSeparator:function(){this._content+="<div class='esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentSeparator'></div>"}}),c=/<\w/,u={setDynamicTooltipToCell:function(e,t,n){var o=i.getFieldInfo(e),l=i.getConditionalFormatting(e),s=l&&l.fieldInfo;if(e.hasOverflowText()||i.isVariableFieldCell(e)||i.isImageTriggerCell(e)){var d=o&&(o.script||o.expressionText)||s&&(s.script||s.expressionText);e.own(a.setTooltipToNode(e.domNode,function(){return u.renderCellTooltip(e,t,n)},{classes:"esriGEAdjustableGridValueField_cellTooltip",notRestricted:d,stayOnHover:d}))}},renderCellTooltip:function(e,t,o){o=o||{};var l=o.getExpressionText||function(e){return s.modules.complexCellTooltips&&e.expressionText},a=n.getFullText(e),d=i.getConditionalFormatting(e),u=i.getFieldInfo(e),p=u&&(u.hasVariable||u.script),g=u&&u.isImage,f=u&&u.isRichText||a&&c.test(a),m=new r;if(!a||f||g||o.hideValue||m.addValue(a),p){m.addAlias(u.script?u.script.alias:u.alias);var v=l(u);v&&m.addExpression(v,t,o.makeExpressionExpandable)}else g&&d&&d.fieldInfo&&(!o.hideValue&&m.addImageValue(e),m.addAlias(d.fieldInfo.script?d.fieldInfo.script.alias:d.fieldInfo.alias),(v=l(d.fieldInfo))&&m.addExpression(v,t,o.makeExpressionExpandable));return d&&s.modules.complexCellTooltips&&(v&&m.addSeparator(),o.conditionalLegendDesc&&m.addTextBlock(o.conditionalLegendDesc),m.addConditionalStyleLegend(e)),m.getContent()}};return u});