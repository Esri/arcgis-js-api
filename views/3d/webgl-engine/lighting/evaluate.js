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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../lib/glMatrix","../lib/LongVectorMath","./SphericalHarmonics"],function(e,t,r,a,n){function i(e,t,r,a){var n=d.create(),i=d.create(),o=c(e,t);d.scale(t.intensity,o,i),d.add(n,i);for(var u=0,l=r;u<l.length;u++){var s=l[u],f=c(e,s);d.scale(s.intensity,f,i),d.add(n,i)}for(var v=0,h=a;v<h.length;v++){var s=h[v];d.scale(s.intensity,Math.PI,i),d.add(n,i)}return n}function o(e,t,r){var i=d.create(),o=d.create(),u=n.orderFromNumberOfCoefficients(r.r.length),l=c(e,t);d.scale(t.intensity,l,o),d.add(i,o);var s=n.computeCoefficients(e,u);return i[0]+=a.dotProduct(s,r.r),i[1]+=a.dotProduct(s,r.g),i[2]+=a.dotProduct(s,r.b),i}function c(e,t){return Math.max(-d.dot(t.direction,e),0)}Object.defineProperty(t,"__esModule",{value:!0});var d=r.vec3d;t.evaluateGroundTruth=i,t.evaluateSphericalHarmonics=o});