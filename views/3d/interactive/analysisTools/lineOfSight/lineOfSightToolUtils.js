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

define(["require","exports","../../../../../Color","../../../../3d/interactive/Manipulator3D","../../manipulatorUtils","../../editingTools/manipulatorUtils","../../../webgl-engine/lib/Geometry","../../../webgl-engine/lib/Geometry","../../../webgl-engine/lib/GeometryUtil","../../../webgl-engine/materials/RibbonLineMaterial"],(function(e,t,r,o,i,l,n,a,s,u){"use strict";function c(e,t,o){return{geometry:new n(s.createSphereGeometry(e,32,32),"manipulator"),material:i.createManipulatorMaterial(r.toUnitRGBA(t)),stateMask:o}}Object.defineProperty(t,"__esModule",{value:!0}),t.createSphereManipulator=t.createPolylineGeometry=t.createPolylineMaterial=void 0,t.createPolylineMaterial=function(e,t,o,i){var l=new u({width:e,color:r.toUnitRGBA(t),stipplePattern:o,stippleOffColor:i&&[i.r,i.g,i.b,i.a]},"line-of-sight-line");return l.renderOccluded=4,l},t.createPolylineGeometry=function(e,t,r){return new a(s.createPolylineGeometry([e,t]),"line-of-sight-line-"+r)},t.createSphereManipulator=function(e,t){var r=[];t.customColor1&&r.push(c(t.size,t.customColor1,16)),t.customColor2&&r.push(c(t.size,t.customColor2,32)),t.customColor3&&r.push(c(t.size,t.customColor3,64)),t.color&&r.push(c(t.size,t.color));var i=new o.Manipulator3D({view:e,renderObjects:r,elevationInfo:{mode:"absolute-height",offset:0}});for(var n in l.disableDisplayOnGrab(i),t)i[n]=t[n];return i}}));