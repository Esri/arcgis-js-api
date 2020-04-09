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

define(["require","exports","../../../core/libs/gl-matrix-2/vec2","./constraintUtils/altitude","./constraintUtils/common","./constraintUtils/distance","./constraintUtils/surfaceCollision","./constraintUtils/tilt","../../animation/easing","./constraintUtils/tilt","./constraintUtils/altitude","./constraintUtils/distance","./constraintUtils/surfaceCollision"],(function(t,n,r,i,a,e,o,s,l,c,p,u,C){Object.defineProperty(n,"__esModule",{value:!0}),n.applyTiltConstraint=c.applyTiltConstraint,n.getTiltConstraintError=c.getTiltConstraintError,n.applyAltitudeConstraint=p.applyAltitudeConstraint,n.getAltitudeConstraintError=p.getAltitudeConstraintError,n.applyDistanceConstraint=u.applyDistanceConstraint,n.getDistanceConstraintError=u.getDistanceConstraintError,n.applySurfaceCollisionConstraint=C.applySurfaceCollisionConstraint,n.applyAll=function(t,n,r,i){void 0===r&&(r=d),void 0===i&&(i=n);var e=!1;i!==n&&i.copyFrom(n),i.markViewDirty(),i.computeUp(t.state.mode);for(var s=0;s<f;s++){for(var l=0,c=0,p=y;c<p.length;c++){var u=p[c];if(a.hasConstraintType(r.selection,u.type)){var C=Math.abs(u.error(t,i,r));u.apply(t,i,r)&&(e=!0,l+=C)}}if(0===l)break}var m=a.hasConstraintType(r.selection,8),v=function(t,n){switch(t){case 4:return 1;case 5:return n.state.isGlobal?2:1;default:return 0}}(r.interactionType,t);return m&&o.applySurfaceCollisionConstraint(t,i,v)&&(e=!0),e&&i.computeUp(t.state.mode),e},n.pixelDistanceToInteractionFactor=function(t,n){var i="number"==typeof t?t:r.vec2.distance(t,n),a=Math.min(1,i/150);return l.inOutCubic(a)};var y=[{type:1,error:function(t,n,r){return s.getTiltConstraintError(t,n,r)*n.distance},apply:s.applyTiltConstraint},{type:2,error:i.getAltitudeConstraintError,apply:i.applyAltitudeConstraint},{type:4,error:e.getDistanceConstraintError,apply:e.applyDistanceConstraint}],d={selection:15,interactionType:0,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0},f=5}));