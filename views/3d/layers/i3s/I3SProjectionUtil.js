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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/geodesicConstants","../../support/projectionUtils"],(function(t,a,r,e,o,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getLocalOrigin=a.computeGlobalTransformation=void 0,a.computeGlobalTransformation=function(t,a,e,o){var c=n(t,a,e),s=r.mat4f64.create();return i.computeLinearTransformation(e,c,s,o),s};function n(t,a,r){var i=e.vec3f64.create(),n=t[3],c=Math.ceil(Math.log(n)*Math.LOG2E/4),s=Math.pow(2,4*c+1);if(r.isGeographic){var u=s/o.earthRadius*180/Math.PI,h=Math.round(t[1]/u),l=Math.max(-90,Math.min(90,h*u)),M=u/Math.cos((Math.abs(l)-u/2)/180*Math.PI),f=(m=Math.round(t[0]/M))*M;i[0]=f,i[1]=l}else{var m=Math.round(t[0]/s);h=Math.round(t[1]/s);i[0]=m*s,i[1]=h*s}var p=t[2]+a,d=Math.round(p/s);return i[2]=d*s,i}a.getLocalOrigin=n}));