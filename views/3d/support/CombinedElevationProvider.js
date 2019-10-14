// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/generatorHelper","../../../core/Accessor","../../../core/Evented","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../layers/graphics/dehydratedFeatures","../layers/graphics/ElevationQuery"],function(e,r,t,i,o,n,s,a,p,l,v,c){return function(e){function r(r){var t=e.call(this)||this;return t.providers={im:new Array,ground:new Array,scene:new Array},t.handles=new Map,t}return t(r,e),r.prototype.getElevation=function(e,r){var t=null,i=!0;return"scene"===r&&null!=(t=this._updateElevation(t,this.providers.im,e,r))&&(i=!1),i&&(t=this._updateElevation(t,this.providers.ground,e,r)),"scene"===r&&(t=this._updateElevation(t,this.providers.scene,e,r)),t},r.prototype._updateElevation=function(e,r,t,i){for(var o=0,n=r;o<n.length;o++){var s=n[o],a=s.getElevation(t,i);null!=a&&(e=null!=e?Math.max(a,e):a)}return e},r.prototype.queryElevation=function(e,r,t,i){var o=this;void 0===t&&(t=0),this._elevationService||(this._elevationService=new c.ElevationQuery(this.view.spatialReference,function(){return o.view.map&&o.view.map.ground},{maximumAutoTileRequests:4}));var n=p.createResolver();return(v.isPoint(e)?this._elevationService.queryElevation(e.x,e.y,r,t):this._elevationService.queryElevation(e[0],e[1],r,t)).then(function(r){"scene"===i&&(r=o._updateElevation(r,o.providers.scene,e,i)),n.resolve(r)}).catch(function(r){p.isAbortError(r)?n.reject(r):n.resolve(o.getElevation(e))}),n.promise},r.prototype.register=function(e,r){var t=this;this.handles.set(r,r.on("elevation-change",function(e){return t.emit("elevation-change",e)})),this.providers[e].push(r)},r.prototype.unregister=function(e){this.handles.has(e)&&(this.handles.get(e).remove(),this.handles.delete(e));for(var r=0,t=Object.keys(this.providers);r<t.length;r++){var i=t[r],o=this.providers[i].indexOf(e);o>-1&&this.providers[i].splice(o,1)}},i([l.property({constructOnly:!0})],r.prototype,"view",void 0),i([l.property({readOnly:!0,aliasOf:"view.basemapTerrain.spatialReference"})],r.prototype,"spatialReference",void 0),r=i([l.subclass("esri.views.3d.support.CombinedElevationProvider")],r)}(l.declared(a.EventedMixin(s)))});