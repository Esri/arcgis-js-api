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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","dojo/i18n!../../nls/smartMapping","../../../PopupTemplate","./support/utils"],(function(e,n,r,t,i,s,o){function l(e){return t(this,void 0,void 0,(function(){return r(this,(function(n){switch(n.label){case 0:return[4,e.layer.load()];case 1:return n.sent(),[2,e]}}))}))}function a(e,n,r){void 0===r&&(r="divide");var t=o.getFieldAndExpressionInfos({renderer:e,layer:n,normFieldExpressionTemplate:r}),i=t.fieldInfos,l=t.expressionInfos;return new s({content:o.getContentFromFieldInfos(n,{fieldInfos:i,expressionInfos:l}),expressionInfos:l,fieldInfos:i})}Object.defineProperty(n,"__esModule",{value:!0}),n.getTemplates=function(e){return t(this,void 0,void 0,(function(){var n,t,s,p,u;return r(this,(function(r){switch(r.label){case 0:return[4,l(e)];case 1:return n=r.sent(),t=n.renderer,s=n.layer,o.getPrimaryVisualVariables(t).length?(p={name:"simple",title:i.simple,value:a(t,s)},u=[],o.hasNormalizedField(t)&&u.push({name:"simple-percent",title:i.simpleNormFieldAsPercent,value:a(t,s,"percentage")}),[2,{primaryTemplate:p,secondaryTemplates:u}]):[2,null]}}))}))}}));