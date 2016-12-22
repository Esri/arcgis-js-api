// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/_base/lang","../../../webscene/Environment","../../../webscene/Lighting","./SceneViewLighting","./SceneViewAtmosphere"],function(e,t,n,i,a){var l=t.createSubclass({declaredClass:"esri.views.3d.environment.SceneViewEnvironment",properties:{atmosphere:{type:a,json:{readable:!1}},atmosphereEnabled:{value:!0,json:{readable:!1}},starsEnabled:{value:!0,json:{readable:!1}},lighting:{set:function(e){if(!e)return void(this.lighting||this._set("lighting",new i));if(this.lighting)null!=e.date&&(this.lighting.date=e.date),null!=e.defaultDate&&(this.lighting.defaultDate=e.defaultDate),null!=e.displayUTCOffset&&(this.lighting.displayUTCOffset=e.displayUTCOffset),this.lighting.directShadowsEnabled=e.directShadowsEnabled,null!=e.ambientOcclusionEnabled&&(this.lighting.ambientOcclusionEnabled=e.ambientOcclusionEnabled),null!=e.cameraTrackingEnabled&&(this.lighting.cameraTrackingEnabled=e.cameraTrackingEnabled);else if(e instanceof i)this._set("lighting",e);else if(e instanceof n){var t={directShadowsEnabled:e.directShadowsEnabled};null!=e.date&&(t.date=e.date),null!=e.displayUTCOffset&&(t.displayUTCOffset=e.displayUTCOffset),null!=e.defaultDate&&(t.defaultDate=e.defaultDate),this._set("lighting",new i(t))}else this._set("lighting",new i(e))}}},getDefaults:function(){return e.mixin(this.inherited(arguments),{atmosphere:{}})},atmosphere:null,atmosphereEnabled:!0,starsEnabled:!0,clone:function(){return new l({lighting:this.lighting.clone(),atmosphere:this.atmosphere.clone(),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled})}});return l});