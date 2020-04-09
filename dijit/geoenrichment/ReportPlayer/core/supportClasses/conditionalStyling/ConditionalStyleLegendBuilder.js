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

define(["dojo/string","dojo/dom-class","dojo/dom-construct","dojo/dom-style","../images/ImageDataHolder","./ConditionalStyleUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],(function(e,n,t,i,r,a,o,l){l=l.geoenrichment.dijit.ReportPlayer.ConditionalLegend;var s={},d={"=":"equals","<":"less",">":"greater","<=":"lessOrEquals",">=":"greaterOrEquals"};return s.createLegendNode=function(s,g,c){if(!g)return null;var u=t.create("div",{class:"esriGEConditionalStylingLegend esriGEConditionalStylingLegend_"+g});t.create("div",{class:"esriGEConditionalStylingLegend_row",innerHTML:l.conditionalLegend_title},u);var m=a.getMatchedCase(c,s);return s.cases.some((function(s){var c=function(n){if(!n.compareInfos||!n.compareInfos.length)return!1;if("image"===g&&"default"===n.compareInfos[0].value)return l.conditionalLegend_default;function t(e){var n=o.parseNumber(e);return isNaN(n)?e:o.formatNumber(n)}var i=n.compareInfos.map((function(n){return e.substitute(l["conditionalLegend_operator_"+d[n.operator]],{value:t(n.value)})}));return 1===i.length?i[0]:e.substitute(l.conditionalLegend_interval,{from:i[0],to:i[1]})}(s),f=a.styleFromSetters(s.setters);if(c&&f){var v=t.create("div",{class:"esriGEConditionalStylingLegend_row"},u);!function(e,a,o){var s=t.create("div",{class:"dijitInline"},o);"image"===g?t.create("div",{class:"esriGEConditionalStylingLegend_symbolImage dijitInline"},s).style.backgroundImage="url("+(r.getImageData(e.setters[0].value)||"")+")":"chart"===g?(n.add(s,"esriGEConditionalStylingLegend_symbolChart"),s.style.backgroundImage="none",i.set(s,a)):(n.add(s,"esriGEConditionalStylingLegend_text"),s.innerHTML=l.conditionalLegend_preview,s.style.backgroundImage="none",i.set(s,a))}(s,f,v),t.create("div",{class:"dijitInline esriGESpaceBeforeBig",innerHTML:c},v),m===s&&n.add(v,"esriGEConditionalStylingLegend_currentValue")}})),u},s}));