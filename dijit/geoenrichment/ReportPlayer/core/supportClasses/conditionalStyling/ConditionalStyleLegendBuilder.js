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

define(["dojo/_base/declare","dojo/string","dojo/dom-class","dojo/dom-construct","dojo/dom-style","../images/ImageDataHolder","./ConditionalStyleUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!../../../../../../nls/jsapi"],function(e,i,n,t,r,a,o,s,l){l=l.geoenrichment.dijit.ReportPlayer.ReportPlayer;var d={},c={"=":"equals","<":"less",">":"greater","<=":"lessOrEquals",">=":"greaterOrEquals"};return d.createLegendNode=function(e,d,g){function u(e){if(!e.compareInfos||!e.compareInfos.length)return!1;if("image"===d&&"default"==e.compareInfos[0].value)return l.conditionalLegend_default;var n=e.compareInfos.map(function(e){return i.substitute(l["conditionalLegend_operator_"+c[e.operator]],{value:s.formatNumber(e.value)})});return 1===n.length?n[0]:i.substitute(l.conditionalLegend_interval,{from:n[0],to:n[1]})}function m(e,i,o){var s=t.create("div",{"class":"esriGEConditionalStylingLegend_symbol dijitInline"},o);if("image"===d){var c=t.create("img",{"class":"esriGEConditionalStylingLegend_symbolImage dijitInline"},s);c.src=a.getImageData(e.setters[0].value)||""}else"chart"===d?(n.add(s,"esriGEConditionalStylingLegend_symbolChart"),r.set(s,i)):(s.innerHTML=l.conditionalLegend_preview,r.set(s,i))}if(!d)return null;var f=t.create("div",{"class":"esriGEConditionalStylingLegend esriGEConditionalStylingLegend_"+d});t.create("div",{"class":"esriGEConditionalStylingLegend_row esriGERowHigh",innerHTML:l.conditionalLegend_title},f);var v=o.getMatchedCase(g,e);return e.cases.some(function(e){var i=u(e),n=o.styleFromSetters(e.setters);if(i&&n){var r=t.create("div",{"class":"esriGEConditionalStylingLegend_row esriGERowHigh"},f);m(e,n,r),t.create("div",{"class":"dijitInline esriGESpaceBeforeBig",innerHTML:i},r),v===e&&t.create("div",{"class":"esriGEConditionalStylingLegend_matchIndicator"},r)}}),f},d});