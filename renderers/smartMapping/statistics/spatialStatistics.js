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

define(["require","exports","../../../core/promiseUtils","../../../geometry/support/coordsUtils"],function(e,r,n,t){function a(e,r){void 0===r&&(r=!1);var n=[];if(r)for(var a=0,i=e;a<i.length;a++){var l=i[a];if(l.geometry){var o=l.geometry;n.push.apply(n,o.points)}}else n=e.map(function(e){return e.geometry});for(var u=[],g=[],v=1/0,s=-1/0,f=0,h=0,c=0,m=0,p=0,y=n;p<y.length;p++){var x=y[p];if(x){r?(u[0]=x[0],u[1]=x[1]):(u[0]=x.x,u[1]=x.y);for(var L=1/0,d=-1/0,D=0,b=n;D<b.length;D++){var k=b[D];if(k!==x&&k){r?(g[0]=k[0],g[1]=k[1]):(g[0]=k.x,g[1]=k.y);var z=t.getLength(u,g);z>0&&(z<L&&(L=z),z<v&&(v=z),z>d&&(d=z),z>s&&(s=z))}}L!==1/0&&(++c,f+=L),d!==-1/0&&(++m,h+=d)}}return{minDistance:v!==1/0?v:null,maxDistance:s!==-1/0?s:null,avgMinDistance:c?f/c:null,avgMaxDistance:m?h/m:null}}function i(e){for(var r=0,n=0,a=1/0,i=-1/0,l=0,o=e;l<o.length;l++){var u=o[l],g=u.geometry;if(g){for(var v=0,s=0,f=g.paths;s<f.length;s++){var h=f[s],c=t.getPathLength(h);c>0&&(v+=c)}v>0&&(++r,n+=v,v<a&&(a=v),v>i&&(i=v))}}return{minLength:a!==1/0?a:null,maxLength:i!==-1/0?i:null,avgLength:r?n/r:null}}function l(e){for(var r=0,n=0,t=1/0,a=-1/0,i=0,l=e;i<l.length;i++){var o=l[i],u=o.geometry;if(u){var g=u.extent;if(g){var v=Math.sqrt(g.width*g.height);v>0&&(++r,n+=v,v<t&&(t=v),v>a&&(a=v))}}}return{minSize:t!==1/0?t:null,maxSize:a!==-1/0?a:null,avgSize:r?n/r:null}}function o(e){var r=e.features,t=null;switch(e.geometryType){case"point":t=a(r);break;case"multipoint":t=a(r,!0);break;case"polyline":t=i(r);break;case"polygon":t=l(r)}return n.resolve(t)}return o});