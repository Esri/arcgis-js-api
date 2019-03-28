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

define(["require","exports","./utils"],function(r,n,o){function t(r,n,o,t){return i(r,n,o,t.coords[0],t.coords[1])}function e(r,n,t,e,u,f){var s=o.getStride(u,f),l=e.coords,a=e.lengths;if(!a)return!1;for(var c=0,d=0;c<a.length;c++,d+=s)if(!i(r,n,t,l[d],l[d+1]))return!1;return!0}function i(r,n,t,e,i){if(!r)return!1;for(var f=o.getStride(n,t),s=r.coords,l=r.lengths,a=!1,c=0,d=0,g=l;d<g.length;d++){var v=g[d];a=u(a,s,f,c,v,e,i),c+=v*f}return a}function u(r,n,o,t,e,i,u){for(var f=r,s=t,l=t,a=t+e*o;l<a;l+=o){s=l+o,s===a&&(s=t);var c=n[l],d=n[l+1],g=n[s],v=n[s+1];(d<u&&v>=u||v<u&&d>=u)&&c+(u-d)/(v-d)*(g-c)<i&&(f=!f)}return f}Object.defineProperty(n,"__esModule",{value:!0}),n.polygonContainsPoint=t,n.polygonContainsMultipoint=e,n.polygonContainsCoords=i});