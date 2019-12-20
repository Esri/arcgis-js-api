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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports"],function(n,r){function e(n,r){return{near:n,far:r}}function t(n){return n?a(n,1/0,-1/0):e(1/0,-1/0)}function a(n,r,e){return n.near=r,n.far=e,n}function u(n,r,e){return void 0===e&&(e=n),e.near=Math.min(n.near,r.near),e.far=Math.max(n.far,r.far),e}function f(n,r){return n.near<=r&&r<=n.far}Object.defineProperty(r,"__esModule",{value:!0}),r.create=e,r.empty=t,r.set=a,r.union=u,r.within=f});