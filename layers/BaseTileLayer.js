// COPYRIGHT © 2017 Esri
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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/Error","../geometry/Extent","../geometry/SpatialReference","./Layer","./mixins/ScaleRangeLayer","./support/TileInfo","../core/accessorSupport/decorators","./mixins/RefreshableLayer","dojo/_base/lang"],function(e,t,r,o,n,a,l,i,p,s,c,u,y,d){var f={id:"0/0/0",level:0,row:0,col:0,extent:null},m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tileInfo=c.create({spatialReference:i.WebMercator,size:256}),t.type="base-tile",t.fullExtent=new l(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,i.WebMercator),t.spatialReference=i.WebMercator,t}return r(t,e),t.prototype.getTileBounds=function(e,t,r,o){var n=o||[0,0,0,0];return f.level=e,f.row=t,f.col=r,f.extent=n,this.tileInfo.updateTileInfo(f),f.extent=null,n},t.prototype.getTileUrl=function(e,t,r){throw new a("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")},t.prototype.fetchTile=function(e,t,r,o){var a=this.getTileUrl(e,t,r),l={responseType:"image"};return o&&o.timestamp&&(l.query={_ts:o.timestamp}),"string"==typeof a?n(a,d.mixin({allowImageDataAccess:o&&o.allowImageDataAccess||!1},l)).then(function(e){return e.data}):a.then(function(e){return n(e,l)}).then(function(e){return e.data})},o([u.shared({"2d":"../views/2d/layers/TiledLayerView2D","3d":"../views/3d/layers/TileLayerView3D"})],t.prototype,"viewModulePaths",void 0),o([u.property({type:c})],t.prototype,"tileInfo",void 0),o([u.property({readOnly:!0,value:"base-tile"})],t.prototype,"type",void 0),o([u.property()],t.prototype,"fullExtent",void 0),o([u.property()],t.prototype,"spatialReference",void 0),t=o([u.subclass("esri.layers.BaseTileLayer")],t)}(u.declared(p,y,s));return m});