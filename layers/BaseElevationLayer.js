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

define(["require","exports","tslib","../geometry","../core/Error","../core/accessorSupport/decorators","../geometry/support/aaBoundingRect","./Layer","./support/TileInfo","@dojo/framework/shim/Promise"],(function(e,t,r,o,n,i,a,p,l){"use strict";var u={id:"0/0/0",level:0,row:0,col:0,extent:null};return function(t){function p(){var e=null!==t&&t.apply(this,arguments)||this;return e.tileInfo=l.create({spatialReference:o.SpatialReference.WebMercator,size:256}),e.fullExtent=new o.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,o.SpatialReference.WebMercator),e.spatialReference=o.SpatialReference.WebMercator,e.type="base-elevation",e}return r.__extends(p,t),p.prototype.getTileBounds=function(e,t,r,o){var n=o||a.ZERO;return u.level=e,u.row=t,u.col=r,u.extent=n,this.tileInfo.updateTileInfo(u),u.extent=null,n},p.prototype.fetchTile=function(){throw new n("BaseElevationLayer:fetchtile-not-implemented","fetchTile() is not implemented")},p.prototype.queryElevation=function(e,t){var r=this;return this._importElevationQuery().then((function(o){return(new o.ElevationQuery).query(r,e,t)}))},p.prototype.createElevationSampler=function(e,t){var r=this;return this._importElevationQuery().then((function(o){return(new o.ElevationQuery).createSampler(r,e,t)}))},p.prototype._importElevationQuery=function(){return new Promise((function(t,r){e(["./support/ElevationQuery"],t,r)}))},r.__decorate([i.property({type:l})],p.prototype,"tileInfo",void 0),r.__decorate([i.property({type:["show","hide"]})],p.prototype,"listMode",void 0),r.__decorate([i.property()],p.prototype,"fullExtent",void 0),r.__decorate([i.property()],p.prototype,"spatialReference",void 0),r.__decorate([i.property({readOnly:!0,value:"base-elevation"})],p.prototype,"type",void 0),p=r.__decorate([i.subclass("esri.layers.BaseElevationLayer")],p)}(p)}));