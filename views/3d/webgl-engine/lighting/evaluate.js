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

define(["require","exports","../../../../core/libs/gl-matrix-2/gl-matrix","../lib/LongVectorMath","./SphericalHarmonics"],function(e,t,r,c,a){function n(e,t,c,a){var n=r.vec3f64.create(),i=r.vec3f64.create(),v=o(e,t);r.vec3.scale(i,t.intensity,v),r.vec3.add(n,n,i);for(var d=0,u=c;d<u.length;d++){var f=u[d],l=o(e,f);r.vec3.scale(i,f.intensity,l),r.vec3.add(n,n,i)}for(var s=0,h=a;s<h.length;s++){var f=h[s];r.vec3.scale(i,f.intensity,Math.PI),r.vec3.add(n,n,i)}return n}function i(e,t,n){var i=r.vec3f64.create(),v=r.vec3f64.create(),d=a.orderFromNumberOfCoefficients(n.r.length),u=o(e,t);r.vec3.scale(v,t.intensity,u),r.vec3.add(i,i,v);var f=a.computeCoefficients(e,d);return i[0]+=c.dotProduct(f,n.r),i[1]+=c.dotProduct(f,n.g),i[2]+=c.dotProduct(f,n.b),i}function o(e,t){return Math.max(-r.vec3.dot(t.direction,e),0)}Object.defineProperty(t,"__esModule",{value:!0}),t.evaluateGroundTruth=n,t.evaluateSphericalHarmonics=i});