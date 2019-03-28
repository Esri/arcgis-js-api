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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./common","../../support/geometryUtils","../../support/intersectionUtils","../../support/mathUtils"],function(e,t,r,i,n,o,a,c){function s(e,t,i,s){void 0===i&&(i=n.defaultApplyOptions),void 0===s&&(s=t),s!==t&&s.copyFrom(t);var u=l(e,t,i);if(0===u)return!1;var p=e.renderCoordsHelper,m=p.getAltitude(t.eye),v=m+u,g=n.interactionDirectionTowardsConstraintMinimization(e,t,i.interactionDirection,d(e,t,c.sign(u),f),y),A=r.vec3.copy(x,t.viewForward);return p.intersectInfiniteManifold(o.ray.wrap(t.eye,g),v,s.eye)||p.setAltitude(v,s.eye),a.closestPointOnRay(t.eye,A,t.center,t.center),s.markViewDirty(),!0}function l(e,t,r){if(void 0===r&&(r=n.defaultApplyOptions),!u(e,r))return 0;var i=m(e.state.constraints.altitude,v);p(e,r,i);var o=e.renderCoordsHelper,a=o.getAltitude(t.eye),s=c.clamp(a,i.min,i.max),l=s-a;return Math.abs(l)<=1e-6?0:l}function u(e,t){var r=e.state.constraints.altitude;return!(!e.state.isGlobal||!r)&&(2!==t.interactionType||!n.hasConstraintType(t.selection,1))}function p(e,t,r){var i=t.interactionType;if(0!==i){var o=r.min,a=r.max,c=t.interactionStartCamera,s=t.interactionFactor,u=2===i||1===i,p=l(e,c),d=0===p?0:e.renderCoordsHelper.getAltitude(c.eye);r.min=o,r.max=a;var m=.05*d;n.adjustRangeForInteraction(p,d,u,s,m,r)}}function d(e,t,i,n){return e.renderCoordsHelper.worldUpAtPosition(t.eye,n),r.vec3.scale(n,n,i),n}function m(e,t){return t.min=e.min,t.max=e.max,t}Object.defineProperty(t,"__esModule",{value:!0}),t.apply=s,t.error=l;var v={min:0,max:0},y=i.vec3f64.create(),f=i.vec3f64.create(),x=i.vec3f64.create()});