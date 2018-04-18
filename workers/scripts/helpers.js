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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

var merge=function(r,t,n){return r&&"object"==typeof r&&(t=t||{},Object.keys(r).forEach(function(n){void 0!==r[n]&&(t[n]=r[n])},n||this)),t},mixin=function(r,t){return merge(t,r.prototype)},geomToBbox=function(r){function t(r,t){return r.length||(r=[1/0,1/0,-1/0,-1/0]),t[0]<r[0]&&(r[0]=t[0]),t[1]<r[1]&&(r[1]=t[1]),t.length>3?(t[2]>r[2]&&(r[2]=t[2]),t[3]>r[3]&&(r[3]=t[3])):(t[0]>r[2]&&(r[2]=t[0]),t[1]>r[3]&&(r[3]=t[1])),r}var n,e=[];if(null!=r.x&&null!=r.y)return[r.x,r.y,r.x,r.y];if(r.points){var i=r.points,o=i.length;for(n=-1;++n<o;)e=t(e,i[n]);return e}if(r.paths||r.rings){var f,u,a,s=r.paths||r.rings,g=s.length;for(n=-1;++n<g;)for(u=s[n],f=u.length,a=-1;++a<f;)e=t(e,u[a]);return e}if(r.xmin)return[r.xmin,r.ymin,r.xmax,r.ymax];if(r.vertexAttributes){var l=r.vertexAttributes.position,x=r.faces,h=[0,0];if(x)for(var n=0;n<x.length;n+=3){var v=3*x[n];h[0]=l[v+0],h[1]=l[v+1],e=t(e,h)}else for(var n=0;n<l.length;n+=3)h[0]=l[n+0],h[1]=l[n+1],e=t(e,h);return e}};