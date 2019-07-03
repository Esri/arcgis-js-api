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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./common","../../support/geometryUtils","../../support/intersectionUtils","../../support/mathUtils"],function(e,t,r,i,n,o,a,c,s){function l(e,t,r,n){void 0===r&&(r=o.defaultApplyOptions),void 0===n&&(n=t),n!==t&&n.copyFrom(t);var l=u(e,t,r);if(0===l)return!1;var p=e.renderCoordsHelper,d=p.getAltitude(t.eye),v=d+l,y=o.interactionDirectionTowardsConstraintMinimization(e,t,r.interactionDirection,m(e,t,s.sign(l),x),f),A=i.vec3.copy(g,t.viewForward);return p.intersectInfiniteManifold(a.ray.wrap(t.eye,y),v,n.eye)||p.setAltitude(v,n.eye),c.closestPointOnRay(t.eye,A,t.center,t.center),n.markViewDirty(),!0}function u(e,t,i){if(void 0===i&&(i=o.defaultApplyOptions),!p(e,i))return 0;var n=v(e.state.constraints.altitude,y);d(e,i,n);var a=e.renderCoordsHelper,c=a.getAltitude(t.eye),s=r.clamp(c,n.min,n.max),l=s-c;return Math.abs(l)<=1e-6?0:l}function p(e,t){var r=e.state.constraints.altitude;return!(!e.state.isGlobal||!r)&&(2!==t.interactionType||!o.hasConstraintType(t.selection,1))}function d(e,t,r){var i=t.interactionType;if(0!==i){var n=r.min,a=r.max,c=t.interactionStartCamera,s=t.interactionFactor,l=2===i||1===i,p=u(e,c),d=0===p?0:e.renderCoordsHelper.getAltitude(c.eye);r.min=n,r.max=a;var m=.05*d;o.adjustRangeForInteraction(p,d,l,s,m,r)}}function m(e,t,r,n){return e.renderCoordsHelper.worldUpAtPosition(t.eye,n),i.vec3.scale(n,n,r),n}function v(e,t){return t.min=e.min,t.max=e.max,t}Object.defineProperty(t,"__esModule",{value:!0}),t.apply=l,t.error=u;var y={min:0,max:0},f=n.vec3f64.create(),x=n.vec3f64.create(),g=n.vec3f64.create()});