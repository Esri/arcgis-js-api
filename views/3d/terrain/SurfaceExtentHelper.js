// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","dojo/_base/lang","../../../core/Accessor","../../../core/arrayUtils","../../../core/HandleRegistry","../../../geometry/support/webMercatorUtils","../../../views/3d/support/aaBoundingRect","./terrainUtils","./TerrainConst"],function(e,t,r,n,i,a,l,s,o,c,p,u,y){function f(e){return u.isTiledLayer(e)}function d(e,t){return e&&!e.spatialReference.equals(t)&&(e=c.canProject(e.spatialReference,t)?c.project(e,t):null),e}var h=function(e){function t(){e.apply(this,arguments)}return r(t,e),Object.defineProperty(t.prototype,"layerViewsExtent",{get:function(){return this._computeLayerViewsExtent()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tiledLayersExtent",{get:function(){return this._computeTiledLayersExtent()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"spatialReference",{set:function(e){this.tilingScheme||this._set("spatialReference",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tilingScheme",{set:function(e){this._set("tilingScheme",e),this._set("spatialReference",e.spatialReference)},enumerable:!0,configurable:!0}),t.prototype.normalizeCtorArgs=function(e){return e=a.mixin({},e),this._layers=e.layers,delete e.layers,this._layerViews=e.layerViews,delete e.layerViews,e},n([i.property({readOnly:!0})],t.prototype,"layerViewsExtent",null),n([i.property({readOnly:!0,dependsOn:["spatialReference","tilingScheme"]})],t.prototype,"tiledLayersExtent",null),n([i.property()],t.prototype,"spatialReference",null),n([i.property()],t.prototype,"tilingScheme",null),n([i.property()],t.prototype,"defaultTiledLayersExtent",void 0),t=n([i.subclass()],t)}(i.declared(l)),E=function(e){function t(){e.apply(this,arguments)}return r(t,e),t.prototype._computeLayerViewsExtent=function(){return this._getGlobalExtent()},t.prototype._computeTiledLayersExtent=function(){return this._getGlobalExtent()},t.prototype._getGlobalExtent=function(){return this.spatialReference.isWebMercator?y.WEBMERCATOR_WORLD_EXTENT:y.GEOGRAPHIC_WORLD_EXTENT},n([i.property({dependsOn:["spatialReference"]})],t.prototype,"layerViewsExtent",void 0),t=n([i.subclass()],t)}(i.declared(h));t.SurfaceExtentHelperGlobal=E;var g=function(e){function t(){e.call(this),this._changeListeners=new o}return r(t,e),t.prototype.initialize=function(){this._changeListeners.add(this._layers.on("change",this.notifyChange.bind(this,"tiledLayersExtent"))),this._changeListeners.add(this._layerViews.on("change",this.notifyChange.bind(this,"layerViewsExtent")))},t.prototype.destroy=function(){this._changeListeners.destroy(),this._changeListeners=null},t.prototype._computeLayerViewsExtent=function(){var e=p.create(p.NEGATIVE_INFINITY),t=this.spatialReference;this._layerViews.forEach(function(r){if(r.isResolved()){var n=r.fullExtentInViewSpatialReference||r.layer.fullExtent;n=d(n,t),n&&p.expand(e,n)}});var r=p.allFinite(e)?e:null,n=this._get("layerViewsExtent");return s.equals(r,n)?n:r},t.prototype._computeTiledLayersExtent=function(){var e=this.tilingScheme;if(!e)return null;var t=this.spatialReference,r=p.create(p.NEGATIVE_INFINITY);this._layers.forEach(function(n){f(n)&&e.compatibleWith(u.getTileInfo(n))&&n.fullExtent&&n.fullExtent.spatialReference.equals(t)&&p.expand(r,n.fullExtent)}),this.defaultTiledLayersExtent&&p.expand(r,this.defaultTiledLayersExtent);var n=p.allFinite(r)?r:null,i=this._get("tiledLayersExtent");return s.equals(n,i)?i:n},t=n([i.subclass()],t)}(i.declared(h));t.SurfaceExtentHelperLocal=g});