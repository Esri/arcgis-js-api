// COPYRIGHT © 2016 Esri
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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","./TileKey","./TileInfoView"],function(e,r,o,t,n,l){var i=function(e){function r(){e.apply(this,arguments)}return o(r,e),r.prototype.getTileParentId=function(e){var r=n.from(e);return 0===r.level?null:n.getId(r.level-1,r.row>>1,r.col>>1,r.world)},r.prototype.getTileIdAtParent=function(e,r){var o=n.from(r),t=this._infoByLevel[o.level];if(e.resolution<t.resolution)throw new Error("Cannot calculate parent tile. destination LOD's resolution "+e.resolution+" is not a parent resolution of "+t.resolution);if(e.resolution===t.resolution)return o.id;var l=o.level-e.level;if(0>l)throw new Error("Wrong way...!");return n.getId(e.level,o.row>>l,o.col>>l,o.world)},r}(l);return i});