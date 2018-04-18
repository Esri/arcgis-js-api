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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./common","../../lib/glMatrix","../../state/utils/viewUtils","../../support/earthUtils","../../support/mathUtils"],function(t,e,a,i,n,r,o){function c(t,e,n,r){void 0===n&&(n=a.defaultApplyOptions),void 0===r&&(r=e),e!==r&&r.copyFrom(e);var o=s(t,e,n);return 0!==o&&(i.mat4d.identity(p),i.mat4d.rotate(p,-o,e.viewRight),i.vec3d.subtract(e.center,e.eye,m),i.mat4d.multiplyVec3(p,m),i.vec3d.subtract(e.center,m,r.eye),i.mat4d.multiplyVec3(p,r.up),r.markViewDirty(),!0)}function s(t,e,i,r){if(void 0===i&&(i=a.defaultApplyOptions),void 0===r&&(r=a.defaultApplyOptions),3===i.interactionType)return 0;if(!t.state.constraints.tilt)return 0;var c=n.viewAngle(t.renderCoordsHelper,e.center,e.eye),s=e.distance,m=t.state.constraints.tilt(s,y);d(t,i,m),2===r.interactionType&&a.hasConstraintType(r.selection,2)&&l(t,r.interactionStartCamera,m);var p=o.clamp(c,m.min,m.max),u=c-p;return Math.abs(u)<=1e-6?0:u}function d(t,e,i){if(0!==e.interactionType){var r=e.interactionStartCamera,o=e.interactionFactor,c=i.min,d=i.max,m=s(t,r,a.defaultApplyOptions,e),p=0===m?0:n.viewAngle(t.renderCoordsHelper,r.center,r.eye);i.min=c,i.max=d,2===e.interactionType?(a.hasConstraintType(e.selection,2)&&l(t,r,i),a.adjustRangeForInteraction(m,p,!0,o,u,i)):a.adjustRangeForInteraction(m,p,!1,o,u,i)}}function l(t,e,a){if(!t.state.isLocal){var n=t.state.constraints;if(n.altitude){var c=i.vec3d.length2(e.center),s=Math.sqrt(c),d=e.distance,l=n.altitude.min+r.earthRadius,m=n.altitude.max+r.earthRadius,p=(l*l-d*d-c)/(-2*s*d),u=(m*m-d*d-c)/(-2*s*d);a.min=Math.max(a.min,Math.min(Math.PI-o.acos(u),a.max)),a.max=Math.min(a.max,Math.PI-o.acos(p))}}}Object.defineProperty(e,"__esModule",{value:!0}),e.apply=c,e.error=s;var m=i.vec3d.create(),p=i.mat4d.create(),u=o.deg2rad(5),y={min:0,max:0}});