/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/Handles","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/watchUtils","../../../../core/accessorSupport/decorators/property","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/Logger","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/vec3f64","../../../../geometry/Point","../../../../geometry/support/aaBoundingRect"],(function(e,t,r,o,a,s,n,i,c,l,u,p,d,h,f,_){"use strict";e.StableSurfaceCenter=function(e){function r(t){var r;return(r=e.call(this,t)||this).location=null,r._updateController=null,r._handles=new a,r}t._inheritsLoose(r,e);var o=r.prototype;return o.initialize=function(){this.view.state.isLocal&&(this._handles.add([this.watch(["surfaceView.spatialReference","surfaceView.extent"],(()=>this._update())),i.on(this,"surface.layers","change",(()=>this._update()))]),this._update())},o.destroy=function(){this._handles.destroy()},o._update=function(){if(this._updateController&&(this._updateController.abort(),this._updateController=null),!this.surfaceView||s.isNone(this.surfaceView.extent)||!this.surfaceView.spatialReference)return void this._set("location",null);const e=_.center(this.surfaceView.extent),t=new f({x:e[0],y:e[1],z:0,spatialReference:this.surfaceView.spatialReference});this.surface&&this.surface.layers.length>0?(this._set("location",null),this._updateController=n.createAbortController(),this.surface.queryElevation(t,{noDataValue:0,signal:this._updateController.signal,cache:this.cache}).then((e=>{this._updateController=null,this._set("location",e.geometry)})).catch((e=>{n.isAbortError(e)||e&&"elevation-query:invalid-layer"===e.name||console.error("StableSurfaceCenter failed to update: ",e)}))):this._set("location",t)},t._createClass(r,[{key:"renderLocation",get:function(){if(!this.location)return null;const e=h.create();return this.view.renderCoordsHelper.toRenderCoords(this.location,e),e}}]),r}(o),r.__decorate([c.property({constructOnly:!0})],e.StableSurfaceCenter.prototype,"view",void 0),r.__decorate([c.property({constructOnly:!0})],e.StableSurfaceCenter.prototype,"cache",void 0),r.__decorate([c.property({readOnly:!0,aliasOf:"view.map.ground"})],e.StableSurfaceCenter.prototype,"surface",void 0),r.__decorate([c.property({readOnly:!0,aliasOf:"view.basemapTerrain"})],e.StableSurfaceCenter.prototype,"surfaceView",void 0),r.__decorate([c.property({readOnly:!0})],e.StableSurfaceCenter.prototype,"location",void 0),r.__decorate([c.property({readOnly:!0})],e.StableSurfaceCenter.prototype,"renderLocation",null),e.StableSurfaceCenter=r.__decorate([d.subclass("esri.views.3d.terrain.StableSurfaceCenter")],e.StableSurfaceCenter),Object.defineProperty(e,"__esModule",{value:!0})}));
