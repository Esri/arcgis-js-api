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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../lib/LongVectorMath","./SphericalHarmonics"],(function(e,r,t,c,a,i){"use strict";function n(e,r){return Math.max(-t.vec3.dot(r.direction,e),0)}Object.defineProperty(r,"__esModule",{value:!0}),r.evaluateSphericalHarmonics=r.evaluateGroundTruth=void 0,r.evaluateGroundTruth=function(e,r,a,i){var o=c.vec3f64.create(),v=c.vec3f64.create(),u=n(e,r);t.vec3.scale(v,r.intensity,u),t.vec3.add(o,o,v);for(var d=0,l=a;d<l.length;d++){var s=n(e,m=l[d]);t.vec3.scale(v,m.intensity,s),t.vec3.add(o,o,v)}for(var f=0,h=i;f<h.length;f++){var m=h[f];t.vec3.scale(v,m.intensity,Math.PI),t.vec3.add(o,o,v)}return o},r.evaluateSphericalHarmonics=function(e,r,o){var v=c.vec3f64.create(),u=c.vec3f64.create(),d=i.orderFromNumberOfCoefficients(o.r.length),l=n(e,r);t.vec3.scale(u,r.intensity,l),t.vec3.add(v,v,u);var s=i.computeCoefficients(e,d);return v[0]+=a.dotProduct(s,o.r),v[1]+=a.dotProduct(s,o.g),v[2]+=a.dotProduct(s,o.b),v}}));