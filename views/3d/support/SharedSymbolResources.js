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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojo/io-query","./TextureCollection","./ResourceController","../../../kernel","../../../core/watchUtils","../../../core/HandleRegistry","../webgl-engine/lib/screenSizePerspectiveUtils"],function(e,t,r,i,s,n,a,c,o){Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e){var t=this;this.textures=null,this.streamDataSupplier=null,this.tokens={},this.graphicsOwners=[],this.screenSizePerspectiveHandles=null;var r=s.ClientType.SYMBOLOGY;this.stage=e.stage,this.pointsOfInterest=e.pointsOfInterest,this.resourceController=e.resourceController,this.streamDataSupplier=this.resourceController.registerClient(this,r,{addUrlToken:function(e){return t.addUrlToken(e)}}),this.textures=new i(this.streamDataSupplier,e.stage,{preMultiplyAlpha:!0,wrapClamp:!0}),this.screenSizePerspectiveSettings=o.getSettings(e.viewingMode),this.screenSizePerspectiveSettingsLabels=o.getLabelSettings(e.viewingMode)}return e.prototype.destroy=function(){this.resourceController.deregisterClient(this),this.textures=null,this.streamDataSupplier=null},e.prototype.addGraphicsOwner=function(e){var t=this;this.graphicsOwners.push(e);var r=null;return e.layerView&&(r=a.init(e.layerView,"layer.screenSizePerspectiveEnabled",function(){return t.updateScreenSizePerspectiveEnabled()})),{remove:function(){r&&(r.remove(),r=null,t.updateScreenSizePerspectiveEnabled())}}},e.prototype.updateScreenSizePerspectiveEnabled=function(){var e=this,t=this.graphicsOwners.some(function(e){return e.layerView&&e.layerView.get("layer.screenSizePerspectiveEnabled")===!0});if(t&&!this.screenSizePerspectiveHandles){this.screenSizePerspectiveHandles=new c;var r=function(){return e.updateScreenSizePerspectiveSettings()};this.screenSizePerspectiveHandles.add([this.pointsOfInterest.centerOnSurfaceInfrequent.watch("distance",r,!0),this.pointsOfInterest.events.on("camera-parameters-changed",r)]),this.updateScreenSizePerspectiveSettings()}else!t&&this.screenSizePerspectiveHandles&&(this.screenSizePerspectiveHandles.destroy(),this.screenSizePerspectiveHandles=null)},e.prototype.updateScreenSizePerspectiveSettings=function(){var e=this.pointsOfInterest;p.distance=e.centerOnSurfaceInfrequent.distance,p.fovY=e.camera.fovY,this.screenSizePerspectiveSettings.update(p),this.screenSizePerspectiveSettingsLabels.update(p),this.stage.setNeedsRender()},e.prototype.addUrlToken=function(e){if(0===e.indexOf("data:"))return e;var t=e.match(/^(((?:https?:)?\/\/[^\/]+).*?)(?:\?(.*))?$/);if(!t)return e;var i=t[1],s=t[2],a=t[3],c=r.queryToObject(a||"");if(!("token"in c)){if(null==this.tokens[s]){var o=n.id&&n.id.findCredential(e);this.tokens[s]=o&&o.token||""}this.tokens[s]&&(c.token=this.tokens[s])}var l=r.objectToQuery(c);return e=l?i+"?"+l:i},e}();t.SharedSymbolResources=l;var p={distance:0,fovY:0};t["default"]=l});