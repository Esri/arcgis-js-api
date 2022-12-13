// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","./Point","./Polygon","./geodesicUtils","./webMercatorUtils","../WKIDUnitConversion","../units"],(function(e,r,i,t,s,n,a,c,o,h){var l=e(n,{declaredClass:"esri.geometry.Circle",_unitToMeters:{esriCentimeters:.01,esriDecimeters:.1,esriFeet:.3048,esriInches:.0254,esriKilometers:1e3,esriMeters:1,esriMiles:1609.344,esriMillimeters:.001,esriNauticalMiles:1852,esriYards:.9144,esriDecimalDegrees:111320},constructor:function(e,i){var t;e.center?t=e:(t=i||{}).center=e,this.center=r.isArray(t.center)?new s(t.center[0],t.center[1]):t.center,this.radius=t.radius||1e3,this.radiusUnit=t.radiusUnit||h.METERS,this.geodesic=!0===t.geodesic,this.numberOfPoints=t.numberOfPoints||60,this._init()},toJson:function(){var e=this.inherited(arguments);return e},_init:function(){this.rings=[],this._ring=0;var e,r=this.radius*this._unitToMeters[this.radiusUnit],i=this._srType(this.center.spatialReference);if(this.geodesic){var t;switch(i){case"webMercator":t=c.webMercatorToGeographic(this.center);break;case"projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");break;case"geographic":t=this.center}e=this._createGeodesicCircle(t,r,this.numberOfPoints,t.spatialReference),"webMercator"===i&&(e=c.geographicToWebMercator(e))}else{var s;"webMercator"===i||"projected"===i?s=r/this._convert2Meters(1,this.center.spatialReference):"geographic"===i&&(s=r/this._unitToMeters.esriDecimalDegrees),e=this._createPlanarCircle(this.center,s,this.numberOfPoints)}this.spatialReference=e.spatialReference,this.addRing(e.rings[0]),this.verifySR()},_createGeodesicCircle:function(e,r,i,t){for(var s,c=0,o=Math.PI/180,h=[];c<2*Math.PI;)s=a._directGeodeticSolver(e.y*o,e.x*o,c,r,t),h.push([s.x,s.y]),c+=Math.PI/(i/2);return h.push(h[0]),new n(h)},_createPlanarCircle:function(e,r,i){for(var t,s=0,a=[],c={};s<2*Math.PI;)c.x=e.x+Math.cos(s)*r,c.y=e.y+Math.sin(s)*r,a.push([c.x,c.y]),s+=Math.PI/(i/2);return a.push(a[0]),(t=new n(e.spatialReference)).addRing(a),t},_srType:function(e){return e.isWebMercator()?"webMercator":null!=o[e.wkid]||e.wkt&&0===e.wkt.indexOf("PROJCS")?"projected":"geographic"},_convert2Meters:function(e,r){var i;if(null!=o[r.wkid])i=o.values[o[r.wkid]];else{var t=r.wkt,s=t.lastIndexOf(",")+1,n=t.lastIndexOf("]]");i=parseFloat(t.substring(s,n))}return e*i}});return i("extend-esri")&&r.setObject("geometry.Circle",l,t),l}));