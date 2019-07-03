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

define(["require","exports","../../../../core/maybe","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/centroid","../../../../geometry/support/jsonUtils","../../../../geometry/support/quantizationUtils","./graphicsUtils"],function(t,e,o,i,n,r,s,u){Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(){this.bounds=i.create(),this.graphic=null,this.size=[0,0,0,0]}return t.acquire=function(e,o,i,n,r,s){void 0===e&&(e=null);var u;return 0===t._pool.length?u=new t:(u=t._pool.pop(),this._set.delete(u)),u.acquire(e,o,i,n,r,s),u},t.release=function(t){t&&!this._set.has(t)&&(t.release(),this._pool.push(t),this._set.add(t))},t.getCentroidQuantized=function(t,e,i){if(r.isPolygon(t.geometry)){var l=t.symbol;if(o.isNone(l))return null;if(u.isMarkerSymbol(l.type)){var p=n.polygonCentroid(t.geometry);return s.quantizePoint(e,{},{x:p[0],y:p[1]},!1,!1)}}return null},t.prototype.acquire=function(t,e,o,i,n,r){void 0===t&&(t=null),t&&this.set(t,e,o,i,n,r)},t.prototype.release=function(){this.graphic=null,this.symbol=null,this.geometry=null},t.prototype.set=function(t,e,o,i,n,r){this.graphic=t,this.geometry=o,this.symbol=e.symbol,u.getBounds(this.bounds,this.size,e.symbol,o,e.mosaicItem,i,n,r)},t.prototype.updateBounds=function(t,e,o,i){u.getBounds(this.bounds,this.size,t,this.geometry,null,e,o,i)},t.prototype.getGeometryQuantized=function(t){if(r.isPolygon(this.geometry)){var e=this.geometry.rings;if(1===e.length&&2===e[0].length)return s.quantizeGeometry(t,{paths:[[e[0][0],e[0][1]]]})}return s.quantizeGeometry(t,this.geometry)},t._pool=[],t._set=new Set,t}();e.default=l});