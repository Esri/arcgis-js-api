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

define(["require","exports","../../../../../core/lang","../../../../../core/promiseUtils","../../../../../core/urlUtils","../../../../../geometry/Extent","../../../../../layers/support/serviceTileInfoProperty","../../../../../layers/support/TilemapCache","../TileIndex"],(function(e,t,i,l,r,n,s,o,a){"use strict";return function(){function e(e,t,l){this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=e,this.sourceUrl=t,t&&(this.parsedUrl=r.urlToObject(this.sourceUrl));var p=i.clone(l),u=p.tiles;t&&u.forEach((function(e,i){r.isAbsolute(e)||(u[i]=r.join(t,e))})),this.tileServers=u,l.tileMap&&(this.tileMapURL=r.join(t,l.tileMap));var h=l.capabilities&&l.capabilities.split(",").map((function(e){return e.toLowerCase().trim()})),c=!!l.exportTilesAllowed,f=!!h&&-1!==h.indexOf("tilemap"),x=c&&l.hasOwnProperty("maxExportTilesCount")?l.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:c,supportsTileMap:f},exportTiles:c?{maxExportTilesCount:+x}:null},this.tileInfo=s.readServiceTileInfo(p.tileInfo,p,null,{ignoreMinMaxLOD:!0}),f&&(this.type="vector-tile",this.tilemapCache=new o.TilemapCache({layer:this}),this.tilemapCache&&(this.tileIndex=new a(this.tilemapCache))),this.fullExtent=n.fromJSON(l.fullExtent)}return e.prototype.getRefKey=function(e,t){return this.tileIndex?this.tileIndex.dataKey(e,t):l.resolve(e)},e.prototype.getSourceTileUrl=function(e,t,i){var l=this.tileServers[t%this.tileServers.length];return l=l.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,i.toString())},e.prototype.isCompatibleWith=function(e){var t=this.tileInfo,i=e.tileInfo;if(!t.spatialReference.equals(i.spatialReference))return!1;if(!t.origin.equals(i.origin))return!1;if(Math.round(t.dpi)!==Math.round(i.dpi))return!1;for(var l=t.lods,r=i.lods,n=Math.min(l.length,r.length),s=0;s<n;s++){var o=l[s],a=r[s];if(o.level!==a.level||Math.round(o.scale)!==Math.round(a.scale))return!1}return!0},e}()}));