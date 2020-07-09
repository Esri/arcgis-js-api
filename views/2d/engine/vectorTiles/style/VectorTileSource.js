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

define(["require","exports","tslib","../../../../../core/lang","../../../../../core/urlUtils","../../../../../geometry/Extent","../../../../../layers/support/serviceTileInfoProperty","../../../../../layers/support/TilemapCache","../TileIndex"],(function(e,t,i,r,l,n,o,s,a){return function(){function e(e,t,i){this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=e,this.sourceUrl=t,t&&(this.parsedUrl=l.urlToObject(this.sourceUrl));var p=r.clone(i),u=p.tiles;t&&u.forEach((function(e,i){l.isAbsolute(e)||(u[i]=l.join(t,e))})),this.tileServers=u,i.tileMap&&(this.tileMapURL=l.join(t,i.tileMap));var h=i.capabilities&&i.capabilities.split(",").map((function(e){return e.toLowerCase().trim()})),c=!!i.exportTilesAllowed,f=!!h&&-1!==h.indexOf("tilemap"),d=c&&i.hasOwnProperty("maxExportTilesCount")?i.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:c,supportsTileMap:f},exportTiles:c?{maxExportTilesCount:+d}:null},this.tileInfo=o.readServiceTileInfo(p.tileInfo,p,null,{ignoreMinMaxLOD:!0}),f&&(this.type="vector-tile",this.tilemapCache=new s.TilemapCache({layer:this}),this.tilemapCache&&(this.tileIndex=new a(this.tilemapCache))),this.fullExtent=n.fromJSON(i.fullExtent)}return e.prototype.getRefKey=function(e,t){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){return this.tileIndex?[2,this.tileIndex.dataKey(e,t)]:[2,e]}))}))},e.prototype.getSourceTileUrl=function(e,t,i){var r=this.tileServers[t%this.tileServers.length];return r=r.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,i.toString())},e.prototype.isCompatibleWith=function(e){var t=this.tileInfo,i=e.tileInfo;if(!t.spatialReference.equals(i.spatialReference))return!1;if(!t.origin.equals(i.origin))return!1;if(Math.round(t.dpi)!==Math.round(i.dpi))return!1;for(var r=t.lods,l=i.lods,n=Math.min(r.length,l.length),o=0;o<n;o++){var s=r[o],a=l[o];if(s.level!==a.level||Math.round(s.scale)!==Math.round(a.scale))return!1}return!0},e}()}));