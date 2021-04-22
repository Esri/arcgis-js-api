/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/vec2","./constraintUtils/common","./constraintUtils/altitude","./constraintUtils/distance","./constraintUtils/surfaceCollision","./constraintUtils/tilt","../../animation/easing"],(function(t,n,r,i,e,o,a,s){"use strict";function l(t,n,i=C,e=n){let a=!1;e!==n&&e.copyFrom(n),e.markViewDirty(),e.computeUp(t.state.mode);for(let o=0;o<f;o++){let n=0;for(const o of y)if(r.hasConstraintType(i.selection,o.type)){const r=Math.abs(o.error(t,e,i));o.apply(t,e,i)&&(a=!0,n+=r)}if(0===n)break}const s=r.hasConstraintType(i.selection,8),l=c(i.interactionType,t);return s&&o.applySurfaceCollisionConstraint(t,e,l)&&(a=!0),a&&e.computeUp(t.state.mode),a}function c(t,n){switch(t){case 4:return 1;case 5:return n.state.isGlobal?2:1;default:return 0}}function p(t,r){const i="number"==typeof t?t:n.distance(t,r),e=Math.min(1,i/150);return s.inOutCubic(e)}function u(t,n,r){return a.getTiltConstraintError(t,n,r)*n.distance}const y=[{type:1,error:u,apply:a.applyTiltConstraint},{type:2,error:i.getAltitudeConstraintError,apply:i.applyAltitudeConstraint},{type:4,error:e.getDistanceConstraintError,apply:e.applyDistanceConstraint}],C={selection:15,interactionType:0,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0},f=5;t.applyAltitudeConstraint=i.applyAltitudeConstraint,t.getAltitudeConstraintError=i.getAltitudeConstraintError,t.applyDistanceConstraint=e.applyDistanceConstraint,t.getDistanceConstraintError=e.getDistanceConstraintError,t.applySurfaceCollisionConstraint=o.applySurfaceCollisionConstraint,t.applyTiltConstraint=a.applyTiltConstraint,t.getTiltConstraintError=a.getTiltConstraintError,t.applyAll=l,t.pixelDistanceToInteractionFactor=p,Object.defineProperty(t,"__esModule",{value:!0})}));
