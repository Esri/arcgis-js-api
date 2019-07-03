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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../core/unitUtils"],function(e,t,r,i){return function(){function e(e){this.sourceSpatialReference=e.sourceSpatialReference,this.destSpatialReference=e.destSpatialReference}return e.prototype.adjust=function(e){var t=this._getVerticalUnitScale();1!==t&&this._scaleVerticalUnits(e,t)},e.prototype._getVerticalUnitScale=function(){if(this.sourceSpatialReference&&!this.sourceSpatialReference.equals(this.destSpatialReference)){return i.getMetersPerVerticalUnitForSR(this.sourceSpatialReference)/i.getMetersPerVerticalUnitForSR(this.destSpatialReference)}return 1},e.prototype._vertexListsScaleZ=function(e,t){for(var r=0;r<e.length;++r)for(var i=e[r],n=0;n<i.length;++n){var o=i[n];o[2]*=t}},e.prototype._scaleVerticalUnits=function(e,t){for(var i=0;i<e.length;++i){var n=e[i].geometry;!r.isNone(n)&&n.hasZ&&(this._geometryIsPoint(n)?null!==n.z&&(n.z*=t):this._geometryIsPolyline(n)?this._vertexListsScaleZ(n.paths,t):this._geometryIsPolygon(n)&&this._vertexListsScaleZ(n.rings,t))}},e.prototype._geometryIsPoint=function(e){return"point"===e.type},e.prototype._geometryIsPolygon=function(e){return"polygon"===e.type},e.prototype._geometryIsPolyline=function(e){return"polyline"===e.type},e}()});