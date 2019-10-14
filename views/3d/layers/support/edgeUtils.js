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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../Color","../../../../core/compilerUtils","../../../../core/maybe","../../../../core/screenUtils","../../../../core/libs/gl-matrix-2/vec4f64"],function(e,r,t,o,n,c,i,s){function a(e){return e&&e.enabled&&e.edges||null}function l(e,r){return u(a(e),r)}function u(e,r){if(c.isNone(e))return null;var a=c.isSome(e.color)?s.vec4f64.fromArray(o.toUnitRGBA(e.color)):s.vec4f64.fromValues(0,0,0,0),l=i.pt2px(e.size),u=i.pt2px(e.extensionLength);switch(e.type){case"solid":return f(t({color:a,size:l,extensionLength:u},r));case"sketch":return p(t({color:a,size:l,extensionLength:u},r));default:return void n.neverReached(e)}}function f(e){return t({},d,e,{type:"solid"})}function p(e){return t({},g,e,{type:"sketch"})}Object.defineProperty(r,"__esModule",{value:!0}),r.createMaterial=l,r.createMaterialFromEdges=u,r.createSolidEdgeMaterial=f;var d={color:s.vec4f64.fromValues(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:2},g={color:s.vec4f64.fromValues(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:2}});