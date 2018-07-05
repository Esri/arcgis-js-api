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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../Color","../../../../core/screenUtils"],function(e,t,n,r){function i(e,t,i){var o=t&&t.enabled&&t.edges;if(!o)return null;var c=n.toUnitRGBA(o.color),s=i;switch(o.type){case"solid":return e.createSolidEdgeMaterial({color:c,size:r.pt2px(o.size),extensionLength:r.pt2px(o.extensionLength),opacity:s});case"sketch":return e.createSketchEdgeMaterial({color:c,size:r.pt2px(o.size),extensionLength:r.pt2px(o.extensionLength),opacity:s})}}Object.defineProperty(t,"__esModule",{value:!0}),t.createMaterial=i});