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

define(["require","exports","tslib","../../../core/Accessor","../../../core/Evented","../../../core/maybe","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../layers/graphics/ElevationQuery"],(function(e,t,r,n,i,o,s,a,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CombinedElevationProvider=void 0;var u=function(e){function t(t){var r=e.call(this,t)||this;return r.im=new Array,r.ground=new Array,r.scene=new Array,r.handles=new Map,r}return r.__extends(t,e),t.prototype.destroy=function(){this._elevationQuery=o.destroyMaybe(this._elevationQuery)},Object.defineProperty(t.prototype,"elevationQuery",{get:function(){var e=this;return o.isNone(this._elevationQuery)&&(this._elevationQuery=new l.ElevationQuery(this.view.resourceController.scheduler,this.view.spatialReference,(function(){return e.view.map&&e.view.map.ground}),{maximumAutoTileRequests:4})),this._elevationQuery},enumerable:!1,configurable:!0}),t.prototype.getElevation=function(e,t,r,n,i){var o=null;return null==(o=c(o,this.im,e,t,r,n,i))&&(o=c(o,this.ground,e,t,r,n,i)),"scene"===i&&(o=c(o,this.scene,e,t,r,n,i)),o},t.prototype.queryElevation=function(e,t,r,n,i,o,a){var l=this;void 0===o&&(o=null),void 0===a&&(a=0);var u=s.createResolver();return this.elevationQuery.queryElevation(e,t,o,a).then((function(o){"scene"===i&&(o=c(o,l.scene,e,t,r,n,i)),u.resolve(o)})).catch((function(o){s.isAbortError(o)?u.reject(o):u.resolve(l.getElevation(e,t,r,n,i))})),u.promise},t.prototype.register=function(e,t){var r=this;this.handles.set(t,t.on("elevation-change",(function(e){return r.emit("elevation-change",e)}))),this[e].push(t)},t.prototype.unregister=function(e){this.handles.has(e)&&(this.handles.get(e).remove(),this.handles.delete(e));for(var t=0,r=[this.im,this.ground,this.scene];t<r.length;t++){var n=r[t],i=n.indexOf(e);i>-1&&n.splice(i,1)}},r.__decorate([a.property({constructOnly:!0})],t.prototype,"view",void 0),r.__decorate([a.property({readOnly:!0,aliasOf:"view.basemapTerrain.spatialReference"})],t.prototype,"spatialReference",void 0),t=r.__decorate([a.subclass("esri.views.3d.support.CombinedElevationProvider")],t)}(i.EventedMixin(n));function c(e,t,r,n,i,o,s){for(var a=0,l=t;a<l.length;a++){var u=l[a].getElevation(r,n,i,o,s);null!=u&&(e=null!=e?Math.max(u,e):u)}return e}t.CombinedElevationProvider=u}));