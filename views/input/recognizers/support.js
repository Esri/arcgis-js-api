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

define(["require","exports","../../../core/screenUtils"],(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fitCircleLSQ=t.euclideanDistance=t.manhattanDistance=void 0,t.manhattanDistance=function(e,t){return Math.abs(t.x-e.x)+Math.abs(t.y-e.y)},t.euclideanDistance=function(e,t){var n=t.x-e.x,r=t.y-e.y;return Math.sqrt(n*n+r*r)},t.fitCircleLSQ=function(e,t){if(t?(t.radius=0,t.center.x=0,t.center.y=0):t={radius:0,center:n.createScreenPoint()},0===e.length)return t;if(1===e.length)return t.center.x=e[0].x,t.center.y=e[0].y,t;if(2===e.length){var r=e[0],a=e[1],i=[a.x-r.x,a.y-r.y],c=i[0],u=i[1];return t.radius=Math.sqrt(c*c+u*u)/2,t.center.x=(r.x+a.x)/2,t.center.y=(r.y+a.y)/2,t}for(var s=0,f=0,h=0;h<e.length;h++)s+=e[h].x,f+=e[h].y;s/=e.length,f/=e.length;var l=e.map((function(e){return e.x-s})),o=e.map((function(e){return e.y-f})),x=0,y=0,d=0,g=0,v=0,M=0,m=0;for(h=0;h<l.length;h++){var p=l[h],q=o[h],D=p*p,S=q*q;x+=D,y+=S,d+=p*q,g+=D*p,v+=S*q,M+=p*S,m+=q*D}var b=.5*(g+M),P=.5*(v+m),C=x*y-d*d,L=(b*y-P*d)/C,Q=(x*P-d*b)/C,_=n.createScreenPoint(L+s,Q+f);return{radius:Math.sqrt(L*L+Q*Q+(x+y)/e.length),center:_}}}));