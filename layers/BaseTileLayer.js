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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../request","../core/Error","../core/accessorSupport/decorators","../geometry/Extent","../geometry/SpatialReference","../geometry/support/aaBoundingRect","./Layer","./mixins/BlendLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/TileInfo"],(function(e,t,r,o,n,i,a,l,p,s,c,y,u,d){"use strict";var f={id:"0/0/0",level:0,row:0,col:0,extent:null};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tileInfo=d.create({spatialReference:l.WebMercator,size:256}),t.type="base-tile",t.fullExtent=new a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,l.WebMercator),t.spatialReference=l.WebMercator,t}return r.__extends(t,e),t.prototype.getTileBounds=function(e,t,r,o){var n=o||p.create();return f.level=e,f.row=t,f.col=r,f.extent=n,this.tileInfo.updateTileInfo(f),f.extent=null,n},t.prototype.fetchTile=function(e,t,r,n){void 0===n&&(n={});var i=n.signal,a=n.timestamp,l=this.getTileUrl(e,t,r),p={responseType:"image",signal:i};return null!=a&&(p.query={_ts:n.timestamp}),o(l,p).then((function(e){return e.data}))},t.prototype.getTileUrl=function(){throw new n("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")},r.__decorate([i.property({type:d})],t.prototype,"tileInfo",void 0),r.__decorate([i.property({type:["show","hide"]})],t.prototype,"listMode",void 0),r.__decorate([i.property({readOnly:!0,value:"base-tile"})],t.prototype,"type",void 0),r.__decorate([i.property()],t.prototype,"fullExtent",void 0),r.__decorate([i.property()],t.prototype,"spatialReference",void 0),t=r.__decorate([i.subclass("esri.layers.BaseTileLayer")],t)}(c.BlendLayer(u.ScaleRangeLayer(y.RefreshableLayer(s))))}));