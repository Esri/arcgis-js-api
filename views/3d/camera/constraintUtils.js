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

define(["require","exports","../../../core/libs/gl-matrix-2/vec2","./constraintUtils/altitude","./constraintUtils/common","./constraintUtils/distance","./constraintUtils/surfaceCollision","./constraintUtils/tilt","../../animation/easing","./constraintUtils/tilt","./constraintUtils/altitude","./constraintUtils/distance","./constraintUtils/surfaceCollision"],(function(t,e,n,r,i,a,o,l,s,c,p,u,y){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.pixelDistanceToInteractionFactor=e.applyAll=void 0,Object.defineProperty(e,"applyTiltConstraint",{enumerable:!0,get:function(){return c.applyTiltConstraint}}),Object.defineProperty(e,"getTiltConstraintError",{enumerable:!0,get:function(){return c.getTiltConstraintError}}),Object.defineProperty(e,"applyAltitudeConstraint",{enumerable:!0,get:function(){return p.applyAltitudeConstraint}}),Object.defineProperty(e,"getAltitudeConstraintError",{enumerable:!0,get:function(){return p.getAltitudeConstraintError}}),Object.defineProperty(e,"applyDistanceConstraint",{enumerable:!0,get:function(){return u.applyDistanceConstraint}}),Object.defineProperty(e,"getDistanceConstraintError",{enumerable:!0,get:function(){return u.getDistanceConstraintError}}),Object.defineProperty(e,"applySurfaceCollisionConstraint",{enumerable:!0,get:function(){return y.applySurfaceCollisionConstraint}}),e.applyAll=function(t,e,n,r){void 0===n&&(n=C),void 0===r&&(r=e);var a=!1;r!==e&&r.copyFrom(e),r.markViewDirty(),r.computeUp(t.state.mode);for(var l=0;l<d;l++){for(var s=0,c=0,p=f;c<p.length;c++){var u=p[c];if(i.hasConstraintType(n.selection,u.type)){var y=Math.abs(u.error(t,r,n));u.apply(t,r,n)&&(a=!0,s+=y)}}if(0===s)break}var b=i.hasConstraintType(n.selection,8),m=function(t,e){switch(t){case 4:return 1;case 5:return e.state.isGlobal?2:1;default:return 0}}(n.interactionType,t);return b&&o.applySurfaceCollisionConstraint(t,r,m)&&(a=!0),a&&r.computeUp(t.state.mode),a},e.pixelDistanceToInteractionFactor=function(t,e){var r="number"==typeof t?t:n.vec2.distance(t,e),i=Math.min(1,r/150);return s.inOutCubic(i)};var f=[{type:1,error:function(t,e,n){return l.getTiltConstraintError(t,e,n)*e.distance},apply:l.applyTiltConstraint},{type:2,error:r.getAltitudeConstraintError,apply:r.applyAltitudeConstraint},{type:4,error:a.getDistanceConstraintError,apply:a.applyDistanceConstraint}],C={selection:15,interactionType:0,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0},d=5}));