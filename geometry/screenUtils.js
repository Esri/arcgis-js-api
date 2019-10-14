// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","dojo/sniff","../kernel","./Point","./ScreenPoint","./Polyline","./Polygon","./Multipoint","./Extent"],function(n,e,t,i,r,a,o,f,u,c){function s(n,e,t,i,o){var f,u=n.spatialReference,c=i.spatialReference,s=i.x,h=i.y;return u&&c&&!u.equals(c)&&u._canProject(c)&&(f=u.isWebMercator()?r.lngLatToXY(s,h):r.xyToLngLat(s,h,!0),s=f[0],h=f[1]),s=(s-n.xmin)*(e/n.getWidth()),h=(n.ymax-h)*(t/n.getHeight()),o||(s=Math.round(s),h=Math.round(h)),new a(s,h)}function h(e,t,i,a){var s=e.xmin,h=e.ymax,g=t/e.getWidth(),x=i/e.getHeight(),p=n.forEach,m=Math.round;if(a instanceof r)return new r(m((a.x-s)*g),m((h-a.y)*x));if(a instanceof u){var l=new u,y=l.points;return p(a.points,function(n,e){y[e]=[m((n[0]-s)*g),m((h-n[1])*x)]}),l}if(a instanceof c)return new c(m((a.xmin-s)*g),m((h-a.ymin)*x),m((a.xmax-s)*g),m((h-a.ymax)*g));if(a instanceof o){var d,v=new o,M=v.paths;return p(a.paths,function(n,e){d=M[e]=[],p(n,function(n,e){d[e]=[m((n[0]-s)*g),m((h-n[1])*x)]})}),v}if(a instanceof f){var w,P=new f,L=P.rings;return p(a.rings,function(n,e){w=L[e]=[],p(n,function(n,e){w[e]=[m((n[0]-s)*g),m((h-n[1])*x)]})}),P}}function g(n,e,t,i,a,f){var u,c,s=i instanceof o,h=n.spatialReference,g=i.spatialReference;return h&&g&&!h.equals(g)&&h._canProject(g)&&(h.isWebMercator()?u=r.lngLatToXY:(u=r.xyToLngLat,c=!0)),m(n.xmin,n.ymax,e/n.getWidth(),t/n.getHeight(),a,f,s?i.paths:i.rings,u,c,s)}function x(n,e,t,i){return new r(n.xmin+i.x/(e/n.getWidth()),n.ymax-i.y/(t/n.getHeight()),n.spatialReference)}function p(e,t,i,a){var s=e.xmin,h=e.ymax,g=e.spatialReference,x=t/e.getWidth(),p=i/e.getHeight(),m=n.forEach;if(a instanceof r)return new r(s+a.x/x,h-a.y/p,g);if(a instanceof u){var l=new u(g),y=l.points;return m(a.points,function(n,e){y[e]=[s+n[0]/x,h-n[1]/p]}),l}if(a instanceof c)return new c(s+a.xmin/x,h-a.ymin/p,s+a.xmax/x,h-a.ymax/p,g);if(a instanceof o){var d,v=new o(g),M=v.paths;return m(a.paths,function(n,e){d=M[e]=[],m(n,function(n,e){d[e]=[s+n[0]/x,h-n[1]/p]})}),v}if(a instanceof f){var w,P=new f(g),L=P.rings;return m(a.rings,function(n,e){w=L[e]=[],m(n,function(n,e){w[e]=[s+n[0]/x,h-n[1]/p]})}),P}}var m=function(){return t("ie")<9?function(n,e,t,i,r,a,o,f,u){var c,s,h,g,x,p,m,l,y,d=[],v=Math.round,M=o.length;for(c=0;c<M;c++)if(s=o[c],x=f?f(s[0][0],s[0][1],u):s[0],(g=s.length)>1)for(p=v((x[0]-n)*t+r),m=v((e-x[1])*i+a),x=f?f(s[1][0],s[1][1],u):s[1],l=v((x[0]-n)*t+r),y=v((e-x[1])*i+a),d.push("M",p+","+m,"L",l+","+y),h=2;h<g;h++)x=f?f(s[h][0],s[h][1],u):s[h],p=v((x[0]-n)*t+r),m=v((e-x[1])*i+a),d.push(p+","+m);else p=v((x[0]-n)*t+r),m=v((e-x[1])*i+a),d.push("M",p+","+m);return d}:function(n,e,t,i,r,a,o,f,u,c){var s,h,g,x,p,m,l=[],y=Math.round;for(s=0,g=o?o.length:0;s<g;s++){for(p=o[s],l.push("M"),h=0,x=p?p.length:0;h<x;h++)m=f?f(p[h][0],p[h][1],u):p[h],l.push(y((m[0]-n)*t+r)+","+y((e-m[1])*i+a));c||l.push("Z")}return l}}(),l={toScreenPoint:s,toScreenGeometry:h,_toScreenPath:g,toMapPoint:x,toMapGeometry:p};return t("extend-esri")&&e.mixin(e.getObject("geometry",!0,i),l),l});