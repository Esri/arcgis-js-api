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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/arrayUtils","../../../core/Handles","./index","./TextureCollection","../webgl-engine/lib/screenSizePerspectiveUtils"],function(e,t,r,s,i,n,a){Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e){this.textures=null,this.streamDataSupplier=null,this.graphicsOwners=[],this.screenSizePerspectiveHandles=null;var t=i.ClientType.SYMBOLOGY;this.viewState=e.viewState,this.stage=e.stage,this.pointsOfInterest=e.pointsOfInterest,this.resourceController=e.resourceController,this.streamDataSupplier=this.resourceController.getStreamDataSupplier(t),this.textures=new n.default(this.streamDataSupplier,e.stage,{preMultiplyAlpha:!0,wrap:{s:33071,t:33071}}),this.screenSizePerspectiveSettings=a.getSettings(e.viewingMode),this.screenSizePerspectiveSettingsLabels=a.getLabelSettings(e.viewingMode)}return e.prototype.destroy=function(){this.streamDataSupplier=null,this.textures.destroy(),this.textures=null,this.streamDataSupplier=null},e.prototype.addGraphicsOwner=function(e){var t=this;if(!e)return{remove:function(){}};this.graphicsOwners.push(e);var s="layer"in e?e.watch("layer.screenSizePerspectiveEnabled",function(){return t.updateScreenSizePerspectiveEnabled()}):null;return this.updateScreenSizePerspectiveEnabled(),{remove:function(){s&&(s.remove(),r.removeUnordered(t.graphicsOwners,e),t.updateScreenSizePerspectiveEnabled())}}},e.prototype.updateScreenSizePerspectiveEnabled=function(){var e=this,t=this.graphicsOwners.some(function(e){return!0===e.get("layer.screenSizePerspectiveEnabled")});if(t&&!this.screenSizePerspectiveHandles){this.screenSizePerspectiveHandles=new s;var r=function(){return e.updateScreenSizePerspectiveSettings()};this.screenSizePerspectiveHandles.add([this.pointsOfInterest.centerOnSurfaceInfrequent.watch("distance",r,!0),this.viewState.events.on("camera-projection-changed",r)]),this.updateScreenSizePerspectiveSettings()}else!t&&this.screenSizePerspectiveHandles&&(this.screenSizePerspectiveHandles.destroy(),this.screenSizePerspectiveHandles=null)},e.prototype.updateScreenSizePerspectiveSettings=function(){var e=this.pointsOfInterest;p.distance=e.centerOnSurfaceInfrequent.distance,p.fovY=this.viewState.camera.fovY,this.screenSizePerspectiveSettings.update(p),this.screenSizePerspectiveSettingsLabels.update(p),this.stage.setNeedsRender()},e}();t.SharedSymbolResources=c;var p={distance:0,fovY:0};t.default=c});