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

define(["dojo/_base/array","../Point","../ScreenPoint","../Polyline","../Polygon","../Multipoint","../Extent","./webMercatorUtils"],function(n,t,e,i,r,a,o,f){function c(n,i,r,a,o){var c,u=n.spatialReference,s=a.spatialReference,h=a.x,g=a.y;return u&&s&&!u.equals(s)&&f.canProject(u,s)&&(c=u.isWebMercator?t.lngLatToXY(h,g):t.xyToLngLat(h,g,!0),h=c[0],g=c[1]),h=(h-n.xmin)*(i/n.getWidth()),g=(n.ymax-g)*(r/n.getHeight()),o||(h=Math.round(h),g=Math.round(g)),new e(h,g)}function u(e,f,c,u){var s=e.xmin,h=e.ymax,g=f/e.getWidth(),x=c/e.getHeight(),m=n.forEach,p=Math.round;if(u instanceof t)return new t(p((u.x-s)*g),p((h-u.y)*x));if(u instanceof a){var y=new a,l=y.points;return m(u.points,function(n,t){l[t]=[p((n[0]-s)*g),p((h-n[1])*x)]}),y}if(u instanceof o)return new o(p((u.xmin-s)*g),p((h-u.ymin)*x),p((u.xmax-s)*g),p((h-u.ymax)*g));if(u instanceof i){var w,v=new i,d=v.paths;return m(u.paths,function(n,t){w=d[t]=[],m(n,function(n,t){w[t]=[p((n[0]-s)*g),p((h-n[1])*x)]})}),v}if(u instanceof r){var M,P=new r,L=P.rings;return m(u.rings,function(n,t){M=L[t]=[],m(n,function(n,t){M[t]=[p((n[0]-s)*g),p((h-n[1])*x)]})}),P}}function s(n,e,r,a,o,c){var u,s,h=a instanceof i,g=n.spatialReference,m=a.spatialReference;return g&&m&&!g.equals(m)&&f.canProject(g,m)&&(g.isWebMercator?u=t.lngLatToXY:(u=t.xyToLngLat,s=!0)),x(n.xmin,n.ymax,e/n.getWidth(),r/n.getHeight(),o,c,h?a.paths:a.rings,u,s)}function h(n,e,i,r){return new t(n.xmin+r.x/(e/n.width),n.ymax-r.y/(i/n.height),n.spatialReference)}function g(e,f,c,u){var s=e.xmin,h=e.ymax,g=e.spatialReference,x=f/e.getWidth(),m=c/e.getHeight(),p=n.forEach;if(u instanceof t)return new t(s+u.x/x,h-u.y/m,g);if(u instanceof a){var y=new a(g),l=y.points;return p(u.points,function(n,t){l[t]=[s+n[0]/x,h-n[1]/m]}),y}if(u instanceof o)return new o(s+u.xmin/x,h-u.ymin/m,s+u.xmax/x,h-u.ymax/m,g);if(u instanceof i){var w,v=new i(g),d=v.paths;return p(u.paths,function(n,t){w=d[t]=[],p(n,function(n,t){w[t]=[s+n[0]/x,h-n[1]/m]})}),v}if(u instanceof r){var M,P=new r(g),L=P.rings;return p(u.rings,function(n,t){M=L[t]=[],p(n,function(n,t){M[t]=[s+n[0]/x,h-n[1]/m]})}),P}}var x=function(n,t,e,i,r,a,o,f,c){var u,s,h,g,x,m,p=[],y=Math.round;for(u=0,h=o?o.length:0;h>u;u++)for(x=o[u],p.push("M"),s=0,g=x?x.length:0;g>s;s++)m=f?f(x[s][0],x[s][1],c):x[s],p.push(y((m[0]-n)*e+r)+","+y((t-m[1])*i+a));return p},m={toScreenPoint:c,toScreenGeometry:u,_toScreenPath:s,toMapPoint:h,toMapGeometry:g};return m});