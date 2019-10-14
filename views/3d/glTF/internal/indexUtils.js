// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/typedArrayUtil","../../webgl-engine/lib/geometryDataUtils"],function(r,e,n,t){function a(r){return t.generateDefaultIndexArray(r)}function i(r){return"number"==typeof r?a(r):n.isUint16Array(r)||n.isUint8Array(r)?new Uint32Array(r):r}function f(r){var e="number"==typeof r?r:r.length;if(e<3)return new Uint32Array(0);var n=e-2,t=new Uint32Array(3*n);if("number"==typeof r)for(var a=0,i=0;i<n;i+=1)i%2==0?(t[a++]=i,t[a++]=i+1,t[a++]=i+2):(t[a++]=i+1,t[a++]=i,t[a++]=i+2);else for(var a=0,i=0;i<n;i+=1)if(i%2==0){var f=r[i],o=r[i+1],u=r[i+2];t[a++]=f,t[a++]=o,t[a++]=u}else{var f=r[i+1],o=r[i],u=r[i+2];t[a++]=f,t[a++]=o,t[a++]=u}return t}function o(r){var e="number"==typeof r?r:r.length;if(e<3)return new Uint32Array(0);var n=e-2,t=new Uint32Array(3*n);if("number"==typeof r){for(var a=0,i=0;i<n;++i)t[a++]=0,t[a++]=i+1,t[a++]=i+2;return t}for(var f=r[0],o=r[1],a=0,i=0;i<n;++i){var u=r[i+2];t[a++]=f,t[a++]=o,t[a++]=u,o=u}return t}Object.defineProperty(e,"__esModule",{value:!0}),e.linearIndexArray=a,e.trianglesToTriangles=i,e.triangleStripToTriangles=f,e.triangleFanToTriangles=o});