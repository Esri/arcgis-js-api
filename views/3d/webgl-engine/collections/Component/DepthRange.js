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

define(["require","exports","../../../../../core/PooledArray","../../../../../core/libs/gl-matrix-2/mat3","../../../../../core/libs/gl-matrix-2/mat3f64","../../../../../core/libs/gl-matrix-2/quat","../../../../../core/libs/gl-matrix-2/quatf64","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../support/orientedBoundingBox","../../../support/geometryUtils/plane","../../lib/depthRange"],(function(e,r,a,t,n,c,i,o,f,u,l,v){Object.defineProperty(r,"__esModule",{value:!0}),r.computeDepthRange=function(e,r){for(var a=v.empty(),n=e.eye,i=e.viewForward,f=e.frustum.planes,l=0;l<r.length;l++){var g=r[l].obb,w=o.vec3.dot(o.vec3.sub(P,g.center,n),i),y=u.projectedRadius(g,i);if(!v.within(a,w-y)||!v.within(a,w+y)){var j=k(g,f);if(-1!==j)if(0!==j){var q=s.pushNew();q.near=w-y,q.far=w+y,q.mask=j,q.object=r[l]}else h.far=w+y,h.near=w-y,v.union(a,h)}}var _=function(e){var r=s.data[e];if(v.within(a,r.near)&&v.within(a,r.far))return"continue";h.far=r.far,h.near=1/0,0===function(e,r,a,n){c.quat.conjugate(M,e.quaternion),o.vec3.sub(P,r,e.center),o.vec3.transformQuat(P,P,M);var i=P[0]<-e.halfSize[0]?-1:P[0]>e.halfSize[0]?1:0,f=P[1]<-e.halfSize[1]?-1:P[1]>e.halfSize[1]?1:0,u=P[2]<-e.halfSize[2]?-1:P[2]>e.halfSize[2]?1:0,l=8*(i+3*f+9*u+13),v=z[l];if(0===v)return v;t.mat3.fromQuat(D,e.quaternion),t.mat3.scale(D,D,e.halfSize);var s=function(r,a){var t=z[l+a+1];return o.vec3.set(r,((1&t)<<1)-1,(2&t)-1,((4&t)>>1)-1),o.vec3.transformMat3(r,r,D),o.vec3.add(r,e.center,r)};if(a.length=0,x(a,s(R,0)),x(a,s(A,1)),x(a,s(P,2)),x(a,s(B,3)),n(a),1===v)return v;if(a.length=0,x(a,R),x(a,B),x(a,s(P,4)),x(a,s(Q,5)),n(a),2===v)return v;return a.length=0,x(a,R),x(a,Q),x(a,s(P,6)),x(a,A),n(a),v}(r.object.obb,n,p,(function(e){for(var a=m,t=0;t<S&&e.length>0;t++)if(0!=(r.mask&1<<t)){b(f[t],e,a);var c=e;e=a,a=c}for(var u=0;u<e.length;u+=3){o.vec3.set(d,e.data[u+0],e.data[u+1],e.data[u+2]);var l=o.vec3.dot(o.vec3.sub(d,d,n),i);h.near=Math.min(h.near,l)}}))&&(h.near=0),v.union(a,h)};for(l=0;l<s.length;l++)_(l);return s.length=0,a};var s=new a({allocator:function(e){return e||{near:1/0,far:-1/0,mask:0,object:null}},deallocator:function(e){return e.object=null,e}}),h=v.empty(),d=f.vec3f64.create(),g=f.vec3f64.create(),p=new a({deallocator:null}),m=new a({deallocator:null});function b(e,r,a){a.length=0;var t=r.length-3;w(d,r,t);var n=l.signedDistance(e,d);n<=0&&(a.push(d[0]),a.push(d[1]),a.push(d[2]));for(var c=0,i=n;c<t;c+=3){w(g,r,c);var f=l.signedDistance(e,g);if(i*f<0){var u=f/(f-i);o.vec3.lerp(d,g,d,u),x(a,d)}f<=0&&x(a,g),i=f,o.vec3.copy(d,g)}if(i*n<0){w(g,r,t);u=n/(n-i);o.vec3.lerp(d,g,d,u),x(a,d)}}function w(e,r,a){return o.vec3.set(e,r.data[a+0],r.data[a+1],r.data[a+2])}function x(e,r){e.push(r[0]),e.push(r[1]),e.push(r[2])}var y,j,q,z=(y=new Int8Array(216),j=0,(q=function(e){for(var r=0;r<e.length;r++)y[j+r]=e[r];j+=8})([3,0,6,2,3,1,5,4]),q([2,0,2,3,1,5,4,0]),q([3,1,0,2,3,7,5,4]),q([2,0,1,3,2,6,4,0]),q([1,0,1,3,2,0,0,0]),q([2,1,5,7,3,2,0,0]),q([3,2,0,1,3,7,6,4]),q([2,2,0,1,3,7,6,0]),q([3,3,0,1,5,7,6,2]),q([2,0,1,5,4,6,2,0]),q([1,0,1,5,4,0,0,0]),q([2,1,3,7,5,4,0,0]),q([1,0,2,6,4,0,0,0]),q([0,0,0,0,0,0,0,0]),q([1,1,3,7,5,0,0,0]),q([2,2,3,7,6,4,0,0]),q([1,2,3,7,6,0,0,0]),q([2,3,1,5,7,6,2,0]),q([3,4,0,1,5,7,6,2]),q([2,5,7,6,4,0,1,0]),q([3,5,0,1,3,7,6,4]),q([2,4,5,7,6,2,0,0]),q([1,4,5,7,6,0,0,0]),q([2,5,1,3,7,6,4,0]),q([3,6,0,2,3,7,5,4]),q([2,6,2,3,7,5,4,0]),q([3,7,6,2,3,1,5,4]),y),S=4;function k(e,r){for(var a=0,t=0;t<S;t++){var n=u.intersectPlane(e,r[t]);if(n>0)return-1;0===n&&(a|=1<<t)}return a}var D=n.mat3f64.create(),M=i.quatf64.create(),P=f.vec3f64.create(),R=f.vec3f64.create(),A=f.vec3f64.create(),B=f.vec3f64.create(),Q=f.vec3f64.create()}));