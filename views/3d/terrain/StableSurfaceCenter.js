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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/HandleRegistry","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../geometry/Point","../support/aaBoundingRect"],function(e,t,r,i,s,n,a,o,c,u){var p=function(e){function t(t){var r=e.call(this,t)||this;return r._updatePromise=null,r._set("center",null),r}return r(t,e),t.prototype.normalizeCtorArgs=function(e){return this._set("view",e.view),{}},t.prototype.initialize=function(){var e=this;this._handles=new n,this._handles.add(this.watch("surfaceView.extent",function(){return e._update()})),this._handles.add(a.on(this,"surface.layers","change",function(){return e._update()})),this._update()},t.prototype.destroy=function(){this._handles.destroy()},t.prototype._update=function(){var e=this;if(this._updatePromise&&(this._updatePromise.cancel("cancel"),this._updatePromise=null),!this.surfaceView)return void this._set("center",null);var t=u.center(this.surfaceView.extent),r=new c(t[0],t[1],this.surfaceView.spatialReference);this.surface&&this.surface.layers.length>0?(this._set("center",null),this._updatePromise=this.surface.queryElevation(r,{noDataValue:0}).then(function(t){e._updatePromise=null,e._set("center",t.geometry)}).otherwise(function(e){"cancel"!==e&&console.error("StableSurfaceCenter failed to update: ",e)})):(r.z=0,this._set("center",r))},i([o.property({readOnly:!0})],t.prototype,"view",void 0),i([o.property({readOnly:!0,aliasOf:"view.map.ground"})],t.prototype,"surface",void 0),i([o.property({readOnly:!0,aliasOf:"view.basemapTerrain"})],t.prototype,"surfaceView",void 0),i([o.property({readOnly:!0})],t.prototype,"center",void 0),t=i([o.subclass("esri.views.3d.terrain.StableSurfaceCenter")],t)}(o.declared(s));return p});