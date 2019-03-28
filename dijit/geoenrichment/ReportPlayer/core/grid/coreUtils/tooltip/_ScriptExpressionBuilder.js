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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/ObjectUtil"],function(e){var i=/\s*/g,r=/(!.*?!|\+|\-|\*|\/|\(|\)|\^|\d+\.\d+|\d+)/g,l=/___.*?___/g,a=/___(.*?)___/g,t=/!/g,n=/\d+/;return{buildTooltipExpression:function(e,i){var r=this._maskAndValidateExpressionText(e,i);if(!r||!r.length)return null;var l="";return r.forEach(function(e){e.variable?l+="<div class='dijitInline'><div class='esriGEAdjustableGrid_cellTooltip_expressionVariable'>"+e.variable.alias+"</div></div>":e.operator?l+="<div class='dijitInline esriGEAdjustableGrid_cellTooltip_expressionOperator'>"+e.operator+"</div>":void 0!==e.number&&(l+="<div class='dijitInline esriGEAdjustableGrid_cellTooltip_expressionNumber'>"+e.number+"</div>")}),"<div class='esriGEAdjustableGrid_cellTooltip_expression'>"+l+"</div>"},_maskAndValidateExpressionText:function(s,d){return s=s.replace(i,""),s=s.replace(r,"___$1___"),s.replace(l,"").length?null:s.match(l).map(function(i){return i=i.replace(a,"$1"),0===i.indexOf("!")?{variable:d.get(i.replace(t,""))}:i.match(n)?{number:e.formatNumber(Number(i))}:{operator:i}})}}});