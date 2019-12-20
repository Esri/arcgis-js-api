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

define(["require","exports","../../../../core/maybe","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3f64","../../../../core/libs/gl-matrix-2/vec4f64","../../../../support/elevationInfoUtils","../../../../support/featureFlags","../Manipulator3D","../manipulatorUtils","../dragUtils/dragAtLocation","../dragUtils/projectScreenToMap","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/GeometryUtil","../../webgl-engine/materials/NativeLineMaterial","../../webgl-engine/materials/RibbonLineMaterial","../../../interactive/GraphicManipulator","../../../interactive/dragUtils/screenDragToMap"],function(e,r,a,t,i,n,o,l,c,s,u,m,f,v,p,g,d,M,b){function h(e,r){return new M.GraphicManipulator({graphic:r,view:e,selectable:!0,cursor:"move"})}function w(e,r,t){return b.createXYConstrainedFromProject(f.createForGraphic(e,r.graphic,t.start),a.expect(r.graphic.geometry).spatialReference)}function y(e,r){return"on-the-ground"!==r.mode&&!(a.isNone(e.geometry)||!e.geometry.hasZ)}function G(e){var r=e.graphic,a=e.view;if(!c.enableEditing3D())return null;var m=l.getGraphicEffectiveElevationInfo(r);if(!y(r,m))return null;var f=[n.vec3f64.fromValues(0,0,0),n.vec3f64.fromValues(0,0,90)],M=new v(p.createPolylineGeometry(f),"move-z"),b=p.createConeGeometry(20,5,16,!1),h=new v(b),w=[n.vec3f64.fromValues(0,0,0),n.vec3f64.fromValues(0,0,110)],G=i.mat4f64.create();t.mat4.translate(G,G,[0,0,90]),t.mat4.rotateX(G,G,Math.PI/2);var O=i.mat4f64.create();t.mat4.translate(O,O,[0,0,90]),t.mat4.rotateX(O,O,Math.PI/2);t.mat4.scale(O,O,[1.2,1.2,1]);var U=n.vec3f64.fromValues(0,.5,.9),j=o.vec4f64.fromValues(U[0],U[1],U[2],1),x=function(e){var r=new d({color:j,width:e},"move-z");return r.renderOccluded=4,r},D=function(){var e=new g({color:j},"move-z");return e.renderOccluded=4,e},L=function(e){return e>1?x(e):D()};return new s.Manipulator3D({view:a,renderObjects:[{geometry:M,material:L(1),stateMask:1},{geometry:h,transform:G,material:u.createManipulatorMaterial(U,1),stateMask:1},{geometry:M,material:L(2),stateMask:2},{geometry:h,transform:O,material:u.createManipulatorMaterial(U,1),stateMask:2}],collisionType:{type:"line",paths:[w]},autoScaleRenderObjects:!1,worldSized:!1,radius:4,selectable:!1,cursor:"ns-resize",elevationInfo:m,worldOriented:null==e.worldOriented||e.worldOriented,visible:!!r.visible})}function O(e,r){var a=b.createZConstrainedFromProject(f.createCameraAlignedWorldUp(e,r.elevationAlignedLocation),r.location.spatialReference);return m.dragAtLocation(e,a,r.elevationAlignedLocation)}Object.defineProperty(r,"__esModule",{value:!0}),r.createGraphicMoveXYManipulator=h,r.createGraphicMoveXYScreenDragToMap=w,r.canMoveZ=y,r.createGraphicMoveZManipulator=G,r.createGraphicMoveZScreenDragToMap=O});