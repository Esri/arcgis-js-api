// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./common","../../support/geometryUtils","../../support/mathUtils"],function(e,r,t,n,i,a,o){function c(e,r,t){if(void 0===t&&(t=i.defaultApplyOptions),!e.state.isLocal)return 0;var n=e.state.constraints,a=n.distance;if(!e.pointsOfInterest.surfaceOrigin.renderLocation||a===1/0)return 0;v.min=0,v.max=a,f(e,t,v);var o=u(e,r),c=v.max-o;return c>=-1e-6?0:c}function s(e,r,n){void 0===n&&(n=i.defaultApplyOptions);var o=c(e,r,n);if(0===o)return!1;var s=e.pointsOfInterest.surfaceOrigin,f=u(e,r)+o,v=t.vec3.copy(d,r.eye),O=i.interactionDirectionTowardsConstraintMinimization(r,n.interactionDirection,p(e,r,y),l);if(a.sphere.intersectRay(a.sphere.wrap(f,s.renderLocation),a.ray.wrap(r.eye,O),r.eye)){var g=t.vec3.subtract(m,r.eye,v);t.vec3.add(r.center,r.center,g),r.markViewDirty();var x=e.renderCoordsHelper.getAltitude(r.center);return e.renderCoordsHelper.intersectInfiniteManifold(r.ray,x,r.center),r.markViewDirty(),!0}return!1}function f(e,r,t){var n=r.interactionType;if(0!==n){var a=t.min,o=t.max,s=r.interactionStartCamera,f=r.interactionFactor,p=1===n||4===n,v=c(e,s),d=0===v?0:u(e,s);t.min=a,t.max=o;var m=.05*d;i.adjustRangeForInteraction(v,d,p,f,m,t)}}function u(e,r){var n=e.pointsOfInterest.surfaceOrigin;return t.vec3.distance(r.eye,n.renderLocation)}function p(e,r,t){var n=e.pointsOfInterest.surfaceOrigin;return o.directionFromTo(t,r.eye,n.renderLocation)}Object.defineProperty(r,"__esModule",{value:!0}),r.getDistanceConstraintError=c,r.applyDistanceConstraint=s;var v={min:0,max:0},d=n.vec3f64.create(),m=n.vec3f64.create(),l=n.vec3f64.create(),y=n.vec3f64.create()});