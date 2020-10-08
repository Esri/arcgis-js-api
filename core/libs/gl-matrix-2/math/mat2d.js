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

define(["require","exports","./common"],(function(t,a,n){"use strict";function r(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],s=a[5],c=n[0],M=n[1],h=n[2],l=n[3],f=n[4],b=n[5];return t[0]=r*c+e*M,t[1]=u*c+o*M,t[2]=r*h+e*l,t[3]=u*h+o*l,t[4]=r*f+e*b+i,t[5]=u*f+o*b+s,t}function u(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t}Object.defineProperty(a,"__esModule",{value:!0}),a.sub=a.mul=a.equals=a.exactEquals=a.multiplyScalarAndAdd=a.multiplyScalar=a.subtract=a.add=a.frob=a.str=a.fromTranslation=a.fromScaling=a.fromRotation=a.translate=a.scale=a.rotate=a.multiply=a.determinant=a.invert=a.set=a.identity=a.copy=void 0,a.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t},a.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},a.set=function(t,a,n,r,u,e,o){return t[0]=a,t[1]=n,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t},a.invert=function(t,a){var n=a[0],r=a[1],u=a[2],e=a[3],o=a[4],i=a[5],s=n*e-r*u;return s?(s=1/s,t[0]=e*s,t[1]=-r*s,t[2]=-u*s,t[3]=n*s,t[4]=(u*i-e*o)*s,t[5]=(r*o-n*i)*s,t):null},a.determinant=function(t){return t[0]*t[3]-t[1]*t[2]},a.multiply=r,a.rotate=function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],s=a[5],c=Math.sin(n),M=Math.cos(n);return t[0]=r*M+e*c,t[1]=u*M+o*c,t[2]=r*-c+e*M,t[3]=u*-c+o*M,t[4]=i,t[5]=s,t},a.scale=function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],s=a[5],c=n[0],M=n[1];return t[0]=r*c,t[1]=u*c,t[2]=e*M,t[3]=o*M,t[4]=i,t[5]=s,t},a.translate=function(t,a,n){var r=a[0],u=a[1],e=a[2],o=a[3],i=a[4],s=a[5],c=n[0],M=n[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=r*c+e*M+i,t[5]=u*c+o*M+s,t},a.fromRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=-n,t[3]=r,t[4]=0,t[5]=0,t},a.fromScaling=function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=a[1],t[4]=0,t[5]=0,t},a.fromTranslation=function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=a[0],t[5]=a[1],t},a.str=function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},a.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)},a.add=function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t},a.subtract=u,a.multiplyScalar=function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t},a.multiplyScalarAndAdd=function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t[4]=a[4]+n[4]*r,t[5]=a[5]+n[5]*r,t},a.exactEquals=function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]},a.equals=function(t,a){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],s=t[5],c=a[0],M=a[1],h=a[2],l=a[3],f=a[4],b=a[5];return Math.abs(r-c)<=n.EPSILON*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(u-M)<=n.EPSILON*Math.max(1,Math.abs(u),Math.abs(M))&&Math.abs(e-h)<=n.EPSILON*Math.max(1,Math.abs(e),Math.abs(h))&&Math.abs(o-l)<=n.EPSILON*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(i-f)<=n.EPSILON*Math.max(1,Math.abs(i),Math.abs(f))&&Math.abs(s-b)<=n.EPSILON*Math.max(1,Math.abs(s),Math.abs(b))},a.mul=r,a.sub=u}));