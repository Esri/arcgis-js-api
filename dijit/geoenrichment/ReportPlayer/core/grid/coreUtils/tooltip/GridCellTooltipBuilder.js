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

define(["dojo/_base/declare","../GridDataUtil","../../../supportClasses/conditionalStyling/ConditionalStyleLegendBuilder","../../valueFieldUtils/ValueFieldTextTrimmer","./_ScriptExpressionBuilder","esri/dijit/geoenrichment/utils/ObjectUtil","esri/dijit/geoenrichment/utils/TooltipUtil","dojo/i18n!esri/nls/jsapi"],function(e,i,t,n,l,o,a,s){s=s.geoenrichment.dijit.ReportPlayer.Grid;var r=e(null,{_content:"",getContent:function(){return this._content?"<div class='esriGEAdjustableGridValueField_cellTooltipContent'>"+this._content+"</div>":null},addValue:function(e){this._content+="<div class='esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentValue'>"+e+"</div>"},addImageValue:function(e){if(!isNaN(e.currentNumberValue)&&"number"==typeof e.currentNumberValue){var i=e.numberFormatFunction?e.numberFormatFunction(e.currentNumberValue):o.formatNumber(e.currentNumberValue);this._content+="<div class='esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentValue'>"+i+"</div>"}},addAlias:function(e){this._content+="<div class='esriGERowHigh'><b>"+s.variable+"</b> "+e+"</div>"},addExpression:function(e,i,t){var n=l.buildTooltipExpression(e,i);n&&(this._content+="<div class='esriGERowHigh'>"+s.variableIsBasedOnExpression+"</div>",this._content+="<div class='esriGERowHigh'>"+n+"</div>")},addConditionalStyleLegend:function(e){var n=i.getConditionalFormatting(e),l=i.getFieldInfo(e).isImage;this._content+=t.createLegendNode(n,l?"image":"text",e.currentNumberValue).outerHTML},addTextBlock:function(e){this._content+="<div class='esriGERowHigh'>"+e+"</div>"}}),d=/<\w/,u={setDynamicTooltipToCell:function(e,t,n){var l=i.getFieldInfo(e);(e.hasOverflowText()||l&&(l.hasVariable||l.script))&&e.own(a.setTooltipToNode(e.domNode,function(){return u.renderCellTooltip(e,t,n)},{classes:"esriGEAdjustableGridValueField_cellTooltip",stayOnHover:l&&(l.script||l.expressionText)}))},renderCellTooltip:function(e,t,l){l=l||{};var o=l.getExpressionText||function(e){return e.expressionText},a=n.getFullText(e),s=i.getConditionalFormatting(e),u=i.getFieldInfo(e),c=u&&(u.hasVariable||u.script),p=u&&u.isImage,g=u&&u.isRichText||a&&d.test(a),f=new r;if(!a||g||p||l.hideValue||f.addValue(a),c){f.addAlias(u.script?u.script.alias:u.alias);var m=o(u);m&&f.addExpression(m,t,l.makeExpressionExpandable)}else p&&s&&s.fieldInfo&&(!l.hideValue&&f.addImageValue(e),f.addAlias(s.fieldInfo.script?s.fieldInfo.script.alias:s.fieldInfo.alias),(m=o(s.fieldInfo))&&f.addExpression(m,t,l.makeExpressionExpandable));return s&&(l.conditionalLegendDesc&&f.addTextBlock(l.conditionalLegendDesc),f.addConditionalStyleLegend(e)),f.getContent()}};return u});