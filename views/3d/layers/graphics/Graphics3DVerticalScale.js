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

define(["require","exports","../../../../geometry/support/scaleUtils"],function(e,t,r){var i=function(){function e(e){this.sourceSpatialReference=e.sourceSpatialReference,this.destSpatialReference=e.destSpatialReference}return e.prototype.adjust=function(e){var t=this._getVerticalUnitScale();if(1!==t){var r=e.slice();return this._scaleVerticalUnits(r,t),r}return e},e.prototype._getVerticalUnitScale=function(){if(this.sourceSpatialReference&&!this.sourceSpatialReference.equals(this.destSpatialReference)){var e=this._getVerticalUnitValueForSR(this.sourceSpatialReference),t=this._getVerticalUnitValueForSR(this.destSpatialReference);return e/t}return 1},e.prototype._getVerticalUnitValueForSR=function(e){var t=r.getUnitValueForSR(e);return t>1e5?1:t},e.prototype._vertexListsScaleZ=function(e,t){for(var r=0,i=e.length;i>r;++r)for(var n=e[r],o=0,a=e.length;a>o;++o){var s=n[o];s[2]*=t}},e.prototype._scaleVerticalUnits=function(e,t){for(var r=0,i=e.length;i>r;++r){var n=e[r].geometry;if(!n.hasZ)return;this._geometryIsPoint(n)?null!==n.z&&(n.z*=t):this._geometryIsPolyline(n)?this._vertexListsScaleZ(n.paths,t):this._geometryIsPolygon(n)&&this._vertexListsScaleZ(n.rings,t)}},e.prototype._geometryIsPoint=function(e){return"point"===e.type},e.prototype._geometryIsPolygon=function(e){return"polygon"===e.type},e.prototype._geometryIsPolyline=function(e){return"polyline"===e.type},e}();return i});