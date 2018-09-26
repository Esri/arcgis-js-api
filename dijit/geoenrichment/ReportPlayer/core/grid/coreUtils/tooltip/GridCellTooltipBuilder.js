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

define(["dojo/_base/declare","../GridDataUtil","../../../supportClasses/conditionalStyling/ConditionalStyleLegendBuilder","../../valueField/utils/ValueFieldTextTrimmer","./_ScriptExpressionBuilder","esri/dijit/geoenrichment/utils/ObjectUtil","esri/dijit/geoenrichment/utils/TooltipUtil","esri/dijit/geoenrichment/ReportPlayer/config","dojo/i18n!esri/nls/jsapi"],function(e,i,t,n,l,o,a,s,r){r=r.geoenrichment.dijit.ReportPlayer.Grid;var d=e(null,{_content:"",getContent:function(){return this._content?"<div class='esriGEAdjustableGridValueField_cellTooltipContent'>"+this._content+"</div>":null},addValue:function(e){this._content+="<div class='esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentValue'>"+e+"</div>"},addImageValue:function(e){if(!isNaN(e.currentNumberValue)&&"number"==typeof e.currentNumberValue){var i=e.numberFormatFunction?e.numberFormatFunction(e.currentNumberValue):o.formatNumber(e.currentNumberValue);this._content+="<div class='esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentValue'>"+i+"</div>"}},addAlias:function(e){this._content+="<div class='esriGERowHigh'><b>"+r.variable+"</b> "+e+"</div>"},addExpression:function(e,i,t){var n=l.buildTooltipExpression(e,i);n&&(this._content+="<div class='esriGERowHigh'>"+r.variableIsBasedOnExpression+"</div>",this._content+="<div class='esriGERowHigh'>"+n+"</div>")},addConditionalStyleLegend:function(e){var n=i.getConditionalFormatting(e),l=i.getFieldInfo(e).isImage;this._content+=t.createLegendNode(n,l?"image":"text",e.currentNumberValue).outerHTML},addTextBlock:function(e){this._content+="<div class='esriGERowHigh'>"+e+"</div>"}}),u=/<\w/,c={setDynamicTooltipToCell:function(e,t,n){var l=i.getFieldInfo(e);(e.hasOverflowText()||l&&(l.hasVariable||l.script))&&e.own(a.setTooltipToNode(e.domNode,function(){return c.renderCellTooltip(e,t,n)},{classes:"esriGEAdjustableGridValueField_cellTooltip",stayOnHover:l&&(l.script||l.expressionText)}))},renderCellTooltip:function(e,t,l){l=l||{};var o=l.getExpressionText||function(e){return s.modules.complexCellTooltips&&e.expressionText},a=n.getFullText(e),r=i.getConditionalFormatting(e),c=i.getFieldInfo(e),p=c&&(c.hasVariable||c.script),g=c&&c.isImage,m=c&&c.isRichText||a&&u.test(a),f=new d;if(!a||m||g||l.hideValue||f.addValue(a),p){f.addAlias(c.script?c.script.alias:c.alias);var v=o(c);v&&f.addExpression(v,t,l.makeExpressionExpandable)}else g&&r&&r.fieldInfo&&(!l.hideValue&&f.addImageValue(e),f.addAlias(r.fieldInfo.script?r.fieldInfo.script.alias:r.fieldInfo.alias),(v=o(r.fieldInfo))&&f.addExpression(v,t,l.makeExpressionExpandable));return r&&s.modules.complexCellTooltips&&(l.conditionalLegendDesc&&f.addTextBlock(l.conditionalLegendDesc),f.addConditionalStyleLegend(e)),f.getContent()}};return c});