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

define(["require","exports","dojo/_base/lang","../../../../../core/lang","../../../lib/glMatrix"],function(e,t,n,r,a){function o(e,t){var a=n.mixin({},e),o=r.clone(t);return n.mixin(a,o),a}function i(e,t,n){f.identity(n),f.translate(n,t),p.set3(e,e,e,g),f.scale(n,g)}function c(e,t){p.set3(0,0,0,t);for(var n=0;n<e.length;++n)p.add(t,e[n]);p.scale(t,1/e.length)}function s(e,t,n,r){r.projectPoint(e,P),r.projectPoint(t,h),u.subtract(h,P,n),u.normalize(n)}function d(e,t,n){var r=n._stage.getCamera();return n.renderCoordsHelper.toRenderCoords(e,v),r.projectPoint(v,m),u.set2(m[0],n.height-m[1],t),[t[0],n.height-t[1]]}function l(e,t,n){return d(e,P,n),d(t,h,n),u.dist(P,h)}Object.defineProperty(t,"__esModule",{value:!0});var u=a.vec2d,p=a.vec3d,f=a.mat4d,g=p.create();t.copyParameter=o,t.scaleTranslateMatrix=i,t.midpoint=c,t.screenSpaceTangent=s,t.projectPoint=d,t.pointToPointScreenDistance=l;var v=p.create(),m=p.create(),P=u.create(),h=u.create()});