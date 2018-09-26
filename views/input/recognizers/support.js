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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports"],function(e,t){function r(e,t){return Math.abs(t.x-e.x)+Math.abs(t.y-e.y)}function n(e,t){var r=t.x-e.x,n=t.y-e.y;return Math.sqrt(r*r+n*n)}function a(e,t){if(t?(t.radius=0,t.center.x=0,t.center.y=0):t={radius:0,center:{x:0,y:0}},0===e.length)return t;if(1===e.length)return t.center.x=e[0].x,t.center.y=e[0].y,t;if(2===e.length){var r=e[0],n=e[1],a=[n.x-r.x,n.y-r.y],u=a[0],i=a[1];return t.radius=Math.sqrt(u*u+i*i)/2,t.center.x=(r.x+n.x)/2,t.center.y=(r.y+n.y)/2,t}for(var c=0,x=0,y=0;y<e.length;y++)c+=e[y].x,x+=e[y].y;c/=e.length,x/=e.length;for(var f=e.map(function(e){return e.x-c}),h=e.map(function(e){return e.y-x}),s=0,l=0,o=0,d=0,g=0,v=0,M=0,y=0;y<f.length;y++){var p=f[y],q=h[y],b=p*p,m=q*q;s+=b,l+=m,o+=p*q,d+=b*p,g+=m*q,v+=p*m,M+=q*b}var D=s,_=o,j=o,C=l,L=.5*(d+v),O=.5*(g+M),P=D*C-j*_,Q=L*C-O*_,S=D*O-j*L,k=Q/P,w=S/P,z={x:k+c,y:w+x};return{radius:Math.sqrt(k*k+w*w+(s+l)/e.length),center:z}}Object.defineProperty(t,"__esModule",{value:!0}),t.manhattanDistance=r,t.euclideanDistance=n,t.fitCircleLSQ=a});