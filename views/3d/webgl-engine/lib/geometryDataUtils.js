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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../support/geometryUtils/triangle"],(function(e,r,t,c,a){Object.defineProperty(r,"__esModule",{value:!0});var n=1,v=null,d=new Uint32Array([0]);r.generateDefaultIndexArray=function(e){if(1===e)return d;if(e>n||null==v){for(;e>n;)n*=2;v=new Uint32Array(n);for(var r=0;r<n;r++)v[r]=r}return new Uint32Array(v.buffer,0,e)},r.computeAttachmentOriginTriangles=function(e,r,c){if(!e)return!1;var n=e.strideIdx,v=e.offsetIdx,d=e.data;t.vec3.set(c,0,0,0),t.vec3.set(o,0,0,0);for(var i=0,u=0,g=0;g<r.length-2;g+=3){var x=r[g+0]*n+v,m=r[g+1]*n+v,I=r[g+2]*n+v;t.vec3.set(s,d[x+0],d[x+1],d[x+2]),t.vec3.set(f,d[m+0],d[m+1],d[m+2]),t.vec3.set(l,d[I+0],d[I+1],d[I+2]);var h=a.areaPoints3d(s,f,l);h?(t.vec3.add(s,s,f),t.vec3.add(s,s,l),t.vec3.scale(s,s,1/3*h),t.vec3.add(c,c,s),i+=h):(t.vec3.add(o,o,s),t.vec3.add(o,o,f),t.vec3.add(o,o,l),u+=3)}return(0!==u||0!==i)&&(0!==i?(t.vec3.scale(c,c,1/i),!0):0!==u&&(t.vec3.scale(c,o,1/u),!0))},r.computeAttachmentOriginPoints=function(e,r,c){if(!e||!r)return!1;var a=e.strideIdx,n=e.offsetIdx,v=e.data;t.vec3.set(c,0,0,0);for(var d=-1,i=0,s=0;s<r.length;s++){var f=r[s]*a+n;d!==f&&(c[0]+=v[f+0],c[1]+=v[f+1],c[2]+=v[f+2],i++),d=f}return i>1&&t.vec3.scale(c,c,1/i),i>0},r.computeAttachmentOriginLines=function(e,r,c,a){if(!e)return!1;var n=e.strideIdx,v=e.offsetIdx,d=e.data;t.vec3.set(a,0,0,0),t.vec3.set(o,0,0,0);for(var i=0,l=0,u=r?r.length-1:d.length/n-1,g=u+(c?2:0),x=0;x<g;x+=2){var m=x<u?x:u,I=x<u?x+1:0,h=(r?r[m]:m)*n+v,p=(r?r[I]:I)*n+v;s[0]=d[h+0],s[1]=d[h+1],s[2]=d[h+2],f[0]=d[p+0],f[1]=d[p+1],f[2]=d[p+2],t.vec3.scale(s,t.vec3.add(s,s,f),.5);var A=t.vec3.dist(s,f);A>0?(t.vec3.add(a,a,t.vec3.scale(s,s,A)),i+=A):(t.vec3.add(o,o,s),l++)}return 0!==i?(t.vec3.scale(a,a,1/i),!0):0!==l&&(t.vec3.scale(a,o,1/l),!0)};var i=0;r.getNewId=function(){return i++};var s=c.vec3f64.create(),f=c.vec3f64.create(),l=c.vec3f64.create(),o=c.vec3f64.create()}));