/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/support/aaBoundingBox","../../materials/internal/MaterialUtil"],(function(t,e,n,i,r){"use strict";const s=40,o=20,a=.8,c=15,f=1e-6;function u(t,e,n){const i=e,r=n;let s=0,o=1/0;for(let a=0;a<3;++a){{const e=t[a];if(i[a]<e){if(r[a]<=f)return!1;const t=(e-i[a])/r[a];s=Math.max(s,t)}else if(r[a]<=-f){const t=(e-i[a])/r[a];o=Math.min(o,t)}if(s>o)return!1}{const e=t[a+3];if(i[a]>e){if(r[a]>=-f)return!1;const t=(e-i[a])/r[a];s=Math.max(s,t)}else if(r[a]>=f){const t=(e-i[a])/r[a];o=Math.min(o,t)}if(s>o)return!1}}return!0}let h=function(t,e,n,i,r){this.aabb=t,this.axis=e,this.d=n,this.midStartIndex=i,this.rightStartIndex=r},l=function(){function t(t,e,n,i){this.globalTriangleVertexIndices=t,this.firstTriangleIndex=e,this.positionAttribute=i,this.bspNodeTree=new Array,this.vertexPositionBuffer=i.data,this.vertexPositionStride=i.stride;const r=n-e,s=r<=T?new Uint16Array(r):new Uint32Array(r);this.indices=s;for(let o=0;o<r;++o)s[o]=o;{const f=p(t,e,n,i.data,i.stride),u=(t,e,n)=>{const i=N(s,f,t,e),r=e-t;if(r<=o){const n=new h(i,void 0,0,t,e);return this.bspNodeTree.push(n),n}const{axis:l,midValue:d}=b(i),m=y(s,f,t,e,l,d),x=(t,e)=>{if(n>c)return;const i=e-t;return i<o||i>=a*r?void 0:u(t,e,n+1)},g=new h(i,l,d,m.next,m.mid);return this.bspNodeTree.push(g),g.leftNode=x(t,m.next),g.rightNode=x(m.mid,e),g};u(0,r,0),this.triangleVertexIndices=I(s,t,e,n)}}var i=t.prototype;return i.intersectRayTriangleRange=function(e,n){{if(e>=n)return;const t=this.triangleVertexIndices,i=this.positionAttribute.data,s=this.positionAttribute.stride,o=this.rayOrigin,a=o[0],c=o[1],f=o[2],u=this.rayDirection,h=u[0],l=u[1],d=u[2];for(let x=e,g=3*e;x<n;++x){const e=t[g]*s,n=i[e],o=i[e+1],u=i[e+2],y=t[g+1]*s,N=i[y],b=i[y+1],p=i[y+2],I=t[g+2]*s,T=i[I],M=i[I+1],R=i[I+2];g+=3;const S=N-n,V=b-o,v=p-u,A=T-n,w=M-o,P=R-u,B=l*P-w*d,D=d*A-P*h,F=h*w-A*l,O=S*B+V*D+v*F;if(Math.abs(O)<=Number.EPSILON)continue;const U=a-n,k=c-o,L=f-u,_=U*B+k*D+L*F;if(O>0){if(_<0||_>O)continue}else if(_>0||_<O)continue;const j=k*v-V*L,q=L*S-v*U,z=U*V-S*k,C=h*j+l*q+d*z;if(O>0){if(C<0||_+C>O)continue}else if(C>0||_+C<O)continue;const E=(A*j+w*q+P*z)/O;if(E>=0){const t=this.indices[x]+this.firstTriangleIndex,e=r.computeNormal(S,V,v,A,w,P,m);this.callback(E,e,t)}}}t.numFacesTested+=n-e},i.intersectRay=function(i,r){t.numFacesTested=0;const s=n.fromValues(i.r0[0],i.r0[1],i.r0[2]),o=d(n.fromValues(i.r1[0],i.r1[1],i.r1[2]),s);if(e.squaredLength(o)<f)return;this.rayOrigin=s,this.rayDirection=o;const a=this.triangleVertexIndices.length/3;this.callback=r;const c=this.bspNodeTree[0];this.intersectRayBSP(c,0,a)},i.intersectRayBSP=function(t,e,n){const i=this.rayOrigin,r=this.rayDirection;if(!u(t.aabb,i,r))return;const s=t.axis,o=t.d;if(i[s]<o||r[s]<0){const n=e,i=t.midStartIndex;if(n<i){const e=t.leftNode;void 0!==e?this.intersectRayBSP(e,n,i):this.intersectRayTriangleRange(n,i)}}if(this.intersectRayTriangleRange(t.midStartIndex,t.rightStartIndex),i[s]>o||r[s]>0){const e=t.rightStartIndex,i=n;if(e<i){const n=t.rightNode;void 0!==n?this.intersectRayBSP(n,e,i):this.intersectRayTriangleRange(e,i)}}},t}();function d(t,i){const r=n.create();return e.sub(r,t,i),r}l.numFacesTested=0;const m=n.create(),x=n.fromValues(1/0,1/0,1/0),g=n.fromValues(-1/0,-1/0,-1/0);function y(t,e,n,i,r,s){let o=n,a=i;for(;o<a;){const n=t[o];e[6*n+r+3]<=s?++o:(--a,t[o]=t[a],t[a]=n)}let c=o;for(a=i;c<a;){const n=t[a-1];e[6*n+r]>=s?--a:(t[a-1]=t[c],t[c]=n,++c)}return{next:o,mid:c}}function N(t,e,n,r){if(r<=n)return i.fromValues(NaN,NaN,NaN,NaN,NaN,NaN);{const i=6*t[n];for(let t=0;t<3;++t)x[t]=e[i+0+t],g[t]=e[i+3+t]}for(let i=n+1;i<r;++i){const n=6*t[i];for(let t=0;t<3;++t)x[t]=Math.min(x[t],e[n+0+t]),g[t]=Math.max(g[t],e[n+3+t])}return i.fromValues(x[0],x[1],x[2],g[0],g[1],g[2])}function b(t){const e=t[3]-t[0],n=t[4]-t[1],i=t[5]-t[2],r=e>n?e>i?0:n>i?1:2:n>i?1:i>e?2:0;return{axis:r,midValue:(t[r]+t[r+3])/2}}function p(t,e,n,i,r){const s=n-e,o=new Float32Array(6*s);for(let a=0;a<s;++a){const n=3*(a+e),s=t[n+0]*r,c=t[n+1]*r,f=t[n+2]*r;for(let t=0;t<3;++t){const e=i[s+t],n=i[c+t],r=i[f+t];o[6*a+t]=Math.min(e,n,r),o[6*a+3+t]=Math.max(e,n,r)}}return o}function I(t,e,n,i){const r=i-n;let s=0;for(let a=n;a<i;++a)for(let t=0;t<3;++t)s=Math.max(e[3*a+t],s);const o=s<=T?new Uint16Array(3*r):new Uint32Array(3*r);for(let a=0;a<r;++a){const i=3*(t[a]+n);for(let t=0;t<3;++t){const n=e[i+t];o[3*a+t]=n}}return o}const T=65535;t.ComponentIntersectionData=l,t.componentMinimalSizeForIntersectionData=s,Object.defineProperty(t,"__esModule",{value:!0})}));
