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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","dojo/i18n!../../nls/smartMapping","../../../PopupTemplate","./support/utils"],(function(e,r,n,s,t,o,i){function a(e){return s(this,void 0,void 0,(function(){return n(this,(function(r){switch(r.label){case 0:return[4,e.layer.load()];case 1:return r.sent(),[2,e]}}))}))}function l(e,r,n){void 0===n&&(n="divide");var s=i.getFieldAndExpressionInfos({renderer:e,layer:r,normFieldExpressionTemplate:n}),t=s.fieldInfos,a=s.expressionInfos;return new o({content:i.getContentFromFieldInfos(r,{fieldInfos:t,expressionInfos:a}),fieldInfos:t,expressionInfos:a})}Object.defineProperty(r,"__esModule",{value:!0}),r.getTemplates=function(e){return s(this,void 0,void 0,(function(){var r,s,o,p,u;return n(this,(function(n){switch(n.label){case 0:return[4,a(e)];case 1:return r=n.sent(),s=r.renderer,o=r.layer,p={name:"class-breaks",title:t.classBreaks,value:l(s,o)},u=[],i.hasNormalizedField(s)&&u.push({name:"class-breaks-percent",title:t.classBreaksNormFieldAsPercent,value:l(s,o,"percentage")}),[2,{primaryTemplate:p,secondaryTemplates:u}]}}))}))}}));