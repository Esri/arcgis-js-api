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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","./TileInfoView","./TileKey"],function(e,r,o,t,l,n){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return o(r,e),r.prototype.getTileParentId=function(e){var r=n.pool.acquire(e),o=0===r.level?null:n.getId(r.level-1,r.row>>1,r.col>>1,r.world);return n.pool.release(r),o},r.prototype.getTileIdAtParent=function(e,r){var o=n.pool.acquire(r),t=this._infoByLevel[o.level];if(e.resolution<t.resolution)throw n.pool.release(o),new Error("Cannot calculate parent tile. destination LOD's resolution "+e.resolution+" is not a parent resolution of "+t.resolution);if(e.resolution===t.resolution){var l=o.id;return n.pool.release(o),l}var i=o.level-e.level;if(i<0)throw n.pool.release(o),new Error("Wrong way...!");var u=n.getId(e.level,o.row>>i,o.col>>i,o.world);return n.pool.release(o),u},r.prototype.getTileCoverage=function(r){var o=e.prototype.getTileCoverage.call(this,r);if(!o)return o;var t=1<<o.lodInfo.level;return o.spans=o.spans.filter(function(e){return e.row>=0&&e.row<t}),o},r}(l)});