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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/lang","../../../core/promiseUtils","../../../core/urlUtils","../../../geometry/Extent","../../../layers/support/TileInfo","../../../layers/support/TilemapCache","../TileIndex"],function(e,t,i,l,r,n,o,s,a){return function(){function e(e,t,l){this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=e,this.sourceUrl=t,t&&(this.parsedUrl=r.urlToObject(this.sourceUrl));var o=i.clone(l),u=o.tiles;t&&u.forEach(function(e,i){r.isAbsolute(e)||(u[i]=r.join(t,e))}),this.tileServers=u,l.tileMap&&(this.tileMapURL=r.join(t,l.tileMap));var p=l.capabilities&&l.capabilities.split(",").map(function(e){return e.toLowerCase().trim()}),h=!!l.exportTilesAllowed,c=!!p&&-1!==p.indexOf("tilemap"),f=h&&l.hasOwnProperty("maxExportTilesCount")?l.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:h,supportsTileMap:c},exportTiles:h?{maxExportTilesCount:+f}:null},this.tileInfo=this.readTileInfo(o.tileInfo,o),c&&(this.type="vector-tile",this.tilemapCache=new s({layer:this}),this.tilemapCache&&(this.tileIndex=new a(this.tilemapCache))),this.fullExtent=n.fromJSON(l.fullExtent)}return e.prototype.getRefKey=function(e){return this.tileIndex?this.tileIndex.dataKey(e):l.resolve(e)},e.prototype.getSourceTileUrl=function(e,t,i){var l=this.tileServers[t%this.tileServers.length];return l=l.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,i.toString())},e.prototype.isCompatibleWith=function(e){var t=this.tileInfo,i=e.tileInfo;if(!t.spatialReference.equals(i.spatialReference))return!1;if(!t.origin.equals(i.origin))return!1;if(Math.round(t.dpi)!==Math.round(i.dpi))return!1;for(var l=t.lods,r=i.lods,n=Math.min(l.length,r.length),o=0;o<n;o++){var s=l[o],a=r[o];if(s.level!==a.level||Math.round(s.scale)!==Math.round(a.scale))return!1}return!0},e.prototype.readTileInfo=function(e,t){var i=function(e){return Math.round(1e4*e)/1e4},l=t.minScale?i(t.minScale):1/0,r=t.maxScale?i(t.maxScale):-1/0;return e?(e.lods=e.lods.filter(function(e){var t=i(e.scale);return t<=l&&t>=r}),o.fromJSON(e)):null},e}()});