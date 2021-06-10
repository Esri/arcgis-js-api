/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function i(n,i,t){return n[0]=i[0]-t[0],n[1]=i[1]-t[1],n}function t(n,i){return Math.sqrt(n*n+i*i)}function o(n){const i=t(n[0],n[1]);n[0]/=i,n[1]/=i}function u(n,i){return t(n[0]-i[0],n[1]-i[1])}function e(n){return"function"==typeof n}function r(n){return 1/Math.max(n,1)}function s(n){return void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax}function c(n){return void 0!==n.points}function f(n){return void 0!==n.x&&void 0!==n.y}function d(n){return void 0!==n.paths}function v(n){return void 0!==n.rings}n.dist=u,n.getLimitCosine=r,n.isExtent=s,n.isFunction=e,n.isMultipoint=c,n.isPoint=f,n.isPolygon=v,n.isPolyline=d,n.len=t,n.normalize=o,n.sub=i,Object.defineProperty(n,"__esModule",{value:!0})}));
