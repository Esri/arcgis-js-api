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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../request","../core/Error","../core/accessorSupport/decorators","../geometry/Extent","../geometry/SpatialReference","../geometry/support/aaBoundingRect","./Layer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/TileInfo"],function(e,t,r,o,p,l,n,a,i,s,c,u,y,d,f,g,m){var v={id:"0/0/0",level:0,row:0,col:0,extent:null};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tileInfo=m.create({spatialReference:u.WebMercator,size:256}),t.type="base-tile",t.fullExtent=new c(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,u.WebMercator),t.spatialReference=u.WebMercator,t}return o(t,e),t.prototype.getTileBounds=function(e,t,r,o){var p=o||y.create();return v.level=e,v.row=t,v.col=r,v.extent=p,this.tileInfo.updateTileInfo(v),v.extent=null,p},t.prototype.fetchTile=function(e,t,r,o){void 0===o&&(o={});var p=o.signal,l=o.timestamp,n=this.getTileUrl(e,t,r),i={responseType:"image",signal:p};return null!=l&&(i.query={_ts:o.timestamp}),a(n,i).then(function(e){return e.data})},t.prototype.getTileUrl=function(){throw new i("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")},p([s.property({type:m})],t.prototype,"tileInfo",void 0),p([s.property({type:["show","hide"]})],t.prototype,"listMode",void 0),p([s.property({readOnly:!0,value:"base-tile"})],t.prototype,"type",void 0),p([s.property()],t.prototype,"fullExtent",void 0),p([s.property()],t.prototype,"spatialReference",void 0),t=p([s.subclass("esri.layers.BaseTileLayer")],t)}(s.declared(g.ScaleRangeLayer(f.RefreshableLayer(d))))});