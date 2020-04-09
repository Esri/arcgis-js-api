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

define(["require","exports"],(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=Math.PI/180;e.snapToPixel=function(t,e,r){var n=r.resolution,o=r.size;return t[0]=n*(Math.round(e[0]/n)+o[0]%2*.5),t[1]=n*(Math.round(e[1]/n)+o[1]%2*.5),t},e.getOuterSize=function(t,e){var n=e.rotation*r,o=Math.abs(Math.cos(n)),a=Math.abs(Math.sin(n)),u=e.size,i=u[0],s=u[1];return t[0]=Math.round(s*a+i*o),t[1]=Math.round(s*o+i*a),t},e.getBBox=function(t,e,r,n){var o=e[0],a=e[1],u=n[0],i=n[1],s=.5*r;return t[0]=o-s*u,t[1]=a-s*i,t[2]=o+s*u,t[3]=a+s*i,t},e.bboxIntersects=function(t,e){var r=t[0],n=t[1],o=t[2],a=t[3],u=e[0],i=e[1],s=e[2],M=e[3];return!(r>s||o<u||n>M||a<i)}}));