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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Error","../core/promiseUtils","../core/accessorSupport/decorators","../geometry/Extent","../geometry/SpatialReference","../geometry/support/aaBoundingRect","./Layer","./support/TileInfo"],function(e,t,r,o,n,p,i,a,l,s,c,u){var y={id:"0/0/0",level:0,row:0,col:0,extent:null};return function(t){function c(){var e=null!==t&&t.apply(this,arguments)||this;return e.tileInfo=u.create({spatialReference:l.WebMercator,size:256}),e.fullExtent=new a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,l.WebMercator),e.spatialReference=l.WebMercator,e.type="base-elevation",e}return r(c,t),c.prototype.getTileBounds=function(e,t,r,o){var n=o||s.ZERO;return y.level=e,y.row=t,y.col=r,y.extent=n,this.tileInfo.updateTileInfo(y),y.extent=null,n},c.prototype.fetchTile=function(e,t,r,o){throw new n("BaseElevationLayer:fetchtile-not-implemented","fetchTile() is not implemented")},c.prototype.importLayerViewModule=function(t){switch(t.type){case"2d":return p.reject(new n("base-elevation-layer:view-not-supported","BaseElevationLayer is only supported in 3D"));case"3d":return p.create(function(t){return e(["../views/3d/layers/ElevationLayerView3D"],t)})}},o([i.property({type:u})],c.prototype,"tileInfo",void 0),o([i.property()],c.prototype,"fullExtent",void 0),o([i.property()],c.prototype,"spatialReference",void 0),o([i.property({readOnly:!0,value:"base-elevation"})],c.prototype,"type",void 0),c=o([i.subclass("esri.layers.BaseElevationLayer")],c)}(i.declared(c))});