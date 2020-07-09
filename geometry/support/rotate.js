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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../geometry"],(function(e,n,r){function t(e){var n,r=0,t=0,i=e.length,l=e[t];for(t=0;t<i-1;t++)r+=((n=e[t+1])[0]-l[0])*(n[1]+l[1]),l=n;return r>=0}function i(e,n,r,t){for(var i=[],l=0,a=e;l<a.length;l++){var u=a[l],s=u.slice(0);i.push(s);var x=n*(u[0]-t.x)-r*(u[1]-t.y)+t.x,o=r*(u[0]-t.x)+n*(u[1]-t.y)+t.y;s[0]=x,s[1]=o}return i}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n,l){var a=e.spatialReference,u=n*Math.PI/180,s=Math.cos(u),x=Math.sin(u);if("xmin"in e&&(l=null!=l?l:e.center,e=new r.Polygon({spatialReference:a,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]})),"paths"in e){l=null!=l?l:e.extent.center;for(var o=[],f=0,y=e.paths;f<y.length;f++){var p=y[f];o.push(i(p,s,x,l))}return new r.Polyline({spatialReference:a,paths:o})}if("rings"in e){l=null!=l?l:e.extent.center;for(var c=[],m=0,h=e.rings;m<h.length;m++){var v=h[m],g=t(v),P=i(v,s,x,l);t(P)!==g&&P.reverse(),c.push(P)}return new r.Polygon({spatialReference:a,rings:c})}if("x"in e){l=null!=l?l:e;var R=new r.Point({x:s*(e.x-l.x)-x*(e.y-l.y)+l.x,y:x*(e.x-l.x)+s*(e.y-l.y)+l.y,spatialReference:a});return null!=e.z&&(R.z=e.z),null!=e.m&&(R.m=e.m),R}return"points"in e?(l=null!=l?l:e.extent.center,new r.Multipoint({points:i(e.points,s,x,l),spatialReference:a})):null}}));