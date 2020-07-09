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

define(["require","exports","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3f64","../../support/earthUtils","../../support/projectionUtils"],(function(t,a,r,e,o,i){Object.defineProperty(a,"__esModule",{value:!0}),a.computeGlobalTransformation=function(t,a,e,o){var h=n(t,a,e),u=r.mat4f64.create();return i.computeLinearTransformation(e,h,u,o),u};function n(t,a,r){var i=e.vec3f64.create(),n=t[3],h=Math.ceil(Math.log(n)*Math.LOG2E/4),u=Math.pow(2,4*h+1);if(r.isGeographic){var c=u/o.earthRadius*180/Math.PI,M=Math.round(t[1]/c),s=Math.max(-90,Math.min(90,M*c)),l=c/Math.cos((Math.abs(s)-c/2)/180*Math.PI),f=(p=Math.round(t[0]/l))*l;i[0]=f,i[1]=s}else{var p=Math.round(t[0]/u);M=Math.round(t[1]/u);i[0]=p*u,i[1]=M*u}var m=t[2]+a,d=Math.round(m/u);return i[2]=d*u,i}a.getLocalOrigin=n}));