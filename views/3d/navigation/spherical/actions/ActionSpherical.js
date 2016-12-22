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

define(["../../Action","../../../support/mathUtils","../../../lib/glMatrix"],function(t,e,n){var i=n.vec3d,r=n.mat4d,a=i.create(),o=r.create(),s=t.createSubclass({declaredClass:"esri.views.3d.navigation.spherical.actions.ActionSpherical",constructor:function(){this._targetOnSphere=i.create(),this._navSphereRadius=0},closestPointOnSphereSilhouette:function(t,n,s,c){i.cross(t,n,a),i.cross(a,t,c),i.scale(c,1/i.length(c)*s);var h=-e.asin(s/i.length(t));r.identity(o),r.rotate(o,h,a),r.multiplyVec3(o,c)},rotateCameraWithPointsOnSphere:function(t,e,n,i,r){return this.navigation.rotateCameraWithPointsOnSphere(t,e,n,i,r)},rotationFromPointsOnSphere:function(t,e,n,i){return this.navigation.rotationFromPointsOnSphere(t,e,n,i)}});return s});