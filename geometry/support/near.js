/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../geometry","../../chunks/vec2","./coordsUtils","../Point"],(function(e,n,t,o,i){"use strict";function r(e,n){const{spatialReference:r}=n,c=[n.x,n.y];let s=Number.POSITIVE_INFINITY,a=0,m=0;const x=[0,0],y="extent"===e.type?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:e.rings;for(const i of y)for(let e=0;e<i.length-1;e++){o.projectPointOnLine(x,c,i,e);const n=t.distance(c,x);n<s&&(s=n,a=x[0],m=x[1])}return{coordinate:new i({x:a,y:m,spatialReference:r}),distance:s}}e.nearestCoordinate=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
