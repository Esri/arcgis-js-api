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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Error","../core/promiseUtils","../core/accessorSupport/decorators","../geometry/Extent","../geometry/SpatialReference","./Layer","./support/TileInfo"],function(e,t,r,o,n,i,l,p,a,s,c){var u={id:"0/0/0",level:0,row:0,col:0,extent:null};return function(t){function s(){var e=null!==t&&t.apply(this,arguments)||this;return e.tileInfo=c.create({spatialReference:a.WebMercator,size:256}),e.fullExtent=new p(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,a.WebMercator),e.spatialReference=a.WebMercator,e.type="base-elevation",e}return r(s,t),s.prototype.getTileBounds=function(e,t,r,o){var n=o||[0,0,0,0];return u.level=e,u.row=t,u.col=r,u.extent=n,this.tileInfo.updateTileInfo(u),u.extent=null,n},s.prototype.fetchTile=function(e,t,r,o){throw new n("BaseElevationLayer:fetchtile-not-implemented","fetchTile() is not implemented")},s.prototype.importLayerViewModule=function(t){switch(t.type){case"2d":return i.reject(new n("base-elevation-layer:view-not-supported","BaseElevationLayer is only supported in 3D"));case"3d":return i.create(function(t){return e(["../views/3d/layers/ElevationLayerView3D"],t)})}},o([l.property({type:c})],s.prototype,"tileInfo",void 0),o([l.property()],s.prototype,"fullExtent",void 0),o([l.property()],s.prototype,"spatialReference",void 0),o([l.property({readOnly:!0,value:"base-elevation"})],s.prototype,"type",void 0),s=o([l.subclass("esri.layers.BaseElevationLayer")],s)}(l.declared(s))});