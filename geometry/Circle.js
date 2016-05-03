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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../core/declare","../core/lang","./Point","./Polygon","./support/geodesicUtils","./support/webMercatorUtils","./support/WKIDUnitConversion","dojo/_base/lang"],function(e,r,t,i,s,a,n,c){var o={centimeters:.01,decimeters:.1,feet:.3048,inches:.0254,kilometers:1e3,meters:1,miles:1609.34,millimeters:.001,"nautical-miles":1852,yards:.9144,"decimal-degrees":111320},l={radius:1e3,radiusUnit:"meters",geodesic:!1,numberOfPoints:60},h=e(i,{declaredClass:"esri.geometry.Circle",classMetadata:{properties:{center:{type:t}}},getDefaults:function(){return c.mixin(this.inherited(arguments,[]),l)},normalizeCtorArgs:function(e,r){var t;if(e&&e.center)t=e;else{if(e&&e.rings)return this.inherited(arguments);t={center:e}}return c.mixin(this.inherited(arguments,[]),t,r)},initialize:function(){var e=this.center,t=this.numberOfPoints;if(0===this.rings.length&&e){var i,s=this.radius*o[this.radiusUnit],c=e.spatialReference,l="geographic";if(c.isWebMercator?l="webMercator":(r.isDefined(n[c.wkid])||c.wkt&&0===c.wkt.indexOf("PROJCS"))&&(l="projected"),this.geodesic){var h;switch(l){case"webMercator":h=a.webMercatorToGeographic(e);break;case"projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");break;case"geographic":h=e}i=this._createGeodesicCircle(h,s,t),"webMercator"===l&&(i=a.geographicToWebMercator(i))}else{var u;"webMercator"===l||"projected"===l?u=s/this._convert2Meters(1,e.spatialReference):"geographic"===l&&(u=s/o.esriDecimalDegrees),i=this._createPlanarCircle(e,u,t)}this.spatialReference=i.spatialReference,this.addRing(i.rings[0])}},center:null,geodesic:!1,_hasMGetter:function(){return!1},_hasZGetter:function(){return!1},numberOfPoints:60,radius:null,radiusUnit:null,clone:function(){return new h({rings:this.rings,hasZ:this.hasZ,hasM:this.hasM,spatialReference:this.spatialReference})},_createGeodesicCircle:function(e,r,t){for(var a,n,c=0,o=Math.PI/180,l=[];c<2*Math.PI;)a=s._directGeodeticSolver(e.y*o,e.x*o,c,r),l.push(a.toArray()),c+=Math.PI/(t/2);return l.push(l[0]),n=new i(l)},_createPlanarCircle:function(e,r,t){for(var s,a,n,c=0,o=[];c<2*Math.PI;)a=e.x+Math.cos(c)*r,n=e.y+Math.sin(c)*r,o.push([a,n]),c+=Math.PI/(t/2);return o.push(o[0]),s=new i({spatialReference:e.spatialReference,rings:[o]})},_convert2Meters:function(e,t){var i;if(r.isDefined(n[t.wkid]))i=n.values[n[t.wkid]];else{var s=t.wkt,a=s.lastIndexOf(",")+1,c=s.lastIndexOf("]]");i=parseFloat(s.substring(a,c))}return e*i}});return h});