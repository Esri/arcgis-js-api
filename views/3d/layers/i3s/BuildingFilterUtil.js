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

define(["require","exports","tslib","../../../../core/maybe","../../../../core/libs/gl-matrix-2/vec4f64","../support/edgeUtils"],(function(e,r,a,l,t,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.applyFilterMode=r.parseFilterMode=void 0;r.parseFilterMode=function(e){switch(e.filterMode.type){case"solid":return{mode:0};case"wire-frame":return{mode:1,edgeMaterial:i.createMaterialFromEdges(e.filterMode.edges,{})};case"x-ray":return{mode:2}}},r.applyFilterMode=function(e,r){if(l.isNone(r))return e.color[3]=0,e.edgeMaterial=null,void(e.pickable=!1);switch(r.mode){case 0:return;case 1:return e.color[3]=0,e.edgeMaterial=r.edgeMaterial,void(e.pickable=!1);case 2:return e.color[0]=1,e.color[1]=1,e.color[2]=1,e.color[3]*=.15,e.colorMixMode=3,e.castShadows=!1,e.pickable=!1,void(e.edgeMaterial=function(e){if(l.isNone(e))return null;o.lastMaterial!==e&&(o.cachedMaterial=function(e){var r=t.vec4f64.clone(e.color);return r[3]*=.075,a.__assign(a.__assign({},e),{color:r})}(e),o.lastMaterial=e);return o.cachedMaterial}(e.edgeMaterial))}};var o={cachedMaterial:null,lastMaterial:null}}));