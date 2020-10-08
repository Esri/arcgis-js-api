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

define(["require","exports","../../core/promiseUtils","../../geometry/support/coordsUtils"],(function(e,r,t,n){"use strict";function a(e,r){void 0===r&&(r=!1);var t=[];if(r)for(var a=0,i=e;a<i.length;a++){var l=i[a];if(l.geometry){var o=l.geometry;t.push.apply(t,o.points)}}else t=e.map((function(e){return e.geometry}));for(var u=[],g=[],s=1/0,v=-1/0,f=0,h=0,c=0,m=0,p=0,y=t;p<y.length;p++){var x=y[p];if(x){r?(u[0]=x[0],u[1]=x[1]):(u[0]=x.x,u[1]=x.y);for(var L=1/0,d=-1/0,D=0,b=t;D<b.length;D++){var k=b[D];if(k!==x&&k){r?(g[0]=k[0],g[1]=k[1]):(g[0]=k.x,g[1]=k.y);var z=n.getLength(u,g);z>0&&(z<L&&(L=z),z<s&&(s=z),z>d&&(d=z),z>v&&(v=z))}}L!==1/0&&(++c,f+=L),d!==-1/0&&(++m,h+=d)}}return{minDistance:s!==1/0?s:null,maxDistance:v!==-1/0?v:null,avgMinDistance:c?f/c:null,avgMaxDistance:m?h/m:null}}return function(e){var r=e.features,i=null;switch(e.geometryType){case"point":i=a(r);break;case"multipoint":i=a(r,!0);break;case"polyline":i=function(e){for(var r=0,t=0,a=1/0,i=-1/0,l=0,o=e;l<o.length;l++){var u=o[l].geometry;if(u){for(var g=0,s=0,v=u.paths;s<v.length;s++){var f=v[s],h=n.getPathLength(f);h>0&&(g+=h)}g>0&&(++r,t+=g,g<a&&(a=g),g>i&&(i=g))}}return{minLength:a!==1/0?a:null,maxLength:i!==-1/0?i:null,avgLength:r?t/r:null}}(r);break;case"polygon":i=function(e){for(var r=0,t=0,n=1/0,a=-1/0,i=0,l=e;i<l.length;i++){var o=l[i].geometry;if(o){var u=o.extent;if(u){var g=Math.sqrt(u.width*u.height);g>0&&(++r,t+=g,g<n&&(n=g),g>a&&(a=g))}}}return{minSize:n!==1/0?n:null,maxSize:a!==-1/0?a:null,avgSize:r?t/r:null}}(r)}return t.resolve(i)}}));