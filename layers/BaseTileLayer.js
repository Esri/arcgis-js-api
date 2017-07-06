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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/Error","../geometry/Extent","../geometry/SpatialReference","./Layer","./support/TileInfo","../core/accessorSupport/decorators"],function(e,t,r,o,n,l,a,i,p,s,c){var u={id:"0/0/0",level:0,row:0,col:0,extent:null},y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tileInfo=s.create({spatialReference:i.WebMercator,size:256}),t.type="base-tile",t.fullExtent=new a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,i.WebMercator),t.spatialReference=i.WebMercator,t}return r(t,e),t.prototype.getTileBounds=function(e,t,r,o){var n=o||[0,0,0,0];return u.level=e,u.row=t,u.col=r,u.extent=n,this.tileInfo.updateTileInfo(u),u.extent=null,n},t.prototype.getTileUrl=function(e,t,r){throw new l("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")},t.prototype.fetchTile=function(e,t,r,o){var l=this.getTileUrl(e,t,r);return"string"==typeof l?n(l,{responseType:"image",allowImageDataAccess:o&&o.allowImageDataAccess||!1}).then(function(e){return e.data}):l.then(function(e){return n(e,{responseType:"image"})}).then(function(e){return e.data})},t}(c.declared(p));return o([c.shared({"2d":"../views/2d/layers/TiledLayerView2D","3d":"../views/3d/layers/TiledLayerView3D"})],y.prototype,"viewModulePaths",void 0),o([c.property({type:s})],y.prototype,"tileInfo",void 0),o([c.property({readOnly:!0,value:"base-tile"})],y.prototype,"type",void 0),o([c.property()],y.prototype,"fullExtent",void 0),o([c.property()],y.prototype,"spatialReference",void 0),y=o([c.subclass("esri.layers.BaseTileLayer")],y)});