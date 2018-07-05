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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../lib/glMatrix"],function(e,r,t){function n(e){return void 0===e&&(e=r.UP),[e[0],e[1],e[2],e[3]]}function c(e,r,t,c,o){return void 0===o&&(o=n()),o[0]=e,o[1]=r,o[2]=t,o[3]=c,o}function o(e,r,c){return void 0===c&&(c=n()),t.vec3d.set(e,c),c[3]=r,c}function d(e,r,c){return void 0===c&&(c=n()),t.vec3d.set(r,c),c[3]=-t.vec3d.dot(r,e),c}function i(e,r,n){return void 0===n&&(n=r),t.vec3d.cross(e,t.vec3d.cross(r,e,P),n)}function u(e,r){return t.vec3d.dot(e,r)+e[3]}function v(e,r,c,o){return void 0===o&&(o=n()),a(t.vec3d.subtract(e,r,m),t.vec3d.subtract(c,r,P),e,o)}function f(e,r){return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e}function s(e,r){return void 0===r&&(r=e),r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=-e[3],r}function a(e,r,c,o){return void 0===o&&(o=n()),t.vec3d.cross(r,e,b),d(c,t.vec3d.normalize(b),o)}function l(e,r,n,c){var o=t.vec3d.dot(e,n);if(0===o)return!1;var d=-(t.vec3d.dot(e,r)+e[3])/o;return t.vec3d.add(r,t.vec3d.scale(n,d,c),c),!0}Object.defineProperty(r,"__esModule",{value:!0}),r.create=n,r.fromValues=c,r.fromNormalAndOffset=o,r.fromPositionAndNormal=d,r.projectVector=i,r.distance=u,r.fromPoints=v,r.set=f,r.negate=s,r.fromVectorsAndPoint=a,r.intersectRay=l,r.UP=[0,0,1,0];var m=t.vec3d.create(),P=t.vec3d.create(),b=t.vec3d.create()});