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

define(["require","exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./common","../../support/geometryUtils","../../support/intersectionUtils"],function(e,t,r,i,n,o,a,c){function s(e,t,n,s){void 0===n&&(n=o.defaultApplyOptions),void 0===s&&(s=t),s!==t&&s.copyFrom(t);var u=l(e,t,n);if(0===u)return!1;var d=e.renderCoordsHelper,m=d.getAltitude(t.eye),v=m+u,g=o.interactionDirectionTowardsConstraintMinimization(t,n.interactionDirection,p(e,t,r.sign(u),f),y),A=i.vec3.copy(x,t.viewForward);return d.intersectInfiniteManifold(a.ray.wrap(t.eye,g),v,s.eye)||d.setAltitude(v,s.eye),c.closestPointOnRay(t.eye,A,t.center,t.center),s.markViewDirty(),!0}function l(e,t,i){if(void 0===i&&(i=o.defaultApplyOptions),!u(e,i))return 0;var n=m(e.state.constraints.altitude,v);d(e,i,n);var a=e.renderCoordsHelper,c=a.getAltitude(t.eye),s=r.clamp(c,n.min,n.max),l=s-c;return Math.abs(l)<=1e-6?0:l}function u(e,t){var r=e.state.constraints.altitude;return!(!e.state.isGlobal||!r)&&(2!==t.interactionType||!o.hasConstraintType(t.selection,1))}function d(e,t,r){var i=t.interactionType;if(0!==i){var n=r.min,a=r.max,c=t.interactionStartCamera,s=t.interactionFactor,u=2===i||1===i,d=l(e,c),p=0===d?0:e.renderCoordsHelper.getAltitude(c.eye);r.min=n,r.max=a;var m=.05*p;o.adjustRangeForInteraction(d,p,u,s,m,r)}}function p(e,t,r,n){return e.renderCoordsHelper.worldUpAtPosition(t.eye,n),i.vec3.scale(n,n,r),n}function m(e,t){return t.min=e.min,t.max=e.max,t}Object.defineProperty(t,"__esModule",{value:!0}),t.apply=s,t.error=l;var v={min:0,max:0},y=n.vec3f64.create(),f=n.vec3f64.create(),x=n.vec3f64.create()});