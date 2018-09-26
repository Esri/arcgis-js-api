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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./constraintUtils/altitude","./constraintUtils/common","./constraintUtils/distance","./constraintUtils/surfaceCollision","./constraintUtils/tilt","../lib/gl-matrix","../../animation/easing","./constraintUtils/tilt","./constraintUtils/altitude","./constraintUtils/distance","./constraintUtils/surfaceCollision"],function(t,r,i,e,a,n,o,l,p,s,c,u,y){function d(t,r,i,a){void 0===i&&(i=b),void 0===a&&(a=r);var o=!1;a!==r&&a.copyFrom(r),a.markViewDirty(),a.computeUp(t.state.mode);for(var l=0;l<C;l++){for(var p=0,s=0,c=U;s<c.length;s++){var u=c[s];if(e.hasConstraintType(i.selection,u.type)){var y=Math.abs(u.error(t,a,i));u.apply(t,a,i)&&(o=!0,p+=y)}}if(0===p)break}var d=e.hasConstraintType(i.selection,8),m=f(i.interactionType,t);return d&&n.apply(t,a,m)&&(o=!0),o&&a.computeUp(t.state.mode),o}function f(t,r){switch(t){case 4:return 1;case 5:return r.state.isGlobal?2:1;default:return 0}}function m(t,r){var i="number"==typeof t?t:l.vec2d.dist(t,r),e=Math.min(1,i/150);return p.inOutCubic(e)}function v(t,r,i){return o.error(t,r,i)*r.distance}Object.defineProperty(r,"__esModule",{value:!0}),r.applyTilt=s.apply,r.tiltError=s.error,r.applyAltitude=c.apply,r.altitudeError=c.error,r.applyDistance=u.apply,r.distanceError=u.error,r.applySurfaceCollision=y.apply,r.applyAll=d,r.pixelDistanceToInteractionFactor=m;var U=[{type:1,error:v,apply:o.apply},{type:2,error:i.error,apply:i.apply},{type:4,error:a.error,apply:a.apply}],b={selection:15,interactionType:0,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0},C=5});