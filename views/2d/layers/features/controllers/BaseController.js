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

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/generatorHelper","../../../../../core/tsSupport/awaiterHelper","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/Accessor","../../../../../core/Error","../../../../../core/HandleOwner","../../../../../core/Logger","../../../../../core/maybe","../../../../../core/accessorSupport/decorators","../../../../../layers/graphics/data/FeatureFilter","../../../../../layers/graphics/data/utils","../../../engine/webgl/definitions"],function(e,t,r,o,n,i,s,l,c,p,u,a,y,f,d){Object.defineProperty(t,"__esModule",{value:!0});var h=p.getLogger("esri.views.2d.layers.features.controllers.BaseController"),g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.configuration=null,t.processor=null,t.remoteClient=null,t.service=null,t.tileStore=null,t.filters=new Array(d.MAX_FILTERS),t}return i(t,e),t.prototype.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])},t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"spatialReference",{get:function(){return this.tileStore.tileScheme.spatialReference},enumerable:!0,configurable:!0}),t.prototype.setFilterBase=function(e,t){return n(this,void 0,void 0,function(){var r,n,i,s;return o(this,function(o){switch(o.label){case 0:return[4,this._getFilter(e)];case 1:return r=o.sent(),[4,f.normalizeFilter(t,null,this.spatialReference)];case 2:return n=o.sent(),this.configuration.filter=n,n?[4,r.update(n)]:[2,r.clear()];case 3:o.sent(),o.label=4;case 4:return o.trys.push([4,6,,7]),[4,this.queryObjectIds(r.createQuery().toJSON())];case 5:return i=o.sent(),[2,r.setTrue(i)];case 6:return s=o.sent(),h.error(new l("featurelayer-controller:query-filter-error","An error occurred while executing the query",{error:s})),[2,{show:[],hide:[]}];case 7:return[2]}})})},t.prototype.enableEvent=function(e){},t.prototype._getFilter=function(e){return n(this,void 0,void 0,function(){var t,r,n;return o(this,function(o){switch(o.label){case 0:return t=this.filters[e],u.isSome(t)?[2,t]:(r=new y.default({geometryType:this.service.geometryType,hasM:!1,hasZ:!1,timeInfo:this.service.timeInfo}),this.filters[e]=r,[4,this.queryObjectIds({})]);case 1:return n=o.sent(),r.setKnownIds(n),[2,r]}})})},t.prototype._getFilterFlags=function(e){for(var t=0,r=0;r<this.filters.length;r++){var o=this.filters[r];t|=(u.isNone(o)||o.check(e)?1:0)<<r}return t},t.prototype.hasGeometryFilter=function(){return this.filters.some(function(e){return u.isSome(e)&&!!e.geometry})},r([a.property()],t.prototype,"configuration",void 0),r([a.property()],t.prototype,"processor",void 0),r([a.property({constructOnly:!0})],t.prototype,"remoteClient",void 0),r([a.property({constructOnly:!0})],t.prototype,"service",void 0),r([a.property({dependsOn:["tileStore"]})],t.prototype,"spatialReference",null),r([a.property({constructOnly:!0})],t.prototype,"tileInfo",void 0),r([a.property({constructOnly:!0})],t.prototype,"tileStore",void 0),r([a.property()],t.prototype,"filters",void 0),t=r([a.subclass()],t)}(a.declared(s,c));t.default=g});