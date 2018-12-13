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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/gl-matrix","./common","../../support/geometryUtils","../../support/mathUtils"],function(e,r,t,n,i,a){function o(e,r,t){if(void 0===t&&(t=n.defaultApplyOptions),!e.state.isLocal)return 0;var i=e.state.constraints,a=i.distance;if(!e.pointsOfInterest.surfaceOrigin.renderLocation||a===1/0)return 0;p.min=0,p.max=a,s(e,t,p);var o=f(e,r),c=p.max-o;return c>=-1e-6?0:c}function c(e,r,a,c){void 0===a&&(a=n.defaultApplyOptions),void 0===c&&(c=r),c!==r&&c.copyFrom(r);var s=o(e,r,a);if(0===s)return!1;var p=e.pointsOfInterest.surfaceOrigin,l=f(e,r)+s,O=t.vec3.copy(d,r.eye),g=n.interactionDirectionTowardsConstraintMinimization(e,r,a.interactionDirection,u(e,r,y),m);if(i.sphere.intersectRay(i.sphere.wrap(l,p.renderLocation),i.ray.wrap(r.eye,g),c.eye)){var x=t.vec3.subtract(v,c.eye,O);t.vec3.add(c.center,c.center,x),c.markViewDirty();var I=e.renderCoordsHelper.getAltitude(c.center);return e.renderCoordsHelper.intersectInfiniteManifold(c.ray,I,c.center),c.markViewDirty(),!0}return!1}function s(e,r,t){var i=r.interactionType;if(0!==i){var a=t.min,c=t.max,s=r.interactionStartCamera,u=r.interactionFactor,p=1===i||4===i,d=o(e,s),v=0===d?0:f(e,s);t.min=a,t.max=c;var m=.05*v;n.adjustRangeForInteraction(d,v,p,u,m,t)}}function f(e,r){var n=e.pointsOfInterest.surfaceOrigin;return t.vec3.distance(r.eye,n.renderLocation)}function u(e,r,t){var n=e.pointsOfInterest.surfaceOrigin;return a.directionFromTo(t,r.eye,n.renderLocation)}Object.defineProperty(r,"__esModule",{value:!0}),r.error=o,r.apply=c;var p={min:0,max:0},d=t.vec3f64.create(),v=t.vec3f64.create(),m=t.vec3f64.create(),y=t.vec3f64.create()});