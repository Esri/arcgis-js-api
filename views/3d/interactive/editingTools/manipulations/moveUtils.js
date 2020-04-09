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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../core/maybe","../../../../../core/libs/gl-matrix-2/mat2","../../../../../core/libs/gl-matrix-2/mat2f64","../../../../../core/libs/gl-matrix-2/vec2","../../../../../core/libs/gl-matrix-2/vec2f64","../../../../../geometry/geometryEngine","../../../../../geometry/support/aaBoundingRect","../manipulatorDragUtils","../../../support/mathUtils"],(function(e,t,r,n,a,i,o,c,l,s,u){Object.defineProperty(t,"__esModule",{value:!0}),t.createGraphicMoveDragPipeline=function(e,t,r){var n=e.graphic,a=function(e,r){return t({action:e,graphic:n,dxScreen:r.screenDeltaX,dyScreen:r.screenDeltaY})};return r((function(e,t,r){t.next((function(e){return"start"===e.action&&a("start",e),e})).next(s.dragGraphic(n)).next((function(e){switch(e.action){case"start":case"update":(e.translationX||e.translationY||e.translationZ)&&a("update",e);break;case"end":a("end",e)}return e})),r.next(s.resetGraphic(n)).next((function(){a("end",{screenDeltaX:0,screenDeltaY:0})}))}))},t.primaryShapeOrientation=function(e){if(r.isNone(e)||"polyline"!==e.type&&"polygon"!==e.type)return 0;var t=c.convexHull(e),a=t&&t.rings&&t.rings[0];if(!a)return 0;!function(e){for(var t=0,r=0,n=0,a=e;n<a.length;n++){var i=a[n];t+=i[0],r+=i[1]}t/=e.length,r/=e.length;for(var o=0,c=e;o<c.length;o++){(i=c[o])[0]-=t,i[1]-=r}}(a);for(var o=[],s=0;s<a.length-1;s++){var m=Math.atan2(a[s+1][1]-a[s][1],a[s+1][0]-a[s][0]),v=u.cyclical2PI.normalize(m)%(Math.PI/2);o.push(v)}for(var h=o.sort((function(e,t){return e-t})),d=null,x=0,y=Number.POSITIVE_INFINITY,b=0,I=h;b<I.length;b++){if((m=I[b])!==d){d=m,n.mat2.fromRotation(f,m),l.empty(g);for(var P=0,D=a;P<D.length;P++){var M=D[P];i.vec2.transformMat2(p,M,f),l.expandPointInPlace(g,p)}var N=l.area(g);((N>y?y/N:N/y)>=.99&&m<x||N<y)&&(x=m,y=N)}}return x};var f=a.mat2f64.create(),g=l.create(),p=o.vec2f64.create()}));