// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../support/mathUtils","../../../support/projectionUtils"],(function(t,e,i,o,r,n){var s;return function(t){var e=function(){function t(t,e){this._startPosition=o.vec3f64.create(),this._endPosition=o.vec3f64.create(),i.vec3.copy(this._startPosition,t),i.vec3.copy(this._endPosition,e)}return t.prototype.eval=function(t,e){i.vec3.lerp(e,this._startPosition,this._endPosition,t)},t}();t.Linear=e;var s=function(){function t(t,e,i,r){this._startPosition=o.vec3f64.create(),this._endPosition=o.vec3f64.create(),n.vectorToVector(t,i,this._startPosition,n.SphericalECEFSpatialReference),n.vectorToVector(e,i,this._endPosition,n.SphericalECEFSpatialReference),this._destSR=r}return t.prototype.eval=function(t,e){r.slerp(this._startPosition,this._endPosition,t,e),n.vectorToVector(e,n.SphericalECEFSpatialReference,e,this._destSR)},t}();t.Spherical=s}(s||(s={})),s}));