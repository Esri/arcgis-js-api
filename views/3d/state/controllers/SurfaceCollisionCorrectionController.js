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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/Handles","../../camera/constraintUtils","../../camera/intersectionUtils","./CameraController"],function(e,t,n,r,o,i,a){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(t){var n=e.call(this)||this;return n.handles=new r,n.view=t.view,n.desiredCamera=t.desiredCamera.clone(),n}return n(t,e),Object.defineProperty(t.prototype,"canStop",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"constraintEnabled",{get:function(){return this.view.state.constraints.collision.enabled},enumerable:!0,configurable:!0}),t.prototype.onControllerStart=function(t){var n=this;e.prototype.onControllerStart.call(this,t),this.handles.add(this.view.basemapTerrain.on("elevation-change",function(e){return n.handleElevationChangeEvent(e)})),this.applyCorrection()},t.prototype.onControllerEnd=function(t){this.handles.removeAll(),this.view=null,e.prototype.onControllerEnd.call(this,t)},t.prototype.handleElevationChangeEvent=function(e){i.eyeWithinExtent(this.view,this.desiredCamera,e.extent,e.spatialReference)&&this.applyCorrection()},t.prototype.applyCorrection=function(){var e=this;this.view.state.updateCamera(function(t){t.copyViewFrom(e.desiredCamera),o.applySurfaceCollision(e.view,t,1)||e.constraintEnabled||(e.state=a.State.Stopped)})},t}(a.CameraController);t.SurfaceCollisionCorrectionController=l});