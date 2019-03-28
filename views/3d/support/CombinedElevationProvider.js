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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/generatorHelper","../../../core/Accessor","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../layers/graphics/dehydratedFeatures","../layers/graphics/ElevationQuery","./Evented"],function(e,t,r,i,n,o,s,a,p,v,l,c){return function(e){function t(t){var r=e.call(this)||this;return r.providers={im:[],ground:[],scene:[]},r.handles=new Map,r}return r(t,e),t.prototype.getElevation=function(e,t){var r=-1/0,i=!0;return"scene"===t&&(r=this._updateElevation(r,this.providers.im,e,t),isFinite(r)&&(i=!1)),i&&(r=this._updateElevation(r,this.providers.ground,e,t)),"scene"===t&&(r=this._updateElevation(r,this.providers.scene,e,t)),isFinite(r)?r:null},t.prototype._updateElevation=function(e,t,r,i){for(var n=0,o=t;n<o.length;n++){var s=o[n],a=s.getElevation(r,i);null!=a&&(e=Math.max(a,e))}return e},t.prototype.queryElevation=function(e,t,r){var i=this;void 0===t&&(t=0),this._elevationService||(this._elevationService=new l.ElevationQuery(this.view.spatialReference,function(){return i.view.map&&i.view.map.ground},{maximumAutoTileRequests:4}));var n=a.createResolver();return(v.isPoint(e)?this._elevationService.queryElevation(e.x,e.y,t):this._elevationService.queryElevation(e[0],e[1],t)).then(function(t){"scene"===r&&(t=i._updateElevation(t,i.providers.scene,e,r)),n.resolve(isFinite(t)?t:null)}).catch(function(){return n.resolve(i.getElevation(e))}),n.promise},t.prototype.register=function(e,t){var r=this;this.handles.set(t,t.on("elevation-change",function(e){return r.emit("elevation-change",e)})),this.providers[e].push(t)},t.prototype.unregister=function(e){this.handles.has(e)&&(this.handles.get(e).remove(),this.handles.delete(e));for(var t=0,r=Object.keys(this.providers);t<r.length;t++){var i=r[t],n=this.providers[i].indexOf(e);n>-1&&this.providers[i].splice(n,1)}},i([p.property({constructOnly:!0})],t.prototype,"view",void 0),i([p.property({readOnly:!0,aliasOf:"view.basemapTerrain.spatialReference"})],t.prototype,"spatialReference",void 0),t=i([p.subclass("esri.views.3d.support.CombinedElevationProvider")],t)}(p.declared(s,c.Evented))});