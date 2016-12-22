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

define(["../support/ExternalRenderer","./RealisticAtmosphere","./PanoramicAtmosphere","../webgl-engine/lib/RenderSlot"],function(e,i,t,s){var r=e.createSubclass({declaredClass:"esri.views.3d.environment.MixedPanoramicAtmosphere",properties:{view:{},needsRender:{dependsOn:["_panoramicAtmosphere.needsRender","_realisticAtmosphere.needsRender"],get:function(){return this._panoramicAtmosphere.needsRender||this._realisticAtmosphere.needsRender}},slot:{value:s.BACKGROUND,set:function(e){this._panoramicAtmosphere&&(this._panoramicAtmosphere.slot=e),this._set("slot",e)}}},initialize:function(){this._panoramicAtmosphere=new t({view:this.view,slot:this.slot}),this._realisticAtmosphere=new i({view:this.view,planar:!0}),this.addResolvingPromise(this._panoramicAtmosphere),this.addResolvingPromise(this._realisticAtmosphere)},destroy:function(){this._panoramicAtmosphere&&(this._panoramicAtmosphere.destroy(),this._panoramicAtmosphere=null),this._realisticAtmosphere&&(this._realisticAtmosphere.destroy(),this._realisticAtmosphere=null)},initializeRenderContext:function(e){this._panoramicAtmosphere.initializeRenderContext(e),this._realisticAtmosphere.initializeRenderContext(e)},render:function(e){return this._panoramicAtmosphere.render(e),this._realisticAtmosphere.render(e),this._panoramicAtmosphere.didRender||this._realisticAtmosphere.didRender},resetNeedsRender:function(){this._panoramicAtmosphere.resetNeedsRender?this._panoramicAtmosphere.resetNeedsRender():this._panoramicAtmosphere.didRender&&(this._panoramicAtmosphere.needsRender=!1,this._panoramicAtmosphere.didRender=!1),this._realisticAtmosphere.resetNeedsRender?this._realisticAtmosphere.resetNeedsRender():this._realisticAtmosphere.didRender&&(this._realisticAtmosphere.needsRender=!1,this._realisticAtmosphere.didRender=!1)},_setEnableTestImage:function(e){this._realisticAtmosphere._setEnableTestImage(e)}});return r});