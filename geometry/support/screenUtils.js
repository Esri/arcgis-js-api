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

define(["dojo/_base/array","dojo/sniff","../Point","../ScreenPoint","../Polyline","../Polygon","../Multipoint","../Extent","./webMercatorUtils"],function(n,t,e,i,r,a,o,f,c){function u(n,t,r,a,o){var f,u=n.spatialReference,s=a.spatialReference,h=a.x,g=a.y;return u&&s&&!u.equals(s)&&c.canProject(u,s)&&(f=u.isWebMercator?e.lngLatToXY(h,g):e.xyToLngLat(h,g,!0),h=f[0],g=f[1]),h=(h-n.xmin)*(t/n.getWidth()),g=(n.ymax-g)*(r/n.getHeight()),o||(h=Math.round(h),g=Math.round(g)),new i(h,g)}function s(t,i,c,u){var s=t.xmin,h=t.ymax,g=i/t.getWidth(),x=c/t.getHeight(),p=n.forEach,l=Math.round;if(u instanceof e)return new e(l((u.x-s)*g),l((h-u.y)*x));if(u instanceof o){var m=new o,y=m.points;return p(u.points,function(n,t){y[t]=[l((n[0]-s)*g),l((h-n[1])*x)]}),m}if(u instanceof f)return new f(l((u.xmin-s)*g),l((h-u.ymin)*x),l((u.xmax-s)*g),l((h-u.ymax)*g));if(u instanceof r){var M,d=new r,v=d.paths;return p(u.paths,function(n,t){M=v[t]=[],p(n,function(n,t){M[t]=[l((n[0]-s)*g),l((h-n[1])*x)]})}),d}if(u instanceof a){var w,P=new a,L=P.rings;return p(u.rings,function(n,t){w=L[t]=[],p(n,function(n,t){w[t]=[l((n[0]-s)*g),l((h-n[1])*x)]})}),P}}function h(n,t,i,a,o,f){var u,s,h=a instanceof r,g=n.spatialReference,x=a.spatialReference;return g&&x&&!g.equals(x)&&c.canProject(g,x)&&(g.isWebMercator?u=e.lngLatToXY:(u=e.xyToLngLat,s=!0)),p(n.xmin,n.ymax,t/n.getWidth(),i/n.getHeight(),o,f,h?a.paths:a.rings,u,s)}function g(n,t,i,r){return new e(n.xmin+r.x/(t/n.getWidth()),n.ymax-r.y/(i/n.getHeight()),n.spatialReference)}function x(t,i,c,u){var s=t.xmin,h=t.ymax,g=t.spatialReference,x=i/t.getWidth(),p=c/t.getHeight(),l=n.forEach;if(u instanceof e)return new e(s+u.x/x,h-u.y/p,g);if(u instanceof o){var m=new o(g),y=m.points;return l(u.points,function(n,t){y[t]=[s+n[0]/x,h-n[1]/p]}),m}if(u instanceof f)return new f(s+u.xmin/x,h-u.ymin/p,s+u.xmax/x,h-u.ymax/p,g);if(u instanceof r){var M,d=new r(g),v=d.paths;return l(u.paths,function(n,t){M=v[t]=[],l(n,function(n,t){M[t]=[s+n[0]/x,h-n[1]/p]})}),d}if(u instanceof a){var w,P=new a(g),L=P.rings;return l(u.rings,function(n,t){w=L[t]=[],l(n,function(n,t){w[t]=[s+n[0]/x,h-n[1]/p]})}),P}}var p=function(){return t("ie")<9?function(n,t,e,i,r,a,o,f,c){var u,s,h,g,x,p,l,m,y,M=[],d=Math.round,v=o.length;for(u=0;v>u;u++)if(s=o[u],x=f?f(s[0][0],s[0][1],c):s[0],(g=s.length)>1)for(p=d((x[0]-n)*e+r),l=d((t-x[1])*i+a),x=f?f(s[1][0],s[1][1],c):s[1],m=d((x[0]-n)*e+r),y=d((t-x[1])*i+a),M.push("M",p+","+l,"L",m+","+y),h=2;g>h;h++)x=f?f(s[h][0],s[h][1],c):s[h],p=d((x[0]-n)*e+r),l=d((t-x[1])*i+a),M.push(p+","+l);else p=d((x[0]-n)*e+r),l=d((t-x[1])*i+a),M.push("M",p+","+l);return M}:function(n,t,e,i,r,a,o,f,c){var u,s,h,g,x,p,l=[],m=Math.round;for(u=0,h=o?o.length:0;h>u;u++)for(x=o[u],l.push("M"),s=0,g=x?x.length:0;g>s;s++)p=f?f(x[s][0],x[s][1],c):x[s],l.push(m((p[0]-n)*e+r)+","+m((t-p[1])*i+a));return l}}(),l={toScreenPoint:u,toScreenGeometry:s,_toScreenPath:h,toMapPoint:g,toMapGeometry:x};return l});