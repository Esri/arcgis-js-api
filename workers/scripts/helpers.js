// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

var merge=function(n,t,r){return n&&"object"==typeof n&&(t=t||{},Object.keys(n).forEach((function(r){void 0!==n[r]&&(t[r]=n[r])}),r||this)),t},mixin=function(n,t){return merge(t,n.prototype)},geomToBbox=function(n){var t,r=[];if(n.x&&n.y)return[n.x,n.y,n.x,n.y];if(n.points){var e=n.points,o=e.length;for(t=-1;++t<o;)r=c(r,e[t]);return r}if(n.paths||n.rings){var i,f,u,g=n.paths||n.rings,h=g.length;for(t=-1;++t<h;)for(i=(f=g[t]).length,u=-1;++u<i;)r=c(r,f[u]);return r}function c(n,t){return n.length||(n=[1/0,1/0,-1/0,-1/0]),t[0]<n[0]&&(n[0]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t.length>2?(t[2]>n[2]&&(n[2]=t[2]),t[3]>n[3]&&(n[3]=t[3])):(t[0]>n[2]&&(n[2]=t[0]),t[1]>n[3]&&(n[3]=t[1])),n}};