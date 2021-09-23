/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../../../core/lang","../../../../../core/urlUtils","../../../../../geometry/Extent","../../../../../layers/support/serviceTileInfoProperty","../../../../../layers/support/TilemapCache","../TileIndex"],(function(e,t,i,l,r,s){"use strict";return function(){function n(n,o,a){this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=n,this.sourceUrl=o,o&&(this.parsedUrl=t.urlToObject(this.sourceUrl));const p=this.parsedUrl.path,u=this.parsedUrl.query?"?"+t.objectToQuery(this.parsedUrl.query):"",h=e.clone(a),c=h.tiles;o&&c.forEach(((e,i)=>{t.isAbsolute(e)||(c[i]=t.join(p,e)+u)})),this.tileServers=c,a.tileMap&&(this.tileMapURL=t.join(o,a.tileMap));const f=a.capabilities&&a.capabilities.split(",").map((e=>e.toLowerCase().trim())),d=!!a.exportTilesAllowed,x=!!f&&-1!==f.indexOf("tilemap"),m=d&&a.hasOwnProperty("maxExportTilesCount")?a.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:d,supportsTileMap:x},exportTiles:d?{maxExportTilesCount:+m}:null},this.tileInfo=l.readServiceTileInfo(h.tileInfo,h,null,{ignoreMinMaxLOD:!0}),x&&(this.type="vector-tile",this.tilemapCache=new r.TilemapCache({layer:this}),this.tilemapCache&&(this.tileIndex=new s(this.tilemapCache))),this.fullExtent=i.fromJSON(a.fullExtent)}var o=n.prototype;return o.getRefKey=function(e,t){return this.tileIndex?this.tileIndex.dataKey(e,t):Promise.resolve(e)},o.getSourceTileUrl=function(e,t,i){let l=this.tileServers[t%this.tileServers.length];return l=l.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,i.toString()),l},o.isCompatibleWith=function(e){const t=this.tileInfo,i=e.tileInfo;if(!t.spatialReference.equals(i.spatialReference))return!1;if(!t.origin.equals(i.origin))return!1;if(Math.round(t.dpi)!==Math.round(i.dpi))return!1;const l=t.lods,r=i.lods,s=Math.min(l.length,r.length);for(let n=0;n<s;n++){const e=l[n],t=r[n];if(e.level!==t.level||Math.round(e.scale)!==Math.round(t.scale))return!1}return!0},n}()}));
