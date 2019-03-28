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

define(["require","exports","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../../../geometry/SpatialReference","../../../../../geometry/support/geodesicUtils","../../../support/mathUtils","../../../support/projectionUtils"],function(t,e,o,i,r,s,n,c){function a(t){t.x=_.normalize(t.x),t.y=l.normalize(t.y)}function d(t,e,o){c.vectorToVector(t,e,o,r.WGS84),o[0]=n.deg2rad(o[0]),o[1]=n.deg2rad(o[1])}var h,_=new n.Cyclical(-180,180),l=new n.Cyclical(-90,90);return function(t){var e=function(){function t(t,e){this._startPosition=i.vec3f64.create(),this._endPosition=i.vec3f64.create(),o.vec3.copy(this._startPosition,t),o.vec3.copy(this._endPosition,e)}return t.prototype.eval=function(t,e){o.vec3.lerp(e,this._startPosition,this._endPosition,t)},t}();t.Linear=e;var h=function(){function t(t,e,o,r){this._startCoords=i.vec3f64.create(),this._endCoords=i.vec3f64.create(),d(t,o,this._startCoords),d(e,o,this._endCoords),this._destSR=r,this._startToEnd=s.inverseGeodeticSolver(this._startCoords[1],this._startCoords[0],this._endCoords[1],this._endCoords[0]),this._endToStart=s.inverseGeodeticSolver(this._endCoords[1],this._endCoords[0],this._startCoords[1],this._startCoords[0])}return t.prototype.eval=function(t,e){var o=s.directGeodeticSolver(this._startCoords[1],this._startCoords[0],this._startToEnd.azimuth,this._startToEnd.geodesicDistance*t),i=s.directGeodeticSolver(this._endCoords[1],this._endCoords[0],this._endToStart.azimuth,this._endToStart.geodesicDistance*(1-t));a(o),a(i),e[0]=n.lerp(o.x,i.x,t),e[1]=n.lerp(o.y,i.y,t),e[2]=n.lerp(this._startCoords[2],this._endCoords[2],t),c.vectorToVector(e,r.WGS84,e,this._destSR)},t}();t.Geodesic=h;var _=function(){function t(t,e,o,r){this._startPosition=i.vec3f64.create(),this._endPosition=i.vec3f64.create(),c.vectorToVector(t,o,this._startPosition,c.SphericalECEFSpatialReference),c.vectorToVector(e,o,this._endPosition,c.SphericalECEFSpatialReference),this._destSR=r}return t.prototype.eval=function(t,e){n.slerp(this._startPosition,this._endPosition,t,e),c.vectorToVector(e,c.SphericalECEFSpatialReference,e,this._destSR)},t}();t.Spherical=_}(h||(h={})),h});