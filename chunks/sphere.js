/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../core/has","../core/Logger","../core/mathUtils","../core/maybe","./mat4","./vec3","./vec3f64","./vec4","./vec4f64","../geometry/support/ray","../geometry/support/vector","../geometry/support/vectorStacks"],(function(t,e,r,n,o,s,c,i,a,u,l,d,f){"use strict";const g=r.getLogger("esri.geometry.support.sphere");function h(){return u.create()}function p(t,e=h()){return a.copy(e,t)}function y(t,e){return u.fromValues(t[0],t[1],t[2],e)}function m(t){return t}function v(t){t[0]=t[1]=t[2]=t[3]=0}function A(t){return t}function R(t){return Array.isArray(t)?t[3]:t}function M(t){return Array.isArray(t)?t:k}function S(t,e,r,n){return u.fromValues(t,e,r,n)}function b(t,e,r){return t!==r&&c.copy(r,t),r[3]=t[3]+e,r}function C(t,e,r){return g.error("sphere.setExtent is not yet supported"),t===r?r:p(t,r)}function P(t,e,r){if(o.isNone(e))return!1;const n=c.subtract(f.sv3d.get(),e.origin,M(t)),s=c.dot(e.direction,e.direction),i=2*c.dot(e.direction,n),a=i*i-4*s*(c.dot(n,n)-t[3]*t[3]);if(a<0)return!1;const u=Math.sqrt(a);let l=(-i-u)/(2*s);const d=(-i+u)/(2*s);return(l<0||d<l&&d>0)&&(l=d),!(l<0)&&(r&&c.add(r,e.origin,c.scale(f.sv3d.get(),e.direction,l)),!0)}function x(t,e){return P(t,e,null)}function T(t,e,r){if(P(t,e,r))return r;const n=V(t,e,f.sv3d.get());return c.add(r,e.origin,c.scale(f.sv3d.get(),e.direction,c.distance(e.origin,n)/c.length(e.direction))),r}function V(t,e,r){const n=f.sv3d.get(),o=f.sm4d.get();c.cross(n,e.origin,e.direction);const i=R(t);c.cross(r,n,e.origin),c.scale(r,r,1/c.length(r)*i);const a=w(t,e.origin),u=d.angle(e.origin,r);return s.identity(o),s.rotate(o,o,u+a,n),c.transformMat4(r,r,o),r}function _(t,e,r){return P(t,e,r)?r:(l.closestPoint(e,M(t),r),j(t,r,r))}function j(t,e,r){const n=c.subtract(f.sv3d.get(),e,M(t)),o=c.scale(f.sv3d.get(),n,t[3]/c.length(n));return c.add(r,o,M(t))}function q(t,e){const r=c.subtract(f.sv3d.get(),e,M(t)),n=c.squaredLength(r),o=t[3]*t[3];return Math.sqrt(Math.abs(n-o))}function w(t,e){const r=c.subtract(f.sv3d.get(),e,M(t)),o=c.length(r),s=R(t),i=s+Math.abs(s-o);return n.acosClamped(s/i)}const E=i.create();function L(t,e,r,o){const s=c.subtract(E,e,M(t));switch(r){case 0:{const t=n.cartesianToSpherical(s,E)[2];return c.set(o,-Math.sin(t),Math.cos(t),0)}case 1:{const t=n.cartesianToSpherical(s,E),e=t[1],r=t[2],i=Math.sin(e);return c.set(o,-i*Math.cos(r),-i*Math.sin(r),Math.cos(e))}case 2:return c.normalize(o,s);default:return}}function O(t,e){const r=c.subtract(N,e,M(t));return c.length(r)-t[3]}function z(t,e,r,n){const o=O(t,e),s=L(t,e,2,N),i=c.scale(N,s,r-o);return c.add(n,e,i)}const k=i.create(),N=i.create();var U=Object.freeze({__proto__:null,create:h,copy:p,fromCenterAndRadius:y,wrap:m,clear:v,fromRadius:A,getRadius:R,getCenter:M,fromValues:S,elevate:b,setExtent:C,intersectRay:P,intersectsRay:x,intersectRayClosestSilhouette:T,closestPointOnSilhouette:V,closestPoint:_,projectPoint:j,distanceToSilhouette:q,angleToSilhouette:w,axisAt:L,altitudeAt:O,setAltitudeAt:z});t.altitudeAt=O,t.angleToSilhouette=w,t.axisAt=L,t.clear=v,t.closestPoint=_,t.closestPointOnSilhouette=V,t.copy=p,t.create=h,t.distanceToSilhouette=q,t.elevate=b,t.fromCenterAndRadius=y,t.fromRadius=A,t.fromValues=S,t.getCenter=M,t.getRadius=R,t.intersectRay=P,t.intersectRayClosestSilhouette=T,t.intersectsRay=x,t.projectPoint=j,t.setAltitudeAt=z,t.setExtent=C,t.sphere=U,t.wrap=m}));
