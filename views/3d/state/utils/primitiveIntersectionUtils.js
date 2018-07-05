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

define(["require","exports","../../lib/glMatrix"],function(e,i,r){function t(e,i,t,c){void 0===c&&(c=!1),r.vec3d.set3(i[0],i[1],0,n),c?r.vec3d.set(e.eye,t.origin):r.vec3d.unproject(n,e.viewMatrix,e.projectionMatrix,e.fullViewport,t.origin),n[2]=1,r.vec3d.unproject(n,e.viewMatrix,e.projectionMatrix,e.fullViewport,t.direction),r.vec3d.subtract(t.direction,t.origin,t.direction),r.vec3d.normalize(t.direction)}function c(e,i,t){var c=r.vec3d.subtract(i.origin,e.center,o),d=r.vec3d.dot(i.direction,i.direction),n=2*r.vec3d.dot(i.direction,c),a=r.vec3d.dot(c,c)-e.radius*e.radius,v=n*n-4*d*a;if(v<0)return!1;var u=Math.sqrt(v),l=(-n-u)/(2*d),s=(-n+u)/(2*d);return(l<0||s<l&&s>0)&&(l=s),l>0&&(r.vec3d.add(i.origin,r.vec3d.scale(i.direction,l,t),t),!0)}function d(e,i,t){var c=r.vec3d.dot(e.normal,i.direction);if(0===c)return!1;var d=-(r.vec3d.dot(e.normal,i.origin)+e.d)/c;return!(d<0)&&(r.vec3d.add(i.origin,r.vec3d.scale(i.direction,d,t),t),!0)}Object.defineProperty(i,"__esModule",{value:!0}),i.createRay=t,i.intersectSphere=c,i.intersectPlane=d;var n=r.vec3d.create(),o=r.vec3d.create()});