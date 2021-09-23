/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/mat3","../../../chunks/mat3f64","../../../chunks/quat","../../../chunks/quatf32","../../../chunks/quatf64","../../../chunks/vec3","../../../chunks/vec3f32","../../../chunks/vec3f64","../../../chunks/vec4","../../../chunks/vec4f64","../../../geometry/support/aaBoundingBox","../../../geometry/support/plane","./dito"],(function(e,t,n,a,r,c,i,o,f,s,u,h,l,z){"use strict";const S=c.create(),b=f.create(),m=f.create(),M=u.create(),d=n.create();let p=function(e){const t=56,n=0,a=24,c=36,i=e*t;this.buffer=new ArrayBuffer(i),this.obbs=new Array(e);for(let s=0;s<e;s++)this.obbs[s]={center:f.createView(this.buffer,t*s+n),halfSize:o.createView(this.buffer,t*s+a),quaternion:r.createView(this.buffer,t*s+c)}};function q(e=[0,0,0],t=[-1,-1,-1],n=[0,0,0,1]){return{center:f.clone(e),halfSize:o.clone(t),quaternion:r.clone(n)}}function g(e){return q(e.center,e.halfSize,e.quaternion)}function k(e,t){i.copy(t.center,e.center),i.copy(t.halfSize,e.halfSize),a.copy(t.quaternion,e.quaternion)}function y(e,t){return t=t||q(),z.computeOBB(e,t),t}function x(e,t){const n=l.signedDistance(t,e.center),a=V(e,l.normal(t));return n>a?1:n<-a?-1:0}function B(e,n){n||(n=h.create());const a=t.fromQuat(d,e.quaternion),r=e.halfSize[0]*Math.abs(a[0])+e.halfSize[1]*Math.abs(a[3])+e.halfSize[2]*Math.abs(a[6]),c=e.halfSize[0]*Math.abs(a[1])+e.halfSize[1]*Math.abs(a[4])+e.halfSize[2]*Math.abs(a[7]),i=e.halfSize[0]*Math.abs(a[2])+e.halfSize[1]*Math.abs(a[5])+e.halfSize[2]*Math.abs(a[8]);return n[0]=e.center[0]-r,n[1]=e.center[1]-c,n[2]=e.center[2]-i,n[3]=e.center[0]+r,n[4]=e.center[1]+c,n[5]=e.center[2]+i,n}function Q(e,t){return l.signedDistance(t,e.center)-V(e,l.normal(t))}function j(e,t){return l.signedDistance(t,e.center)+V(e,l.normal(t))}function v(e,t){return x(e,t[0])<=0&&x(e,t[1])<=0&&x(e,t[2])<=0&&x(e,t[3])<=0&&x(e,t[4])<=0&&x(e,t[5])<=0}function w(e,t,n,r=0){a.conjugate(S,e.quaternion),i.subtract(b,t,e.center);const c=i.transformQuat(b,b,S),o=i.transformQuat(m,n,S);let f=-1/0,s=1/0;for(let a=0;a<3;a++)if(Math.abs(o[a])>1e-6){const t=(r+e.halfSize[a]-c[a])/o[a],n=(-r-e.halfSize[a]-c[a])/o[a];f=Math.max(f,Math.min(t,n)),s=Math.min(s,Math.max(t,n))}else if(c[a]>e.halfSize[a]+r||c[a]<-e.halfSize[a]-r)return!1;return f<=s}function A(e,n,r,c,o){a.conjugate(S,e.quaternion),i.sub(b,n,e.center),i.transformQuat(b,b,S);const f=b[0]<-e.halfSize[0]?-1:b[0]>e.halfSize[0]?1:0,u=b[1]<-e.halfSize[1]?-1:b[1]>e.halfSize[1]?1:0,h=b[2]<-e.halfSize[2]?-1:b[2]>e.halfSize[2]?1:0,l=Math.abs(f)+Math.abs(u)+Math.abs(h);if(0===l)return 1/0;const z=1===l?4:6,m=6*(f+3*u+9*h+13);t.fromQuat(d,e.quaternion),t.scale(d,d,e.halfSize);for(let t=0;t<z;t++){const n=P[m+t];i.set(b,((1&n)<<1)-1,(2&n)-1,((4&n)>>1)-1),i.transformMat3(b,b,d),i.add(M,e.center,b),M[3]=1,s.transformMat4(M,M,r);const a=1/Math.max(1e-6,M[3]);D[2*t]=M[0]*a,D[2*t+1]=M[1]*a}const p=2*z-2;let q=D[0]*(D[3]-D[p+1])+D[p]*(D[1]-D[p-1]);for(let t=2;t<p;t+=2)q+=D[t]*(D[t+3]-D[t-1]);return Math.abs(q)*c*o*.125}const D=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],P=(()=>{const e=new Int8Array(162);let t=0;const n=n=>{for(let a=0;a<n.length;a++)e[t+a]=n[a];t+=6};return n([6,2,3,1,5,4]),n([0,2,3,1,5,4]),n([0,2,3,7,5,4]),n([0,1,3,2,6,4]),n([0,1,3,2,0,0]),n([0,1,5,7,3,2]),n([0,1,3,7,6,4]),n([0,1,3,7,6,2]),n([0,1,5,7,6,2]),n([0,1,5,4,6,2]),n([0,1,5,4,0,0]),n([0,1,3,7,5,4]),n([0,2,6,4,0,0]),n([0,0,0,0,0,0]),n([1,3,7,5,0,0]),n([2,3,7,6,4,0]),n([2,3,7,6,0,0]),n([2,3,1,5,7,6]),n([0,1,5,7,6,2]),n([0,1,5,7,6,4]),n([0,1,3,7,6,4]),n([4,5,7,6,2,0]),n([4,5,7,6,0,0]),n([4,5,1,3,7,6]),n([0,2,3,7,5,4]),n([6,2,3,7,5,4]),n([6,2,3,1,5,4]),e})();function V(e,t){a.conjugate(S,e.quaternion),i.transformQuat(b,t,S);const n=e.halfSize;return Math.abs(b[0]*n[0])+Math.abs(b[1]*n[1])+Math.abs(b[2]*n[2])}function O(e,t){for(let n=0;n<8;++n){const a=t[n];a[0]=1&n?-e.halfSize[0]:e.halfSize[0],a[1]=2&n?-e.halfSize[1]:e.halfSize[1],a[2]=4&n?-e.halfSize[2]:e.halfSize[2],i.transformQuat(a,a,e.quaternion),i.add(a,a,e.center)}}function _(e){return i.len(e.halfSize)}e.ObbArray=p,e.clone=g,e.compute=y,e.corners=O,e.create=q,e.intersectLine=w,e.intersectPlane=x,e.isVisible=v,e.maximumDistancePlane=j,e.minimumDistancePlane=Q,e.projectedArea=A,e.projectedRadius=V,e.radius=_,e.set=k,e.toAaBoundingBox=B,Object.defineProperty(e,"__esModule",{value:!0})}));
