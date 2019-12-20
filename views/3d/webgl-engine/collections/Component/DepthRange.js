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

define(["require","exports","../../../../../core/PooledArray","../../../../../core/libs/gl-matrix-2/mat3","../../../../../core/libs/gl-matrix-2/mat3f64","../../../../../core/libs/gl-matrix-2/quat","../../../../../core/libs/gl-matrix-2/quatf64","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../support/orientedBoundingBox","../../../support/geometryUtils/plane","../../lib/depthRange"],function(e,r,a,t,n,c,i,o,f,u,l,v){function s(e,r){for(var a=v.empty(),t=e.eye,n=e.viewForward,c=e.frustum.planes,i=0;i<r.length;i++){var f=r[i].obb,l=o.vec3.dot(o.vec3.sub(M,f.center,t),n),s=u.projectedRadius(f,n);if(!v.within(a,l-s)||!v.within(a,l+s)){var d=m(f,c);if(-1!==d)if(0!==d){var g=b.pushNew();g.near=l-s,g.far=l+s,g.mask=d,g.object=r[i]}else w.far=l+s,w.near=l-s,v.union(a,w)}}for(var i=0;i<b.length;i++)!function(e){var r=b.data[e];if(v.within(a,r.near)&&v.within(a,r.far))return"continue";w.far=r.far,w.near=1/0,0===p(r.object.obb,t,j,function(e){for(var a=q,i=0;i<S&&e.length>0;i++)if(0!=(r.mask&1<<i)){h(c[i],e,a);var f=e;e=a,a=f}for(var u=0;u<e.length;u+=3){o.vec3.set(x,e.data[u+0],e.data[u+1],e.data[u+2]);var l=o.vec3.dot(o.vec3.sub(x,x,t),n);w.near=Math.min(w.near,l)}})&&(w.near=0),v.union(a,w)}(i);return b.length=0,a}function h(e,r,a){a.length=0;var t=r.length-3;d(x,r,t);var n=l.signedDistance(e,x);n<=0&&(a.push(x[0]),a.push(x[1]),a.push(x[2]));var c=0,i=n;for(c;c<t;c+=3){d(y,r,c);var f=l.signedDistance(e,y);if(i*f<0){var u=f/(f-i);o.vec3.lerp(x,y,x,u),g(a,x)}f<=0&&g(a,y),i=f,o.vec3.copy(x,y)}if(i*n<0){d(y,r,t);var u=n/(n-i);o.vec3.lerp(x,y,x,u),g(a,x)}}function d(e,r,a){return o.vec3.set(e,r.data[a+0],r.data[a+1],r.data[a+2])}function g(e,r){e.push(r[0]),e.push(r[1]),e.push(r[2])}function p(e,r,a,n){c.quat.conjugate(D,e.quaternion),o.vec3.sub(M,r,e.center),o.vec3.transformQuat(M,M,D);var i=M[0]<-e.halfSize[0]?-1:M[0]>e.halfSize[0]?1:0,f=M[1]<-e.halfSize[1]?-1:M[1]>e.halfSize[1]?1:0,u=M[2]<-e.halfSize[2]?-1:M[2]>e.halfSize[2]?1:0,l=8*(i+3*f+9*u+13),v=z[l];if(0===v)return v;t.mat3.fromQuat(k,e.quaternion),t.mat3.scale(k,k,e.halfSize);var s=function(r,a){var t=z[l+a+1];return o.vec3.set(r,((1&t)<<1)-1,(2&t)-1,((4&t)>>1)-1),o.vec3.transformMat3(r,r,k),o.vec3.add(r,e.center,r)};return a.length=0,g(a,s(P,0)),g(a,s(R,1)),g(a,s(M,2)),g(a,s(A,3)),n(a),1===v?v:(a.length=0,g(a,P),g(a,A),g(a,s(M,4)),g(a,s(B,5)),n(a),2===v?v:(a.length=0,g(a,P),g(a,B),g(a,s(M,6)),g(a,R),n(a),v))}function m(e,r){for(var a=0,t=0;t<S;t++){var n=u.intersectPlane(e,r[t]);if(n>0)return-1;0===n&&(a|=1<<t)}return a}Object.defineProperty(r,"__esModule",{value:!0}),r.computeDepthRange=s;var b=new a({allocator:function(e){return e||{near:1/0,far:-1/0,mask:0,object:null}},deallocator:function(e){return e.object=null,e}}),w=v.empty(),x=f.vec3f64.create(),y=f.vec3f64.create(),j=new a({deallocator:null}),q=new a({deallocator:null}),z=function(){var e=new Int8Array(216),r=0,a=function(a){for(var t=0;t<a.length;t++)e[r+t]=a[t];r+=8};return a([3,0,6,2,3,1,5,4]),a([2,0,2,3,1,5,4,0]),a([3,1,0,2,3,7,5,4]),a([2,0,1,3,2,6,4,0]),a([1,0,1,3,2,0,0,0]),a([2,1,5,7,3,2,0,0]),a([3,2,0,1,3,7,6,4]),a([2,2,0,1,3,7,6,0]),a([3,3,0,1,5,7,6,2]),a([2,0,1,5,4,6,2,0]),a([1,0,1,5,4,0,0,0]),a([2,1,3,7,5,4,0,0]),a([1,0,2,6,4,0,0,0]),a([0,0,0,0,0,0,0,0]),a([1,1,3,7,5,0,0,0]),a([2,2,3,7,6,4,0,0]),a([1,2,3,7,6,0,0,0]),a([2,3,1,5,7,6,2,0]),a([3,4,0,1,5,7,6,2]),a([2,5,7,6,4,0,1,0]),a([3,5,0,1,3,7,6,4]),a([2,4,5,7,6,2,0,0]),a([1,4,5,7,6,0,0,0]),a([2,5,1,3,7,6,4,0]),a([3,6,0,2,3,7,5,4]),a([2,6,2,3,7,5,4,0]),a([3,7,6,2,3,1,5,4]),e}(),S=4,k=n.mat3f64.create(),D=i.quatf64.create(),M=f.vec3f64.create(),P=f.vec3f64.create(),R=f.vec3f64.create(),A=f.vec3f64.create(),B=f.vec3f64.create()});