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

define(["require","exports","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec2","../../../../core/libs/gl-matrix-2/vec2f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/SpatialReference","../../support/projectionUtils","../../support/buffer/BufferView","../../support/geometryUtils/plane"],(function(e,c,t,r,a,o,v,f,s,i,n){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.createMapSpaceUVCoords=c.createMapSpaceUVCoordsDraped=void 0,c.createMapSpaceUVCoordsDraped=function(e,c,t,a){if(void 0===a&&(a=1),t.isGeographic){var o=new Float64Array(c.typedBuffer.length);s.bufferToBuffer(c.typedBuffer,t,0,o,f.WebMercator,0,c.count),c=i.BufferViewVec3f64.fromTypedArray(o),t=f.WebMercator}r.vec2.set(V,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY);for(var v=0;v<c.count;v++)c.getVec(v,l),V[0]=Math.min(V[0],l[0]),V[1]=Math.min(V[1],l[1]);var n=V[0]%a,u=V[1]%a;for(b[0]=V[0]-n,b[1]=V[1]-u,v=0;v<c.count;v++)c.getVec(v,l),e.setValues(v,(l[0]-b[0])/a,(l[1]-b[1])/a,b[0]/a,b[1]/a)},c.createMapSpaceUVCoords=function(e,c,t,a,v,f,s){var i,_;void 0===s&&(s=1),o.vec3.set(m,1,0,0),o.vec3.set(I,0,1,0),o.vec3.set(p,0,0,1),function(e,c){o.vec3.set(x,0,0,0);for(var t=0;t<c.count-1;t++)c.getVec(t,l),o.vec3.add(x,x,l);o.vec3.scale(e,x,1/(c.count-1))}(u,c),i=c,_=d,n.fromManyPointsSampleAt(i,_,0,Math.floor(i.count/3),Math.floor(i.count*(2/3)))&&function(e,c,t,r,a,v){a.basisMatrixAtPosition(v,h),o.vec3.set(y,h[0],h[1],h[2]),o.vec3.set(A,h[4],h[5],h[6]),o.vec3.set(S,h[8],h[9],h[10]);var f=n.normal(e);o.vec3.dot(f,S)<0&&o.vec3.scale(f,f,-1);o.vec3.copy(r,f);var s=o.vec3.dot(f,A),i=o.vec3.dot(f,y);Math.abs(s)<Math.abs(i)?(o.vec3.scaleAndAdd(c,y,f,-i),o.vec3.normalize(c,c),o.vec3.cross(t,c,f),o.vec3.normalize(t,t),o.vec3.scale(t,t,-1)):(o.vec3.scaleAndAdd(t,A,f,-s),o.vec3.normalize(t,t),o.vec3.cross(c,t,f),o.vec3.normalize(c,c))}(d,m,I,p,t,u),r.vec2.set(V,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),r.vec2.set(N,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY);for(var F=0;F<c.count;F++){c.getVec(F,l);var P=o.vec3.dot(m,l),U=o.vec3.dot(I,l);V[0]=Math.min(V[0],P),V[1]=Math.min(V[1],U),N[0]=Math.max(N[0],P),N[1]=Math.max(N[1],U)}var Y=o.vec3.dot(p,u);E(M,V[0],V[1],Y,m,I,p),E(g,N[0],V[1],Y,m,I,p),E(T,V[0],N[1],Y,m,I,p);var B=V[0]%s,O=V[1]%s;for(b[0]=V[0]-B,b[1]=V[1]-O,F=0;F<c.count;F++)c.getVec(F,l),e.setValues(F,(o.vec3.dot(m,l)-b[0])/s,(o.vec3.dot(I,l)-b[1])/s,b[0]/s,b[1]/s),a&&v&&f&&(a.setVec(F,M),v.setVec(F,g),f.setVec(F,T))};var u=v.vec3f64.create(),l=v.vec3f64.create(),d=n.create(),m=v.vec3f64.create(),I=v.vec3f64.create(),p=v.vec3f64.create(),V=a.vec2f64.create(),N=a.vec2f64.create(),b=a.vec2f64.create(),M=v.vec3f64.create(),g=v.vec3f64.create(),T=v.vec3f64.create();var h=t.mat4f64.create(),y=v.vec3f64.create(),A=v.vec3f64.create(),S=v.vec3f64.create();var x=v.vec3f64.create();function E(e,c,t,r,a,v,f){o.vec3.set(e,c*a[0]+t*v[0]+r*f[0],c*a[1]+t*v[1]+r*f[1],c*a[2]+t*v[2]+r*f[2])}}));