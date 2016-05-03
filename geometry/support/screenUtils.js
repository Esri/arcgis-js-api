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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/sniff","../Point","../ScreenPoint","../Polyline","../Polygon","../Multipoint","../Extent"],function(n,t,e,i,r,a,o,f){function u(n,t,r,a,o){var f,u=n.spatialReference,c=a.spatialReference,s=a.x,h=a.y;return u&&c&&!u.equals(c)&&u._canProject(c)&&(f=u.isWebMercator?e.lngLatToXY(s,h):e.xyToLngLat(s,h,!0),s=f[0],h=f[1]),s=(s-n.xmin)*(t/n.getWidth()),h=(n.ymax-h)*(r/n.getHeight()),o||(s=Math.round(s),h=Math.round(h)),new i(s,h)}function c(t,i,u,c){var s=t.xmin,h=t.ymax,g=i/t.getWidth(),x=u/t.getHeight(),p=n.forEach,m=Math.round;if(c instanceof e)return new e(m((c.x-s)*g),m((h-c.y)*x));if(c instanceof o){var y=new o,l=y.points;return p(c.points,function(n,t){l[t]=[m((n[0]-s)*g),m((h-n[1])*x)]}),y}if(c instanceof f)return new f(m((c.xmin-s)*g),m((h-c.ymin)*x),m((c.xmax-s)*g),m((h-c.ymax)*g));if(c instanceof r){var d,v=new r,M=v.paths;return p(c.paths,function(n,t){d=M[t]=[],p(n,function(n,t){d[t]=[m((n[0]-s)*g),m((h-n[1])*x)]})}),v}if(c instanceof a){var w,P=new a,L=P.rings;return p(c.rings,function(n,t){w=L[t]=[],p(n,function(n,t){w[t]=[m((n[0]-s)*g),m((h-n[1])*x)]})}),P}}function s(n,t,i,a,o,f){var u,c,s=a instanceof r,h=n.spatialReference,g=a.spatialReference;return h&&g&&!h.equals(g)&&h._canProject(g)&&(h.isWebMercator?u=e.lngLatToXY:(u=e.xyToLngLat,c=!0)),x(n.xmin,n.ymax,t/n.getWidth(),i/n.getHeight(),o,f,s?a.paths:a.rings,u,c)}function h(n,t,i,r){return new e(n.xmin+r.x/(t/n.getWidth()),n.ymax-r.y/(i/n.getHeight()),n.spatialReference)}function g(t,i,u,c){var s=t.xmin,h=t.ymax,g=t.spatialReference,x=i/t.getWidth(),p=u/t.getHeight(),m=n.forEach;if(c instanceof e)return new e(s+c.x/x,h-c.y/p,g);if(c instanceof o){var y=new o(g),l=y.points;return m(c.points,function(n,t){l[t]=[s+n[0]/x,h-n[1]/p]}),y}if(c instanceof f)return new f(s+c.xmin/x,h-c.ymin/p,s+c.xmax/x,h-c.ymax/p,g);if(c instanceof r){var d,v=new r(g),M=v.paths;return m(c.paths,function(n,t){d=M[t]=[],m(n,function(n,t){d[t]=[s+n[0]/x,h-n[1]/p]})}),v}if(c instanceof a){var w,P=new a(g),L=P.rings;return m(c.rings,function(n,t){w=L[t]=[],m(n,function(n,t){w[t]=[s+n[0]/x,h-n[1]/p]})}),P}}var x=function(){return t("ie")<9?function(n,t,e,i,r,a,o,f,u){var c,s,h,g,x,p,m,y,l,d=[],v=Math.round,M=o.length;for(c=0;M>c;c++)if(s=o[c],x=f?f(s[0][0],s[0][1],u):s[0],(g=s.length)>1)for(p=v((x[0]-n)*e+r),m=v((t-x[1])*i+a),x=f?f(s[1][0],s[1][1],u):s[1],y=v((x[0]-n)*e+r),l=v((t-x[1])*i+a),d.push("M",p+","+m,"L",y+","+l),h=2;g>h;h++)x=f?f(s[h][0],s[h][1],u):s[h],p=v((x[0]-n)*e+r),m=v((t-x[1])*i+a),d.push(p+","+m);else p=v((x[0]-n)*e+r),m=v((t-x[1])*i+a),d.push("M",p+","+m);return d}:function(n,t,e,i,r,a,o,f,u){var c,s,h,g,x,p,m=[],y=Math.round;for(c=0,h=o?o.length:0;h>c;c++)for(x=o[c],m.push("M"),s=0,g=x?x.length:0;g>s;s++)p=f?f(x[s][0],x[s][1],u):x[s],m.push(y((p[0]-n)*e+r)+","+y((t-p[1])*i+a));return m}}(),p={toScreenPoint:u,toScreenGeometry:c,_toScreenPath:s,toMapPoint:h,toMapGeometry:g};return p});