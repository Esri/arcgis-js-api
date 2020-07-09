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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./common","../../support/geometryUtils","../../support/intersectionUtils"],(function(e,t,r,n,i,a,o,c){function s(e,t,n){if(void 0===n&&(n=a.defaultApplyOptions),!function(e,t){var r=e.state.constraints.altitude;if(!e.state.isGlobal||!r)return!1;if(2===t.interactionType&&a.hasConstraintType(t.selection,1))return!1;return!0}(e,n))return 0;var i=function(e,t){return t.min=e.min,t.max=e.max,t}(e.state.constraints.altitude,l);!function(e,t,r){var n=t.interactionType;if(0===n)return;var i=r.min,o=r.max,c=t.interactionStartCamera,l=t.interactionFactor,u=2===n||1===n,d=s(e,c),p=0===d?0:e.renderCoordsHelper.getAltitude(c.eye);r.min=i,r.max=o;var f=.05*p;a.adjustRangeForInteraction(d,p,u,l,f,r)}(e,n,i);var o=e.renderCoordsHelper.getAltitude(t.eye),c=r.clamp(o,i.min,i.max)-o;return Math.abs(c)<=1e-6?0:c}Object.defineProperty(t,"__esModule",{value:!0}),t.applyAltitudeConstraint=function(e,t,i){void 0===i&&(i=a.defaultApplyOptions);var l=s(e,t,i);if(0===l)return!1;var f=e.renderCoordsHelper,m=f.getAltitude(t.eye)+l,v=a.interactionDirectionTowardsConstraintMinimization(t,i.interactionDirection,function(e,t,r,i){return e.renderCoordsHelper.worldUpAtPosition(t.eye,i),n.vec3.scale(i,i,r),i}(e,t,r.sign(l),d),u),y=n.vec3.copy(p,t.viewForward);return f.intersectInfiniteManifold(o.ray.wrap(t.eye,v),m,t.eye)||f.setAltitude(m,t.eye),c.closestPointOnRay(t.eye,y,t.center,t.center),t.markViewDirty(),!0},t.getAltitudeConstraintError=s;var l={min:0,max:0},u=i.vec3f64.create(),d=i.vec3f64.create(),p=i.vec3f64.create()}));