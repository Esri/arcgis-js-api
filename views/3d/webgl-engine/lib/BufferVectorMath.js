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

define(["require","exports"],function(n,t){var c;!function(n){function t(n,t){var c=n[t],o=n[t+1],i=n[t+2];return Math.sqrt(c*c+o*o+i*i)}function c(n,t){var c=n[t],o=n[t+1],i=n[t+2],r=1/Math.sqrt(c*c+o*o+i*i);n[t]*=r,n[t+1]*=r,n[t+2]*=r}function o(n,t,c){n[t]*=c,n[t+1]*=c,n[t+2]*=c}function i(n,t,c,o,i,r){void 0===r&&(r=t),i=i||n,i[r]=n[t]+c[o],i[r+1]=n[t+1]+c[o+1],i[r+2]=n[t+2]+c[o+2]}function r(n,t,c,o,i,r){void 0===r&&(r=t),i=i||n,i[r]=n[t]-c[o],i[r+1]=n[t+1]-c[o+1],i[r+2]=n[t+2]-c[o+2]}n.length=t,n.normalize=c,n.scale=o,n.add=i,n.subtract=r}(c=t.Vec3Compact||(t.Vec3Compact={}))});