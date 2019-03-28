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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/maybe","../../../core/unitUtils","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","./projection","../../../views/3d/support/projectionUtils"],function(r,e,t,n,o,a,i,l,c,f){function s(r,e,t){return M(e,t)?p(r,e,t):v(r,e,t)}function u(r,e,t){return M(e,t)?R(r,e,t):F(r,e,t)}function v(r,e,t){for(var n=new Float64Array(r.position.length),o=r.position,a=e.x,i=e.y,l=e.z||0,c=w(t?t.unit:null,e.spatialReference),f=c.horizontal,s=c.vertical,u=0;u<o.length;u+=3)n[u+0]=o[u+0]*f+a,n[u+1]=o[u+1]*f+i,n[u+2]=o[u+2]*s+l;return{position:n,normal:r.normal,tangent:r.tangent}}function p(r,e,t){var n=e.spatialReference;b(e,t,x);var o=g(r.position,x,e.spatialReference);return{position:o,normal:m(o,r.normal,n),tangent:h(o,r.tangent,n)}}function g(r,e,t){for(var n=new Float64Array(r.length),o=0;o<r.length;o+=3){for(var a=0;a<3;a++)A[a]=r[o+a];i.vec3.transformMat4(A,A,e);for(var a=0;a<3;a++)n[o+a]=A[a]}var l=new Float64Array(r.length);return c.projectFromECEF(n,l,t)}function m(r,e,t,n){return void 0===n&&(n=0),y(r,e,3,t,n)}function h(r,e,t,n){void 0===n&&(n=0);var o=y(r,e,4,t,n);if(e)for(var a=3;a<e.length;a+=4)o[a]=e[a];return o}function y(r,e,t,n,o){if(void 0===o&&(o=0),!n.isWebMercator||!e)return e;for(var a=new Float32Array(e.length),l=r.length/3,c=0;c<l;c+=1){var s=f.webMercator.y2lat(r[3*c+1]),u=Math.cos(s);1===o&&(u=1/u),A[0]=e[c*t+0]*u,A[1]=e[c*t+1]*u,A[2]=e[c*t+2],i.vec3.normalize(A,A);for(var v=0;v<3;v++)a[c*t+v]=A[v]}return a}function F(r,e,t){for(var n=new Float64Array(r.position.length),o=r.position,a=e.x,i=e.y,l=e.z||0,c=w(t?t.unit:null,e.spatialReference),f=c.horizontal,s=c.vertical,u=0;u<o.length;u+=3)n[u+0]=(o[u+0]-a)/f,n[u+1]=(o[u+1]-i)/f,n[u+2]=(o[u+2]-l)/s;return{position:n,normal:r.normal,tangent:r.tangent}}function R(r,e,t){var n=e.spatialReference;return b(e,t,x),o.mat4.invert(d,x),{position:z(r.position,n,d),normal:m(r.position,r.normal,n,1),tangent:h(r.position,r.tangent,n,1)}}function b(r,e,t){f.computeLinearTransformation(r.spatialReference,[r.x,r.y,r.z||0],t,f.SphericalECEFSpatialReference);var n=w(e?e.unit:null,r.spatialReference),a=n.horizontal,i=n.vertical;return o.mat4.scale(t,t,[a,a,i]),t}function z(r,e,t){for(var n=c.projectToECEF(r,e,new Float64Array(r.length)),o=0;o<r.length;o+=3){for(var a=0;a<3;a++)A[a]=n[o+a];i.vec3.transformMat4(A,A,t);for(var a=0;a<3;a++)n[o+a]=A[a]}return n}function M(r,e){var t=r.spatialReference;return t.isWGS84||t.isWebMercator&&(!e||!1!==e.geographic)}function w(r,e){if(t.isNone(r))return E;var o=e.isWGS84?1:n.getMetersPerUnit(e),a=e.isWGS84?1:n.getMetersPerVerticalUnitForSR(e),i=n.convertUnit(1,r,"meters");return{horizontal:i*o,vertical:i*a}}Object.defineProperty(e,"__esModule",{value:!0}),e.georeference=s,e.ungeoreference=u;var x=a.mat4f64.create(),d=a.mat4f64.create(),A=l.vec3f64.create(),E={horizontal:1,vertical:1}});