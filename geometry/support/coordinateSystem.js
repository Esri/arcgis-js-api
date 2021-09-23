/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/mat4","../../chunks/vec3","../../chunks/vec3f64","../projectionEllipsoid","../../chunks/boundedPlane","../../chunks/sphere"],(function(e,t,n,o,r,u,i){"use strict";function a(e){const{value:t,operations:n}=e;return{operations:n,value:n.create(t)}}function s(e,t,n){return e.operations.setExtent(e.value,t,n.value),n}function c(e){return{operations:e,value:e.create()}}function l(e,t,n=c(e)){return n.operations=e,e.copy(t,n.value),n}function f(e){return l(i.sphere,i.fromValues(0,0,0,r.getReferenceEllipsoid(e).radius))}const p=2**50;function v(){return l(u.boundedPlane,u.fromValues([0,0,0],[p,0,0],[0,p,0]))}function d(e,t){return C.operations=e,C.value=t,C}function h(e,t,n){return e.operations.axisAt(e.value,t,2,n)}function A(e,t,n,o){return e.operations.axisAt(e.value,t,n,o)}function y(e,t,n){return e.operations.intersectRay(e.value,t,n)}function m(e,t){return e.operations.intersectRay(e.value,t,null)}function x(e,t,n){return e.operations.closestPoint(e.value,t,n)}function P(e,t,n){return e.operations.intersectRayClosestSilhouette(e.value,t,n)}function R(e,t,n){return e.operations.closestPointOnSilhouette(e.value,t,n)}function S(e,t){return e.operations.distanceToSilhouette(e.value,t)}function O(e,t){return e.operations.altitudeAt(e.value,t)}function k(e,t,n,o){return e.operations.setAltitudeAt(e.value,t,n,o)}function b(e,o,r,u){return o!==u&&t.copy(u,o),n.set(V,u[12],u[13],u[14]),k(e,V,r,V),u[12]=V[0],u[13]=V[1],u[14]=V[2],u}function E(e,t,n){return e.operations.elevate(e.value,t,n.value)}const V=o.create(),C={operations:null,value:null};function T(e,t,o,r,u){return u[0]=n.dot(e,t),u[1]=n.dot(e,o),u[2]=n.dot(e,r),u}function j(e,t,o,r,u){n.copy(o,e),n.copy(F,t),n.normalize(F,F),n.cross(r,F,o),n.cross(u,r,o)}const F=o.create();e.altitudeAt=O,e.axisAt=A,e.closestPoint=x,e.closestPointOnSilhouette=R,e.coordinateSystemFromOneAxisAndNormalVector=j,e.create=a,e.createFromOperations=c,e.createGlobal=f,e.createLocal=v,e.distanceToSilhouette=S,e.elevate=E,e.fromValues=l,e.intersectRay=y,e.intersectRayClosestSilhouette=P,e.intersectsRay=m,e.normalAt=h,e.setAltitudeAt=k,e.setAltitudeOfTransformation=b,e.setExtent=s,e.vectorCoordinates=T,e.wrap=d,Object.defineProperty(e,"__esModule",{value:!0})}));
