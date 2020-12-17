/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function i(n,i){return Math.sqrt(n*n+i*i)}n.dist=function(n,t){return i(n[0]-t[0],n[1]-t[1])},n.getLimitCosine=function(n){return 1/Math.max(n,1)},n.isExtent=function(n){return void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax},n.isFunction=function(n){return"function"==typeof n},n.isMultipoint=function(n){return void 0!==n.points},n.isPoint=function(n){return void 0!==n.x&&void 0!==n.y},n.isPolygon=function(n){return void 0!==n.rings},n.isPolyline=function(n){return void 0!==n.paths},n.len=i,n.normalize=function(n){const t=i(n[0],n[1]);n[0]/=t,n[1]/=t},n.sub=function(n,i,t){return n[0]=i[0]-t[0],n[1]=i[1]-t[1],n},Object.defineProperty(n,"__esModule",{value:!0})}));
