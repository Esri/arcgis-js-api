// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../support/geometryUtils/triangle"],function(e,r,t,c,a){function n(e){if(1===e)return o;if(e>f||null==l){for(;e>f;)f*=2;l=new Uint32Array(f);for(var r=0;r<f;r++)l[r]=r}return new Uint32Array(l.buffer,0,e)}function v(e,r,c){if(!e)return!1;var n=e.strideIdx,v=e.offsetIdx,d=e.data;t.vec3.set(c,0,0,0),t.vec3.set(I,0,0,0);for(var i=0,s=0,f=0;f<r.length-2;f+=3){var l=r[f+0]*n+v,o=r[f+1]*n+v,u=r[f+2]*n+v;t.vec3.set(g,d[l+0],d[l+1],d[l+2]),t.vec3.set(x,d[o+0],d[o+1],d[o+2]),t.vec3.set(m,d[u+0],d[u+1],d[u+2]);var h=a.areaPoints3d(g,x,m);h?(t.vec3.add(g,g,x),t.vec3.add(g,g,m),t.vec3.scale(g,g,1/3*h),t.vec3.add(c,c,g),i+=h):(t.vec3.add(I,I,g),t.vec3.add(I,I,x),t.vec3.add(I,I,m),s+=3)}return(0!==s||0!==i)&&(0!==i?(t.vec3.scale(c,c,1/i),!0):0!==s&&(t.vec3.scale(c,I,1/s),!0))}function d(e,r,c){if(!e||!r)return!1;var a=e.strideIdx,n=e.offsetIdx,v=e.data;t.vec3.set(c,0,0,0);for(var d=-1,i=0,s=0;s<r.length;s++){var f=r[s]*a+n;d!==f&&(c[0]+=v[f+0],c[1]+=v[f+1],c[2]+=v[f+2],i++),d=f}return i>1&&t.vec3.scale(c,c,1/i),i>0}function i(e,r,c){if(!e)return!1;var a=e.strideIdx,n=e.offsetIdx,v=e.data;t.vec3.set(c,0,0,0),t.vec3.set(I,0,0,0);for(var d=0,i=0,s=r?r.length-1:v.length/a-1,f=0;f<s;f+=2){var l=(r?r[f+0]:f+0)*a+n,o=(r?r[f+1]:f+1)*a+n;g[0]=v[l+0],g[1]=v[l+1],g[2]=v[l+2],x[0]=v[o+0],x[1]=v[o+1],x[2]=v[o+2],t.vec3.scale(g,t.vec3.add(g,g,x),.5);var u=t.vec3.dist(g,x);u>0?(t.vec3.add(c,c,t.vec3.scale(g,g,u)),d+=u):(t.vec3.add(I,I,g),i++)}return 0!==d?(t.vec3.scale(c,c,1/d),!0):0!==i&&(t.vec3.scale(c,I,1/i),!0)}function s(){return u++}Object.defineProperty(r,"__esModule",{value:!0});var f=1,l=null,o=new Uint32Array([0]);r.generateDefaultIndexArray=n,r.computeAttachmentOriginTriangles=v,r.computeAttachmentOriginPoints=d,r.computeAttachmentOriginLines=i;var u=0;r.getNewId=s;var g=c.vec3f64.create(),x=c.vec3f64.create(),m=c.vec3f64.create(),I=c.vec3f64.create()});