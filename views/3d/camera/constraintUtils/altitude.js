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

define(["require","exports","../../lib/glMatrix","../../support/mathUtils","../../support/intersectionUtils","./common"],function(e,t,r,n,i,a){function o(e,t,o,s){void 0===o&&(o=a.defaultApplyOptions),void 0===s&&(s=t),s!==t&&s.copyFrom(t);var d=c(e,t,o);if(0===d)return!1;var u=e.renderCoordsHelper,p=u.getAltitude(t.eye),f=p+d,x=a.interactionDirectionTowardsConstraintMinimization(e,t,o.interactionDirection,l(e,t,n.sign(d),v),m),A=r.vec3d.set(t.viewForward,y);return u.intersectManifold(t.eye,x,f,s.eye)||u.setAltitude(f,s.eye),i.closestPointOnRay(t.eye,A,t.center,t.center),s.markViewDirty(),!0}function c(e,t,r){if(void 0===r&&(r=a.defaultApplyOptions),!s(e,r))return 0;var i=u(e.state.constraints.altitude,p);d(e,r,i);var o=e.renderCoordsHelper,c=o.getAltitude(t.eye),l=n.clamp(c,i.min,i.max),m=l-c;return Math.abs(m)<=1e-6?0:m}function s(e,t){var r=e.state.constraints.altitude;return e.state.isGlobal&&r?2===t.interactionType&&a.hasConstraintType(t.selection,1)?!1:!0:!1}function d(e,t,r){var n=t.interactionType;if(0!==n){var i=r.min,o=r.max,s=t.interactionStartCamera,d=t.interactionFactor,l=2===n||1===n,u=c(e,s),p=0===u?0:e.renderCoordsHelper.getAltitude(s.eye);r.min=i,r.max=o;var m=.05*p;a.adjustRangeForInteraction(u,p,l,d,m,r)}}function l(e,t,n,i){return e.renderCoordsHelper.worldUpAtPosition(t.eye,i),r.vec3d.scale(i,n),i}function u(e,t){return t.min=e.min,t.max=e.max,t}Object.defineProperty(t,"__esModule",{value:!0}),t.apply=o,t.error=c;var p={min:0,max:0},m=r.vec3d.create(),v=r.vec3d.create(),y=r.vec3d.create()});