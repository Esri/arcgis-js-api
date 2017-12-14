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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/_base/lang","../core/accessorSupport/decorators","./Polygon","./Point","./support/WKIDUnitConversion","./support/webMercatorUtils","./support/geodesicUtils"],function(e,r,t,i,s,o,a,n,c,p,h){var l={centimeters:.01,decimeters:.1,feet:.3048,inches:.0254,kilometers:1e3,meters:1,miles:1609.344,millimeters:.001,"nautical-miles":1852,yards:.9144,"decimal-degrees":111320},u=function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=e.apply(this,r)||this;return i.center=null,i.geodesic=!1,i.numberOfPoints=60,i.radius=1e3,i.radiusUnit="meters",i}return t(r,e),u=r,r.prototype.normalizeCtorArgs=function(e,r){var t;if(e&&e.center)t=e;else{if(e&&e.rings)return this.inherited(arguments);t={center:e}}return s.mixin(this.inherited(arguments,[]),t,r)},r.prototype.initialize=function(){var e=this.center,r=this.numberOfPoints;if(this.hasZ=e&&e.hasZ,0===this.rings.length&&e){var t,i=this.radius*l[this.radiusUnit],s=e.spatialReference,o="geographic";if(s.isWebMercator?o="webMercator":(null!=c[s.wkid]||s.wkt&&0===s.wkt.indexOf("PROJCS"))&&(o="projected"),this.geodesic){var a=void 0;switch(o){case"webMercator":a=p.webMercatorToGeographic(e);break;case"projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");break;case"geographic":a=e}t=this._createGeodesicCircle(a,i,r),"webMercator"===o&&(t=p.geographicToWebMercator(t))}else{var n=void 0;"webMercator"===o||"projected"===o?n=i/this._convert2Meters(1,e.spatialReference):"geographic"===o&&(n=i/l["decimal-degrees"]),t=this._createPlanarCircle(e,n,r)}this.spatialReference=t.spatialReference,this.addRing(t.rings[0])}},r.prototype.clone=function(){return new u({rings:this.rings,hasZ:this.hasZ,hasM:this.hasM,spatialReference:this.spatialReference})},r.prototype._createGeodesicCircle=function(e,r,t){for(var i=0,s=Math.PI/180,o=[];i<2*Math.PI;){var n=h.directGeodeticSolver(e.y*s,e.x*s,i,r),c=n.toArray();this.hasZ&&c.push(e.z),o.push(c),i+=Math.PI/(t/2)}return o.push(o[0]),new a(o)},r.prototype._createPlanarCircle=function(e,r,t){for(var i=0,s=[];i<2*Math.PI;){var o=[e.x+Math.cos(-i)*r,e.y+Math.sin(-i)*r];this.hasZ&&o.push(e.z),s.push(o),i+=Math.PI/(t/2)}return s.push(s[0]),new a({spatialReference:e.spatialReference,rings:[s]})},r.prototype._convert2Meters=function(e,r){var t;if(null!=c[r.wkid])t=c.values[c[r.wkid]];else{var i=r.wkt,s=i.lastIndexOf(",")+1,o=i.lastIndexOf("]]");t=parseFloat(i.substring(s,o))}return e*t},i([o.property({type:n})],r.prototype,"center",void 0),i([o.property()],r.prototype,"geodesic",void 0),i([o.property()],r.prototype,"numberOfPoints",void 0),i([o.property()],r.prototype,"radius",void 0),i([o.property()],r.prototype,"radiusUnit",void 0),r=u=i([o.subclass("esri.geometry.Circle")],r);var u}(o.declared(a));return u});