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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/lang","dojo/i18n!../../nls/jsapi"],function(e,i,n){var l=n.widgets.legend;return{getVisualVariableTitle:function(n,r){var t,o,a=n.field,s=n.normalizationField,d=!1,u=!1,f=!1;if(a=e.isFunction(a)?null:a,s=e.isFunction(s)?null:s,n.legendOptions&&n.legendOptions.title)t=n.legendOptions.title;else if(n.valueExpressionTitle)t=n.valueExpressionTitle;else{if(r.renderer&&r.renderer.authoringInfo&&r.renderer.authoringInfo.visualVariables){var g=r.renderer.authoringInfo.visualVariables;for(o=0;o<g.length;o++){var c=g[o];if("colorInfo"===c.type&&"ratio"===c.style){d=!0;break}if("colorInfo"===c.type&&"percent"===c.style){u=!0;break}if("colorInfo"===c.type&&"percentTotal"===c.style){f=!0;break}}}var p=f&&"showRatioPercentTotal"||u&&"showRatioPercent"||d&&"showRatio"||s&&"showNormField"||a&&"showField"||null;p&&(t=i.substitute({field:a&&r.getFieldLabel(a),normField:s&&r.getFieldLabel(s)},l[p]))}return t},getRendererTitle:function(e,i){}}});