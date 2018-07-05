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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../../geometry/SpatialReference","../../../../../geometry/support/geodesicUtils","../../../lib/glMatrix","../../../support/mathUtils","../../../support/projectionUtils"],function(t,e,o,i,s,r,n){function d(t){t.x=h.normalize(t.x),t.y=_.normalize(t.y)}function c(t,e,i){n.vectorToVector(t,e,i,o.WGS84),i[0]=r.deg2rad(i[0]),i[1]=r.deg2rad(i[1])}var a,h=new r.Cyclical(-180,180),_=new r.Cyclical(-90,90);return function(t){var e=function(){function t(t,e){this._startPosition=s.vec3d.create(),this._endPosition=s.vec3d.create(),s.vec3d.set(t,this._startPosition),s.vec3d.set(e,this._endPosition)}return t.prototype.eval=function(t,e){s.vec3d.lerp(this._startPosition,this._endPosition,t,e)},t}();t.Linear=e;var a=function(){function t(t,e,o,r){this._startCoords=s.vec3d.create(),this._endCoords=s.vec3d.create(),c(t,o,this._startCoords),c(e,o,this._endCoords),this._destSR=r,this._startToEnd=i.inverseGeodeticSolver(this._startCoords[1],this._startCoords[0],this._endCoords[1],this._endCoords[0]),this._endToStart=i.inverseGeodeticSolver(this._endCoords[1],this._endCoords[0],this._startCoords[1],this._startCoords[0])}return t.prototype.eval=function(t,e){var s=i.directGeodeticSolver(this._startCoords[1],this._startCoords[0],this._startToEnd.azimuth,this._startToEnd.geodesicDistance*t),c=i.directGeodeticSolver(this._endCoords[1],this._endCoords[0],this._endToStart.azimuth,this._endToStart.geodesicDistance*(1-t));d(s),d(c),e[0]=r.lerp(s.x,c.x,t),e[1]=r.lerp(s.y,c.y,t),e[2]=r.lerp(this._startCoords[2],this._endCoords[2],t),n.vectorToVector(e,o.WGS84,e,this._destSR)},t}();t.Geodesic=a;var h=function(){function t(t,e,o,i){this._startPosition=s.vec3d.create(),this._endPosition=s.vec3d.create(),n.vectorToVector(t,o,this._startPosition,n.SphericalECEFSpatialReference),n.vectorToVector(e,o,this._endPosition,n.SphericalECEFSpatialReference),this._destSR=i}return t.prototype.eval=function(t,e){r.slerp(this._startPosition,this._endPosition,t,e),n.vectorToVector(e,n.SphericalECEFSpatialReference,e,this._destSR)},t}();t.Spherical=h}(a||(a={})),a});