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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/gl-matrix","../../../../../geometry/SpatialReference","../../../../../geometry/support/geodesicUtils","../../../support/mathUtils","../../../support/projectionUtils"],function(t,e,o,i,r,s,n){function c(t){t.x=h.normalize(t.x),t.y=_.normalize(t.y)}function a(t,e,o){n.vectorToVector(t,e,o,i.WGS84),o[0]=s.deg2rad(o[0]),o[1]=s.deg2rad(o[1])}var d,h=new s.Cyclical(-180,180),_=new s.Cyclical(-90,90);return function(t){var e=function(){function t(t,e){this._startPosition=o.vec3f64.create(),this._endPosition=o.vec3f64.create(),o.vec3.copy(this._startPosition,t),o.vec3.copy(this._endPosition,e)}return t.prototype.eval=function(t,e){o.vec3.lerp(e,this._startPosition,this._endPosition,t)},t}();t.Linear=e;var d=function(){function t(t,e,i,s){this._startCoords=o.vec3f64.create(),this._endCoords=o.vec3f64.create(),a(t,i,this._startCoords),a(e,i,this._endCoords),this._destSR=s,this._startToEnd=r.inverseGeodeticSolver(this._startCoords[1],this._startCoords[0],this._endCoords[1],this._endCoords[0]),this._endToStart=r.inverseGeodeticSolver(this._endCoords[1],this._endCoords[0],this._startCoords[1],this._startCoords[0])}return t.prototype.eval=function(t,e){var o=r.directGeodeticSolver(this._startCoords[1],this._startCoords[0],this._startToEnd.azimuth,this._startToEnd.geodesicDistance*t),a=r.directGeodeticSolver(this._endCoords[1],this._endCoords[0],this._endToStart.azimuth,this._endToStart.geodesicDistance*(1-t));c(o),c(a),e[0]=s.lerp(o.x,a.x,t),e[1]=s.lerp(o.y,a.y,t),e[2]=s.lerp(this._startCoords[2],this._endCoords[2],t),n.vectorToVector(e,i.WGS84,e,this._destSR)},t}();t.Geodesic=d;var h=function(){function t(t,e,i,r){this._startPosition=o.vec3f64.create(),this._endPosition=o.vec3f64.create(),n.vectorToVector(t,i,this._startPosition,n.SphericalECEFSpatialReference),n.vectorToVector(e,i,this._endPosition,n.SphericalECEFSpatialReference),this._destSR=r}return t.prototype.eval=function(t,e){s.slerp(this._startPosition,this._endPosition,t,e),n.vectorToVector(e,n.SphericalECEFSpatialReference,e,this._destSR)},t}();t.Spherical=h}(d||(d={})),d});