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

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../../support/mathUtils"],function(t,n,i,a){function e(t,n){return 0!=(t&n)}function o(t,n,i,a,e,o){0!==t&&(i?(o.min=Math.min(o.min,n),o.max=Math.max(o.max,n)):null!=a?(o.min-=Math.max(0,(n-o.min)*(1-a)),o.max+=Math.max(0,(n-o.max)*(1-a))):e&&(o.min-=Math.max(0,n-o.min-e),o.max+=Math.max(0,n-o.max-e)))}function r(t,n,e,o,r){return e||(e=n.viewForward),i.vec3.copy(r,e),i.vec3.scale(r,r,a.sign(i.vec3.dot(e,o))),r}Object.defineProperty(n,"__esModule",{value:!0}),n.hasConstraintType=e,n.adjustRangeForInteraction=o,n.defaultApplyOptions={selection:0,interactionType:0,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0},n.interactionDirectionTowardsConstraintMinimization=r});