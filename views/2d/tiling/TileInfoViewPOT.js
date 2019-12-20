// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../layers/support/TileInfo","./TileInfoView","./TileKey"],function(e,l,t,r,o,n,i){return function(e){function l(){var l=null!==e&&e.apply(this,arguments)||this;return l._fullCacheLodInfos=null,l._levelByScale={},l}return t(l,e),l.prototype.getTileParentId=function(e){var l=i.pool.acquire(e),t=0===l.level?null:i.getId(l.level-1,l.row>>1,l.col>>1,l.world);return i.pool.release(l),t},l.prototype.getTileCoverage=function(l,t,r){var o=e.prototype.getTileCoverage.call(this,l,t,r);if(!o)return o;var n=1<<o.lodInfo.level;return o.spans=o.spans.filter(function(e){return e.row>=0&&e.row<n}),o},l.prototype.scaleToLevel=function(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];var l=this._fullCacheLodInfos;if(e>l[0].scale)return l[0].level;for(var t=void 0,r=void 0,o=0;o<l.length-1;o++)if(r=l[o+1],e>r.scale)return t=l[o],t.level+(t.scale-e)/(t.scale-r.scale);return l[l.length-1].level},l.prototype._initializeFullCacheLODs=function(e){var l;if(0===e[0].level)l=e.map(function(e){return{level:e.level,resolution:e.resolution,scale:e.scale}});else{var t=this.tileInfo.size[0],r=this.tileInfo.spatialReference;l=o.create({size:t,spatialReference:r}).lods.map(function(e){return{level:e.level,resolution:e.resolution,scale:e.scale}})}for(var n=0;n<l.length;n++)this._levelByScale[l[n].scale]=l[n].level;this._fullCacheLodInfos=l},l}(n)});