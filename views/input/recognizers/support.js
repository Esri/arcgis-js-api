// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports"],function(e,r){function t(e,r){return Math.abs(r.x-e.x)+Math.abs(r.y-e.y)}function n(e,r){if(r?(r.radius=0,r.center.x=0,r.center.y=0):r={radius:0,center:{x:0,y:0}},0===e.length)return r;if(1===e.length)return r.center.x=e[0].x,r.center.y=e[0].y,r;if(2===e.length){var t=e[0],n=e[1],a=[n.x-t.x,n.y-t.y],u=a[0],i=a[1];return r.radius=Math.sqrt(u*u+i*i)/2,r.center.x=(t.x+n.x)/2,r.center.y=(t.y+n.y)/2,r}for(var c=0,x=0,y=0;y<e.length;y++)c+=e[y].x,x+=e[y].y;c/=e.length,x/=e.length;for(var f=e.map(function(e){return e.x-c}),h=e.map(function(e){return e.y-x}),l=0,s=0,o=0,g=0,d=0,v=0,M=0,y=0;y<f.length;y++){var p=f[y],b=h[y],m=p*p,q=b*b;l+=m,s+=q,o+=p*b,g+=m*p,d+=q*b,v+=p*q,M+=b*m}var _=l,j=o,C=o,D=s,L=.5*(g+v),O=.5*(d+M),P=_*D-C*j,Q=L*D-O*j,S=_*O-C*L,k=Q/P,w=S/P,z={x:k+c,y:w+x},A=Math.sqrt(k*k+w*w+(l+s)/e.length);return{radius:A,center:z}}Object.defineProperty(r,"__esModule",{value:!0}),r.manhattanDistance=t,r.fitCircleLSQ=n});