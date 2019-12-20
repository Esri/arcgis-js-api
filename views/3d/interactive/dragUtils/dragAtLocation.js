// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/mathUtils","../../../../core/maybe","../../../../core/screenUtils"],function(e,t,r,n,i,o){function c(e,t,c){if(i.isNone(t))return null;var l=null,a=0,s=0;return function(i){if("start"===i.action&&(l=e.toScreen(c),l.x<0||l.x>e.width||l.y<0||l.y>e.height?l=null:(a=i.start.x-l.x,s=i.start.y-l.y)),null==l)return null;var u=n.clamp(i.screenPoint.x-a,0,e.width),f=n.clamp(i.screenPoint.y-s,0,e.height),h=o.createScreenPoint(u,f);return t(r({},i,{start:l,screenPoint:h}))}}Object.defineProperty(t,"__esModule",{value:!0}),t.dragAtLocation=c});