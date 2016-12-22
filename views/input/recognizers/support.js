// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(r,t){function e(r,t){return Math.abs(t.x-r.x)+Math.abs(t.y-r.y)}function n(r,t){if(t?(t.radius=0,t.center.x=0,t.center.y=0):t={radius:0,center:{x:0,y:0}},0===r.length)return t;if(1===r.length)return t.center.x=r[0].x,t.center.y=r[0].y,t;if(2===r.length){var e=r[0],n=r[1],a=[n.x-e.x,n.y-e.y],i=a[0],u=a[1];return t.radius=Math.sqrt(i*i+u*u)/2,t.center.x=(e.x+n.x)/2,t.center.y=(e.y+n.y)/2,t}for(var c=0,x=0,y=0;y<r.length;y++)c+=r[y].x,x+=r[y].y;c/=r.length,x/=r.length;for(var h=r.map(function(r){return r.x-c}),f=r.map(function(r){return r.y-x}),s=0,l=0,g=0,o=0,d=0,v=0,M=0,y=0;y<h.length;y++){var m=h[y],p=f[y],q=m*m,b=p*p;s+=q,l+=b,g+=m*p,o+=q*m,d+=b*p,v+=m*b,M+=p*q}var C=s,D=g,L=g,Q=l,S=.5*(o+v),j=.5*(d+M),k=C*Q-L*D,w=S*Q-j*D,z=C*j-L*S,A=w/k,B=z/k,E={x:A+c,y:B+x},F=Math.sqrt(A*A+B*B+(s+l)/r.length);return{radius:F,center:E}}t.manhattanDistance=e,t.fitCircleLSQ=n});