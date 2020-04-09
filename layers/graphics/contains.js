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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports"],(function(n,r){function o(n,r){return n?r?4:3:r?3:2}function t(n,r,t,i,u){if(!n)return!1;for(var f=o(r,t),s=n.coords,c=!1,a=0,l=0,d=n.lengths;l<d.length;l++){var g=d[l];c=e(c,s,f,a,g,i,u),a+=g*f}return c}function e(n,r,o,t,e,i,u){for(var f=n,s=t,c=t,a=t+e*o;c<a;c+=o){(s=c+o)===a&&(s=t);var l=r[c],d=r[c+1],g=r[s],v=r[s+1];(d<u&&v>=u||v<u&&d>=u)&&l+(u-d)/(v-d)*(g-l)<i&&(f=!f)}return f}Object.defineProperty(r,"__esModule",{value:!0}),r.polygonContainsPoint=function(n,r,o,e){return t(n,r,o,e.coords[0],e.coords[1])},r.polygonContainsMultipoint=function(n,r,e,i,u,f){var s=o(u,f),c=i.coords,a=i.lengths;if(!a)return!1;for(var l=0,d=0;l<a.length;l++,d+=s)if(!t(n,r,e,c[d],c[d+1]))return!1;return!0},r.polygonContainsCoords=t}));