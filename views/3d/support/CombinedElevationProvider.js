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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Accessor","../../../core/Evented","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../layers/graphics/ElevationQuery"],(function(e,t,r,i,n,o,s,a){Object.defineProperty(t,"__esModule",{value:!0});var v=function(e){function t(t){var r=e.call(this,t)||this;return r.providers={im:new Array,ground:new Array,scene:new Array},r.handles=new Map,r}return r.__extends(t,e),t.prototype.getElevation=function(e,t,r,i,n){var o=null;return null==(o=this._updateElevation(o,this.providers.im,e,t,r,i,n))&&(o=this._updateElevation(o,this.providers.ground,e,t,r,i,n)),"scene"===n&&(o=this._updateElevation(o,this.providers.scene,e,t,r,i,n)),o},t.prototype._updateElevation=function(e,t,r,i,n,o,s){for(var a=0,v=t;a<v.length;a++){var l=v[a].getElevation(r,i,n,o,s);null!=l&&(e=null!=e?Math.max(l,e):l)}return e},t.prototype.queryElevation=function(e,t,r,i,n,s,v){var l=this;void 0===n&&(n=null),void 0===s&&(s=0),this._elevationService||(this._elevationService=new a.ElevationQuery(this.view.spatialReference,(function(){return l.view.map&&l.view.map.ground}),{maximumAutoTileRequests:4}));var p=o.createResolver();return this._elevationService.queryElevation(e,t,n,s).then((function(n){"scene"===v&&(n=l._updateElevation(n,l.providers.scene,e,t,r,i,v)),p.resolve(n)})).catch((function(n){o.isAbortError(n)?p.reject(n):p.resolve(l.getElevation(e,t,r,i,v))})),p.promise},t.prototype.register=function(e,t){var r=this;this.handles.set(t,t.on("elevation-change",(function(e){return r.emit("elevation-change",e)}))),this.providers[e].push(t)},t.prototype.unregister=function(e){this.handles.has(e)&&(this.handles.get(e).remove(),this.handles.delete(e));for(var t=0,r=Object.keys(this.providers);t<r.length;t++){var i=r[t],n=this.providers[i].indexOf(e);n>-1&&this.providers[i].splice(n,1)}},r.__decorate([s.property({constructOnly:!0})],t.prototype,"view",void 0),r.__decorate([s.property({readOnly:!0,aliasOf:"view.basemapTerrain.spatialReference"})],t.prototype,"spatialReference",void 0),t=r.__decorate([s.subclass("esri.views.3d.support.CombinedElevationProvider")],t)}(n.EventedMixin(i));t.CombinedElevationProvider=v}));