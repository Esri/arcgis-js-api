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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../3d/interactive/Manipulator3D","../../manipulatorUtils","../../../webgl-engine/lib/Geometry","../../../webgl-engine/lib/Geometry","../../../webgl-engine/lib/GeometryUtil","../../../webgl-engine/materials/RibbonLineMaterial"],function(e,r,o,t,n,i,l,a,u){function c(e,r,o,t){var n=new u({width:e,color:b(r,r.a),stipplePattern:o,stippleOffColor:t&&[t.r,t.g,t.b,t.a]},"line-of-sight-line");return n.renderOccluded=4,n}function s(e,r,o){return new l(a.createPolylineGeometry([e,r]),"line-of-sight-line-"+o)}function p(e,r,o){return{geometry:new i(a.createSphereGeometry(e,32,32),"manipulator"),material:n.createManipulatorMaterial(b(r),r.a),stateMask:o}}function m(e,r){var o=[];r.customColor1&&o.push(p(r.size,r.customColor1,16)),r.customColor2&&o.push(p(r.size,r.customColor2,32)),r.customColor3&&o.push(p(r.size,r.customColor3,64)),r.color&&o.push(p(r.size,r.color));var n=new t.Manipulator3D({view:e,renderObjects:o,elevationInfo:{mode:"absolute-height",offset:0},hideOnGrab:!0});for(var i in r)n[i]=r[i];return n}function b(e,r){return null!=r?[e.r/255,e.g/255,e.b/255,r]:[e.r/255,e.g/255,e.b/255]}Object.defineProperty(r,"__esModule",{value:!0}),r.createPolylineMaterial=c,r.createPolylineGeometry=s,r.createSphereManipulator=m,r.colorToArray=b});