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

define(["require","exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./common","../../support/geometryUtils","../../support/intersectionUtils"],function(e,t,r,i,n,a,o,c){function s(e,t,n){void 0===n&&(n=a.defaultApplyOptions);var s=l(e,t,n);if(0===s)return!1;var u=e.renderCoordsHelper,d=u.getAltitude(t.eye),m=d+s,f=a.interactionDirectionTowardsConstraintMinimization(t,n.interactionDirection,p(e,t,r.sign(s),y),v),x=i.vec3.copy(g,t.viewForward);return u.intersectInfiniteManifold(o.ray.wrap(t.eye,f),m,t.eye)||u.setAltitude(m,t.eye),c.closestPointOnRay(t.eye,x,t.center,t.center),t.markViewDirty(),!0}function l(e,t,i){if(void 0===i&&(i=a.defaultApplyOptions),!u(e,i))return 0;var n=m(e.state.constraints.altitude,f);d(e,i,n);var o=e.renderCoordsHelper,c=o.getAltitude(t.eye),s=r.clamp(c,n.min,n.max),l=s-c;return Math.abs(l)<=1e-6?0:l}function u(e,t){var r=e.state.constraints.altitude;return!(!e.state.isGlobal||!r)&&(2!==t.interactionType||!a.hasConstraintType(t.selection,1))}function d(e,t,r){var i=t.interactionType;if(0!==i){var n=r.min,o=r.max,c=t.interactionStartCamera,s=t.interactionFactor,u=2===i||1===i,d=l(e,c),p=0===d?0:e.renderCoordsHelper.getAltitude(c.eye);r.min=n,r.max=o;var m=.05*p;a.adjustRangeForInteraction(d,p,u,s,m,r)}}function p(e,t,r,n){return e.renderCoordsHelper.worldUpAtPosition(t.eye,n),i.vec3.scale(n,n,r),n}function m(e,t){return t.min=e.min,t.max=e.max,t}Object.defineProperty(t,"__esModule",{value:!0}),t.applyAltitudeConstraint=s,t.getAltitudeConstraintError=l;var f={min:0,max:0},v=n.vec3f64.create(),y=n.vec3f64.create(),g=n.vec3f64.create()});