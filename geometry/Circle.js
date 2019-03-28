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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/unitUtils","../core/accessorSupport/decorators","./Point","./Polygon","./support/geodesicUtils","./support/webMercatorUtils","./support/WKIDUnitConversion"],function(e,r,t,i,o,s,a,n,c,p,h,u){return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=e.apply(this,r)||this;return i.center=null,i.geodesic=!1,i.numberOfPoints=60,i.radius=1e3,i.radiusUnit="meters",i}i(r,e),l=r,r.prototype.normalizeCtorArgs=function(e,r){var i;if(e&&e.center)i=e;else{if(e&&e.rings)return this.inherited(arguments);i={center:e}}return t({},this.inherited(arguments,[]),i,r)},r.prototype.initialize=function(){var e=this.center,r=this.numberOfPoints;if(this.hasZ=e&&e.hasZ,0===this.rings.length&&e){var t,i=s.convertUnit(this.radius,this.radiusUnit,"meters"),o=e.spatialReference,a="geographic";if(o.isWebMercator?a="webMercator":(null!=u[o.wkid]||o.wkt&&0===o.wkt.indexOf("PROJCS"))&&(a="projected"),this.geodesic){var n=void 0;switch(a){case"webMercator":n=h.webMercatorToGeographic(e);break;case"projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");break;case"geographic":n=e}t=this._createGeodesicCircle(n,i,r),"webMercator"===a&&(t=h.geographicToWebMercator(t))}else{var c=void 0;"webMercator"===a||"projected"===a?c=i/this._convert2Meters(1,e.spatialReference):"geographic"===a&&(c=s.lengthToDegrees(i,"meters")),t=this._createPlanarCircle(e,c,r)}this.spatialReference=t.spatialReference,this.addRing(t.rings[0])}},r.prototype.clone=function(){return new l({rings:this.rings,hasZ:this.hasZ,hasM:this.hasM,spatialReference:this.spatialReference})},r.prototype._createGeodesicCircle=function(e,r,t){for(var i=0,o=Math.PI/180,s=[];i<2*Math.PI;){var a=p.directGeodeticSolver(e.y*o,e.x*o,i,r),n=a.toArray();this.hasZ&&n.push(e.z),s.push(n),i+=Math.PI/(t/2)}return s.push(s[0]),new c(s)},r.prototype._createPlanarCircle=function(e,r,t){for(var i=0,o=[];i<2*Math.PI;){var s=[e.x+Math.cos(-i)*r,e.y+Math.sin(-i)*r];this.hasZ&&s.push(e.z),o.push(s),i+=Math.PI/(t/2)}return o.push(o[0]),new c({spatialReference:e.spatialReference,rings:[o]})},r.prototype._convert2Meters=function(e,r){var t;if(null!=u[r.wkid])t=u.values[u[r.wkid]];else{var i=r.wkt,o=i.lastIndexOf(",")+1,s=i.lastIndexOf("]]");t=parseFloat(i.substring(o,s))}return e*t};var l;return o([a.property({type:n})],r.prototype,"center",void 0),o([a.property()],r.prototype,"geodesic",void 0),o([a.property()],r.prototype,"numberOfPoints",void 0),o([a.property()],r.prototype,"radius",void 0),o([a.property()],r.prototype,"radiusUnit",void 0),r=l=o([a.subclass("esri.geometry.Circle")],r)}(a.declared(c))});