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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/Handles","../../../core/watchUtils","../../../core/accessorSupport/decorators","./PanoramicAtmosphere","./RealisticAtmosphere","./SimpleAtmosphere","./Stars","../webgl-engine/lib/RenderSlot"],function(e,t,s,i,r,n,a,o,h,p,l,d,m){var _=[m.POSTPROCESSING_ATMOSPHERE_OPAQUE,m.POSTPROCESSING_ATMOSPHERE_TRANSPARENT];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.needsRender=!1,t.didRender=!0,t._handles=new n,t._initContext=null,t._atmosphereReadyPromise=null,t._atmosphere=null,t._stars=null,t}return s(t,e),t.prototype.initialize=function(){this.view._stage.addExternalRenderer(_,this)},t.prototype.destroy=function(){this._atmosphere&&(this._atmosphere.destroy(),this._atmosphere=null),this._stars&&(this._stars.destroy(),this._stars=null),this._handles&&this._handles.removeAll(),this.view&&(this.view._stage.removeExternalRenderer(this),this.view=null)},t.prototype.initializeRenderContext=function(e){this._initContext=e,this.setup(e)},t.prototype.setup=function(e){var t=this;this._handles.add(a.when(this.view,"basemapTerrain",function(){return t._updateBasemapTerrain()})),this._handles.add([a.init(this.view,["viewingMode","environment.atmosphereEnabled","environment.atmosphere.quality"],function(){return t._updateAtmosphere()}),a.init(this.view,"environment.starsEnabled",function(){return t._updateStars()})])},t.prototype.uninitializeRenderContext=function(e){this._stars&&(this._stars.uninitializeRenderContext(e),this._stars.destroy(),this._stars=null),this._atmosphere&&(this._atmosphere.uninitializeRenderContext(e),this._atmosphere.destroy(),this._atmosphere=null)},t.prototype.render=function(e){var t=this.view.basemapTerrain;if(!(t&&t.loaded||"global"!==this.view.viewingMode))return!1;var s=!0;return this._stars&&(s=this._stars.render(e)&&s),this._atmosphere&&(s=this._atmosphere.render(e)&&s),s},t.prototype._updateStars=function(){var e=this.view.get("environment.starsEnabled")||!1;e&&!this._stars?(this._stars=new d(this.view),this._stars.initializeRenderContext(this._initContext),this.needsRender=!0):!e&&this._stars&&(this._stars.destroy(),this._stars=null,this.needsRender=!0)},t.prototype._updateAtmosphere=function(){var e=this,t=this._getAtmosphereType(this._initContext);if(this.atmosphereType!==t){this.atmosphereType=t;var s=null;switch(t){case"realistic":s=p;break;case"panoramic":s=h;break;case"simple":s=l}if(!s)return this._atmosphere&&(this._atmosphere.destroy(),this._atmosphere=null),void this._updateBasemapTerrain();var i=new s(this.view);this._atmosphereReadyPromise&&(this._atmosphereReadyPromise.cancel(),this._atmosphereReadyPromise=null),i.initializeRenderContext(this._initContext),null==this._atmosphere&&(this._atmosphere=i,this.needsRender=!0),this._atmosphereReadyPromise=i.when(function(){e._atmosphere!==i&&(e._atmosphere&&(e._atmosphere.destroy(),e._atmosphere=null),e._atmosphere=i),e._atmosphereReadyPromise=null,e.needsRender=!0,e._updateBasemapTerrain()})}},t.prototype._getAtmosphereType=function(e){var t=this.view.get("environment.atmosphereEnabled"),s=this.view.get("environment.atmosphere.quality"),i=this.view.viewingMode;return t&&null!=s?"local"===i?"panoramic":"high"===s&&p.isSupported(e)?"realistic":"simple":"none"},t.prototype._updateBasemapTerrain=function(){var e=this.view.basemapTerrain;e&&(e.velvetOverground=null!=this._atmosphere&&"simple"===this.atmosphereType)},i([o.property()],t.prototype,"view",void 0),t=i([o.subclass("esri.views.3d.environment.EnvironmentRenderer")],t)}(o.declared(r))});