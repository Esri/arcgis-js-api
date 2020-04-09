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

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../Color","../../../../core/compilerUtils","../../../../core/maybe","../../../../core/screenUtils","../../../../core/libs/gl-matrix-2/vec4f64"],(function(e,r,t,o,n,c,i,s){function a(e,r){if(c.isNone(e))return null;var a=c.isSome(e.color)?s.vec4f64.fromArray(o.toUnitRGBA(e.color)):s.vec4f64.fromValues(0,0,0,0),u=i.pt2px(e.size),p=i.pt2px(e.extensionLength);switch(e.type){case"solid":return l(t({color:a,size:u,extensionLength:p},r));case"sketch":return function(e){return t({},f,e,{type:"sketch"})}(t({color:a,size:u,extensionLength:p},r));default:return void n.neverReached(e)}}function l(e){return t({},u,e,{type:"solid"})}Object.defineProperty(r,"__esModule",{value:!0}),r.createMaterial=function(e,r){return a(function(e){return e&&e.enabled&&e.edges||null}(e),r)},r.createMaterialFromEdges=a,r.createSolidEdgeMaterial=l;var u={color:s.vec4f64.fromValues(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:2},f={color:s.vec4f64.fromValues(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:2}}));