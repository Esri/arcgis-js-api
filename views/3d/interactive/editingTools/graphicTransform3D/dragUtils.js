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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/maybe","../../../../../core/screenUtils","../../../../../core/libs/gl-matrix-2/vec3f64","../../../support/geometryUtils","../../../support/stack"],function(e,r,t,n,a,c,o){function i(e,r,n){var a=null;return e.events.on("drag",function(e){if("start"===e.action&&(a=r(e)),!t.isNone(a)){var c=a(e);t.isSome(c)&&n(c),"end"===e.action&&(a=null)}})}function s(e,r,t){var i=n.screenPointObjectToArray(e.start,n.castScreenPointArray(o.sv2d.get())),s=c.ray.fromScreen(r.state.camera,i,l),u=a.vec3f64.create(),f=a.vec3f64.create();return c.plane.intersectRay(t,s,u)?function(e){var a=n.screenPointObjectToArray(e.screenPoint,n.castScreenPointArray(o.sv2d.get())),i=c.ray.fromScreen(r.state.camera,a,l);return c.plane.intersectRay(t,i,f)?{action:e.action,start:u,end:f}:null}:null}Object.defineProperty(r,"__esModule",{value:!0}),r.createDragHandler=i,r.createCartesianPlaneDrag=s;var l=c.ray.create()});