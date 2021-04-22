/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../core/compilerUtils","../../../../core/mathUtils","../../../../chunks/vec3f64","../../../../chunks/vec3","../../../../geometry/projectionEllipsoid","../../../../chunks/mat4","../../../../chunks/mat4f64","../../support/geometryUtils","./common","../../state/utils/viewUtils"],(function(e,t,n,r,i,a,s,c,o,u,l){"use strict";function d(e,n,r=u.defaultApplyOptions,a=!0){q.eyeCenterDistance=0,q.requiresTwoSteps=!1;const c=p(e,n,r,void 0,q);if(0===c)return!1;switch(s.identity(T),s.rotate(T,T,-c,n.viewRight),r.tiltMode){case 1:i.transformMat4(S,n.viewForward,T),i.scale(S,S,q.eyeCenterDistance),i.add(n.center,n.eye,S);break;case 0:i.subtract(S,n.center,n.eye),i.transformMat4(S,S,T),i.subtract(n.eye,n.center,S);break;default:t.neverReached(r.tiltMode)}return i.transformMat4(n.up,n.up,T),n.markViewDirty(),!q.requiresTwoSteps||!a||d(e,n,r,!1)}function p(e,t,n=u.defaultApplyOptions,r=u.defaultApplyOptions,i){if(!e.state.constraints.tilt)return 0;const a=t.distance,s=e.state.constraints.tilt(a,P);return R(e,n,s),2===r.interactionType&&u.hasConstraintType(r.selection,2)&&v(e,r.interactionStartCamera,s),1===n.tiltMode||1===r.tiltMode?m(e,t,s,i):f(e,t,s)}function f(e,t,r){const i=l.viewAngle(e.renderCoordsHelper,t.center,t.eye),a=i-n.clamp(i,r.min,r.max);return M(a)?a:0}function m(e,n,r,i){switch(i&&(i.requiresTwoSteps=!1),e.viewingMode){case"global":return h(e,n,r,i);case"local":return y(e,n,r,i);default:return void t.neverReached(e.viewingMode)}}function y(e,t,r,i){const a=l.viewAngle(e.renderCoordsHelper,t.center,t.eye),s=n.clamp(a,r.min,r.max),c=a-s;if(!M(c))return 0;if(i){const n=e.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude,r=e.renderCoordsHelper.getAltitude(t.eye)-n,a=Math.cos(s);Math.abs(a)>1e-4?i.eyeCenterDistance=r/a:i.eyeCenterDistance=t.distance}return c}function h(e,t,r,i){const a=C(e,t,x),s=n.clamp(a.tiltAtCenter,r.min,r.max);if(!M(a.tiltAtCenter-s))return 0;let c,o;return a.centerIsOnSurface?(c=A(a),o=g(a,c)):(c=a.constraints.clampTilt(a.eyeCenterDistance,a.tiltAtCenter),i&&c<Math.PI/2&&(i.requiresTwoSteps=!0,c=Math.PI/2-1e-5),o=I(a,c)),i&&(i.eyeCenterDistance=w(a,c)),o}function C(e,t,r){const s=e.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude,c=s+a.getReferenceEllipsoid(e.spatialReference).radius,u=e.renderCoordsHelper.intersectManifold(t.ray,s,D);return r.eyeCenterDistance=t.distance,u?(r.eyeCenterDistance=i.distance(t.eye,D),r.tiltAtCenter=l.viewAngle(e.renderCoordsHelper,D,t.eye)):e.state.isLocal?r.tiltAtCenter=l.viewAngle(e.renderCoordsHelper,t.center,t.eye):(o.sphere.closestPointOnSilhouette(o.sphere.fromRadius(c),t.ray,D),r.eyeCenterDistance=i.distance(t.eye,D),r.tiltAtCenter=n.acosClamped(-i.dot(t.viewForward,i.normalize(D,D)))),r.radius=c,r.eyeRadius=i.length(t.eye),r.constraints=e.state.constraints,r.centerIsOnSurface=u,r}function M(e){return Math.abs(e)>1e-9}function A(e){const{constraints:t,eyeCenterDistance:n,tiltAtCenter:r}=e;let i=r,a=t.clampTilt(n,r);const s=w(e,a);if(t.clampTilt(s,r)===a)return a;let c=0;for(;c<10&&M(a-i);){const n=(i+a)/2,r=w(e,n);M(t.clampTilt(r,n)-n)?i=n:a=n,c++}return a}function w(e,t){if(!e.centerIsOnSurface)return e.eyeCenterDistance;const r=Math.PI-n.clamp(t,0,Math.PI),i=n.asinClamped(e.radius/e.eyeRadius*Math.sin(r)),a=Math.PI-r-i,s=Math.sin(a)/Math.sin(r);if(e.eyeRadius<e.radius&&s>1){const t=Math.PI-i,n=Math.PI-r-t;return Math.sin(n)/Math.sin(r)*e.eyeRadius}return s*e.eyeRadius}function g(e,t){const r=n.asinClamped(e.radius/e.eyeRadius*Math.sin(e.tiltAtCenter)),i=n.asinClamped(e.radius/e.eyeRadius*Math.sin(t));return e.eyeRadius>e.radius?r-i:i-r}function I(e,t){return e.tiltAtCenter-Math.PI/2-(t-Math.PI/2)}function R(e,t,n){if(0===t.interactionType)return;const{interactionStartCamera:r,interactionFactor:i}=t,{min:a,max:s}=n,c=p(e,r,u.defaultApplyOptions,t),o=0===c?0:l.viewAngle(e.renderCoordsHelper,r.center,r.eye);n.min=a,n.max=s,2===t.interactionType?(u.hasConstraintType(t.selection,2)&&v(e,r,n),u.adjustRangeForInteraction(c,o,!0,i,O,n)):u.adjustRangeForInteraction(c,o,!1,i,O,n)}function v(e,t,r){if(e.state.isLocal)return;const s=e.state.constraints;if(!s.altitude)return;const c=i.squaredLength(t.center),o=Math.sqrt(c),u=t.distance,l=a.getReferenceEllipsoid(e.spatialReference).radius,d=s.altitude.min+l,p=s.altitude.max+l,f=(d*d-u*u-c)/(-2*o*u),m=(p*p-u*u-c)/(-2*o*u);r.min=Math.max(r.min,Math.min(Math.PI-n.acosClamped(m),r.max)),r.max=Math.min(r.max,Math.PI-n.acosClamped(f))}const S=r.create(),T=c.create(),D=r.create(),O=n.deg2rad(5),P={min:0,max:0},x={constraints:null,radius:0,eyeRadius:0,centerIsOnSurface:!0,eyeCenterDistance:0,tiltAtCenter:0},q={eyeCenterDistance:0,requiresTwoSteps:!1};e.applyTiltConstraint=d,e.getTiltConstraintError=p,Object.defineProperty(e,"__esModule",{value:!0})}));
