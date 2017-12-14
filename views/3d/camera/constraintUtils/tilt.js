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

define(["require","exports","../../lib/glMatrix","../../support/mathUtils","../../support/earthUtils","../../state/utils/viewUtils","./common"],function(t,e,a,i,n,r,o){function c(t,e,i,n){void 0===i&&(i=o.defaultApplyOptions),void 0===n&&(n=e),e!==n&&n.copyFrom(e);var r=s(t,e,i);return 0===r?!1:(a.mat4d.identity(p),a.mat4d.rotate(p,-r,e.viewRight),a.vec3d.subtract(e.center,e.eye,m),a.mat4d.multiplyVec3(p,m),a.vec3d.subtract(e.center,m,n.eye),a.mat4d.multiplyVec3(p,n.up),n.markViewDirty(),!0)}function s(t,e,a,n){if(void 0===a&&(a=o.defaultApplyOptions),void 0===n&&(n=o.defaultApplyOptions),3===a.interactionType)return 0;if(!t.state.constraints.tilt)return 0;var c=r.viewAngle(t.renderCoordsHelper,e.center,e.eye),s=e.distance,m=t.state.constraints.tilt(s,y);d(t,a,m),2===n.interactionType&&o.hasConstraintType(n.selection,2)&&l(t,n.interactionStartCamera,m);var p=i.clamp(c,m.min,m.max),u=c-p;return Math.abs(u)<=1e-6?0:u}function d(t,e,a){if(0!==e.interactionType){var i=e.interactionStartCamera,n=e.interactionFactor,c=a.min,d=a.max,m=s(t,i,o.defaultApplyOptions,e),p=0===m?0:r.viewAngle(t.renderCoordsHelper,i.center,i.eye);a.min=c,a.max=d,2===e.interactionType?(o.hasConstraintType(e.selection,2)&&l(t,i,a),o.adjustRangeForInteraction(m,p,!0,n,u,a)):o.adjustRangeForInteraction(m,p,!1,n,u,a)}}function l(t,e,r){if(!t.state.isLocal){var o=t.state.constraints;if(o.altitude){var c=a.vec3d.length2(e.center),s=Math.sqrt(c),d=e.distance,l=o.altitude.min+n.earthRadius,m=o.altitude.max+n.earthRadius,p=(l*l-d*d-c)/(-2*s*d),u=(m*m-d*d-c)/(-2*s*d);r.min=Math.max(r.min,Math.min(Math.PI-i.acos(u),r.max)),r.max=Math.min(r.max,Math.PI-i.acos(p))}}}Object.defineProperty(e,"__esModule",{value:!0}),e.apply=c,e.error=s;var m=a.vec3d.create(),p=a.mat4d.create(),u=i.deg2rad(5),y={min:0,max:0}});