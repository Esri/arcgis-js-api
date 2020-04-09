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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/generatorHelper","../../../core/Accessor","../../../core/Evented","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../layers/graphics/ElevationQuery"],(function(e,r,t,i,o,n,s,a,p,l,v){Object.defineProperty(r,"__esModule",{value:!0});var c=function(e){function r(r){var t=e.call(this,r)||this;return t.providers={im:new Array,ground:new Array,scene:new Array},t.handles=new Map,t}return t(r,e),r.prototype.getElevation=function(e,r,t,i,o){var n=null;return null==(n=this._updateElevation(n,this.providers.im,e,r,t,i,o))&&(n=this._updateElevation(n,this.providers.ground,e,r,t,i,o)),"scene"===o&&(n=this._updateElevation(n,this.providers.scene,e,r,t,i,o)),n},r.prototype._updateElevation=function(e,r,t,i,o,n,s){for(var a=0,p=r;a<p.length;a++){var l=p[a].getElevation(t,i,o,n,s);null!=l&&(e=null!=e?Math.max(l,e):l)}return e},r.prototype.queryElevation=function(e,r,t,i,o,n,s){var a=this;void 0===o&&(o=null),void 0===n&&(n=0),this._elevationService||(this._elevationService=new v.ElevationQuery(this.view.spatialReference,(function(){return a.view.map&&a.view.map.ground}),{maximumAutoTileRequests:4}));var l=p.createResolver();return this._elevationService.queryElevation(e,r,o,n).then((function(o){"scene"===s&&(o=a._updateElevation(o,a.providers.scene,e,r,t,i,s)),l.resolve(o)})).catch((function(o){p.isAbortError(o)?l.reject(o):l.resolve(a.getElevation(e,r,t,i,s))})),l.promise},r.prototype.register=function(e,r){var t=this;this.handles.set(r,r.on("elevation-change",(function(e){return t.emit("elevation-change",e)}))),this.providers[e].push(r)},r.prototype.unregister=function(e){this.handles.has(e)&&(this.handles.get(e).remove(),this.handles.delete(e));for(var r=0,t=Object.keys(this.providers);r<t.length;r++){var i=t[r],o=this.providers[i].indexOf(e);o>-1&&this.providers[i].splice(o,1)}},i([l.property({constructOnly:!0})],r.prototype,"view",void 0),i([l.property({readOnly:!0,aliasOf:"view.basemapTerrain.spatialReference"})],r.prototype,"spatialReference",void 0),r=i([l.subclass("esri.views.3d.support.CombinedElevationProvider")],r)}(l.declared(a.EventedMixin(s)));r.CombinedElevationProvider=c}));