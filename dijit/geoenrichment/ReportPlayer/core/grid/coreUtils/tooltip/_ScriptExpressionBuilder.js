// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/ObjectUtil"],(function(e){var r=/\s*/g,i=/(!.*?!|\+|\-|\*|\/|\(|\)|\^|\d+\.\d+|\d+)/g,a=/___.*?___/g,t=/___(.*?)___/g,l=/!/g,n=/\d+/;return{buildTooltipExpression:function(e,r){var i=Array.isArray(e)?this._validateExpression(e,r):this._maskAndValidateExpressionText(e,r);if(!i||!i.length)return null;for(var a="",t=0,l=i.length;t<l;t++){var n=i[t],s=i[t+1];"*"!==n.operator&&"/"!==n.operator||!s||"1"!==s.number?n.variableAlias?a+="<div class='dijitInline'><div class='esriGEAdjustableGrid_cellTooltip_expressionVariable'>"+n.variableAlias+"</div></div>":n.operator?a+="<div class='dijitInline esriGEAdjustableGrid_cellTooltip_expressionOperator'>"+n.operator+"</div>":void 0!==n.number&&(a+="<div class='dijitInline esriGEAdjustableGrid_cellTooltip_expressionNumber'>"+n.number+"</div>"):t++}return"<div class='esriGEAdjustableGrid_cellTooltip_expression'>"+a+"</div>"},_maskAndValidateExpressionText:function(s,o){return(s=(s=s.replace(r,"")).replace(i,"___$1___")).replace(a,"").length?null:s.match(a).map((function(r){if(0===(r=r.replace(t,"$1")).indexOf("!")){var i=o.get(r.replace(l,""));return{variableAlias:i&&i.alias||"N/A"}}return r.match(n)?{number:e.formatNumber(Number(r))}:{operator:r}}))},_validateExpression:function(r,i){return r.map((function(r){if(r.variable){var a=i.get(r.variable.fullName);return{variableAlias:a&&a.alias||"N/A"}}return"number"==typeof r.name||"string"==typeof r.name&&r.name.match(n)?{number:e.formatNumber(Number(r.name))}:{operator:r.name}}))}}}));