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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../lib/gl-matrix","../../support/mathUtils"],function(t,n,i,a){function e(t,n){return 0!=(t&n)}function r(t,n,i,a,e,r){0!==t&&(i?(r.min=Math.min(r.min,n),r.max=Math.max(r.max,n)):null!=a?(r.min-=Math.max(0,(n-r.min)*(1-a)),r.max+=Math.max(0,(n-r.max)*(1-a))):e&&(r.min-=Math.max(0,n-r.min-e),r.max+=Math.max(0,n-r.max-e)))}function o(t,n,e,r,o){return e||(e=n.viewForward),i.vec3d.set(e,o),i.vec3d.scale(o,a.sign(i.vec3d.dot(e,r))),o}Object.defineProperty(n,"__esModule",{value:!0}),n.hasConstraintType=e,n.adjustRangeForInteraction=r,n.defaultApplyOptions={selection:0,interactionType:0,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0},n.interactionDirectionTowardsConstraintMinimization=o});