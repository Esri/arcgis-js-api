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

define(["require","exports","tslib","../../../../Color","../../../../core/compilerUtils","../../../../core/maybe","../../../../core/screenUtils","../../../../core/libs/gl-matrix-2/vec4f64"],(function(e,n,r,t,o,s,i,c){function a(e,n){if(s.isNone(e))return null;var a=s.isSome(e.color)?c.vec4f64.fromArray(t.toUnitRGBA(e.color)):c.vec4f64.fromValues(0,0,0,0),u=i.pt2px(e.size),_=i.pt2px(e.extensionLength);switch(e.type){case"solid":return l(r.__assign({color:a,size:u,extensionLength:_},n));case"sketch":return function(e){return r.__assign(r.__assign(r.__assign({},f),e),{type:"sketch"})}(r.__assign({color:a,size:u,extensionLength:_},n));default:return void o.neverReached(e)}}function l(e){return r.__assign(r.__assign(r.__assign({},u),e),{type:"solid"})}Object.defineProperty(n,"__esModule",{value:!0}),n.createMaterial=function(e,n){return a(function(e){return e&&e.enabled&&e.edges||null}(e),n)},n.createMaterialFromEdges=a,n.createSolidEdgeMaterial=l;var u={color:c.vec4f64.fromValues(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:2},f={color:c.vec4f64.fromValues(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:2}}));