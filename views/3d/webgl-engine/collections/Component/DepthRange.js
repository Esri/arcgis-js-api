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

define(["require","exports","../../../../../core/PooledArray","../../../../../core/libs/gl-matrix-2/mat3","../../../../../core/libs/gl-matrix-2/mat3f64","../../../../../core/libs/gl-matrix-2/quat","../../../../../core/libs/gl-matrix-2/quatf64","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../support/orientedBoundingBox","../../../support/geometryUtils/plane","../../lib/depthRange"],(function(e,r,t,a,n,c,i,o,u,f,l,v){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.computeDepthRange=void 0,r.computeDepthRange=function(e,r){for(var t=v.empty(),n=e.eye,i=e.viewForward,u=e.frustum.planes,l=0;l<r.length;l++){var p=r[l].obb,w=o.vec3.dot(o.vec3.sub(M,p.center,n),i),y=f.projectedRadius(p,i);if(!v.within(t,w-y)||!v.within(t,w+y)){var j=D(p,u);if(-1!==j)if(0!==j){var q=s.pushNew();q.near=w-y,q.far=w+y,q.mask=j,q.object=r[l]}else h.far=w+y,h.near=w-y,v.union(t,h)}}var _=function(e){var r=s.data[e];if(v.within(t,r.near)&&v.within(t,r.far))return"continue";h.far=r.far,h.near=1/0,0===function(e,r,t,n){c.quat.conjugate(k,e.quaternion),o.vec3.sub(M,r,e.center),o.vec3.transformQuat(M,M,k);var i=M[0]<-e.halfSize[0]?-1:M[0]>e.halfSize[0]?1:0,u=M[1]<-e.halfSize[1]?-1:M[1]>e.halfSize[1]?1:0,f=M[2]<-e.halfSize[2]?-1:M[2]>e.halfSize[2]?1:0,l=8*(i+3*u+9*f+13),v=z[l];if(0===v)return v;a.mat3.fromQuat(R,e.quaternion),a.mat3.scale(R,R,e.halfSize);var s=function(r,t){var a=z[l+t+1];return o.vec3.set(r,((1&a)<<1)-1,(2&a)-1,((4&a)>>1)-1),o.vec3.transformMat3(r,r,R),o.vec3.add(r,e.center,r)};if(t.length=0,x(t,s(P,0)),x(t,s(A,1)),x(t,s(M,2)),x(t,s(B,3)),n(t),1===v)return v;if(t.length=0,x(t,P),x(t,B),x(t,s(M,4)),x(t,s(Q,5)),n(t),2===v)return v;return t.length=0,x(t,P),x(t,Q),x(t,s(M,6)),x(t,A),n(t),v}(r.object.obb,n,g,(function(e){for(var t=m,a=0;a<S&&e.length>0;a++)if(0!=(r.mask&1<<a)){b(u[a],e,t);var c=e;e=t,t=c}for(var f=0;f<e.length;f+=3){o.vec3.set(d,e.data[f+0],e.data[f+1],e.data[f+2]);var l=o.vec3.dot(o.vec3.sub(d,d,n),i);h.near=Math.min(h.near,l)}}))&&(h.near=0),v.union(t,h)};for(l=0;l<s.length;l++)_(l);return s.length=0,t};var s=new t({allocator:function(e){return e||{near:1/0,far:-1/0,mask:0,object:null}},deallocator:function(e){return e.object=null,e}}),h=v.empty(),d=u.vec3f64.create(),p=u.vec3f64.create(),g=new t({deallocator:null}),m=new t({deallocator:null});function b(e,r,t){t.length=0;var a=r.length-3;w(d,r,a);var n=l.signedDistance(e,d);n<=0&&(t.push(d[0]),t.push(d[1]),t.push(d[2]));for(var c=0,i=n;c<a;c+=3){w(p,r,c);var u=l.signedDistance(e,p);if(i*u<0){var f=u/(u-i);o.vec3.lerp(d,p,d,f),x(t,d)}u<=0&&x(t,p),i=u,o.vec3.copy(d,p)}if(i*n<0){w(p,r,a);f=n/(n-i);o.vec3.lerp(d,p,d,f),x(t,d)}}function w(e,r,t){return o.vec3.set(e,r.data[t+0],r.data[t+1],r.data[t+2])}function x(e,r){e.push(r[0]),e.push(r[1]),e.push(r[2])}var y,j,q,z=(y=new Int8Array(216),j=0,(q=function(e){for(var r=0;r<e.length;r++)y[j+r]=e[r];j+=8})([3,0,6,2,3,1,5,4]),q([2,0,2,3,1,5,4,0]),q([3,1,0,2,3,7,5,4]),q([2,0,1,3,2,6,4,0]),q([1,0,1,3,2,0,0,0]),q([2,1,5,7,3,2,0,0]),q([3,2,0,1,3,7,6,4]),q([2,2,0,1,3,7,6,0]),q([3,3,0,1,5,7,6,2]),q([2,0,1,5,4,6,2,0]),q([1,0,1,5,4,0,0,0]),q([2,1,3,7,5,4,0,0]),q([1,0,2,6,4,0,0,0]),q([0,0,0,0,0,0,0,0]),q([1,1,3,7,5,0,0,0]),q([2,2,3,7,6,4,0,0]),q([1,2,3,7,6,0,0,0]),q([2,3,1,5,7,6,2,0]),q([3,4,0,1,5,7,6,2]),q([2,5,7,6,4,0,1,0]),q([3,5,0,1,3,7,6,4]),q([2,4,5,7,6,2,0,0]),q([1,4,5,7,6,0,0,0]),q([2,5,1,3,7,6,4,0]),q([3,6,0,2,3,7,5,4]),q([2,6,2,3,7,5,4,0]),q([3,7,6,2,3,1,5,4]),y),S=4;function D(e,r){for(var t=0,a=0;a<S;a++){var n=f.intersectPlane(e,r[a]);if(n>0)return-1;0===n&&(t|=1<<a)}return t}var R=n.mat3f64.create(),k=i.quatf64.create(),M=u.vec3f64.create(),P=u.vec3f64.create(),A=u.vec3f64.create(),B=u.vec3f64.create(),Q=u.vec3f64.create()}));