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

define(["dojo/string","dojo/dom-class","dojo/dom-construct","dojo/dom-style","../images/ImageDataHolder","./ConditionalStyleUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],function(e,n,i,t,r,a,o,l){l=l.geoenrichment.dijit.ReportPlayer.ConditionalLegend;var s={},d={"=":"equals","<":"less",">":"greater","<=":"lessOrEquals",">=":"greaterOrEquals"};return s.createLegendNode=function(s,c,g){function u(n){function i(e){var n=o.parseNumber(e);return isNaN(n)?e:o.formatNumber(n)}if(!n.compareInfos||!n.compareInfos.length)return!1;if("image"===c&&"default"===n.compareInfos[0].value)return l.conditionalLegend_default;var t=n.compareInfos.map(function(n){return e.substitute(l["conditionalLegend_operator_"+d[n.operator]],{value:i(n.value)})});return 1===t.length?t[0]:e.substitute(l.conditionalLegend_interval,{from:t[0],to:t[1]})}function m(e,a,o){var s=i.create("div",{class:"dijitInline"},o);if("image"===c){i.create("div",{class:"esriGEConditionalStylingLegend_symbolImage dijitInline"},s).style.backgroundImage="url("+(r.getImageData(e.setters[0].value)||"")+")"}else"chart"===c?(n.add(s,"esriGEConditionalStylingLegend_symbolChart"),t.set(s,a)):(n.add(s,"esriGEConditionalStylingLegend_text"),s.innerHTML=l.conditionalLegend_preview,t.set(s,a))}if(!c)return null;var f=i.create("div",{class:"esriGEConditionalStylingLegend esriGEConditionalStylingLegend_"+c});i.create("div",{class:"esriGEConditionalStylingLegend_row",innerHTML:l.conditionalLegend_title},f);var v=a.getMatchedCase(g,s);return s.cases.some(function(e){var t=u(e),r=a.styleFromSetters(e.setters);if(t&&r){var o=i.create("div",{class:"esriGEConditionalStylingLegend_row"},f);m(e,r,o),i.create("div",{class:"dijitInline esriGESpaceBeforeBig",innerHTML:t},o),v===e&&n.add(o,"esriGEConditionalStylingLegend_currentValue")}}),f},s});