/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../layers/graphics/elevationAlignmentUtils","../../webgl-engine/lib/DoubleArray"],(function(e,n,t){"use strict";function o(e,o,l,r,i){const s=t.newDoubleArray(3*e.length),a=t.newDoubleArray(s.length);e.forEach(((e,n)=>{s[3*n+0]=e[0],s[3*n+1]=e[1],s[3*n+2]=e.length>2?e[2]:0}));const g=n.applyPerVertexElevationAlignment(s,o,0,a,0,s,0,s.length/3,l,r,i),c=null!=g;return{numVertices:e.length,position:s,mapPositions:a,projectionSuccess:c,sampledElevation:g}}e.geometryToRenderInfo=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
