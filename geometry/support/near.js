/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../geometry","../../chunks/vec2","./coordsUtils","../Point"],(function(e,n,t,o,i){"use strict";function r(e,n){const{spatialReference:r}=n,s=[n.x,n.y];let c=Number.POSITIVE_INFINITY,a=0,m=0;const x=[0,0],l="extent"===e.type?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:e.rings;for(const i of l)for(let e=0;e<i.length-1;e++){o.projectPointOnLine(x,s,i,e);const n=t.distance(s,x);n<c&&(c=n,a=x[0],m=x[1])}return{coordinate:new i({x:a,y:m,spatialReference:r}),distance:c}}e.nearestCoordinate=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
