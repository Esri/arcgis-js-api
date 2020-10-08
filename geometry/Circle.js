// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/unitUtils","../core/accessorSupport/decorators","./Point","./Polygon","./support/geodesicUtils","./support/webMercatorUtils","./support/WKIDUnitConversion"],(function(e,r,t,i,o,s,n,a,c,p){"use strict";return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=e.apply(this,r)||this;return i.center=null,i.geodesic=!1,i.numberOfPoints=60,i.radius=1e3,i.radiusUnit="meters",i}var u;return t.__extends(r,e),u=r,r.prototype.normalizeCtorArgs=function(r,i){var o;if(r&&r.center)o=r;else{if(r&&r.rings)return e.prototype.normalizeCtorArgs.call(this,r,i);o={center:r}}return t.__assign(t.__assign(t.__assign({},e.prototype.normalizeCtorArgs.call(this)),o),i)},r.prototype.initialize=function(){var e=this.center,r=this.numberOfPoints;if(this.hasZ=e&&e.hasZ,0===this.rings.length&&e){var t,o=i.convertUnit(this.radius,this.radiusUnit,"meters"),s=e.spatialReference,n="geographic";if(s.isWebMercator?n="webMercator":(null!=p[s.wkid]||s.wkt&&0===s.wkt.indexOf("PROJCS"))&&(n="projected"),this.geodesic){var a=void 0;switch(n){case"webMercator":a=c.webMercatorToGeographic(e);break;case"projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");break;case"geographic":a=e}t=this._createGeodesicCircle(a,o,r),"webMercator"===n&&(t=c.geographicToWebMercator(t))}else{var u=void 0;"webMercator"===n||"projected"===n?u=o/this._convert2Meters(1,e.spatialReference):"geographic"===n&&(u=i.lengthToDegrees(o,"meters")),t=this._createPlanarCircle(e,u,r)}this.spatialReference=t.spatialReference,this.addRing(t.rings[0])}},r.prototype.clone=function(){var e=this,r=e.center,t=e.numberOfPoints,i=e.radius,o=e.radiusUnit,s=e.geodesic;return new u({center:r.clone(),numberOfPoints:t,radius:i,radiusUnit:o,geodesic:s})},r.prototype._createGeodesicCircle=function(e,r,t){for(var i=0,o=[];i<360;){var s=[0,0],c=[e.x,e.y];a.directGeodeticSolver(s,c,i,r),this.hasZ&&s.push(e.z),o.push(s),i+=360/t}return o.push(o[0]),new n(o)},r.prototype._createPlanarCircle=function(e,r,t){for(var i=0,o=[];i<2*Math.PI;){var s=[e.x+Math.cos(-i)*r,e.y+Math.sin(-i)*r];this.hasZ&&s.push(e.z),o.push(s),i+=Math.PI/(t/2)}return o.push(o[0]),new n({spatialReference:e.spatialReference,rings:[o]})},r.prototype._convert2Meters=function(e,r){var t;if(null!=p[r.wkid])t=p.values[p[r.wkid]];else{var i=r.wkt,o=i.lastIndexOf(",")+1,s=i.lastIndexOf("]]");t=parseFloat(i.substring(o,s))}return e*t},t.__decorate([o.property({type:s})],r.prototype,"center",void 0),t.__decorate([o.property()],r.prototype,"geodesic",void 0),t.__decorate([o.property()],r.prototype,"numberOfPoints",void 0),t.__decorate([o.property()],r.prototype,"radius",void 0),t.__decorate([o.property()],r.prototype,"radiusUnit",void 0),r=u=t.__decorate([o.subclass("esri.geometry.Circle")],r)}(n)}));