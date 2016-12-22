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

define(["./earthUtils","./projectionUtils","../lib/glMatrix","../webgl-engine/lib/BufferVectorMath","../../../geometry/support/scaleUtils"],function(t,e,o,r,i){var n=o.vec3,s=r.Vec3Compact,a=t.earthRadius,l=[0,0,1],p=function(t){this.spatialReference=t};p.prototype.toRenderCoords=function(t,o,r){return"esri.geometry.Point"===t.declaredClass?(r=o,e.pointToVector(t,r,this.spatialReference)):e.vectorToVector(t,o,r,this.spatialReference)},p.prototype.fromRenderCoords=function(t,o,r){return"esri.geometry.Point"===o.declaredClass||"esri.SpatialReference"===o.declaredClass?e.vectorToPoint(t,this.spatialReference,o,r):e.vectorToVector(t,this.spatialReference,o,r)};var c=function(t){t=t||e.SphericalRenderSpatialReference,p.call(this,t),this.unitInMeters=1};c.prototype=new p,c.prototype.getAltitude=function(t,e){var o=s.length(t,e||0);return o-a},c.prototype.setAltitude=function(t,e,o){o=o||0;var r=(t+a)/s.length(e,o);s.scale(e,o,r)},c.prototype.setAltitudeOfTransformation=function(t,e){this.setAltitude(t,e,12)},c.prototype.worldUpAtPosition=function(t,e){n.normalize(t,e)};var u=function(t){p.call(this,t),this.unitInMeters=i.getUnitValueForSR(t),this.worldUp=l};return u.prototype=new p,u.prototype.getAltitude=function(t,e){return e?t[e+2]:t[2]},u.prototype.setAltitude=function(t,e,o){o?e[o+2]=t:e[2]=t},u.prototype.setAltitudeOfTransformation=function(t,e){this.setAltitude(t,e,12)},u.prototype.worldUpAtPosition=function(t,e){n.set(l,e)},u.worldUp=l,p.Spherical=c,p.Planar=u,p});