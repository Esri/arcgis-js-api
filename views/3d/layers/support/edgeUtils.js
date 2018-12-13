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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../Color","../../../../core/compilerUtils","../../../../core/compilerUtils","../../../../core/screenUtils","../../../../core/libs/gl-matrix-2/gl-matrix"],function(e,t,r,i,n,o,c){function l(e){return e&&e.enabled&&e.edges||null}function a(e,t,r){return s(e,l(t),r)}function s(e,t,l){if(i.isNone(t))return null;var a=c.vec4f64.fromArray(r.toUnitRGBA(t.color)),s=l.opacity;switch(t.type){case"solid":return e.createSolidEdgeMaterial({color:a,size:o.pt2px(t.size),extensionLength:o.pt2px(t.extensionLength),opacity:s});case"sketch":return e.createSketchEdgeMaterial({color:a,size:o.pt2px(t.size),extensionLength:o.pt2px(t.extensionLength),opacity:s});default:n.neverReached(t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.createMaterial=a,t.createMaterialFromEdges=s});