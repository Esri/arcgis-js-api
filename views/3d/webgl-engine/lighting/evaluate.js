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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../lib/LongVectorMath","./SphericalHarmonics"],function(e,r,t,c,a,n){function i(e,r,a,n){var i=c.vec3f64.create(),o=c.vec3f64.create(),d=v(e,r);t.vec3.scale(o,r.intensity,d),t.vec3.add(i,i,o);for(var u=0,f=a;u<f.length;u++){var l=f[u],s=v(e,l);t.vec3.scale(o,l.intensity,s),t.vec3.add(i,i,o)}for(var h=0,m=n;h<m.length;h++){var l=m[h];t.vec3.scale(o,l.intensity,Math.PI),t.vec3.add(i,i,o)}return i}function o(e,r,i){var o=c.vec3f64.create(),d=c.vec3f64.create(),u=n.orderFromNumberOfCoefficients(i.r.length),f=v(e,r);t.vec3.scale(d,r.intensity,f),t.vec3.add(o,o,d);var l=n.computeCoefficients(e,u);return o[0]+=a.dotProduct(l,i.r),o[1]+=a.dotProduct(l,i.g),o[2]+=a.dotProduct(l,i.b),o}function v(e,r){return Math.max(-t.vec3.dot(r.direction,e),0)}Object.defineProperty(r,"__esModule",{value:!0}),r.evaluateGroundTruth=i,r.evaluateSphericalHarmonics=o});