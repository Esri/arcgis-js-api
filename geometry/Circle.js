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

define(["../core/lang","./Point","./Polygon","./support/geodesicUtils","./support/webMercatorUtils","./support/WKIDUnitConversion","dojo/_base/lang"],function(e,r,i,t,s,a,n){var c={centimeters:.01,decimeters:.1,feet:.3048,inches:.0254,kilometers:1e3,meters:1,miles:1609.34,millimeters:.001,"nautical-miles":1852,yards:.9144,"decimal-degrees":111320},o=i.createSubclass({declaredClass:"esri.geometry.Circle",normalizeCtorArgs:function(e,r){var i;if(e&&e.center)i=e;else{if(e&&e.rings)return this.inherited(arguments);i={center:e}}return n.mixin(this.inherited(arguments,[]),i,r)},initialize:function(){var r=this.center,i=this.numberOfPoints;if(this.hasZ=r&&r.hasZ,0===this.rings.length&&r){var t,n=this.radius*c[this.radiusUnit],o=r.spatialReference,h="geographic";if(o.isWebMercator?h="webMercator":(e.isDefined(a[o.wkid])||o.wkt&&0===o.wkt.indexOf("PROJCS"))&&(h="projected"),this.geodesic){var l;switch(h){case"webMercator":l=s.webMercatorToGeographic(r);break;case"projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");break;case"geographic":l=r}t=this._createGeodesicCircle(l,n,i),"webMercator"===h&&(t=s.geographicToWebMercator(t))}else{var d;"webMercator"===h||"projected"===h?d=n/this._convert2Meters(1,r.spatialReference):"geographic"===h&&(d=n/c["decimal-degrees"]),t=this._createPlanarCircle(r,d,i)}this.spatialReference=t.spatialReference,this.addRing(t.rings[0])}},properties:{center:{value:null,type:r},geodesic:!1,numberOfPoints:60,radius:1e3,radiusUnit:"meters"},clone:function(){return new o({rings:this.rings,hasZ:this.hasZ,hasM:this.hasM,spatialReference:this.spatialReference})},_createGeodesicCircle:function(e,r,s){for(var a,n,c=0,o=Math.PI/180,h=[];c<2*Math.PI;){a=t._directGeodeticSolver(e.y*o,e.x*o,-c,r);var l=a.toArray();this.hasZ&&l.push(e.z),h.push(l),c+=Math.PI/(s/2)}return h.push(h[0]),n=new i(h)},_createPlanarCircle:function(e,r,t){for(var s,a,n,c=0,o=[];c<2*Math.PI;){a=e.x+Math.cos(-c)*r,n=e.y+Math.sin(-c)*r;var h=[a,n];this.hasZ&&h.push(e.z),o.push(h),c+=Math.PI/(t/2)}return o.push(o[0]),s=new i({spatialReference:e.spatialReference,rings:[o]})},_convert2Meters:function(r,i){var t;if(e.isDefined(a[i.wkid]))t=a.values[a[i.wkid]];else{var s=i.wkt,n=s.lastIndexOf(",")+1,c=s.lastIndexOf("]]");t=parseFloat(s.substring(n,c))}return r*t}});return o});