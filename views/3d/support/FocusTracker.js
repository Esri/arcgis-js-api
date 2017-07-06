// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","./Evented","../../../core/HandleRegistry","../../../core/throttle","../lib/glMatrix","../webgl-engine/lib/Selector","./earthUtils"],function(e,t,i,a,r,s,u,n){Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e){this.view=e,this.handles=new a,this.throttledMeasureSurfaceAltitude=r["default"](this.measureSurfaceAltitude,this.updateDistanceToSurface,h,this),this.currentSurfaceAltitude=0,this.latestSurfaceAltitude=0,this.events=new i.Evented,this.distanceToSurface=0,this.fovY=0,this.selector=new u(e.viewingMode),this.selector.enableBackfacesTerrain=!1,this.selector.enableInvisibleTerrain=!1,this.handles.add([this.view.navigation.on("currentViewChanged",this.throttledMeasureSurfaceAltitude),this.throttledMeasureSurfaceAltitude]),this.measureSurfaceAltitude()}return e.prototype.destroy=function(){this.handles.destroy()},e.prototype.forceUpdate=function(){this.throttledMeasureSurfaceAltitude.forceUpdate(),this.updateDistanceToSurface()},e.prototype.updateLatestSurfaceAltitude=function(){var e=this.view.navigation.currentCamera;this.view.basemapTerrain&&(this.selector.init(null,e.eye,e.center,null,e,null,!1),this.view.basemapTerrain.intersect(this.selector,e.eye,e.center),this.selector.minResult.getIntersectionPoint(o)&&(this.latestSurfaceAltitude=this.view.renderCoordsHelper.getAltitude(o)))},e.prototype.measureSurfaceAltitude=function(){this.updateLatestSurfaceAltitude(),this.updateDistanceToSurface()},e.prototype.updateDistanceToSurface=function(){var e=this.fovY!==this.view.navigation.currentCamera.fovY;this.fovY=this.view.navigation.currentCamera.fovY;var t=this.calculateDistanceToSurface(),i=t>=0,a=this.currentSurfaceAltitude!==this.latestSurfaceAltitude;!i&&a&&(t=this.calculateDistanceToSurface(this.latestSurfaceAltitude),i=t>=0,i&&(this.currentSurfaceAltitude=this.latestSurfaceAltitude));var r=this.latestSurfaceAltitudeChangesDistanceSignificantly(t);r>=0&&(t=r,i=!0,this.currentSurfaceAltitude=this.latestSurfaceAltitude),i&&this.distanceToSurface!==t?(this.distanceToSurface=t,this.emitDistanceToSurfaceChanged()):e&&this.emitDistanceToSurfaceChanged()},e.prototype.emitDistanceToSurfaceChanged=function(){l.distanceToSurface=this.distanceToSurface,this.events.emit("distanceToSurfaceChanged",l)},e.prototype.calculateDistanceToSurface=function(e){void 0===e&&(e=this.currentSurfaceAltitude);var t=this.view.navigation,i=t.currentCamera;if(t.intersectManifold(i.eye,i.viewForward,e,o)){var a=s.vec3d.dist(i.eye,o);if("global"===this.view.viewingMode){var r=n.earthRadius+e,u=s.vec3d.length2(i.eye)<r*r;if(u&&a>n.earthRadius/4)return t.intersectManifold(i.eye,i.viewUp,e,o)?s.vec3d.dist(i.eye,o):-1}return a}return-1},e.prototype.latestSurfaceAltitudeChangesDistanceSignificantly=function(e){if(this.latestSurfaceAltitude===this.currentSurfaceAltitude||0>e)return-1;var t=this.calculateDistanceToSurface(this.latestSurfaceAltitude);if(t>0){var i=Math.abs(t-e);if(i/e>d)return t}return-1},e}();t.FocusTracker=c;var o=s.vec3d.create(),l={distanceToSurface:0},d=.05,h=3e3;t["default"]=c});