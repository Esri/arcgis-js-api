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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","./constraintUtils/altitude","./constraintUtils/common","./constraintUtils/distance","./constraintUtils/surfaceCollision","./constraintUtils/tilt","../lib/glMatrix","../../animation/easing","./constraintUtils/tilt","./constraintUtils/altitude","./constraintUtils/distance","./constraintUtils/surfaceCollision"],function(t,r,i,e,a,n,o,l,p,s,c,y,u){function d(t,r,i,a){void 0===i&&(i=U),void 0===a&&(a=r);var o=!1;a!==r&&a.copyFrom(r),a.markViewDirty(),a.computeUp(t.state.mode);for(var l=0;l<C;l++){for(var p=0,s=0,c=v;s<c.length;s++){var y=c[s];if(e.hasConstraintType(i.selection,y.type)){var u=Math.abs(y.error(t,a,i));y.apply(t,a,i)&&(o=!0,p+=u)}}if(0===p)break}var d=e.hasConstraintType(i.selection,8),f=4===i.interactionType?1:0;return d&&n.apply(t,a,f)&&(o=!0),o&&a.computeUp(t.state.mode),o}function f(t,r){var i="number"==typeof t?t:l.vec2d.dist(t,r),e=Math.min(1,i/150);return p.inOutCubic(e)}function m(t,r,i){return o.error(t,r,i)*r.distance}Object.defineProperty(r,"__esModule",{value:!0}),r.applyTilt=s.apply,r.tiltError=s.error,r.applyAltitude=c.apply,r.altitudeError=c.error,r.applyDistance=y.apply,r.distanceError=y.error,r.applySurfaceCollision=u.apply,r.applyAll=d,r.pixelDistanceToInteractionFactor=f;var v=[{type:1,error:m,apply:o.apply},{type:2,error:i.error,apply:i.apply},{type:4,error:a.error,apply:a.apply}],U={selection:15,interactionType:0,interactionFactor:0,interactionStartCamera:null,interactionDirection:null},C=5});