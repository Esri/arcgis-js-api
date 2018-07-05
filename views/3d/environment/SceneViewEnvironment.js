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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/lang","../../../core/accessorSupport/decorators","./SceneViewAtmosphere","./SceneViewLighting","../../../webscene/Environment","../../../webscene/Lighting"],function(e,t,n,i,l,a,s,r,d,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.atmosphere=new s.default,t}n(t,e),d=t,Object.defineProperty(t.prototype,"lighting",{set:function(e){if(!e)return void(this.lighting||this._set("lighting",new r.default));if(this.lighting)null!=e.date&&(this.lighting.date=e.date),null!=e.defaultDate&&(this.lighting.defaultDate=e.defaultDate),null!=e.displayUTCOffset&&(this.lighting.displayUTCOffset=e.displayUTCOffset),this.lighting.directShadowsEnabled=e.directShadowsEnabled,null!=e.ambientOcclusionEnabled&&(this.lighting.ambientOcclusionEnabled=e.ambientOcclusionEnabled),null!=e.cameraTrackingEnabled&&(this.lighting.cameraTrackingEnabled=e.cameraTrackingEnabled);else if(e instanceof r.default)this._set("lighting",e);else if(e instanceof o){var t={directShadowsEnabled:e.directShadowsEnabled};null!=e.date&&(t.date=e.date),null!=e.displayUTCOffset&&(t.displayUTCOffset=e.displayUTCOffset),null!=e.defaultDate&&(t.defaultDate=e.defaultDate),this._set("lighting",new r.default(t))}else this._set("lighting",new r.default(e))},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new d({lighting:this.lighting.clone(),atmosphere:this.atmosphere.clone(),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled,background:l.clone(this.background)})};var d;return i([a.property({type:s.default,json:{read:!1}})],t.prototype,"atmosphere",void 0),i([a.property()],t.prototype,"lighting",null),t=d=i([a.subclass("esri.views.3d.environment.SceneViewEnvironment")],t)}(a.declared(d))});