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

define(["require","exports","../../../../core/maybe","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/centroid","../../../../geometry/support/jsonUtils","../../../../geometry/support/quantizationUtils","../../../../layers/graphics/featureConversionUtils","../../../../layers/graphics/OptimizedGeometry","./graphicsUtils"],function(e,t,o,i,r,s,n,l,u,y){function h(e){e.coords.length=0,e.lengths.length=0}Object.defineProperty(t,"__esModule",{value:!0});var a=new u.default,g=new u.default,m=function(){function e(){this.bounds=i.create(),this.graphic=null,this.size=[0,0,0,0]}return e.acquire=function(t,o,i,r,s){void 0===t&&(t=null);var n;return 0===e._pool.length?n=new e:(n=e._pool.pop(),this._set.delete(n)),n.acquire(t,o,i,r,s),n},e.release=function(e){e&&!this._set.has(e)&&(e.release(),this._pool.push(e),this._set.add(e))},e.getCentroidQuantized=function(e,t){if(s.isPolygon(e.geometry)){var i=e.symbol;if(o.isNone(i))return null;if(y.isMarkerSymbol(i.type)){var l=r.polygonCentroid(e.geometry);return n.quantizePoint(t,{},{x:l[0],y:l[1]},!1,!1)}}return null},e.prototype.acquire=function(e,t,o,i,r){void 0===e&&(e=null),e&&this.set(e,t,o,i,r)},e.prototype.release=function(){this.graphic=null,this.symbol=null,this.geometry=null},e.prototype.set=function(e,t,o,i,r){this.graphic=e,this.geometry=o,this.symbol=t.symbol,y.getBounds(this.bounds,this.size,t.symbol,o,t.mosaicItem,i,r)},e.prototype.updateBounds=function(e,t,o){y.getBounds(this.bounds,this.size,e,this.geometry,null,t,o)},e.prototype.getGeometryQuantized=function(e){if(s.isPolygon(this.geometry)){var t=this.geometry.rings;if(1===t.length&&2===t[0].length)return n.quantizeGeometry(e,{paths:[[t[0][0],t[0][1]]]})}else if(s.isPolyline(this.geometry))return h(a),h(g),l.convertFromPolyline(a,this.geometry),l.generalizeOptimizedGeometry(g,a,this.geometry.hasZ,this.geometry.hasM,"esriGeometryPolyline",e.scale[0]),l.quantizeOptimizedGeometry(a,g,this.geometry.hasZ,this.geometry.hasM,"esriGeometryPolyline",e),l.convertToPolyline(a,this.geometry.hasZ,this.geometry.hasM);return n.quantizeGeometry(e,this.geometry)},e._pool=[],e._set=new Set,e}();t.default=m});