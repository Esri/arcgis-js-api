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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/_base/lang","../request","../core/Error","../core/promiseUtils","../core/accessorSupport/decorators","../geometry/Extent","../geometry/SpatialReference","./Layer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/TileInfo"],function(e,t,r,o,n,i,a,l,p,s,c,u,y,f,d){var m={id:"0/0/0",level:0,row:0,col:0,extent:null};return function(t){function u(){var e=null!==t&&t.apply(this,arguments)||this;return e.tileInfo=d.create({spatialReference:c.WebMercator,size:256}),e.type="base-tile",e.fullExtent=new s(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,c.WebMercator),e.spatialReference=c.WebMercator,e}return r(u,t),u.prototype.getTileBounds=function(e,t,r,o){var n=o||[0,0,0,0];return m.level=e,m.row=t,m.col=r,m.extent=n,this.tileInfo.updateTileInfo(m),m.extent=null,n},u.prototype.getTileUrl=function(e,t,r){throw new a("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")},u.prototype.fetchTile=function(e,t,r,o){var a=this.getTileUrl(e,t,r),l={responseType:"image"};return o&&o.timestamp&&(l.query={_ts:o.timestamp}),"string"==typeof a?i(a,n.mixin({allowImageDataAccess:o&&o.allowImageDataAccess||!1},l)).then(function(e){return e.data}):a.then(function(e){return i(e,l)}).then(function(e){return e.data})},u.prototype.importLayerViewModule=function(t){switch(t.type){case"2d":return l.create(function(t){return e(["../views/2d/layers/TiledLayerView2D"],t)});case"3d":return l.create(function(t){return e(["../views/3d/layers/TileLayerView3D"],t)})}},o([p.property({type:d})],u.prototype,"tileInfo",void 0),o([p.property({readOnly:!0,value:"base-tile"})],u.prototype,"type",void 0),o([p.property()],u.prototype,"fullExtent",void 0),o([p.property()],u.prototype,"spatialReference",void 0),u=o([p.subclass("esri.layers.BaseTileLayer")],u)}(p.declared(u,y,f))});