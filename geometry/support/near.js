/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../Point","./coordsUtils","../../geometry","../../chunks/vec2"],(function(e,n,t,i,o){"use strict";e.nearestCoordinate=function(e,i){const{spatialReference:r}=i,c=[i.x,i.y];let s=Number.POSITIVE_INFINITY,a=0,x=0;const m=[0,0],y="extent"===e.type?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:e.rings;for(const e of y)for(let n=0;n<e.length-1;n++){t.projectPointOnLine(m,c,e,n);const i=o.distance(c,m);i<s&&(s=i,a=m[0],x=m[1])}return{coordinate:new n({x:a,y:x,spatialReference:r}),distance:s}},Object.defineProperty(e,"__esModule",{value:!0})}));
