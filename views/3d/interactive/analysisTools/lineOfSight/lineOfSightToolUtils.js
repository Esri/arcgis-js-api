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

define(["require","exports","../../../../../Color","../../../../3d/interactive/Manipulator3D","../../manipulatorUtils","../../editingTools/manipulatorUtils","../../../webgl-engine/lib/Geometry","../../../webgl-engine/lib/Geometry","../../../webgl-engine/lib/GeometryUtil","../../../webgl-engine/materials/RibbonLineMaterial"],(function(e,t,o,r,i,n,l,a,s,u){function c(e,t,r){return{geometry:new l(s.createSphereGeometry(e,32,32),"manipulator"),material:i.createManipulatorMaterial(o.toUnitRGBA(t)),stateMask:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.createPolylineMaterial=function(e,t,r,i){var n=new u({width:e,color:o.toUnitRGBA(t),stipplePattern:r,stippleOffColor:i&&[i.r,i.g,i.b,i.a]},"line-of-sight-line");return n.renderOccluded=4,n},t.createPolylineGeometry=function(e,t,o){return new a(s.createPolylineGeometry([e,t]),"line-of-sight-line-"+o)},t.createSphereManipulator=function(e,t){var o=[];t.customColor1&&o.push(c(t.size,t.customColor1,16)),t.customColor2&&o.push(c(t.size,t.customColor2,32)),t.customColor3&&o.push(c(t.size,t.customColor3,64)),t.color&&o.push(c(t.size,t.color));var i=new r.Manipulator3D({view:e,renderObjects:o,elevationInfo:{mode:"absolute-height",offset:0}});for(var l in n.disableDisplayOnGrab(i),t)i[l]=t[l];return i}}));