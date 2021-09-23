/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/has","../../../core/Handles","../../../core/maybe","../../../core/watchUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../../core/accessorSupport/trackingUtils","../../../geometry/projectionEllipsoid","../../../geometry/support/spatialReferenceUtils","../../../support/featureFlags","./ChapmanAtmosphere","./CloudsComposition","./CloudsGenerator","./PanoramicAtmosphere","./RealisticAtmosphere","./SimpleAtmosphere","./Stars"],(function(e,t,s,i,o,n,r,h,a,l,d,p,u,c,m,_,v,y,g,w,b,f,C){"use strict";const R=[14,15,16];e.EnvironmentRenderer=function(e){function s(){var t;return(t=e.apply(this,arguments)||this)._handles=new n,t._context=null,t._chapmanQuality="high",t._enableNewAtmosphere=_.enableNewAtmosphere(),t._pendingAtmosphere=null,t._atmosphere=null,t._stars=null,t._clouds=null,t._cloudComposition=null,t._cloudsEnabled=!!o("enable-feature:enable-clouds"),t}t._inheritsLoose(s,e);var i=s.prototype;return i.renderCubeMap=function(){r.isSome(this._clouds)&&(this._clouds.resetRenderFlags(),this._context.requestRender())},i.initialize=function(){this.view._stage.addRenderPlugin(R,this)},i.destroy=function(){this._pendingAtmosphere=r.destroyMaybe(this._pendingAtmosphere),this._atmosphere=r.destroyMaybe(this._atmosphere),this._stars=r.destroyMaybe(this._stars),this._handles=r.destroyMaybe(this._handles),this._clouds=r.destroyMaybe(this._clouds),this._cloudComposition=r.destroyMaybe(this._cloudComposition),this.view&&null!=this.view._stage&&(this.view._stage.removeRenderPlugin(this),this._set("view",null))},i.initializeRenderContext=function(e){this._context=e,this.setup()},i.setup=function(){this._handles.add(h.when(this.view,"basemapTerrain",(()=>this._updateBasemapTerrain()),!0)),this._handles.add([h.init(this.view,["viewingMode","environment.atmosphereEnabled","environment.atmosphere.quality"],(()=>this._updateAtmosphere()),!0),u.autorun((()=>this._updateStars())),u.autorun((()=>{if(this.evaluateCloudsEnabled(),this.ensureClouds(this._context.renderContext.rctx),r.isSome(this._clouds)){var e,t;const s=null==(e=this.view)||null==(t=e.environment)?void 0:t.clouds;this._clouds.coverage=null==s?void 0:s.coverage,this._clouds.absorption=null==s?void 0:s.absorption,this._clouds.cloudHeight=null==s?void 0:s.cloudHeight,this._clouds.cloudSize=null==s?void 0:s.cloudSize,this._clouds.density=null==s?void 0:s.density,this._clouds.detailSize=null==s?void 0:s.detailSize,this._clouds.smoothness=null==s?void 0:s.smoothness}}))])},i.evaluateCloudsEnabled=function(){var e,t,s,i;this.cloudsEnabled=(null!=(e=null!==(null==(t=this.view)||null==(s=t.environment)?void 0:s.clouds))?e:!!o("enable-feature:enable-clouds"))&&m.isEarth(null==(i=this.view)?void 0:i.spatialReference)},i.uninitializeRenderContext=function(){r.isSome(this._stars)&&(this._stars.destroy(),this._stars=null),r.isSome(this._atmosphere)&&(this._atmosphere.uninitializeRenderContext(),this._atmosphere.destroy(),this._atmosphere=null),this._clouds=r.destroyMaybe(this._clouds),this._cloudComposition=r.destroyMaybe(this._cloudComposition)},i.render=function(e){let t=!0;const s=this._context.renderContext.rctx;if(r.isSome(this._stars)&&this._stars.canRender&&15===e.slot&&0===e.pass&&(t=this._stars.render(e.rctx,e.camera)&&t),this._cloudsEnabled&&14===e.slot&&0===e.pass&&(this.ensureClouds(s),r.isSome(this._clouds))){const i=e.rctx.getViewport();t=this._clouds.render(s)&&t,e.rctx.setViewport(i.x,i.y,i.width,i.height)}return r.isSome(this._atmosphere)&&this._atmosphere.canRender&&(t=this._atmosphere.render(e)&&t),this._cloudsEnabled&&r.isSome(this._clouds)&&r.isSome(this._cloudComposition)&&15===e.slot&&0===e.pass&&(t=this._cloudComposition.render(e,this._clouds._frameBufferCube)&&t,this._cloudComposition.isFading()&&this._setNeedsRender()),t},i.ensureClouds=function(e){if(!(this._cloudsEnabled&&r.isSome(this._clouds)&&r.isSome(this._cloudComposition))){if(this._cloudsEnabled&&r.isNone(this._clouds)&&r.isNone(this._cloudComposition)){this._clouds=new g.CloudsGenerator(e,this.view);const t=c.getReferenceEllipsoid(this.view.spatialReference).radius;this._cloudComposition=new y.CloudsComposition(this._context.renderContext.rctx,this.view.state.viewingMode,t)}this._cloudsEnabled||!r.isSome(this._clouds)&&!r.isSome(this._cloudComposition)||(this._clouds=r.destroyMaybe(this._clouds),this._cloudComposition=r.destroyMaybe(this._cloudComposition))}},i._setNeedsRender=function(){this._context&&this._context.requestRender()},i._updateStars=function(){var e,t,s;const i=null!=(e=null==(t=this.view)||null==(s=t.environment)?void 0:s.starsEnabled)&&e;i&&r.isNone(this._stars)?(this._stars=new C.Stars({view:this.view,requestRender:()=>this._context.requestRender}),this._setNeedsRender()):!i&&r.isSome(this._stars)&&(this._stars.destroy(),this._stars=null,this._setNeedsRender())},i._updateAtmosphere=function(){const e=this._getAtmosphereType();if(this.atmosphereType===e)return;this.atmosphereType=e,r.isSome(this._pendingAtmosphere)&&(this._pendingAtmosphere!==this._atmosphere&&this._pendingAtmosphere.destroy(),this._pendingAtmosphere=null);const t=this._getAtmosphereClass();if(!t)return r.isSome(this._atmosphere)&&(this._atmosphere.destroy(),this._atmosphere=null,this._setNeedsRender()),void this._updateBasemapTerrain();const s=new t(this.view);s instanceof v.ChapmanAtmosphere&&s.setSimplified("medium"===this._getAtmosphereType()),s.initializeRenderContext(this._context),r.isNone(this._atmosphere)&&(this._atmosphere=s,this._setNeedsRender()),this._pendingAtmosphere=s,s.when().then((()=>{r.isSome(this._atmosphere)&&this._pendingAtmosphere!==this._atmosphere&&(this._atmosphere.destroy(),this._atmosphere=this._pendingAtmosphere),this._pendingAtmosphere=null,this._setNeedsRender(),this._updateBasemapTerrain()})).catch((()=>{this._pendingAtmosphere===s&&(this._pendingAtmosphere=null)}))},i._getAtmosphereClass=function(){const e=this._getAtmosphereType();if(this.atmosphereClassFromType)return this.atmosphereClassFromType(e);switch(e){case"none":return null;case"chapman":case"medium":return v.ChapmanAtmosphere;case"realistic":return b.RealisticAtmosphere;case"panoramic":return w;case"simple":return f;default:return}},i._getAtmosphereType=function(){const e=this.view.get("environment.atmosphereEnabled"),t=this.view.get("environment.atmosphere.quality"),s=this.view.viewingMode;return!e||null==t||m.isMoon(this.view.spatialReference)?"none":"local"===s?"panoramic":this._enableNewAtmosphere&&v.ChapmanAtmosphere.isSupported(this._context)&&!m.isMars(this.view.spatialReference)?"medium"===this._chapmanQuality?"medium":"chapman":"high"===t&&b.RealisticAtmosphere.isSupported(this._context)&&!m.isMars(this.view.spatialReference)?"realistic":"simple"},i._updateBasemapTerrain=function(){const e=this.view.basemapTerrain;e&&(e.velvetOverground=null!=this._atmosphere&&"simple"===this.atmosphereType)},t._createClass(s,[{key:"canRender",get:function(){return!(!this.view.basemapTerrain||!this.view.basemapTerrain.renderer.canRender)||"global"!==this.view.viewingMode}},{key:"updating",get:function(){return r.isSome(this._pendingAtmosphere)||r.isSome(this._stars)&&this._stars.updating}},{key:"cloudsEnabled",set:function(e){this._cloudsEnabled=e,this._setNeedsRender()}},{key:"test",get:function(){return{atmosphere:this._atmosphere,clouds:this._clouds,enableNewAtmosphere:e=>{this._enableNewAtmosphere=e},setNewAtmosphereQuality:e=>{this._chapmanQuality=e},updateAtmosphere:()=>{this._updateAtmosphere()}}}}]),s}(i),s.__decorate([a.property({constructOnly:!0})],e.EnvironmentRenderer.prototype,"view",void 0),s.__decorate([a.property({constructOnly:!0})],e.EnvironmentRenderer.prototype,"atmosphereClassFromType",void 0),s.__decorate([a.property({type:Boolean,readOnly:!0})],e.EnvironmentRenderer.prototype,"updating",null),s.__decorate([a.property()],e.EnvironmentRenderer.prototype,"_pendingAtmosphere",void 0),s.__decorate([a.property()],e.EnvironmentRenderer.prototype,"_stars",void 0),e.EnvironmentRenderer=s.__decorate([p.subclass("esri.views.3d.environment.EnvironmentRenderer")],e.EnvironmentRenderer),Object.defineProperty(e,"__esModule",{value:!0})}));
