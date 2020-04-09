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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","./classBreaks","./heatmap","./predominance","./simple","./uniqueValues"],(function(e,r,t,a,n,p,l,s,u){Object.defineProperty(r,"__esModule",{value:!0}),r.getTemplates=function(e){return a(this,void 0,void 0,(function(){var r,a;return t(this,(function(t){return r=e.renderer,a=e.layer,"simple"===r.type?[2,s.getTemplates({renderer:r,layer:a})]:"class-breaks"===r.type?[2,n.getTemplates({renderer:r,layer:a})]:"heatmap"===r.type?[2,p.getTemplates({renderer:r,layer:a})]:"unique-value"===r.type?"predominance"===(r.authoringInfo&&r.authoringInfo.type)?[2,l.getTemplates({renderer:r,layer:a})]:[2,u.getTemplates({renderer:r,layer:a})]:[2,null]}))}))}}));