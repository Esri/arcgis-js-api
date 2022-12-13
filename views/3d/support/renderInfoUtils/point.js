/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../layers/graphics/elevationAlignmentUtils"],(function(e,n){"use strict";function t(e,t,o,l,i){const r=new Float64Array(3*e.length),a=new Float64Array(r.length);e.forEach(((e,n)=>{r[3*n+0]=e[0],r[3*n+1]=e[1],r[3*n+2]=e.length>2?e[2]:0}));const s=n.applyPerVertexElevationAlignment(r,t,0,a,0,r,0,r.length/3,o,l,i),c=null!=s;return{numVertices:e.length,position:r,mapPosition:a,projectionSuccess:c,sampledElevation:s}}e.geometryToRenderInfo=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
