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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/screenUtils"],function(e,r,t){function n(e,r){return Math.abs(r.x-e.x)+Math.abs(r.y-e.y)}function a(e,r){var t=r.x-e.x,n=r.y-e.y;return Math.sqrt(t*t+n*n)}function c(e,r){if(r?(r.radius=0,r.center.x=0,r.center.y=0):r={radius:0,center:t.createScreenPoint()},0===e.length)return r;if(1===e.length)return r.center.x=e[0].x,r.center.y=e[0].y,r;if(2===e.length){var n=e[0],a=e[1],c=[a.x-n.x,a.y-n.y],i=c[0],u=c[1];return r.radius=Math.sqrt(i*i+u*u)/2,r.center.x=(n.x+a.x)/2,r.center.y=(n.y+a.y)/2,r}for(var s=0,x=0,y=0;y<e.length;y++)s+=e[y].x,x+=e[y].y;s/=e.length,x/=e.length;for(var f=e.map(function(e){return e.x-s}),h=e.map(function(e){return e.y-x}),o=0,l=0,d=0,g=0,v=0,M=0,p=0,y=0;y<f.length;y++){var q=f[y],b=h[y],m=q*q,P=b*b;o+=m,l+=P,d+=q*b,g+=m*q,v+=P*b,M+=q*P,p+=b*m}var S=o,D=d,_=d,j=l,C=.5*(g+M),L=.5*(v+p),O=S*j-_*D,Q=C*j-L*D,U=S*L-_*C,k=Q/O,w=U/O,z=t.createScreenPoint(k+s,w+x);return{radius:Math.sqrt(k*k+w*w+(o+l)/e.length),center:z}}Object.defineProperty(r,"__esModule",{value:!0}),r.manhattanDistance=n,r.euclideanDistance=a,r.fitCircleLSQ=c});