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

define(["require","exports","../../../../core/handleUtils","../../../../core/mathUtils","../../../../core/maybe","../../../../core/watchUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/aaBoundingRect","../../../../support/elevationInfoUtils","./ManipulatorState","./settings","../visualElements/LaserlineVisualElement","../visualElements/LineVisualElement","../visualElements/PointVisualElement","../../layers/graphics/elevationAlignmentUtils","../../layers/graphics/ElevationContext","../../layers/graphics/GraphicState","../../support/projectionUtils"],(function(e,t,n,a,i,r,l,o,s,c,p,u,v,g,h,d,m,f,y,E){function w(e){return i.isSome(e.geometry)&&"point"===e.geometry.type}Object.defineProperty(t,"__esModule",{value:!0}),t.createVisualElements=function(e){var t=e.view,o=e.graphic,b=new y.GraphicState({graphic:o}),L=[],P=function(e,t,a){var l=e.view,o=e.graphic,s=new d.PointVisualElement({view:l,geometry:w(o)?o.geometry:null,elevationInfo:p.getGraphicEffectiveElevationInfo(o),attached:!1});return function(e,t,a,l){(function(e,t,a,r){var l=e.view,o=e.graphic,s=null,p=function(){i.isSome(s)&&(s.remove(),s=null),a.isDraped&&w(o)&&(s=function(e,t,n){var a=e.elevationProvider.spatialReference;E.pointToVector(t,V,a);var i=V[0],r=V[1];return e.elevationProvider.on("elevation-change",(function(e){c.containsXY(e.extent,i,r)&&n()}))}(l,o.geometry,(function(){t.geometry=o.geometry})))},u=function(){p(),t.geometry=w(o)?o.geometry:null};r.push(a.on("changed",u),n.refHandle((function(){return s}))),u()})(e,t,a,l),v.settings.visualElements.pointGraphics.outline.apply(t),l.push(r.init(a,"displaying",(function(){return t.attached=a.displaying})))}(e,s,t,a),a.push(n.destroyHandle(s)),s}(e,b,L);return function(e,t,i,r){var o=e.view,c=e.graphic,d=new h.LineVisualElement({view:o,infinite:v.settings.visualElements.zVerticalLine.infiniteType,attached:!1});v.settings.visualElements.zVerticalLine.apply(d);var y=new g.LaserlineVisualElement({view:o,intersectsLineInfinite:!0,attached:!1});v.settings.visualElements.pointGraphics.shadowStyle.apply(y);var b=a.deg2rad(v.settings.visualElements.heightPlaneAngleCutoff),L=new g.LaserlineVisualElement({view:o,attached:!1,angleCutoff:b});v.settings.visualElements.heightPlane.apply(L);var P=p.getGraphicEffectiveElevationInfo(e.graphic),G=f.ElevationContext.fromElevationInfo(P),M="on-the-ground"===P.mode||!P.offset&&"absolute-height"!==P.mode,x=new u.ManipulatorState,A=1,H=1,C=function(){x.update(e);var n=M&&(t.isDraped||!w(c)||!c.geometry.hasZ),a=!0;if(!n&&w(c)){var i=c.geometry,p=m.evaluateElevationAlignmentAtPoint(c.geometry,o.elevationProvider,G,o.renderCoordsHelper);l.vec3.set(V,i.x,i.y,p),E.vectorToVector(V,i.spatialReference,V,o.renderCoordsHelper.spatialReference),d.worldDownAtLocation=V,y.intersectsWorldUpAtLocation=V}else a=!1;var u=2&x.grabbingState?v.settings.visualElements.laserlineAlphaMultiplier:1;u!==A&&(A=u,v.settings.visualElements.heightPlane.apply(L,u));var g=s.empty(S);!n&&t.displaying&&r.calculateMapBounds(g)&&E.vectorToVector(s.getMin(g,V),o.spatialReference,V,o.renderCoordsHelper.spatialReference)?(L.heightManifoldTarget=V,L.attached=!0):L.attached=!1;var h=4&x.grabbingState?v.settings.visualElements.laserlineAlphaMultiplier:1;h!==H&&(H=h,v.settings.visualElements.pointGraphics.shadowStyle.apply(y,h));var f=a&&t.displaying&&!n;y.attached=f,d.attached=f};i.push(t.watch(["displaying","isDraped"],C),t.on("changed",C)),e.forEachManipulator((function(e){i.push(e.events.on("grab-changed",C))})),i.push(n.destroyHandle(y)),i.push(n.destroyHandle(d)),i.push(n.destroyHandle(L)),C()}(e,b,L,P),L.push(t.trackGraphicState(b)),{visualElement:P,remove:function(){n.handlesGroup(L).remove()}}};var V=o.vec3f64.create(),S=s.create()}));