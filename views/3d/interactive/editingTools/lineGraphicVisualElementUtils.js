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

define(["require","exports","../../../../core/handleUtils","../../../../core/mathUtils","../../../../core/maybe","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../support/elevationInfoUtils","../Manipulator3D","./ManipulatorState","./settings","../visualElements/LaserlineVisualElement","../visualElements/LineVisualElement","../visualElements/OutlineVisualElement","../../layers/graphics/GraphicState"],(function(e,t,a,n,i,l,s,r,o,c,u,h,p,d,g){function v(e){return i.isSome(e.geometry)&&("polygon"===e.geometry.type||"polyline"===e.geometry.type)}Object.defineProperty(t,"__esModule",{value:!0}),t.createVisualElements=function(e){var t=e.view,s=e.graphic,f=new g.GraphicState({graphic:s}),y=[],E=function(e,t,n){var i=e.view,l=e.graphic,s=new d.OutlineVisualElement({view:i,geometry:v(l)?l.geometry:null,elevationInfo:r.getGraphicEffectiveElevationInfo(l),attached:!1});u.settings.visualElements.lineGraphics.shadowStyle.apply(s);var o=function(){s.attached=t.displaying};return u.settings.visualElements.lineGraphics.outline.apply(s),n.push(t.watch("displaying",o),t.watch("isDraped",(function(e){return s.isDraped=e})),t.on("changed",(function(){return s.geometry=v(l)?l.geometry:null})),a.destroyHandle(s)),o(),s}(e,f,y);return function(e,t,s,d){var g=e.graphic,f=e.view,y=r.getGraphicEffectiveElevationInfo(g),E="on-the-ground"===y.mode||!y.offset&&"absolute-height"!==y.mode,w=new c.ManipulatorState,S=new p.LineVisualElement({view:f,infinite:u.settings.visualElements.zVerticalLine.infiniteType,attached:!1});u.settings.visualElements.pointGraphics.shadowStyle.apply(S);var b=n.deg2rad(u.settings.visualElements.heightPlaneAngleCutoff),G=new h.LaserlineVisualElement({view:f,attached:!1,angleCutoff:b});u.settings.visualElements.heightPlane.apply(G);var M=1,L=1,V=function(){if(w.update(e),!s.displaying||E&&(s.isDraped||!v(g)||!g.geometry.hasZ))return t.laserlineEnabled=!1,S.attached=!1,void(G.attached=!1);t.laserlineEnabled=!0;var a=4&w.grabbingState?u.settings.visualElements.laserlineAlphaMultiplier:1;a!==M&&(M=a,u.settings.visualElements.lineGraphics.shadowStyle.apply(t,a),u.settings.visualElements.pointGraphics.shadowStyle.apply(S,a));var n=2&w.grabbingState?u.settings.visualElements.laserlineAlphaMultiplier:1;n!==L&&(L=n,u.settings.visualElements.heightPlane.apply(G,n)),function(e,t){var a=1===t.numSelected?t.firstSelected:t.numSelected>1&&i.isSome(t.firstGrabbedXY)?t.firstGrabbedXY:null;i.isSome(a)?(u.settings.visualElements.zVerticalLine.infinite&&(e.worldDownAtLocation=a.renderLocation),e.attached=!0):e.attached=!1}(S,w),function(e,t,a,n){if(n.numSelected>0){l.vec3.set(m,0,0,0);var s=0;e.forEachManipulator((function(e,t){1===t&&e.selected&&e instanceof o.Manipulator3D&&(l.vec3.add(m,m,e.renderLocation),s++)})),s>0?(a.heightManifoldTarget=l.vec3.scale(m,m,1/s),a.attached=!0):a.attached=!1}else{var r=t.attachmentOrigin;i.isSome(r)&&e.view.renderCoordsHelper.toRenderCoords(r,m)?(a.heightManifoldTarget=m,a.attached=!0):a.attached=!1}}(e,t,G,w)};u.settings.visualElements.zVerticalLine.apply(S),d.push(s.on("changed",V),s.watch("displaying",V),t.events.on("attachment-origin-changed",V),a.destroyHandle(S),a.destroyHandle(G));var D=[],C=function(){a.handlesGroup(D).remove(),D.length=0,e.forEachManipulator((function(e){return D.push(e.events.on("grab-changed",V))})),e.forEachManipulator((function(e){return D.push(e.events.on("select-changed",V))})),V()};C(),d.push(e.onManipulatorsChanged(C),a.refHandle((function(){return a.handlesGroup(D)})))}(e,E,f,y),y.push(t.maskOccludee(s)),y.push(t.trackGraphicState(f)),{visualElement:E,remove:function(){a.handlesGroup(y).remove()}}};var m=s.vec3f64.create()}));