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

define(["require","exports","../../lib/glMatrix","../../webgl-engine/lib/Util","./common"],function(e,r,t,n,i){function a(e,r,t){if(void 0===t&&(t=i.defaultApplyOptions),!e.state.isLocal)return 0;var n=e.state.constraints,a=n.distance,o=e.pointsOfInterest.surfaceOrigin;if(!o.renderLocation||a===1/0)return 0;u.min=0,u.max=a,c(e,t,u);var s=d(e,r),v=u.max-s;return v>=-1e-6?0:v}function o(e,r,o,c){void 0===o&&(o=i.defaultApplyOptions),void 0===c&&(c=r),c!==r&&c.copyFrom(r);var u=a(e,r,o);if(0===u)return!1;var m=e.pointsOfInterest.surfaceOrigin,y=d(e,r)+u,O=t.vec3d.set(r.eye,v),g=i.interactionDirectionTowardsConstraintMinimization(e,r,o.interactionDirection,s(e,r,l),p),x=n.raySphere(r.eye,g,m.renderLocation,y,c.eye);if(x){var w=t.vec3d.subtract(c.eye,O,f);t.vec3d.add(c.center,w),c.markViewDirty();var b=e.renderCoordsHelper.getAltitude(c.center);return e.renderCoordsHelper.intersectManifold(c.eye,c.viewForward,b,c.center),c.markViewDirty(),!0}return!1}function c(e,r,t){var n=r.interactionType;if(0!==n){var o=t.min,c=t.max,s=r.interactionStartCamera,u=r.interactionFactor,v=1===n||4===n,f=a(e,s),p=0===f?0:d(e,s);t.min=o,t.max=c;var l=.05*p;i.adjustRangeForInteraction(f,p,v,u,l,t)}}function d(e,r){var n=e.pointsOfInterest.surfaceOrigin;return t.vec3d.dist(r.eye,n.renderLocation)}function s(e,r,n){var i=e.pointsOfInterest.surfaceOrigin;return t.vec3d.direction(i.renderLocation,r.eye,n)}Object.defineProperty(r,"__esModule",{value:!0}),r.error=a,r.apply=o;var u={min:0,max:0},v=t.vec3d.create(),f=t.vec3d.create(),p=t.vec3d.create(),l=t.vec3d.create()});