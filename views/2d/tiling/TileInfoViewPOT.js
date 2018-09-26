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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../layers/support/TileInfo","./TileInfoView","./TileKey"],function(e,l,o,r,t,n,i){return function(e){function l(){var l=null!==e&&e.apply(this,arguments)||this;return l._fullCacheLodInfos=null,l._levelByScale={},l}return o(l,e),l.prototype.getTileParentId=function(e){var l=i.pool.acquire(e),o=0===l.level?null:i.getId(l.level-1,l.row>>1,l.col>>1,l.world);return i.pool.release(l),o},l.prototype.getTileIdAtParent=function(e,l){var o=i.pool.acquire(l),r=this._infoByLevel[o.level];if(e.resolution<r.resolution)throw i.pool.release(o),new Error("Cannot calculate parent tile. destination LOD's resolution "+e.resolution+" is not a parent resolution of "+r.resolution);if(e.resolution===r.resolution){var t=o.id;return i.pool.release(o),t}var n=o.level-e.level;if(n<0)throw i.pool.release(o),new Error("Wrong way...!");var a=i.getId(e.level,o.row>>n,o.col>>n,o.world);return i.pool.release(o),a},l.prototype.getTileCoverage=function(l){var o=e.prototype.getTileCoverage.call(this,l);if(!o)return o;var r=1<<o.lodInfo.level;return o.spans=o.spans.filter(function(e){return e.row>=0&&e.row<r}),o},l.prototype.scaleToLevel=function(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];var l=this._fullCacheLodInfos;if(e>l[0].scale)return l[0].level;for(var o=void 0,r=void 0,t=0;t<l.length-1;t++)if(r=l[t+1],e>r.scale)return o=l[t],o.level+(o.scale-e)/(o.scale-r.scale);return l[l.length-1].level},l.prototype._initializeFullCacheLODs=function(e){var l;if(0===e[0].level)l=e.map(function(e){return{level:e.level,resolution:e.resolution,scale:e.scale}});else{var o=this.tileInfo.size[0],r=this.tileInfo.spatialReference;l=t.create({size:o,spatialReference:r}).lods.map(function(e){return{level:e.level,resolution:e.resolution,scale:e.scale}})}for(var n=0;n<l.length;n++)this._levelByScale[l[n].scale]=l[n].level;this._fullCacheLodInfos=l},l}(n)});