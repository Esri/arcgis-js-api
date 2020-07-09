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

define(["require","exports","../../../../../core/maybe","../../../../../core/libs/gl-matrix-2/mat2","../../../../../core/libs/gl-matrix-2/mat2f64","../../../../../core/libs/gl-matrix-2/vec2","../../../../../core/libs/gl-matrix-2/vec2f64","../../../../../geometry/geometryEngine","../../../../../geometry/support/aaBoundingRect","../../../support/mathUtils","../../../../interactive/dragEventPipeline"],(function(e,t,r,n,a,i,c,o,l,s,u){Object.defineProperty(t,"__esModule",{value:!0}),t.createGraphicMoveDragPipeline=function(e,t,r){var n=e.graphic,a=function(e,r){return t({action:e,graphic:n,dxScreen:r.screenDeltaX,dyScreen:r.screenDeltaY})};return r((function(e,t,r){t.next((function(e){return"start"===e.action&&a("start",e),e})).next(u.dragGraphic(n)).next((function(e){switch(e.action){case"start":case"update":(e.translationX||e.translationY||e.translationZ)&&a("update",e);break;case"end":a("end",e)}return e})),r.next(u.resetGraphic(n)).next((function(){a("end",{screenDeltaX:0,screenDeltaY:0})}))}))},t.primaryShapeOrientation=function(e){if(r.isNone(e)||"polyline"!==e.type&&"polygon"!==e.type)return 0;var t=o.convexHull(e),a=t&&t.rings&&t.rings[0];if(!a)return 0;!function(e){for(var t=0,r=0,n=0,a=e;n<a.length;n++){var i=a[n];t+=i[0],r+=i[1]}t/=e.length,r/=e.length;for(var c=0,o=e;c<o.length;c++){(i=o[c])[0]-=t,i[1]-=r}}(a);for(var c=[],u=0;u<a.length-1;u++){var v=Math.atan2(a[u+1][1]-a[u][1],a[u+1][0]-a[u][0]),m=s.cyclical2PI.normalize(v)%(Math.PI/2);c.push(m)}for(var h=c.sort((function(e,t){return e-t})),d=null,x=0,y=Number.POSITIVE_INFINITY,b=0,I=h;b<I.length;b++){if((v=I[b])!==d){d=v,n.mat2.fromRotation(f,v),l.empty(g);for(var P=0,D=a;P<D.length;P++){var M=D[P];i.vec2.transformMat2(p,M,f),l.expandPointInPlace(g,p)}var N=l.area(g);((N>y?y/N:N/y)>=.99&&v<x||N<y)&&(x=v,y=N)}}return x};var f=a.mat2f64.create(),g=l.create(),p=c.vec2f64.create()}));