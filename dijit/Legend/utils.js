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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/lang","../../lang","dojo/i18n!../../nls/jsapi"],function(e,l,i){var n=i.widgets.legend;return{getVisualVariableTitle:function(i,t){var r,o,a=i.field,s=i.normalizationField,d=!1,u=!1,f=!1;if(a=e.isFunction(a)?null:a,s=e.isFunction(s)?null:s,i.legendOptions&&i.legendOptions.title)r=i.legendOptions.title;else if(i.valueExpressionTitle)r=i.valueExpressionTitle;else{if(t.renderer&&t.renderer.authoringInfo&&t.renderer.authoringInfo.visualVariables){var g=t.renderer.authoringInfo.visualVariables;for(o=0;o<g.length;o++){var F=g[o];if("colorInfo"===F.type&&"ratio"===F.style){d=!0;break}if("colorInfo"===F.type&&"percent"===F.style){u=!0;break}if("colorInfo"===F.type&&"percentTotal"===F.style){f=!0;break}}}var p=f&&"showRatioPercentTotal"||u&&"showRatioPercent"||d&&"showRatio"||s&&"showNormField"||a&&"showField"||null;p&&(r=l.substitute({field:a&&t.getFieldLabel(a),normField:s&&t.getFieldLabel(s)},"showField"===p?"${field}":n[p]))}return r},getRendererTitle:function(i,t){var r;if(i){var o,a,s,d;"esri.renderer.ClassBreaksRenderer"===i.declaredClass&&(o=i.attributeField,a=i.normalizationField,s="percent-of-total"===i.normalizationType),o=e.isFunction(o)?null:o,a=e.isFunction(a)?null:a,i.legendOptions&&i.legendOptions.title?r=i.legendOptions.title:i.valueExpressionTitle?r=i.valueExpressionTitle:(d=a&&"showNormField"||(s?"showNormPct":null)||o&&"showField"||null)&&(r=l.substitute({field:o&&t.getFieldLabel(o),normField:a&&t.getFieldLabel(a)},"showField"===d?"${field}":n[d]))}return r}}});