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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/lang","../../lang","dojo/i18n!../../nls/jsapi"],(function(e,l,i){var n=i.widgets.legend;return{getVisualVariableTitle:function(i,t){var o,r,s=i.field,a=i.normalizationField,d=!1,u=!1,f=!1;if(s=e.isFunction(s)?null:s,a=e.isFunction(a)?null:a,i.legendOptions&&i.legendOptions.title)o=i.legendOptions.title;else if(i.valueExpressionTitle)o=i.valueExpressionTitle;else{if(t.renderer&&t.renderer.authoringInfo&&t.renderer.authoringInfo.visualVariables){var g=t.renderer.authoringInfo.visualVariables;for(r=0;r<g.length;r++){var F=g[r];if("colorInfo"===F.type&&"ratio"===F.style){d=!0;break}if("colorInfo"===F.type&&"percent"===F.style){u=!0;break}if("colorInfo"===F.type&&"percentTotal"===F.style){f=!0;break}}}var p=(f?"showRatioPercentTotal":u&&"showRatioPercent")||d&&"showRatio"||a&&"showNormField"||s&&"showField"||null;p&&(o=l.substitute({field:s&&t.getFieldLabel(s),normField:a&&t.getFieldLabel(a)},"showField"===p?"${field}":n[p]))}return o},getRendererTitle:function(i,t){var o,r,s,a,d;i&&("esri.renderer.ClassBreaksRenderer"===i.declaredClass&&(r=i.attributeField,s=i.normalizationField,a="percent-of-total"===i.normalizationType),r=e.isFunction(r)?null:r,s=e.isFunction(s)?null:s,i.legendOptions&&i.legendOptions.title?o=i.legendOptions.title:i.valueExpressionTitle?o=i.valueExpressionTitle:(d=(s?"showNormField":a?"showNormPct":null)||r&&"showField"||null)&&(o=l.substitute({field:r&&t.getFieldLabel(r),normField:s&&t.getFieldLabel(s)},"showField"===d?"${field}":n[d])));return o}}}));