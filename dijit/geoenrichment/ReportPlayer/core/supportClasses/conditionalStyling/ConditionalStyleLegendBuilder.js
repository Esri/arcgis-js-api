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

define(["dojo/string","dojo/dom-class","dojo/dom-construct","dojo/dom-style","../images/ImageDataHolder","./ConditionalStyleUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],function(e,i,n,t,r,a,o,s){s=s.geoenrichment.dijit.ReportPlayer.ConditionalLegend;var l={},d={"=":"equals","<":"less",">":"greater","<=":"lessOrEquals",">=":"greaterOrEquals"};return l.createLegendNode=function(l,c,g){function u(i){function n(e){var i=o.parseNumber(e);return isNaN(i)?e:o.formatNumber(i)}if(!i.compareInfos||!i.compareInfos.length)return!1;if("image"===c&&"default"===i.compareInfos[0].value)return s.conditionalLegend_default;var t=i.compareInfos.map(function(i){return e.substitute(s["conditionalLegend_operator_"+d[i.operator]],{value:n(i.value)})});return 1===t.length?t[0]:e.substitute(s.conditionalLegend_interval,{from:t[0],to:t[1]})}function m(e,a,o){var l=n.create("div",{class:"esriGEConditionalStylingLegend_symbol dijitInline"},o);if("image"===c){n.create("div",{class:"esriGEConditionalStylingLegend_symbolImage dijitInline"},l).style.backgroundImage="url("+(r.getImageData(e.setters[0].value)||"")+")"}else"chart"===c?(i.add(l,"esriGEConditionalStylingLegend_symbolChart"),t.set(l,a)):(l.innerHTML=s.conditionalLegend_preview,t.set(l,a))}if(!c)return null;var f=n.create("div",{class:"esriGEConditionalStylingLegend esriGEConditionalStylingLegend_"+c});n.create("div",{class:"esriGEConditionalStylingLegend_row esriGERowHigh",innerHTML:s.conditionalLegend_title},f);var v=a.getMatchedCase(g,l);return l.cases.some(function(e){var i=u(e),t=a.styleFromSetters(e.setters);if(i&&t){var r=n.create("div",{class:"esriGEConditionalStylingLegend_row esriGERowHigh"},f);m(e,t,r),n.create("div",{class:"dijitInline esriGESpaceBeforeBig",innerHTML:i},r),v===e&&n.create("div",{class:"esriGEConditionalStylingLegend_matchIndicator"},r)}}),f},l});