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

define(["require","exports"],(function(n,o){"use strict";function r(n,o){return n?o?4:3:o?3:2}function t(n,o,t,e,u){if(!n)return!1;for(var s=r(o,t),f=n.coords,l=!1,a=0,c=0,d=n.lengths;c<d.length;c++){var g=d[c];l=i(l,f,s,a,g,e,u),a+=g*s}return l}function i(n,o,r,t,i,e,u){for(var s=n,f=t,l=t,a=t+i*r;l<a;l+=r){(f=l+r)===a&&(f=t);var c=o[l],d=o[l+1],g=o[f],p=o[f+1];(d<u&&p>=u||p<u&&d>=u)&&c+(u-d)/(p-d)*(g-c)<e&&(s=!s)}return s}Object.defineProperty(o,"__esModule",{value:!0}),o.polygonContainsCoords=o.polygonContainsMultipoint=o.polygonContainsPoint=void 0,o.polygonContainsPoint=function(n,o,r,i){return t(n,o,r,i.coords[0],i.coords[1])},o.polygonContainsMultipoint=function(n,o,i,e,u,s){var f=r(u,s),l=e.coords,a=e.lengths;if(!a)return!1;for(var c=0,d=0;c<a.length;c++,d+=f)if(!t(n,o,i,l[d],l[d+1]))return!1;return!0},o.polygonContainsCoords=t}));