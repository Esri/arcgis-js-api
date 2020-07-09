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

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../core/promiseUtils","../../intl/messages","./support/clusterUtils","../../views/2d/layers/support/clusterUtils"],(function(e,r,t,s,n,a,i,l,u){function o(e){return t.__awaiter(this,void 0,void 0,(function(){var r,n,a;return t.__generator(this,(function(t){switch(t.label){case 0:return r=e.layer,n=e.renderer,[4,r.load()];case 1:if(t.sent(),a=n||r.renderer,!u.isClusterCompatibleRenderer(a))throw new s("clusters-popup:invalid-parameters","'renderer' is not valid");return[2,{layer:r,renderer:a}]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.getTemplates=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,s,u,c,p,d;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,a.all([o(e),i.loadMessageBundle("esri/smartMapping/t9n/smartMapping")])];case 1:return r=t.sent(),s=r[0],u=s.renderer,c=s.layer,p=r[1],[4,l.createPopupTemplate(c,u)];case 2:return d=t.sent(),null,n.isSome(d)?[2,{primaryTemplate:{name:"clusters",title:p.clusters.templateTitle,value:d},secondaryTemplates:[]}]:[2,null]}}))}))}}));