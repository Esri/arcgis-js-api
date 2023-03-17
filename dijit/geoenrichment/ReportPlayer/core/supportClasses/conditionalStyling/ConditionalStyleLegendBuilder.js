// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/string","dojo/dom-class","dojo/dom-construct","dojo/dom-style","../images/ImageDataHolder","./ConditionalStyleUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],(function(e,t,n,r,i,o,a,l){l=l.geoenrichment.dijit.ReportPlayer.ConditionalLegend;var s={},u={"=":"equals","<":"less",">":"greater","<=":"lessOrEquals",">=":"greaterOrEquals"};function c(e,t,n,r,i,a){var l=o.getMatchedCase(r,t,a)||"image"===n&&t.cases.filter((function(e){return e.isDefault}))[0];t.cases.some((function(t){g(e,t,n,{isSelected:l===t,valueFormatFunc:i,triggerValueConverter:a})}))}function d(t,n,r){if(1===t.compareInfos.length){var i=t.compareInfos[0],o=+i.value,a=i.operator;if("="===a)return 0===o?l.topAt0:1===o?l.topAt1:2===o?l.topAt2:-1===o?l.bottomAt0:-2===o?l.bottomAt1:-3===o?l.bottomAt2:o>0?e.substitute(l.topAtN,[o+1]):e.substitute(l.bottomAtN,[-o]);if(("<"===a||"<="===a)&&o>=0)return e.substitute(l.topN,[o+("<"===i.operator?0:1)]);if((">"===a||">="===a)&&o<0)return e.substitute(l.bottomN,[-o+(">"===i.operator?-1:0)])}return f(t,n,null,(function(e){return e>=0?e+1:r.numElements+e+1}),l.indexDescOrder_interval)}function g(e,a,s,u){var c=(u=u||{}).customDesc||f(a,s,u.valueFormatFunc,u.triggerValueConverter),d=o.styleFromSetters(a.setters);if(c&&d){var g=n.create("div",{class:"esriGEConditionalStylingLegend_row"},e);!function(e,o,a,s){var u=n.create("div",{class:"dijitInline"},a);if("image"===s){n.create("div",{class:"esriGEConditionalStylingLegend_symbolImage dijitInline"},u).style.backgroundImage="url("+(i.getImageData(e.setters[0].value)||"")+")"}else"chart"===s?(t.add(u,"esriGEConditionalStylingLegend_symbolChart"),u.style.backgroundImage="none",r.set(u,o)):(t.add(u,"esriGEConditionalStylingLegend_text"),u.innerHTML=l.conditionalLegend_preview,u.style.backgroundImage="none",r.set(u,o))}(a,d,g,s),n.create("div",{class:"dijitInline esriGESpaceBeforeBig",innerHTML:c},g),u.isSelected&&t.add(g,"esriGEConditionalStylingLegend_currentValue")}}function f(t,n,r,i,o){if("image"===n&&t.isDefault)return l.conditionalLegend_default;if(!t.compareInfos||!t.compareInfos.length)return null;var s=t.compareInfos.map((function(t){return e.substitute(l["conditionalLegend_operator_"+u[t.operator]],{value:(n=t.value,o=a.parseNumber(n),o=i?i(o):o,isNaN(o)?n:r?r(o):a.formatNumber(o))});var n,o}));return 1===s.length?s[0]:e.substitute(o||l.conditionalLegend_interval,{from:s[0],to:s[1]})}return s.createLegendNode=function(e,t,r,i,a){if(!r)return null;var s=n.create("div",{class:"esriGEConditionalStylingLegend esriGEConditionalStylingLegend_"+r});if(n.create("div",{class:"esriGEConditionalStylingLegend_row",innerHTML:l.conditionalLegend_title},s),e.calcMethod)if("percentInGroup"===e.calcMethod){c(s,e,r,i,a,(function(e){return o.conditionalValueFromPercentInGroup(t.min,t.max,e)}))}else if("indexDescOrder"===e.calcMethod){var u=e.cases.filter((function(e){return e.isDefault}))[0];e.cases.filter((function(e){return!e.isDefault})).forEach((function(e){g(s,e,r,{customDesc:d(e,r,t)})})),u&&g(s,u,r,null)}else{u=e.cases.filter((function(e){return e.isDefault}))[0];var f,m=e.cases.filter((function(e){return!e.isDefault}))[0];"aboveAverage"===e.calcMethod?f=l.aboveAverage:"belowAverage"===e.calcMethod&&(f=l.belowAverage),g(s,m,r,{customDesc:f}),u&&g(s,u,r,null)}else c(s,e,r,i,a,null);return s},s}));