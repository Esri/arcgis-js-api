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

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../intersectionUtils"],function(e,r,t,i,n){function c(e,r,i,c){void 0===i&&(i=0),void 0===c&&(c=r);var l=e.state.constraints;if(r!==c&&c.copyFrom(r),!l.collision.enabled)return!1;var a=n.surfaceElevationBelowEye(e,r),s=e.renderCoordsHelper.getAltitude(r.eye),v=l.collision.elevationMargin,d=a+v;if(s>=d)return!1;var u=t.vec3.length(c.eye);if(t.vec3.subtract(o,c.center,c.eye),e.renderCoordsHelper.setAltitude(d,c.eye),1===i)t.vec3.add(c.center,c.eye,o);else if(2===i){var f=(u-s+d)/u;t.vec3.scale(c.center,c.center,f)}return c.markViewDirty(),!0}Object.defineProperty(r,"__esModule",{value:!0}),r.apply=c;var o=i.vec3f64.create()});