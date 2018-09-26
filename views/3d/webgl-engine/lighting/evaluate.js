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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../lib/gl-matrix","../lib/LongVectorMath","./SphericalHarmonics"],function(e,t,r,c,d){function a(e,t,c,d){var a=r.vec3d.create(),n=r.vec3d.create(),o=i(e,t);r.vec3d.scale(t.intensity,o,n),r.vec3d.add(a,n);for(var v=0,u=c;v<u.length;v++){var l=u[v],s=i(e,l);r.vec3d.scale(l.intensity,s,n),r.vec3d.add(a,n)}for(var f=0,h=d;f<h.length;f++){var l=h[f];r.vec3d.scale(l.intensity,Math.PI,n),r.vec3d.add(a,n)}return a}function n(e,t,a){var n=r.vec3d.create(),o=r.vec3d.create(),v=d.orderFromNumberOfCoefficients(a.r.length),u=i(e,t);r.vec3d.scale(t.intensity,u,o),r.vec3d.add(n,o);var l=d.computeCoefficients(e,v);return n[0]+=c.dotProduct(l,a.r),n[1]+=c.dotProduct(l,a.g),n[2]+=c.dotProduct(l,a.b),n}function i(e,t){return Math.max(-r.vec3d.dot(t.direction,e),0)}Object.defineProperty(t,"__esModule",{value:!0}),t.evaluateGroundTruth=a,t.evaluateSphericalHarmonics=n});