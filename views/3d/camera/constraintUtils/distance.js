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

define(["require","exports","./common","../../lib/glMatrix","../../webgl-engine/lib/Util"],function(e,r,t,n,i){function a(e,r,n){if(void 0===n&&(n=t.defaultApplyOptions),!e.state.isLocal)return 0;var i=e.state.constraints,a=i.distance;if(!e.pointsOfInterest.surfaceOrigin.renderLocation||a===1/0)return 0;u.min=0,u.max=a,c(e,n,u);var o=d(e,r),s=u.max-o;return s>=-1e-6?0:s}function o(e,r,o,c){void 0===o&&(o=t.defaultApplyOptions),void 0===c&&(c=r),c!==r&&c.copyFrom(r);var u=a(e,r,o);if(0===u)return!1;var m=e.pointsOfInterest.surfaceOrigin,y=d(e,r)+u,O=n.vec3d.set(r.eye,v),g=t.interactionDirectionTowardsConstraintMinimization(e,r,o.interactionDirection,s(e,r,l),p);if(i.raySphere(r.eye,g,m.renderLocation,y,c.eye)){var x=n.vec3d.subtract(c.eye,O,f);n.vec3d.add(c.center,x),c.markViewDirty();var w=e.renderCoordsHelper.getAltitude(c.center);return e.renderCoordsHelper.intersectManifold(c.eye,c.viewForward,w,c.center),c.markViewDirty(),!0}return!1}function c(e,r,n){var i=r.interactionType;if(0!==i){var o=n.min,c=n.max,s=r.interactionStartCamera,u=r.interactionFactor,v=1===i||4===i,f=a(e,s),p=0===f?0:d(e,s);n.min=o,n.max=c;var l=.05*p;t.adjustRangeForInteraction(f,p,v,u,l,n)}}function d(e,r){var t=e.pointsOfInterest.surfaceOrigin;return n.vec3d.dist(r.eye,t.renderLocation)}function s(e,r,t){var i=e.pointsOfInterest.surfaceOrigin;return n.vec3d.direction(i.renderLocation,r.eye,t)}Object.defineProperty(r,"__esModule",{value:!0}),r.error=a,r.apply=o;var u={min:0,max:0},v=n.vec3d.create(),f=n.vec3d.create(),p=n.vec3d.create(),l=n.vec3d.create()});