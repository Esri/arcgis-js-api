/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../geometry","../../chunks/vec2","./coordsUtils","../Point"],(function(e,n,t,i,o){"use strict";function r(e,n){const{spatialReference:r}=n,c=[n.x,n.y];let s=Number.POSITIVE_INFINITY,a=0,x=0;const m=[0,0],y="extent"===e.type?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:e.rings;for(const o of y)for(let e=0;e<o.length-1;e++){i.projectPointOnLine(m,c,o,e);const n=t.distance(c,m);n<s&&(s=n,a=m[0],x=m[1])}return{coordinate:new o({x:a,y:x,spatialReference:r}),distance:s}}e.nearestCoordinate=r,Object.defineProperty(e,"__esModule",{value:!0})}));
