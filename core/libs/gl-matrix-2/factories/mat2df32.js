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

define(["require","exports"],(function(r,e){"use strict";function n(r,e,n,t){var o=e[t],a=e[t+1];r[t]=n[0]*o+n[2]*a+n[4],r[t+1]=n[1]*o+n[3]*a+n[5]}Object.defineProperty(e,"__esModule",{value:!0}),e.transformMany=e.transform=e.createView=e.fromValues=e.clone=e.create=void 0,e.create=function(){var r=new Float32Array(6);return r[0]=1,r[3]=1,r},e.clone=function(r){var e=new Float32Array(6);return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e},e.fromValues=function(r,e,n,t,o,a){var i=new Float32Array(6);return i[0]=r,i[1]=e,i[2]=n,i[3]=t,i[4]=o,i[5]=a,i},e.createView=function(r,e){return new Float32Array(r,e,6)},e.transform=n,e.transformMany=function(r,e,t,o,a,i){void 0===o&&(o=0),void 0===a&&(a=0),void 0===i&&(i=2);for(var u=a||e.length/i,f=o;f<u;f++){n(r,e,t,f*i)}}}));