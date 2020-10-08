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

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../support/geometryUtils/triangle"],(function(e,t,r,c,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNewId=t.computeAttachmentOriginLines=t.computeAttachmentOriginPoints=t.computeAttachmentOriginTriangles=t.generateDefaultIndexArray=void 0;var n=1,v=null,i=new Uint32Array([0]);t.generateDefaultIndexArray=function(e){if(1===e)return i;if(e>n||null==v){for(;e>n;)n*=2;v=new Uint32Array(n);for(var t=0;t<n;t++)v[t]=t}return new Uint32Array(v.buffer,0,e)},t.computeAttachmentOriginTriangles=function(e,t,c){if(!e)return!1;var n=e.strideIdx,v=e.offsetIdx,i=e.data;r.vec3.set(c,0,0,0),r.vec3.set(u,0,0,0);for(var d=0,l=0,g=0;g<t.length-2;g+=3){var m=t[g+0]*n+v,x=t[g+1]*n+v,A=t[g+2]*n+v;r.vec3.set(s,i[m+0],i[m+1],i[m+2]),r.vec3.set(f,i[x+0],i[x+1],i[x+2]),r.vec3.set(o,i[A+0],i[A+1],i[A+2]);var h=a.areaPoints3d(s,f,o);h?(r.vec3.add(s,s,f),r.vec3.add(s,s,o),r.vec3.scale(s,s,1/3*h),r.vec3.add(c,c,s),d+=h):(r.vec3.add(u,u,s),r.vec3.add(u,u,f),r.vec3.add(u,u,o),l+=3)}return(0!==l||0!==d)&&(0!==d?(r.vec3.scale(c,c,1/d),!0):0!==l&&(r.vec3.scale(c,u,1/l),!0))},t.computeAttachmentOriginPoints=function(e,t,c){if(!e||!t)return!1;var a=e.strideIdx,n=e.offsetIdx,v=e.data;r.vec3.set(c,0,0,0);for(var i=-1,d=0,s=0;s<t.length;s++){var f=t[s]*a+n;i!==f&&(c[0]+=v[f+0],c[1]+=v[f+1],c[2]+=v[f+2],d++),i=f}return d>1&&r.vec3.scale(c,c,1/d),d>0},t.computeAttachmentOriginLines=function(e,t,c,a){if(!e)return!1;var n=e.strideIdx,v=e.offsetIdx,i=e.data;r.vec3.set(a,0,0,0),r.vec3.set(u,0,0,0);for(var d=0,o=0,l=t?t.length-1:i.length/n-1,g=l+(c?2:0),m=0;m<g;m+=2){var x=m<l?m:l,A=m<l?m+1:0,h=(t?t[x]:x)*n+v,p=(t?t[A]:A)*n+v;s[0]=i[h+0],s[1]=i[h+1],s[2]=i[h+2],f[0]=i[p+0],f[1]=i[p+1],f[2]=i[p+2],r.vec3.scale(s,r.vec3.add(s,s,f),.5);var I=r.vec3.dist(s,f);I>0?(r.vec3.add(a,a,r.vec3.scale(s,s,I)),d+=I):(r.vec3.add(u,u,s),o++)}return 0!==d?(r.vec3.scale(a,a,1/d),!0):0!==o&&(r.vec3.scale(a,u,1/o),!0)};var d=0;t.getNewId=function(){return d++};var s=c.vec3f64.create(),f=c.vec3f64.create(),o=c.vec3f64.create(),u=c.vec3f64.create()}));