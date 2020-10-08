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

define(["require","exports","tslib","../../PopupTemplate","../../core/Error","../../core/promiseUtils","../../intl/messages","./support/utils"],(function(e,r,t,n,a,i,s,o){"use strict";function l(e){return t.__awaiter(this,void 0,void 0,(function(){var r,n,i;return t.__generator(this,(function(t){switch(t.label){case 0:return r=e.layer,n=e.renderer,[4,r.load()];case 1:if(t.sent(),"heatmap"!==(i=n||r.renderer).type)throw new a("heatmap-popup:invalid-parameters","renderer.type must be 'heatmap'");return[2,{layer:r,renderer:i}]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.getTemplates=void 0,r.getTemplates=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,a,p,u,d,c,f,m,h;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,i.all([l(e),s.loadMessageBundle("esri/smartMapping/t9n/smartMapping")])];case 1:return r=t.sent(),a=r[0],p=a.renderer,u=a.layer,d=r[1],p.field?[4,o.getFieldAndExpressionInfos({renderer:p,layer:u})]:[2,null];case 2:return c=t.sent().fieldInfos,m=n.bind,h={},[4,o.getContentFromFieldInfos(u,{fieldInfos:c})];case 3:return f=new(m.apply(n,[void 0,(h.content=t.sent(),h.fieldInfos=c,h)])),[2,{primaryTemplate:{name:"heatmap",title:d.heatmap,value:f},secondaryTemplates:[]}]}}))}))}}));