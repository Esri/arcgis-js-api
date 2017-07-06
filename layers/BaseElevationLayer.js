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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Error","../geometry/Extent","../geometry/SpatialReference","./Layer","./support/TileInfo","../core/accessorSupport/decorators"],function(e,t,r,o,n,l,p,a,i,s){var c={id:"0/0/0",level:0,row:0,col:0,extent:null},u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tileInfo=i.create({spatialReference:p.WebMercator,size:256}),t.fullExtent=new l(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,p.WebMercator),t.spatialReference=p.WebMercator,t.type="base-elevation",t}return r(t,e),t.prototype.getTileBounds=function(e,t,r,o){var n=o||[0,0,0,0];return c.level=e,c.row=t,c.col=r,c.extent=n,this.tileInfo.updateTileInfo(c),c.extent=null,n},t.prototype.fetchTile=function(e,t,r,o){throw new n("BaseElevationLayer:fetchtile-not-implemented","fetchTile() is not implemented")},t}(s.declared(a));return o([s.shared({"3d":"../views/3d/layers/ElevationLayerView3D"})],u.prototype,"viewModulePaths",void 0),o([s.property({type:i})],u.prototype,"tileInfo",void 0),o([s.property()],u.prototype,"fullExtent",void 0),o([s.property()],u.prototype,"spatialReference",void 0),o([s.property({readOnly:!0,value:"base-elevation"})],u.prototype,"type",void 0),u=o([s.subclass("esri.layers.BaseElevationLayer")],u)});