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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","./TileKey","./TileInfoView"],function(e,r,o,l,t,n){var i=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return o(r,e),r.prototype.getTileParentId=function(e){var r=t.pool.acquire(e),o=0===r.level?null:t.getId(r.level-1,r.row>>1,r.col>>1,r.world);return t.pool.release(r),o},r.prototype.getTileIdAtParent=function(e,r){var o=t.pool.acquire(r),l=this._infoByLevel[o.level];if(e.resolution<l.resolution)throw t.pool.release(o),new Error("Cannot calculate parent tile. destination LOD's resolution "+e.resolution+" is not a parent resolution of "+l.resolution);if(e.resolution===l.resolution){var n=o.id;return t.pool.release(o),n}var i=o.level-e.level;if(0>i)throw t.pool.release(o),new Error("Wrong way...!");var u=t.getId(e.level,o.row>>i,o.col>>i,o.world);return t.pool.release(o),u},r}(n);return i});