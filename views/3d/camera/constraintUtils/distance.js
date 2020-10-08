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

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./common","../../support/geometryUtils","../../support/mathUtils"],(function(e,r,t,n,i,a,o){"use strict";function c(e,r,t){if(void 0===t&&(t=i.defaultApplyOptions),!e.state.isLocal)return 0;var n=e.state.constraints.distance;if(!e.pointsOfInterest.surfaceOrigin.renderLocation||n===1/0)return 0;f.min=0,f.max=n,function(e,r,t){var n=r.interactionType;if(0===n)return;var a=t.min,o=t.max,f=r.interactionStartCamera,u=r.interactionFactor,p=1===n||4===n,v=c(e,f),d=0===v?0:s(e,f);t.min=a,t.max=o;var m=.05*d;i.adjustRangeForInteraction(v,d,p,u,m,t)}(e,t,f);var a=s(e,r),o=f.max-a;return o>=-1e-6?0:o}function s(e,r){var n=e.pointsOfInterest.surfaceOrigin;return t.vec3.distance(r.eye,n.renderLocation)}Object.defineProperty(r,"__esModule",{value:!0}),r.applyDistanceConstraint=r.getDistanceConstraintError=void 0,r.getDistanceConstraintError=c,r.applyDistanceConstraint=function(e,r,n){void 0===n&&(n=i.defaultApplyOptions);var f=c(e,r,n);if(0===f)return!1;var m=e.pointsOfInterest.surfaceOrigin,l=s(e,r)+f,y=t.vec3.copy(u,r.eye),g=i.interactionDirectionTowardsConstraintMinimization(r,n.interactionDirection,function(e,r,t){var n=e.pointsOfInterest.surfaceOrigin;return o.directionFromTo(t,r.eye,n.renderLocation)}(e,r,d),v);if(a.sphere.intersectRay(a.sphere.wrap(l,m.renderLocation),a.ray.wrap(r.eye,g),r.eye)){var O=t.vec3.subtract(p,r.eye,y);t.vec3.add(r.center,r.center,O),r.markViewDirty();var x=e.renderCoordsHelper.getAltitude(r.center);return e.renderCoordsHelper.intersectInfiniteManifold(r.ray,x,r.center),r.markViewDirty(),!0}return!1};var f={min:0,max:0},u=n.vec3f64.create(),p=n.vec3f64.create(),v=n.vec3f64.create(),d=n.vec3f64.create()}));