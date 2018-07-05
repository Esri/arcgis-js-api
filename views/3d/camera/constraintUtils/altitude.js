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

define(["require","exports","./common","../../lib/glMatrix","../../support/intersectionUtils","../../support/mathUtils"],function(e,t,r,n,i,a){function o(e,t,o,s){void 0===o&&(o=r.defaultApplyOptions),void 0===s&&(s=t),s!==t&&s.copyFrom(t);var d=c(e,t,o);if(0===d)return!1;var u=e.renderCoordsHelper,p=u.getAltitude(t.eye),f=p+d,x=r.interactionDirectionTowardsConstraintMinimization(e,t,o.interactionDirection,l(e,t,a.sign(d),v),m),A=n.vec3d.set(t.viewForward,y);return u.intersectManifold(t.eye,x,f,s.eye)||u.setAltitude(f,s.eye),i.closestPointOnRay(t.eye,A,t.center,t.center),s.markViewDirty(),!0}function c(e,t,n){if(void 0===n&&(n=r.defaultApplyOptions),!s(e,n))return 0;var i=u(e.state.constraints.altitude,p);d(e,n,i);var o=e.renderCoordsHelper,c=o.getAltitude(t.eye),l=a.clamp(c,i.min,i.max),m=l-c;return Math.abs(m)<=1e-6?0:m}function s(e,t){var n=e.state.constraints.altitude;return!(!e.state.isGlobal||!n)&&(2!==t.interactionType||!r.hasConstraintType(t.selection,1))}function d(e,t,n){var i=t.interactionType;if(0!==i){var a=n.min,o=n.max,s=t.interactionStartCamera,d=t.interactionFactor,l=2===i||1===i,u=c(e,s),p=0===u?0:e.renderCoordsHelper.getAltitude(s.eye);n.min=a,n.max=o;var m=.05*p;r.adjustRangeForInteraction(u,p,l,d,m,n)}}function l(e,t,r,i){return e.renderCoordsHelper.worldUpAtPosition(t.eye,i),n.vec3d.scale(i,r),i}function u(e,t){return t.min=e.min,t.max=e.max,t}Object.defineProperty(t,"__esModule",{value:!0}),t.apply=o,t.error=c;var p={min:0,max:0},m=n.vec3d.create(),v=n.vec3d.create(),y=n.vec3d.create()});