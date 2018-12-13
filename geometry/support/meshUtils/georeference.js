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

define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","./projection","../../../views/3d/support/projectionUtils"],function(r,e,n,t,o){function a(r,e,n){return m(e,n)?l(r,e):c(r,e)}function i(r,e,n){return m(e,n)?u(r,e):s(r,e)}function c(r,e){for(var n=new Float64Array(r.position.length),t=r.position,o=e.x,a=e.y,i=e.z||0,c=0;c<t.length;c+=3)n[c+0]=t[c+0]+o,n[c+1]=t[c+1]+a,n[c+2]=t[c+2]+i;return{position:n,normal:r.normal}}function l(r,e){var n=e.spatialReference;o.computeLinearTransformation(e.spatialReference,[e.x,e.y,e.z||0],g,o.SphericalECEFSpatialReference);var t=f(r.position,g,e.spatialReference);return{position:t,normal:p(t,r.normal,n)}}function f(r,e,o){for(var a=new Float64Array(r.length),i=0;i<r.length;i+=3){for(var c=0;c<3;c++)y[c]=r[i+c];n.vec3.transformMat4(y,y,e);for(var c=0;c<3;c++)a[i+c]=y[c]}var l=new Float64Array(r.length);return t.projectFromECEF(a,l,o)}function p(r,e,t,a){if(void 0===a&&(a=0),!t.isWebMercator||!e)return e;for(var i=new Float32Array(e.length),c=0;c<e.length;c+=3){var l=o.webMercator.y2lat(r[c+1]),f=Math.cos(l);1===a&&(f=1/f),y[0]=e[c+0]*f,y[1]=e[c+1]*f,y[2]=e[c+2],n.vec3.normalize(y,y);for(var p=0;p<3;p++)i[c+p]=y[p]}return i}function s(r,e){for(var n=new Float64Array(r.position.length),t=r.position,o=e.x,a=e.y,i=e.z||0,c=0;c<t.length;c+=3)n[c+0]=t[c+0]-o,n[c+1]=t[c+1]-a,n[c+2]=t[c+2]-i;return{position:n,normal:r.normal}}function u(r,e){var t=e.spatialReference;return o.computeLinearTransformation(e.spatialReference,[e.x,e.y,e.z||0],g,o.SphericalECEFSpatialReference),n.mat4.invert(h,g),{position:v(r.position,t,h),normal:p(r.position,r.normal,t,1)}}function v(r,e,o){for(var a=t.projectToECEF(r,e,new Float64Array(r.length)),i=0;i<r.length;i+=3){for(var c=0;c<3;c++)y[c]=a[i+c];n.vec3.transformMat4(y,y,o);for(var c=0;c<3;c++)a[i+c]=y[c]}return a}function m(r,e){var n=r.spatialReference;return n.isWGS84||n.isWebMercator&&(!e||!1!==e.geographic)}Object.defineProperty(e,"__esModule",{value:!0}),e.georeference=a,e.ungeoreference=i;var g=n.mat4f64.create(),h=n.mat4f64.create(),y=n.vec3f64.create()});