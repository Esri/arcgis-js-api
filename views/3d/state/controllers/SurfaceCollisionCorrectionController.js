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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Handles","../../../../core/accessorSupport/decorators","../../camera/constraintUtils","../../camera/intersectionUtils","./CameraController"],function(e,t,r,o,n,i,a,l,s){Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(t){var r=e.call(this,t)||this;return r.handles=new n,r}return r(t,e),Object.defineProperty(t.prototype,"desiredCamera",{set:function(e){this._set("desiredCamera",e.clone())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"canStop",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"constraintEnabled",{get:function(){return this.view.state.constraints.collision.enabled},enumerable:!0,configurable:!0}),t.prototype.onControllerStart=function(){var e=this;this.state=s.State.Running,this.handles.add(this.view.basemapTerrain.on("elevation-change",function(t){return e.handleElevationChangeEvent(t)})),this.applyCorrection()},t.prototype.onControllerEnd=function(){this.handles.removeAll()},t.prototype.stepController=function(){},t.prototype.handleElevationChangeEvent=function(e){l.eyeWithinExtent(this.view,this.desiredCamera,e.extent,e.spatialReference)&&this.applyCorrection()},t.prototype.applyCorrection=function(){var e=this;this.view.state.updateCamera(function(t){t.copyViewFrom(e.desiredCamera),a.applySurfaceCollisionConstraint(e.view,t,1)||e.constraintEnabled||(e.state=s.State.Stopped)})},o([i.property({constructOnly:!0})],t.prototype,"view",void 0),o([i.property({constructOnly:!0})],t.prototype,"desiredCamera",null),t=o([i.subclass("esri.views.3d.state.controllers.SurfaceCollisionCorrectionController")],t)}(i.declared(s.CameraController));t.SurfaceCollisionCorrectionController=c});