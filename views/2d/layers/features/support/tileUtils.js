/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(o){"use strict";function e(o,e,l,r){const t=o.clone(),c=1<<t.level,n=t.col+e,i=t.row+l;return r&&n<0?(t.col=n+c,t.world-=1):n>=c?(t.col=n-c,t.world+=1):t.col=n,t.row=i,t}o.getPow2NeighborKey=e,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
