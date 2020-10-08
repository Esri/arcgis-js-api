// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/Accessor","../../../../core/Handles","../../../../core/promiseUtils","../../../../core/watchUtils","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/Point","../../../../geometry/support/aaBoundingRect"],(function(e,t,r,o,a,n,i,s,l,c,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StableSurfaceCenter=void 0;var p=function(e){function t(t){var r=e.call(this,t)||this;return r.location=null,r._updateController=null,r._handles=new a,r}return r.__extends(t,e),Object.defineProperty(t.prototype,"renderLocation",{get:function(){if(!this.location)return null;var e=l.vec3f64.create();return this.view.renderCoordsHelper.toRenderCoords(this.location,e),e},enumerable:!1,configurable:!0}),t.prototype.initialize=function(){var e=this;this.view.state.isLocal&&(this._handles.add([this.watch(["surfaceView.spatialReference","surfaceView.extent"],(function(){return e._update()})),i.on(this,"surface.layers","change",(function(){return e._update()}))]),this._update())},t.prototype.destroy=function(){this._handles.destroy()},t.prototype._update=function(){var e=this;if(this._updateController&&(this._updateController.abort(),this._updateController=null),this.surfaceView&&this.surfaceView.extent&&this.surfaceView.spatialReference){var t=u.center(this.surfaceView.extent),r=new c({x:t[0],y:t[1],z:0,spatialReference:this.surfaceView.spatialReference});this.surface&&this.surface.layers.length>0?(this._set("location",null),this._updateController=n.createAbortController(),this.surface.queryElevation(r,{noDataValue:0,signal:this._updateController.signal}).then((function(t){e._updateController=null,e._set("location",t.geometry)})).catch((function(e){n.isAbortError(e)||e&&"elevation-query:invalid-layer"===e.name||console.error("StableSurfaceCenter failed to update: ",e)}))):this._set("location",r)}else this._set("location",null)},r.__decorate([s.property({constructOnly:!0})],t.prototype,"view",void 0),r.__decorate([s.property({readOnly:!0,aliasOf:"view.map.ground"})],t.prototype,"surface",void 0),r.__decorate([s.property({readOnly:!0,aliasOf:"view.basemapTerrain"})],t.prototype,"surfaceView",void 0),r.__decorate([s.property({readOnly:!0})],t.prototype,"location",void 0),r.__decorate([s.property({readOnly:!0,dependsOn:["location"]})],t.prototype,"renderLocation",null),t=r.__decorate([s.subclass("esri.views.3d.terrain.StableSurfaceCenter")],t)}(o);t.StableSurfaceCenter=p,t.default=p}));