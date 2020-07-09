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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../PopupTemplate","../../core/Error","../../core/promiseUtils","../../intl/messages","./support/utils"],(function(e,r,n,t,i,s,a,u){function o(e){return n.__awaiter(this,void 0,void 0,(function(){var r,t,s;return n.__generator(this,(function(n){switch(n.label){case 0:return r=e.layer,t=e.renderer,[4,r.load()];case 1:if(n.sent(),"unique-value"!==(s=t||r.renderer).type)throw new i("unique-values-popup:invalid-parameters","renderer.type must be 'unique-value'");return[2,{layer:r,renderer:s}]}}))}))}function l(e,r,i){return void 0===i&&(i="divide"),n.__awaiter(this,void 0,void 0,(function(){var s,a,o,l,d;return n.__generator(this,(function(n){switch(n.label){case 0:return[4,u.getFieldAndExpressionInfos({renderer:e,layer:r,normFieldExpressionTemplate:i})];case 1:return s=n.sent(),a=s.fieldInfos,o=s.expressionInfos,l=t.bind,d={},[4,u.getContentFromFieldInfos(r,{fieldInfos:a,expressionInfos:o})];case 2:return[2,new(l.apply(t,[void 0,(d.content=n.sent(),d.fieldInfos=a,d.expressionInfos=o,d)]))]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.getTemplates=function(e){return n.__awaiter(this,void 0,void 0,(function(){var r,t,i,d,p,c,f,v,m,_,h;return n.__generator(this,(function(n){switch(n.label){case 0:return[4,s.all([o(e),a.loadMessageBundle("esri/smartMapping/t9n/smartMapping")])];case 1:return r=n.sent(),t=r[0],i=t.renderer,d=t.layer,p=r[1],f={name:"unique-values",title:p.uniqueValues},[4,l(i,d)];case 2:return f.value=n.sent(),c=f,v=[],u.hasNormalizedField(i)?(_=(m=v).push,h={name:"unique-values-percent",title:p.uniqueValuesNormFieldAsPercent},[4,l(i,d,"percentage")]):[3,4];case 3:_.apply(m,[(h.value=n.sent(),h)]),n.label=4;case 4:return[2,{primaryTemplate:c,secondaryTemplates:v}]}}))}))}}));