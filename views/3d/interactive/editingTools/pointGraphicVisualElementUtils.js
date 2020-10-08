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

define(["require","exports","../../../../core/handleUtils","../../../../core/mathUtils","../../../../core/maybe","../../../../core/watchUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/aaBoundingRect","../../../../support/elevationInfoUtils","./ManipulatorState","./settings","../visualElements/LaserlineVisualElement","../visualElements/LineVisualElement","../visualElements/PointVisualElement","../../layers/graphics/elevationAlignmentUtils","../../layers/graphics/ElevationContext","../../layers/graphics/GraphicState","../../support/pointUtils","../../support/projectionUtils"],(function(e,t,n,i,a,r,l,s,o,c,p,u,v,g,h,d,m,f,y,E,w){"use strict";function V(e){return a.isSome(e.geometry)&&"point"===e.geometry.type}Object.defineProperty(t,"__esModule",{value:!0}),t.createVisualElements=void 0,t.createVisualElements=function(e){var t=e.view,s=e.graphic,L=new y.GraphicState({graphic:s}),P=[],G=function(e,t,i){var l=e.view,s=e.graphic,o=new d.PointVisualElement({view:l,geometry:V(s)?s.geometry:null,elevationInfo:p.getGraphicEffectiveElevationInfo(s),attached:!1});return function(e,t,i,l){(function(e,t,i,r){var l=e.view,s=e.graphic,o=null,p=function(){a.isSome(o)&&(o.remove(),o=null),i.isDraped&&V(s)&&(o=function(e,t,n){var i=e.elevationProvider.spatialReference;E.pointToVector(t,S,i);var a=S[0],r=S[1];return e.elevationProvider.on("elevation-change",(function(e){c.containsXY(e.extent,a,r)&&n()}))}(l,s.geometry,(function(){t.geometry=s.geometry})))},u=function(){p(),t.geometry=V(s)?s.geometry:null};r.push(i.on("changed",u),n.refHandle((function(){return o}))),u()})(e,t,i,l),v.settings.visualElements.pointGraphics.outline.apply(t),l.push(r.init(i,"displaying",(function(){return t.attached=i.displaying})))}(e,o,t,i),i.push(n.destroyHandle(o)),o}(e,L,P);return function(e,t,a,r){var s=e.view,c=e.graphic,d=new h.LineVisualElement({view:s,infinite:v.settings.visualElements.zVerticalLine.infiniteType,attached:!1});v.settings.visualElements.zVerticalLine.apply(d);var y=new g.LaserlineVisualElement({view:s,intersectsLineInfinite:!0,attached:!1});v.settings.visualElements.pointGraphics.shadowStyle.apply(y);var E=i.deg2rad(v.settings.visualElements.heightPlaneAngleCutoff),L=new g.LaserlineVisualElement({view:s,attached:!1,angleCutoff:E});v.settings.visualElements.heightPlane.apply(L);var P=p.getGraphicEffectiveElevationInfo(e.graphic),G=f.ElevationContext.fromElevationInfo(P),M="on-the-ground"===P.mode||!P.offset&&"absolute-height"!==P.mode,x=new u.ManipulatorState,A=1,H=1,U=function(){x.update(e);var n=M&&(t.isDraped||!V(c)||!c.geometry.hasZ),i=!0;if(!n&&V(c)){var a=c.geometry,p=m.evaluateElevationAlignmentAtPoint(c.geometry,s.elevationProvider,G,s.renderCoordsHelper);l.vec3.set(S,a.x,a.y,p),w.vectorToVector(S,a.spatialReference,S,s.renderCoordsHelper.spatialReference),d.worldDownAtLocation=S,y.intersectsWorldUpAtLocation=S}else i=!1;var u=2&x.grabbingState?v.settings.visualElements.laserlineAlphaMultiplier:1;u!==A&&(A=u,v.settings.visualElements.heightPlane.apply(L,u));var g=o.empty(b);!n&&t.displaying&&r.calculateMapBounds(g)&&w.vectorToVector(o.getMin(g,S),s.spatialReference,S,s.renderCoordsHelper.spatialReference)?(L.heightManifoldTarget=S,L.attached=!0):L.attached=!1;var h=4&x.grabbingState?v.settings.visualElements.laserlineAlphaMultiplier:1;h!==H&&(H=h,v.settings.visualElements.pointGraphics.shadowStyle.apply(y,h));var f=i&&t.displaying&&!n;y.attached=f,d.attached=f};a.push(t.watch(["displaying","isDraped"],U),t.on("changed",U)),e.forEachManipulator((function(e){a.push(e.events.on("grab-changed",U))})),a.push(n.destroyHandle(y)),a.push(n.destroyHandle(d)),a.push(n.destroyHandle(L)),U()}(e,L,P,G),P.push(t.trackGraphicState(L)),{visualElement:G,remove:function(){n.handlesGroup(P).remove()}}};var S=s.vec3f64.create(),b=o.create()}));