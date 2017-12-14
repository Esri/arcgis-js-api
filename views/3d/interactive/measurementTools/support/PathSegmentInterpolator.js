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

define(["require","exports","../../../../../geometry/SpatialReference","../../../../../geometry/support/geodesicUtils","../../../lib/glMatrix","../../../support/projectionUtils","../../../support/mathUtils"],function(t,e,o,i,s,r,n){function a(t){t.x=_.normalize(t.x),t.y=l.normalize(t.y)}function d(t,e,i){r.vectorToVector(t,e,i,o.WGS84),i[0]=n.deg2rad(i[0]),i[1]=n.deg2rad(i[1])}var c,h=s.vec3d,_=new n.Cyclical(-180,180),l=new n.Cyclical(-90,90);return function(t){var e=function(){function t(t,e){this._startPosition=h.create(),this._endPosition=h.create(),h.set(t,this._startPosition),h.set(e,this._endPosition)}return t.prototype.eval=function(t,e){h.lerp(this._startPosition,this._endPosition,t,e)},t}();t.Linear=e;var s=function(){function t(t,e,o,s){this._startCoords=h.create(),this._endCoords=h.create(),d(t,o,this._startCoords),d(e,o,this._endCoords),this._destSR=s,this._startToEnd=i.inverseGeodeticSolver(this._startCoords[1],this._startCoords[0],this._endCoords[1],this._endCoords[0]),this._endToStart=i.inverseGeodeticSolver(this._endCoords[1],this._endCoords[0],this._startCoords[1],this._startCoords[0])}return t.prototype.eval=function(t,e){var s=i.directGeodeticSolver(this._startCoords[1],this._startCoords[0],this._startToEnd.azimuth,this._startToEnd.geodesicDistance*t),d=i.directGeodeticSolver(this._endCoords[1],this._endCoords[0],this._endToStart.azimuth,this._endToStart.geodesicDistance*(1-t));a(s),a(d),e[0]=n.lerp(s.x,d.x,t),e[1]=n.lerp(s.y,d.y,t),e[2]=n.lerp(this._startCoords[2],this._endCoords[2],t),r.vectorToVector(e,o.WGS84,e,this._destSR)},t}();t.Geodesic=s;var c=function(){function t(t,e,o,i){this._startPosition=h.create(),this._endPosition=h.create(),r.vectorToVector(t,o,this._startPosition,r.SphericalECEFSpatialReference),r.vectorToVector(e,o,this._endPosition,r.SphericalECEFSpatialReference),this._destSR=i}return t.prototype.eval=function(t,e){n.slerp(this._startPosition,this._endPosition,t,e),r.vectorToVector(e,r.SphericalECEFSpatialReference,e,this._destSR)},t}();t.Spherical=c}(c||(c={})),c});