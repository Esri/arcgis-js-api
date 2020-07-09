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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/typedArrayUtil","../../webgl-engine/lib/geometryDataUtils"],(function(r,e,n,t){function i(r){return t.generateDefaultIndexArray(r)}Object.defineProperty(e,"__esModule",{value:!0}),e.linearIndexArray=i,e.trianglesToTriangles=function(r){return"number"==typeof r?i(r):n.isUint16Array(r)||n.isUint8Array(r)?new Uint32Array(r):r},e.triangleStripToTriangles=function(r){var e="number"==typeof r?r:r.length;if(e<3)return new Uint32Array(0);var n=e-2,t=new Uint32Array(3*n);if("number"==typeof r)for(var i=0,a=0;a<n;a+=1)a%2==0?(t[i++]=a,t[i++]=a+1,t[i++]=a+2):(t[i++]=a+1,t[i++]=a,t[i++]=a+2);else for(i=0,a=0;a<n;a+=1)if(a%2==0){var f=r[a],o=r[a+1],u=r[a+2];t[i++]=f,t[i++]=o,t[i++]=u}else{f=r[a+1],o=r[a],u=r[a+2];t[i++]=f,t[i++]=o,t[i++]=u}return t},e.triangleFanToTriangles=function(r){var e="number"==typeof r?r:r.length;if(e<3)return new Uint32Array(0);var n=e-2,t=new Uint32Array(3*n);if("number"==typeof r){for(var i=0,a=0;a<n;++a)t[i++]=0,t[i++]=a+1,t[i++]=a+2;return t}var f=r[0],o=r[1];for(i=0,a=0;a<n;++a){var u=r[a+2];t[i++]=f,t[i++]=o,t[i++]=u,o=u}return t}}));