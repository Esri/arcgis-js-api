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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./common","../../support/geometryUtils","../../support/mathUtils"],function(e,r,t,n,i,a,o){function c(e,r,t){if(void 0===t&&(t=i.defaultApplyOptions),!e.state.isLocal)return 0;var n=e.state.constraints,a=n.distance;if(!e.pointsOfInterest.surfaceOrigin.renderLocation||a===1/0)return 0;v.min=0,v.max=a,f(e,t,v);var o=u(e,r),c=v.max-o;return c>=-1e-6?0:c}function s(e,r,n,o){void 0===n&&(n=i.defaultApplyOptions),void 0===o&&(o=r),o!==r&&o.copyFrom(r);var s=c(e,r,n);if(0===s)return!1;var f=e.pointsOfInterest.surfaceOrigin,v=u(e,r)+s,O=t.vec3.copy(d,r.eye),g=i.interactionDirectionTowardsConstraintMinimization(r,n.interactionDirection,p(e,r,l),y);if(a.sphere.intersectRay(a.sphere.wrap(v,f.renderLocation),a.ray.wrap(r.eye,g),o.eye)){var x=t.vec3.subtract(m,o.eye,O);t.vec3.add(o.center,o.center,x),o.markViewDirty();var I=e.renderCoordsHelper.getAltitude(o.center);return e.renderCoordsHelper.intersectInfiniteManifold(o.ray,I,o.center),o.markViewDirty(),!0}return!1}function f(e,r,t){var n=r.interactionType;if(0!==n){var a=t.min,o=t.max,s=r.interactionStartCamera,f=r.interactionFactor,p=1===n||4===n,v=c(e,s),d=0===v?0:u(e,s);t.min=a,t.max=o;var m=.05*d;i.adjustRangeForInteraction(v,d,p,f,m,t)}}function u(e,r){var n=e.pointsOfInterest.surfaceOrigin;return t.vec3.distance(r.eye,n.renderLocation)}function p(e,r,t){var n=e.pointsOfInterest.surfaceOrigin;return o.directionFromTo(t,r.eye,n.renderLocation)}Object.defineProperty(r,"__esModule",{value:!0}),r.error=c,r.apply=s;var v={min:0,max:0},d=n.vec3f64.create(),m=n.vec3f64.create(),y=n.vec3f64.create(),l=n.vec3f64.create()});