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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../geometry","../core/Error","../core/promiseUtils","../core/accessorSupport/decorators","../geometry/support/aaBoundingRect","./Layer","./support/TileInfo"],function(e,t,r,o,n,i,p,a,l,u,c,s,y){var f={id:"0/0/0",level:0,row:0,col:0,extent:null};return function(t){function s(){var e=null!==t&&t.apply(this,arguments)||this;return e.tileInfo=y.create({spatialReference:p.SpatialReference.WebMercator,size:256}),e.fullExtent=new p.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,p.SpatialReference.WebMercator),e.spatialReference=p.SpatialReference.WebMercator,e.type="base-elevation",e}return r(s,t),s.prototype.getTileBounds=function(e,t,r,o){var n=o||c.ZERO;return f.level=e,f.row=t,f.col=r,f.extent=n,this.tileInfo.updateTileInfo(f),f.extent=null,n},s.prototype.fetchTile=function(e,t,r,o){throw new a("BaseElevationLayer:fetchtile-not-implemented","fetchTile() is not implemented")},s.prototype.queryElevation=function(e,t){var r=this;return this._importElevationQuery().then(function(o){return(new o.ElevationQuery).query(r,e,t)})},s.prototype.createElevationSampler=function(e,t){var r=this;return this._importElevationQuery().then(function(o){return(new o.ElevationQuery).createSampler(r,e,t)})},s.prototype.importLayerViewModule=function(t){return i(this,void 0,void 0,function(){return n(this,function(r){switch(t.type){case"2d":return[2,l.reject(new a("base-elevation-layer:view-not-supported","BaseElevationLayer is only supported in 3D"))];case"3d":return[2,l.create(function(t){return e(["../views/3d/layers/ElevationLayerView3D"],t)})]}return[2]})})},s.prototype._importElevationQuery=function(){return l.create(function(t){e(["./support/ElevationQuery"],t)})},o([u.property({type:y})],s.prototype,"tileInfo",void 0),o([u.property({type:["show","hide"]})],s.prototype,"listMode",void 0),o([u.property()],s.prototype,"fullExtent",void 0),o([u.property()],s.prototype,"spatialReference",void 0),o([u.property({readOnly:!0,value:"base-elevation"})],s.prototype,"type",void 0),s=o([u.subclass("esri.layers.BaseElevationLayer")],s)}(u.declared(s))});