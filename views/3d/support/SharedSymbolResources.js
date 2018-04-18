// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/Handles","../../../core/watchUtils","./ResourceController","./TextureCollection","../webgl-engine/lib/screenSizePerspectiveUtils"],function(e,t,s,i,r,n,a){Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e){this.textures=null,this.streamDataSupplier=null,this.graphicsOwners=[],this.screenSizePerspectiveHandles=null;var t=r.ClientType.SYMBOLOGY;this.viewState=e.viewState,this.stage=e.stage,this.pointsOfInterest=e.pointsOfInterest,this.resourceController=e.resourceController,this.streamDataSupplier=this.resourceController.registerClient(this,t),this.textures=new n(this.streamDataSupplier,e.stage,{preMultiplyAlpha:!0,wrapClamp:!0}),this.screenSizePerspectiveSettings=a.getSettings(e.viewingMode),this.screenSizePerspectiveSettingsLabels=a.getLabelSettings(e.viewingMode)}return e.prototype.destroy=function(){this.resourceController.deregisterClient(this),this.textures=null,this.streamDataSupplier=null},e.prototype.addGraphicsOwner=function(e){var t=this;this.graphicsOwners.push(e);var s=null;return e.layerView&&(s=i.init(e.layerView,"layer.screenSizePerspectiveEnabled",function(){return t.updateScreenSizePerspectiveEnabled()})),{remove:function(){s&&(s.remove(),s=null,t.updateScreenSizePerspectiveEnabled())}}},e.prototype.updateScreenSizePerspectiveEnabled=function(){var e=this,t=this.graphicsOwners.some(function(e){return e.layerView&&!0===e.layerView.get("layer.screenSizePerspectiveEnabled")});if(t&&!this.screenSizePerspectiveHandles){this.screenSizePerspectiveHandles=new s;var i=function(){return e.updateScreenSizePerspectiveSettings()};this.screenSizePerspectiveHandles.add([this.pointsOfInterest.centerOnSurfaceInfrequent.watch("distance",i,!0),this.pointsOfInterest.events.on("camera-parameters-changed",i)]),this.updateScreenSizePerspectiveSettings()}else!t&&this.screenSizePerspectiveHandles&&(this.screenSizePerspectiveHandles.destroy(),this.screenSizePerspectiveHandles=null)},e.prototype.updateScreenSizePerspectiveSettings=function(){var e=this.pointsOfInterest;l.distance=e.centerOnSurfaceInfrequent.distance,l.fovY=this.viewState.camera.fovY,this.screenSizePerspectiveSettings.update(l),this.screenSizePerspectiveSettingsLabels.update(l),this.stage.setNeedsRender()},e}();t.SharedSymbolResources=c;var l={distance:0,fovY:0};t.default=c});