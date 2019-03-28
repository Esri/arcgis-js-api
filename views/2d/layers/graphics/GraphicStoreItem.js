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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/centroid","../../../../geometry/support/jsonUtils","../../../../geometry/support/quantizationUtils","./graphicsUtils"],function(t,e,o,i,n,r,s){Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(){this.bounds=o.create(),this.graphic=null,this.size=[0,0,0,0]}return t.acquire=function(e,o,i,n,r,s,u){void 0===e&&(e=null);var l;return 0===t._pool.length?l=new t:(l=t._pool.pop(),this._set.delete(l)),l.acquire(e,o,i,n,r,s,u),l},t.release=function(t){t&&!this._set.has(t)&&(t.release(),this._pool.push(t),this._set.add(t))},t.getCentroidQuantized=function(t,e,o,u){if(n.isPolygon(t.geometry)){var l=t.graphic.symbol;if(!l&&o&&(l=o.getSymbol(t.graphic,{scale:u})),!l)return null;if(s.isMarkerSymbol(l.type)){var p=i.polygonCentroid(t.geometry);return r.quantizePoint(e,{},{x:p[0],y:p[1]},!1,!1)}}return null},t.prototype.acquire=function(t,e,o,i,n,r,s){void 0===t&&(t=null),t&&this.set(t,e,o,i,n,r,s)},t.prototype.release=function(){this.graphic=null,this.geometry=null},t.prototype.set=function(t,e,o,i,n,r,u){this.graphic=t,this.geometry=e,s.getBounds(this.bounds,this.size,t,e,o,i,n,r,u)},t.prototype.updateBounds=function(t,e,o,i){s.getBounds(this.bounds,this.size,this.graphic,this.geometry,null,t,e,o,i)},t.prototype.getGeometryQuantized=function(t){if(n.isPolygon(this.geometry)){var e=this.geometry.rings;if(1===e.length&&2===e[0].length)return r.quantizeGeometry(t,{paths:[[e[0][0],e[0][1]]]})}return r.quantizeGeometry(t,this.geometry)},t._pool=[],t._set=new Set,t}();e.default=u});