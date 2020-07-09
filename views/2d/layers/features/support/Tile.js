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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../../core/ArrayPool","../../../../../geometry/Extent","../../../../../geometry/support/aaBoundingRect","../../../../../tasks/support/QuantizationParameters","../../../tiling/TileKey"],(function(e,t,i,n,o,r,s){function u(e,t){var i=e.bounds,n=t.bounds;return e.key.id!==t.key.id&&e.key.world===t.key.world&&i[0]<=n[0]&&i[1]<=n[1]&&i[2]>=n[2]&&i[3]>=n[3]}Object.defineProperty(t,"__esModule",{value:!0}),t.isParentOf=u,t.isChildOf=function(e,t){return u(t,e)};var l=function(){function e(e,t){this.bounds=o.create(),this.key=new s(0,0,0,0),this.objectIds=new Set,this.key.set(t);var i=e.getLODInfoAt(this.key);this.tileInfoView=e,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=i.resolution,this.scale=i.scale,this.level=i.level,this.needsClear=!0}return Object.defineProperty(e.prototype,"id",{get:function(){return this.key.id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extent",{get:function(){return n.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"transform",{get:function(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}},enumerable:!0,configurable:!0}),e.prototype.clone=function(){return new e(this.tileInfoView,this.id)},e.prototype.createChildTiles=function(){for(var t=this.key.getChildKeys(),n=i.acquire(),o=0;o<t.length;o++)n[o]=new e(this.tileInfoView,t[o]);return n},e.prototype.getQuantizationParameters=function(){return r.default.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})},e}();t.Tile=l,t.default=l}));