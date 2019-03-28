// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix-2/vec2","./constraintUtils/altitude","./constraintUtils/common","./constraintUtils/distance","./constraintUtils/surfaceCollision","./constraintUtils/tilt","../../animation/easing","./constraintUtils/tilt","./constraintUtils/altitude","./constraintUtils/distance","./constraintUtils/surfaceCollision"],function(t,r,e,i,a,n,o,l,p,s,c,u,y){function d(t,r,e,i){void 0===e&&(e=b),void 0===i&&(i=r);var n=!1;i!==r&&i.copyFrom(r),i.markViewDirty(),i.computeUp(t.state.mode);for(var l=0;l<C;l++){for(var p=0,s=0,c=U;s<c.length;s++){var u=c[s];if(a.hasConstraintType(e.selection,u.type)){var y=Math.abs(u.error(t,i,e));u.apply(t,i,e)&&(n=!0,p+=y)}}if(0===p)break}var d=a.hasConstraintType(e.selection,8),m=f(e.interactionType,t);return d&&o.apply(t,i,m)&&(n=!0),n&&i.computeUp(t.state.mode),n}function f(t,r){switch(t){case 4:return 1;case 5:return r.state.isGlobal?2:1;default:return 0}}function m(t,r){var i="number"==typeof t?t:e.vec2.distance(t,r),a=Math.min(1,i/150);return p.inOutCubic(a)}function v(t,r,e){return l.error(t,r,e)*r.distance}Object.defineProperty(r,"__esModule",{value:!0}),r.applyTilt=s.apply,r.tiltError=s.error,r.applyAltitude=c.apply,r.altitudeError=c.error,r.applyDistance=u.apply,r.distanceError=u.error,r.applySurfaceCollision=y.apply,r.applyAll=d,r.pixelDistanceToInteractionFactor=m;var U=[{type:1,error:v,apply:l.apply},{type:2,error:i.error,apply:i.apply},{type:4,error:n.error,apply:n.apply}],b={selection:15,interactionType:0,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0},C=5});