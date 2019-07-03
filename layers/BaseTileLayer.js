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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../request","../core/Error","../core/promiseUtils","../core/accessorSupport/decorators","../geometry/Extent","../geometry/SpatialReference","../geometry/support/aaBoundingRect","./Layer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/TileInfo"],function(e,t,r,o,i,n,p,l,a,s,u,c,y,d,f,v,m,g){var h={id:"0/0/0",level:0,row:0,col:0,extent:null};return function(t){function r(){var e=null!==t&&t.apply(this,arguments)||this;return e.tileInfo=g.create({spatialReference:y.WebMercator,size:256}),e.type="base-tile",e.fullExtent=new c(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,y.WebMercator),e.spatialReference=y.WebMercator,e}return o(r,t),r.prototype.getTileBounds=function(e,t,r,o){var i=o||d.create();return h.level=e,h.row=t,h.col=r,h.extent=i,this.tileInfo.updateTileInfo(h),h.extent=null,i},r.prototype.fetchTile=function(e,t,r,o){void 0===o&&(o={});var i=o.signal,n=o.timestamp,p=this.getTileUrl(e,t,r),a={responseType:"image",signal:i};return null!=n&&(a.query={_ts:o.timestamp}),l(p,a).then(function(e){return e.data})},r.prototype.getTileUrl=function(e,t,r){throw new a("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")},r.prototype.importLayerViewModule=function(t){return p(this,void 0,void 0,function(){return n(this,function(r){switch(t.type){case"2d":return[2,s.create(function(t){return e(["../views/2d/layers/TileLayerView2D"],t)})];case"3d":return[2,s.create(function(t){return e(["../views/3d/layers/TileLayerView3D"],t)})]}return[2]})})},i([u.property({type:g})],r.prototype,"tileInfo",void 0),i([u.property({type:["show","hide"]})],r.prototype,"listMode",void 0),i([u.property({readOnly:!0,value:"base-tile"})],r.prototype,"type",void 0),i([u.property()],r.prototype,"fullExtent",void 0),i([u.property()],r.prototype,"spatialReference",void 0),r=i([u.subclass("esri.layers.BaseTileLayer")],r)}(u.declared(f,v,m))});