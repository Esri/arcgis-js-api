// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../Color","../../../../core/compilerUtils","../../../../core/maybe","../../../../core/screenUtils","../../../../core/libs/gl-matrix-2/vec4f64"],function(e,t,r,o,i,n,c){function a(e){return e&&e.enabled&&e.edges||null}function l(e,t,r){return s(e,a(t),r)}function s(e,t,a){if(i.isNone(t))return null;var l=i.isSome(t.color)?c.vec4f64.fromArray(r.toUnitRGBA(t.color)):c.vec4f64.fromValues(0,0,0,0),s=a.opacity;switch(t.type){case"solid":return e.createSolidEdgeMaterial({color:l,size:n.pt2px(t.size),extensionLength:n.pt2px(t.extensionLength),opacity:s});case"sketch":return e.createSketchEdgeMaterial({color:l,size:n.pt2px(t.size),extensionLength:n.pt2px(t.extensionLength),opacity:s});default:o.neverReached(t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.createMaterial=l,t.createMaterialFromEdges=s});