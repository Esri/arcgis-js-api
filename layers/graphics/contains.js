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

define(["require","exports"],function(n,r){function o(n,r){return n?r?4:3:r?3:2}function t(n,r,o,t){return i(n,r,o,t.coords[0],t.coords[1])}function e(n,r,t,e,u,f){var s=o(u,f),c=e.coords,a=e.lengths;if(!a)return!1;for(var l=0,d=0;l<a.length;l++,d+=s)if(!i(n,r,t,c[d],c[d+1]))return!1;return!0}function i(n,r,t,e,i){if(!n)return!1;for(var f=o(r,t),s=n.coords,c=n.lengths,a=!1,l=0,d=0,g=c;d<g.length;d++){var v=g[d];a=u(a,s,f,l,v,e,i),l+=v*f}return a}function u(n,r,o,t,e,i,u){for(var f=n,s=t,c=t,a=t+e*o;c<a;c+=o){s=c+o,s===a&&(s=t);var l=r[c],d=r[c+1],g=r[s],v=r[s+1];(d<u&&v>=u||v<u&&d>=u)&&l+(u-d)/(v-d)*(g-l)<i&&(f=!f)}return f}Object.defineProperty(r,"__esModule",{value:!0}),r.polygonContainsPoint=t,r.polygonContainsMultipoint=e,r.polygonContainsCoords=i});