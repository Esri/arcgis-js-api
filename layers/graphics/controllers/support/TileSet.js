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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../geometry/Extent"],function(e,t,r){var i=function(){function e(e){this.layer=e.layer,this.tileInfo=e.tileInfo}return e.prototype.fetch=function(e){return this._queryTile(e)},e.prototype._queryTile=function(e){return this.layer.queryFeatures(this._createQuery(e))},e.prototype._createQuery=function(e){this.tileInfo.updateTileInfo(e);var t=this.tileInfo.spatialReference,i=e.extent,n=i[0],o=i[1],a=i[2],l=i[3],u=this.layer.createQuery();return u.geometry=new r({xmin:n,ymin:o,xmax:a,ymax:l,spatialReference:t}),u.outSpatialReference=t,this._setResolutionParams(u,e),u},e.prototype._setResolutionParams=function(e,t){var r=this.layer,i=r.geometryType;if("polyline"===i||"polygon"===i){var n=this.tileInfo.lodAt(t.level),o=n.resolution;"polyline"===i&&(e.maxAllowableOffset=o),r.get("capabilities.query.supportsQuantization")&&(e.quantizationParameters={mode:"view",originPosition:"upperLeft",tolerance:o,extent:r.fullExtent})}},e}();return i});