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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","dojo/i18n!../../nls/smartMapping","../../../PopupTemplate","./support/utils"],(function(e,r,t,n,o,i,s){function a(e){return n(this,void 0,void 0,(function(){return t(this,(function(r){switch(r.label){case 0:return[4,e.layer.load()];case 1:return r.sent(),[2,e]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.getTemplates=function(e){return n(this,void 0,void 0,(function(){var r,n,l,u,p;return t(this,(function(t){switch(t.label){case 0:return e.renderer.field?[4,a(e)]:[2,null];case 1:return r=t.sent(),n=r.renderer,l=r.layer,u=s.getFieldAndExpressionInfos({renderer:n,layer:l}).fieldInfos,p=new i({content:s.getContentFromFieldInfos(l,{fieldInfos:u}),fieldInfos:u}),[2,{primaryTemplate:{name:"heatmap",title:o.heatmap,value:p},secondaryTemplates:[]}]}}))}))}}));