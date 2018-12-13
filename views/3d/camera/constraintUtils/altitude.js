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

define(["require","exports","../../../../core/libs/gl-matrix-2/gl-matrix","./common","../../support/geometryUtils","../../support/intersectionUtils","../../support/mathUtils"],function(e,t,r,i,n,a,o){function c(e,t,c,l){void 0===c&&(c=i.defaultApplyOptions),void 0===l&&(l=t),l!==t&&l.copyFrom(t);var u=s(e,t,c);if(0===u)return!1;var d=e.renderCoordsHelper,m=d.getAltitude(t.eye),x=m+u,g=i.interactionDirectionTowardsConstraintMinimization(e,t,c.interactionDirection,p(e,t,o.sign(u),f),y),A=r.vec3.copy(v,t.viewForward);return d.intersectInfiniteManifold(n.ray.wrap(t.eye,g),x,l.eye)||d.setAltitude(x,l.eye),a.closestPointOnRay(t.eye,A,t.center,t.center),l.markViewDirty(),!0}function s(e,t,r){if(void 0===r&&(r=i.defaultApplyOptions),!l(e,r))return 0;var n=d(e.state.constraints.altitude,m);u(e,r,n);var a=e.renderCoordsHelper,c=a.getAltitude(t.eye),s=o.clamp(c,n.min,n.max),p=s-c;return Math.abs(p)<=1e-6?0:p}function l(e,t){var r=e.state.constraints.altitude;return!(!e.state.isGlobal||!r)&&(2!==t.interactionType||!i.hasConstraintType(t.selection,1))}function u(e,t,r){var n=t.interactionType;if(0!==n){var a=r.min,o=r.max,c=t.interactionStartCamera,l=t.interactionFactor,u=2===n||1===n,p=s(e,c),d=0===p?0:e.renderCoordsHelper.getAltitude(c.eye);r.min=a,r.max=o;var m=.05*d;i.adjustRangeForInteraction(p,d,u,l,m,r)}}function p(e,t,i,n){return e.renderCoordsHelper.worldUpAtPosition(t.eye,n),r.vec3.scale(n,n,i),n}function d(e,t){return t.min=e.min,t.max=e.max,t}Object.defineProperty(t,"__esModule",{value:!0}),t.apply=c,t.error=s;var m={min:0,max:0},y=r.vec3f64.create(),f=r.vec3f64.create(),v=r.vec3f64.create()});