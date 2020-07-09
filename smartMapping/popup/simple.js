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

define(["require","exports","tslib","../../PopupTemplate","../../core/Error","../../core/promiseUtils","../../intl/messages","./support/utils"],(function(e,r,n,t,s,i,a,l){function o(e){return n.__awaiter(this,void 0,void 0,(function(){var r,t,i;return n.__generator(this,(function(n){switch(n.label){case 0:return r=e.layer,t=e.renderer,[4,r.load()];case 1:if(n.sent(),"simple"!==(i=t||r.renderer).type)throw new s("simple-popup:invalid-parameters","renderer.type must be 'simple'");return[2,{layer:r,renderer:i}]}}))}))}function p(e,r,s){return void 0===s&&(s="divide"),n.__awaiter(this,void 0,void 0,(function(){var i,a,o,p,u;return n.__generator(this,(function(n){switch(n.label){case 0:return[4,l.getFieldAndExpressionInfos({renderer:e,layer:r,normFieldExpressionTemplate:s})];case 1:return i=n.sent(),a=i.fieldInfos,o=i.expressionInfos,p=t.bind,u={},[4,l.getContentFromFieldInfos(r,{fieldInfos:a,expressionInfos:o})];case 2:return[2,new(p.apply(t,[void 0,(u.content=n.sent(),u.expressionInfos=o,u.fieldInfos=a,u)]))]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.getTemplates=function(e){return n.__awaiter(this,void 0,void 0,(function(){var r,t,s,u,d,c,m,f,v,_,g,h;return n.__generator(this,(function(n){switch(n.label){case 0:return[4,i.all([o(e),a.loadMessageBundle("esri/smartMapping/t9n/smartMapping")])];case 1:return r=n.sent(),t=r[0],s=t.renderer,u=t.layer,d=r[1],c=l.getPrimaryVisualVariables(s),m=[],c.length?(v={name:"simple",title:d.simple},[4,p(s,u)]):[2,null];case 2:return v.value=n.sent(),f=v,l.hasNormalizedField(s)?(g=(_=m).push,h={name:"simple-percent",title:d.simpleNormFieldAsPercent},[4,p(s,u,"percentage")]):[3,4];case 3:g.apply(_,[(h.value=n.sent(),h)]),n.label=4;case 4:return[2,{primaryTemplate:f,secondaryTemplates:m}]}}))}))}}));