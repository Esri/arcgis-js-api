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

define(["require","exports","tslib","../../PopupTemplate","../../core/Error","../../core/promiseUtils","../../intl/messages","./support/utils"],(function(e,r,s,n,t,a,i,o){function l(e){return s.__awaiter(this,void 0,void 0,(function(){var r,n,a;return s.__generator(this,(function(s){switch(s.label){case 0:return r=e.layer,n=e.renderer,[4,r.load()];case 1:if(s.sent(),"class-breaks"!==(a=n||r.renderer).type)throw new t("class-breaks-popup:invalid-parameters","renderer.type must be 'class-breaks'");return[2,{layer:r,renderer:a}]}}))}))}function c(e,r,t){return void 0===t&&(t="divide"),s.__awaiter(this,void 0,void 0,(function(){var a,i,l,c,u;return s.__generator(this,(function(s){switch(s.label){case 0:return[4,o.getFieldAndExpressionInfos({renderer:e,layer:r,normFieldExpressionTemplate:t})];case 1:return a=s.sent(),i=a.fieldInfos,l=a.expressionInfos,c=n.bind,u={},[4,o.getContentFromFieldInfos(r,{fieldInfos:i,expressionInfos:l})];case 2:return[2,new(c.apply(n,[void 0,(u.content=s.sent(),u.fieldInfos=i,u.expressionInfos=l,u)]))]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.getTemplates=function(e){return s.__awaiter(this,void 0,void 0,(function(){var r,n,t,u,d,p,f,m,v,_,b;return s.__generator(this,(function(s){switch(s.label){case 0:return[4,a.all([l(e),i.loadMessageBundle("esri/smartMapping/t9n/smartMapping")])];case 1:return r=s.sent(),n=r[0],t=n.renderer,u=n.layer,d=r[1],f={name:"class-breaks",title:d.classBreaks},[4,c(t,u)];case 2:return f.value=s.sent(),p=f,m=[],o.hasNormalizedField(t)?(_=(v=m).push,b={name:"class-breaks-percent",title:d.classBreaksNormFieldAsPercent},[4,c(t,u,"percentage")]):[3,4];case 3:_.apply(v,[(b.value=s.sent(),b)]),s.label=4;case 4:return[2,{primaryTemplate:p,secondaryTemplates:m}]}}))}))}}));