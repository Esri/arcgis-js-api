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

define(["require","exports","tslib","../../../../Color","../../../../core/compilerUtils","../../../../core/maybe","../../../../core/screenUtils","../../../../core/libs/gl-matrix-2/vec4f64"],(function(e,r,t,n,i,o,s,a){"use strict";function c(e,r){if(o.isNone(e))return null;var c=o.isSome(e.color)?a.vec4f64.fromArray(n.toUnitRGBA(e.color)):a.vec4f64.fromValues(0,0,0,0),u=s.pt2px(e.size),g=s.pt2px(e.extensionLength);switch(e.type){case"solid":return l(t.__assign({color:c,size:u,extensionLength:g},r));case"sketch":return function(e){return t.__assign(t.__assign(t.__assign({},f),e),{type:"sketch"})}(t.__assign({color:c,size:u,extensionLength:g},r));default:return void i.neverReached(e)}}function l(e){return t.__assign(t.__assign(t.__assign({},u),e),{type:"solid"})}Object.defineProperty(r,"__esModule",{value:!0}),r.createSolidEdgeMaterial=r.createMaterialFromEdges=r.createMaterial=void 0,r.createMaterial=function(e,r){return c(function(e){return e&&e.enabled&&e.edges||null}(e),r)},r.createMaterialFromEdges=c,r.createSolidEdgeMaterial=l;var u={color:a.vec4f64.fromValues(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:2},f={color:a.vec4f64.fromValues(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:2}}));