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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../Color","../../../../core/screenUtils"],function(e,t,n,i){function r(e){return e&&e.enabled&&e.edges||null}function l(e,t,n){return o(e,r(t),n)}function o(e,t,r){if(!t)return null;var l=n.toUnitRGBA(t.color),o=r.opacity,a=r.slicePlaneEnabled;switch(t.type){case"solid":return e.createSolidEdgeMaterial({color:l,size:i.pt2px(t.size),extensionLength:i.pt2px(t.extensionLength),opacity:o,slicePlaneEnabled:a});case"sketch":return e.createSketchEdgeMaterial({color:l,size:i.pt2px(t.size),extensionLength:i.pt2px(t.extensionLength),opacity:o,slicePlaneEnabled:a})}}Object.defineProperty(t,"__esModule",{value:!0}),t.createMaterial=l,t.createMaterialFromEdges=o});