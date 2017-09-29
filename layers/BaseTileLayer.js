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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/Error","../geometry/Extent","../geometry/SpatialReference","./Layer","./mixins/ScaleRangeLayer","./support/TileInfo","../core/accessorSupport/decorators"],function(e,t,r,o,n,l,a,i,p,s,c,u){var y={id:"0/0/0",level:0,row:0,col:0,extent:null},d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tileInfo=c.create({spatialReference:i.WebMercator,size:256}),t.type="base-tile",t.fullExtent=new a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,i.WebMercator),t.spatialReference=i.WebMercator,t}return r(t,e),t.prototype.getTileBounds=function(e,t,r,o){var n=o||[0,0,0,0];return y.level=e,y.row=t,y.col=r,y.extent=n,this.tileInfo.updateTileInfo(y),y.extent=null,n},t.prototype.getTileUrl=function(e,t,r){throw new l("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")},t.prototype.fetchTile=function(e,t,r,o){var l=this.getTileUrl(e,t,r);return"string"==typeof l?n(l,{responseType:"image",allowImageDataAccess:o&&o.allowImageDataAccess||!1}).then(function(e){return e.data}):l.then(function(e){return n(e,{responseType:"image"})}).then(function(e){return e.data})},o([u.shared({"2d":"../views/2d/layers/TiledLayerView2D","3d":"../views/3d/layers/TileLayerView3D"})],t.prototype,"viewModulePaths",void 0),o([u.property({type:c})],t.prototype,"tileInfo",void 0),o([u.property({readOnly:!0,value:"base-tile"})],t.prototype,"type",void 0),o([u.property()],t.prototype,"fullExtent",void 0),o([u.property()],t.prototype,"spatialReference",void 0),t=o([u.subclass("esri.layers.BaseTileLayer")],t)}(u.declared(p,s));return d});