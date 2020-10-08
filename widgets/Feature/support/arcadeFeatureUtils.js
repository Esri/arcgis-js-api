// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Logger","../../../core/promiseUtils","./featureUtils","@dojo/framework/shim/Promise"],(function(e,r,t,a,i,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createFormattedExpressions=void 0;var s=["$datastore","$map","$layer"],o=a.getLogger("esri.widgets.Feature.support.arcadeFeatureUtils");function c(e){var r=e.expressionAttributes,a=e.info,i=e.arcadeUtils,c=e.spatialReference,u=e.map,p=e.graphic;return t.__awaiter(this,void 0,void 0,(function(){var e,l,f,d,g,h,m;return t.__generator(this,(function(t){switch(t.label){case 0:return e="expression/"+a.name,l=i.createSyntaxTree(a.expression),f=s.filter((function(e){return i.hasVariable(l,e)})),[4,i.loadScriptDependencies(l,!0,f)];case 1:return t.sent(),d=i.getViewInfo({spatialReference:c}),(g=i.createExecContext(p,d)).useAsync=!0,function(e){var r=e.arcadeUtils,t=e.featureSetVars,a=e.context,i=e.viewInfo,n=e.map,s=e.graphic;t.forEach((function(e){var t=e.toLowerCase(),o={map:n,spatialReference:i.sr};"$map"===t&&(a.vars[t]=r.convertMapToFeatureSetCollection(o)),"$layer"===t&&(a.vars[t]=r.convertFeatureLayerToFeatureSet(s.sourceLayer,i.sr)),"$datastore"===t&&(a.vars[t]=r.convertServiceUrlToWorkspace(s.sourceLayer.url,i.sr))}))}({arcadeUtils:i,featureSetVars:f,context:g,viewInfo:d,map:u,graphic:p}),h=i.createFunction(l,g),[4,i.executeAsyncFunction(h,g).catch((function(e){return o.error("arcade-execution-error",{error:e,graphic:p,expressionInfo:a})}))];case 2:return m=t.sent(),r[e]="string"==typeof m?n.applyTextFormattingHTML(n.htmlEntities(m)):Array.isArray(m)?function(e){return'<ul class="esri-widget__list">'+e.map((function(e){return"<li>"+("string"==typeof e?n.applyTextFormattingHTML(n.htmlEntities(e)):e)+"</li>"})).join("")+"</ul>"}(m):m&&"esri.arcade.Dictionary"===m.declaredClass?'<table class="esri-widget__table">'+(v=m).keys().map((function(e){var r=v.field(e);return"<tr><th>"+e+"</th><td>"+("string"==typeof r?n.applyTextFormattingHTML(n.htmlEntities(r)):r)+"</td></tr>"})).join("")+"</table>":m,[2]}var v}))}))}r.createFormattedExpressions=function(r){var a=r.popupTemplate,n=r.spatialReference,s=r.graphic,o=r.map;return t.__awaiter(this,void 0,void 0,(function(){var r,u,p,l,f,d,g;return t.__generator(this,(function(t){switch(t.label){case 0:return r=a.expressionInfos,u=[],p={},r&&r.length?[4,new Promise((function(r,t){e(["../../../support/arcadeUtils"],r,t)}))]:[2,p];case 1:for(l=t.sent(),f=0,d=r;f<d.length;f++)g=d[f],u.push(c({expressionAttributes:p,info:g,arcadeUtils:l,spatialReference:n,map:o,graphic:s}));return[4,i.eachAlways(u)];case 2:return t.sent(),[2,p]}}))}))}}));