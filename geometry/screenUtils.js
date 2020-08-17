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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","dojo/sniff","../kernel","./Point","./ScreenPoint","./Polyline","./Polygon","./Multipoint","./Extent"],(function(n,e,t,i,r,a,o,f,c,u){var s=t("ie")<9?function(n,e,t,i,r,a,o,f,c){var u,s,h,g,x,p,m,l,y,d=[],v=Math.round,M=o.length;for(u=0;u<M;u++)if(s=o[u],x=f?f(s[0][0],s[0][1],c):s[0],(g=s.length)>1)for(p=v((x[0]-n)*t+r),m=v((e-x[1])*i+a),l=v(((x=f?f(s[1][0],s[1][1],c):s[1])[0]-n)*t+r),y=v((e-x[1])*i+a),d.push("M",p+","+m,"L",l+","+y),h=2;h<g;h++)p=v(((x=f?f(s[h][0],s[h][1],c):s[h])[0]-n)*t+r),m=v((e-x[1])*i+a),d.push(p+","+m);else p=v((x[0]-n)*t+r),m=v((e-x[1])*i+a),d.push("M",p+","+m);return d}:function(n,e,t,i,r,a,o,f,c,u){var s,h,g,x,p,m,l=[],y=Math.round;for(s=0,g=o?o.length:0;s<g;s++){for(p=o[s],l.push("M"),h=0,x=p?p.length:0;h<x;h++)m=f?f(p[h][0],p[h][1],c):p[h],l.push(y((m[0]-n)*t+r)+","+y((e-m[1])*i+a));u||l.push("Z")}return l};var h={toScreenPoint:function(n,e,t,i,o){var f,c=n.spatialReference,u=i.spatialReference,s=i.x,h=i.y;return c&&u&&!c.equals(u)&&c._canProject(u)&&(s=(f=c.isWebMercator()?r.lngLatToXY(s,h):r.xyToLngLat(s,h,!0))[0],h=f[1]),s=(s-n.xmin)*(e/n.getWidth()),h=(n.ymax-h)*(t/n.getHeight()),o||(s=Math.round(s),h=Math.round(h)),new a(s,h)},toScreenGeometry:function(e,t,i,a){var s=e.xmin,h=e.ymax,g=t/e.getWidth(),x=i/e.getHeight(),p=n.forEach,m=Math.round;if(a instanceof r)return new r(m((a.x-s)*g),m((h-a.y)*x));if(a instanceof c){var l=new c,y=l.points;return p(a.points,(function(n,e){y[e]=[m((n[0]-s)*g),m((h-n[1])*x)]})),l}if(a instanceof u)return new u(m((a.xmin-s)*g),m((h-a.ymin)*x),m((a.xmax-s)*g),m((h-a.ymax)*g));if(a instanceof o){var d,v=new o,M=v.paths;return p(a.paths,(function(n,e){d=M[e]=[],p(n,(function(n,e){d[e]=[m((n[0]-s)*g),m((h-n[1])*x)]}))})),v}if(a instanceof f){var w,P=new f,L=P.rings;return p(a.rings,(function(n,e){w=L[e]=[],p(n,(function(n,e){w[e]=[m((n[0]-s)*g),m((h-n[1])*x)]}))})),P}},_toScreenPath:function(n,e,t,i,a,f){var c,u,h=i instanceof o,g=n.spatialReference,x=i.spatialReference;return g&&x&&!g.equals(x)&&g._canProject(x)&&(g.isWebMercator()?c=r.lngLatToXY:(c=r.xyToLngLat,u=!0)),s(n.xmin,n.ymax,e/n.getWidth(),t/n.getHeight(),a,f,h?i.paths:i.rings,c,u,h)},toMapPoint:function(n,e,t,i){return new r(n.xmin+i.x/(e/n.getWidth()),n.ymax-i.y/(t/n.getHeight()),n.spatialReference)},toMapGeometry:function(e,t,i,a){var s=e.xmin,h=e.ymax,g=e.spatialReference,x=t/e.getWidth(),p=i/e.getHeight(),m=n.forEach;if(a instanceof r)return new r(s+a.x/x,h-a.y/p,g);if(a instanceof c){var l=new c(g),y=l.points;return m(a.points,(function(n,e){y[e]=[s+n[0]/x,h-n[1]/p]})),l}if(a instanceof u)return new u(s+a.xmin/x,h-a.ymin/p,s+a.xmax/x,h-a.ymax/p,g);if(a instanceof o){var d,v=new o(g),M=v.paths;return m(a.paths,(function(n,e){d=M[e]=[],m(n,(function(n,e){d[e]=[s+n[0]/x,h-n[1]/p]}))})),v}if(a instanceof f){var w,P=new f(g),L=P.rings;return m(a.rings,(function(n,e){w=L[e]=[],m(n,(function(n,e){w[e]=[s+n[0]/x,h-n[1]/p]}))})),P}}};return t("extend-esri")&&e.mixin(e.getObject("geometry",!0,i),h),h}));
