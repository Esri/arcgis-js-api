/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../core/has","../core/Logger","../core/mathUtils","../core/ObjectStack","./mat4","./mat4f64","./vec3","./vec3f64","../geometry/support/lineSegment","../geometry/support/plane","../geometry/support/ray","../geometry/support/vector","../geometry/support/vectorStacks"],(function(t,e,n,i,s,o,r,a,c,u,l,g,d,p){"use strict";const b=n.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");let f=function(){this.plane=l.create(),this.origin=c.create(),this.basis1=c.create(),this.basis2=c.create()};function m(t=J){return{plane:l.create(t.plane),origin:c.clone(t.origin),basis1:c.clone(t.basis1),basis2:c.clone(t.basis2)}}function h(t,e,n){const i=Z.get();return i.origin=t,i.basis1=e,i.basis2=n,i.plane=l.wrap(0,0,0,0),I(i),i}function P(t,e=m()){return v(t.origin,t.basis1,t.basis2,e)}function y(t,e){a.copy(e.origin,t.origin),a.copy(e.basis1,t.basis1),a.copy(e.basis2,t.basis2),l.copy(t.plane,e.plane)}function v(t,e,n,i=m()){return a.copy(i.origin,t),a.copy(i.basis1,e),a.copy(i.basis2,n),I(i),D(i,"fromValues()"),i}function I(t){l.fromVectorsAndPoint(t.basis2,t.basis1,t.origin,t.plane)}function S(t,e,n){t!==n&&P(t,n);const i=a.scale(p.sv3d.get(),F(t),e);return a.add(n.origin,n.origin,i),n.plane[3]-=e,n}function j(t,e,n){return A(e,n),S(n,_(t,t.origin),n),n}function A(t,e=m()){const n=(t[2]-t[0])/2,i=(t[3]-t[1])/2;return a.set(e.origin,t[0]+n,t[1]+i,0),a.set(e.basis1,n,0,0),a.set(e.basis2,0,i,0),l.fromValues(0,0,1,0,e.plane),e}function M(t,e,n){return!!l.intersectRay(t.plane,e,n)&&z(t,n)}function V(t,e,n){if(M(t,e,n))return n;const i=N(t,e,p.sv3d.get());return a.add(n,e.origin,a.scale(p.sv3d.get(),e.direction,a.distance(e.origin,i)/a.length(e.direction))),n}function N(t,e,n){const s=K.get();H(t,e,s,K.get());let o=Number.POSITIVE_INFINITY;for(const r of $){const c=G(t,r,Q.get()),u=p.sv3d.get();if(l.intersectLineSegment(s,c,u)){const t=a.direction(p.sv3d.get(),e.origin,u),s=Math.abs(i.acosClamped(a.dot(e.direction,t)));s<o&&(o=s,a.copy(n,u))}}return o===Number.POSITIVE_INFINITY?w(t,e,n):n}function w(t,e,n){if(M(t,e,n))return n;const i=K.get(),s=K.get();H(t,e,i,s);let o=Number.POSITIVE_INFINITY;for(const r of $){const c=G(t,r,Q.get()),u=p.sv3d.get();if(l.intersectLineSegmentClamp(i,c,u)){const t=g.distance2(e,u);if(!l.isPointInside(s,u))continue;t<o&&(o=t,a.copy(n,u))}}return O(t,e.origin)<o&&x(t,e.origin,n),n}function x(t,e,n){const i=l.projectPoint(t.plane,e,p.sv3d.get()),s=u.projectPointClamp(W(t,t.basis1),i,-1,1,p.sv3d.get()),o=u.projectPointClamp(W(t,t.basis2),i,-1,1,p.sv3d.get());return a.subtract(n,a.add(p.sv3d.get(),s,o),t.origin),n}function L(t,e,n){const{origin:i,basis1:s,basis2:o}=t,r=a.subtract(p.sv3d.get(),e,i),c=d.projectPointSignedLength(s,r),u=d.projectPointSignedLength(o,r),l=d.projectPointSignedLength(F(t),r);return a.set(n,c,u,l)}function O(t,e){const n=L(t,e,p.sv3d.get()),{basis1:i,basis2:s}=t,o=a.length(i),r=a.length(s),c=Math.max(Math.abs(n[0])-o,0),u=Math.max(Math.abs(n[1])-r,0),l=n[2];return c*c+u*u+l*l}function C(t,e){return Math.sqrt(O(t,e))}function E(t,e){let n=Number.NEGATIVE_INFINITY;for(const i of $){const s=G(t,i,Q.get()),o=u.distance2(s,e);o>n&&(n=o)}return Math.sqrt(n)}function T(t,e){return l.isPointInside(t.plane,e)&&z(t,e)}function q(t,e,n,i){return Y(t,n,i)}function _(t,e){const n=-t.plane[3];return d.projectPointSignedLength(F(t),e)-n}function k(t,e,n,i){const s=_(t,e),o=a.scale(X,F(t),n-s);return a.add(i,e,o),i}function R(t,e){return a.exactEquals(t.basis1,e.basis1)&&a.exactEquals(t.basis2,e.basis2)&&a.exactEquals(t.origin,e.origin)}function U(t,e,n){return t!==n&&P(t,n),o.invert(tt,e),o.transpose(tt,tt),a.transformMat4(n.basis1,t.basis1,tt),a.transformMat4(n.basis2,t.basis2,tt),a.transformMat4(l.normal(n.plane),l.normal(t.plane),tt),a.transformMat4(n.origin,t.origin,e),l.setOffsetFromPoint(n.plane,n.origin,n.plane),n}function B(t,e,n,i){return t!==i&&P(t,i),o.rotate(et,o.identity(et),e,n),a.transformMat4(i.basis1,t.basis1,et),a.transformMat4(i.basis2,t.basis2,et),I(i),i}function F(t){return l.normal(t.plane)}function Y(t,e,n){switch(e){case 0:a.copy(n,t.basis1),a.normalize(n,n);break;case 1:a.copy(n,t.basis2),a.normalize(n,n);break;case 2:a.copy(n,F(t))}return n}function z(t,e){const n=a.subtract(p.sv3d.get(),e,t.origin),i=a.squaredLength(t.basis1),s=a.squaredLength(t.basis2),o=a.dot(t.basis1,n),r=a.dot(t.basis2,n);return-o-i<0&&o-i<0&&-r-s<0&&r-s<0}function W(t,e){const n=Q.get();return a.copy(n.origin,t.origin),a.copy(n.vector,e),n}function G(t,e,n){const{basis1:i,basis2:s,origin:o}=t,r=a.scale(p.sv3d.get(),i,e.origin[0]),c=a.scale(p.sv3d.get(),s,e.origin[1]);a.add(n.origin,r,c),a.add(n.origin,n.origin,o);const u=a.scale(p.sv3d.get(),i,e.direction[0]),l=a.scale(p.sv3d.get(),s,e.direction[1]);return a.scale(n.vector,a.add(u,u,l),2),n}function D(t,e){Math.abs(a.dot(t.basis1,t.basis2)/(a.length(t.basis1)*a.length(t.basis2)))>1e-6&&b.warn(e,"Provided basis vectors are not perpendicular"),Math.abs(a.dot(t.basis1,F(t)))>1e-6&&b.warn(e,"Basis vectors and plane normal are not perpendicular"),Math.abs(-a.dot(F(t),t.origin)-t.plane[3])>1e-6&&b.warn(e,"Plane offset is not consistent with plane origin")}function H(t,e,n,i){const s=F(t);l.fromVectorsAndPoint(s,e.direction,e.origin,n),l.fromVectorsAndPoint(l.normal(n),s,e.origin,i)}const J={plane:l.create(),origin:c.fromValues(0,0,0),basis1:c.fromValues(1,0,0),basis2:c.fromValues(0,1,0)},K=new s.ObjectStack(l.create),Q=new s.ObjectStack(u.create),X=c.create(),Z=new s.ObjectStack((()=>({origin:null,basis1:null,basis2:null,plane:null}))),$=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],tt=r.create(),et=r.create();var nt=Object.freeze({__proto__:null,BoundedPlaneClass:f,create:m,wrap:h,copy:P,copyWithoutVerify:y,fromValues:v,updateUnboundedPlane:I,elevate:S,setExtent:j,fromAABoundingRect:A,intersectRay:M,intersectRayClosestSilhouette:V,closestPointOnSilhouette:N,closestPoint:w,projectPoint:x,projectPointLocal:L,distance2:O,distance:C,distanceToSilhouette:E,extrusionContainsPoint:T,axisAt:q,altitudeAt:_,setAltitudeAt:k,equals:R,transform:U,rotate:B,normal:F,UP:J});t.BoundedPlaneClass=f,t.UP=J,t.altitudeAt=_,t.axisAt=q,t.boundedPlane=nt,t.closestPoint=w,t.closestPointOnSilhouette=N,t.copy=P,t.copyWithoutVerify=y,t.create=m,t.distance=C,t.distance2=O,t.distanceToSilhouette=E,t.elevate=S,t.equals=R,t.extrusionContainsPoint=T,t.fromAABoundingRect=A,t.fromValues=v,t.intersectRay=M,t.intersectRayClosestSilhouette=V,t.normal=F,t.projectPoint=x,t.projectPointLocal=L,t.rotate=B,t.setAltitudeAt=k,t.setExtent=j,t.transform=U,t.updateUnboundedPlane=I,t.wrap=h}));
