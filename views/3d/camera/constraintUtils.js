// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../lib/glMatrix","../../animation/easing","./constraintUtils/common","./constraintUtils/tilt","./constraintUtils/tilt","./constraintUtils/altitude","./constraintUtils/altitude","./constraintUtils/distance","./constraintUtils/distance","./constraintUtils/surfaceCollision","./constraintUtils/surfaceCollision"],function(t,r,i,e,a,n,o,l,p,s,c,y,u){function d(t,r,i,e){void 0===i&&(i=U),void 0===e&&(e=r);var n=!1;e!==r&&e.copyFrom(r),e.markViewDirty(),e.computeUp(t.state.mode);for(var o=0;C>o;o++){for(var l=0,p=0,s=v;p<s.length;p++){var c=s[p];if(a.hasConstraintType(i.selection,c.type)){var u=Math.abs(c.error(t,e,i));c.apply(t,e,i)&&(n=!0,l+=u)}}if(0===l)break}var d=a.hasConstraintType(i.selection,8),f=4===i.interactionType?1:0;return d&&y.apply(t,e,f)&&(n=!0),n&&e.computeUp(t.state.mode),n}function f(t,r){var a="number"==typeof t?t:i.vec2d.dist(t,r),n=Math.min(1,a/150);return e.inOutCubic(n)}function m(t,r,i){return n.error(t,r,i)*r.distance}Object.defineProperty(r,"__esModule",{value:!0}),r.applyTilt=o.apply,r.tiltError=o.error,r.applyAltitude=p.apply,r.altitudeError=p.error,r.applyDistance=c.apply,r.distanceError=c.error,r.applySurfaceCollision=u.apply,r.applyAll=d,r.pixelDistanceToInteractionFactor=f;var v=[{type:1,error:m,apply:n.apply},{type:2,error:l.error,apply:l.apply},{type:4,error:s.error,apply:s.apply}],U={selection:15,interactionType:0,interactionFactor:0,interactionStartCamera:null,interactionDirection:null},C=5});