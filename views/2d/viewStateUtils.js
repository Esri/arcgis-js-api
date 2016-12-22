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

define(["require","exports"],function(t,n){function r(t){return t*i}function e(t,n,r){var e=r.resolution,o=r.size;return t[0]=e*(Math.round(n[0]/e)+o[0]%2*.5),t[1]=e*(Math.round(n[1]/e)+o[1]%2*.5),t}function o(t,n){var e=r(n.rotation),o=Math.abs(Math.cos(e)),u=Math.abs(Math.sin(e)),a=n.size,i=a[0],s=a[1];return t[0]=Math.round(s*u+i*o),t[1]=Math.round(s*o+i*u),t}function u(t,n,r){void 0===r&&(r=n.size);var e=n.center,o=e[0],u=e[1],a=r[0],i=r[1],s=.5*n.resolution;return t[0]=o-s*a,t[1]=u-s*i,t[2]=o+s*a,t[3]=u+s*i,t}function a(t,n){var r=t[0],e=t[1],o=t[2],u=t[3],a=n[0],i=n[1],s=n[2],c=n[3];return!(r>s||a>o||e>c||i>u)}var i=Math.PI/180;n.snapToPixel=e,n.getOuterSize=o,n.getBBox=u,n.bboxIntersects=a});