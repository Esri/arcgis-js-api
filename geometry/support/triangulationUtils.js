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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/libs/earcut/earcut","./coordsUtils","./meshUtils/deduplicate"],(function(n,e,t,r,o){"use strict";function i(n,e,t){for(var o=n.length,i=new Array(o),l=new Array(o),s=new Array(o),h=0,g=0,u=0,f=0,c=0;c<o;++c)f+=n[c].length;for(var p,d=new Float64Array(3*f),v=0,y=o-1;y>=0;y--){var w=n[y],A=1===t&&(p=w,!r.isClockwise(p,!1,!1));if(A&&1!==o)i[h++]=w;else{var x=w.length;for(c=0;c<h;++c)x+=i[c].length;var I={index:v,pathLengths:new Array(h+1),count:x,holeIndices:new Array(h)};I.pathLengths[0]=w.length,w.length>0&&(s[u++]={index:v,count:w.length}),v=A?a(w,w.length-1,-1,d,v,w.length,e):a(w,0,1,d,v,w.length,e);for(var T=0;T<h;++T){var b=i[T];I.holeIndices[T]=v,I.pathLengths[T+1]=b.length,b.length>0&&(s[u++]={index:v,count:b.length}),v=a(b,0,1,d,v,b.length,e)}h=0,I.count>0&&(l[g++]=I)}}for(T=0;T<h;++T){(b=i[T]).length>0&&(s[u++]={index:v,count:b.length}),v=a(b,0,1,d,v,b.length,e)}return g<o&&(l.length=g),u<o&&(s.length=u),{position:d,polygons:l,outlines:s}}function a(n,e,t,r,o,i,a){o*=3;for(var l=0;l<i;++l){var s=n[e];r[o++]=s[0],r[o++]=s[1],r[o++]=a?s[2]:0,e+=t}return o/3}Object.defineProperty(e,"__esModule",{value:!0}),e.pathsToTriangulationInfo=e.triangulate=void 0,e.triangulate=function(n){for(var e=i(n.rings,n.hasZ,1),r=[],a=0,l=0,s=function(n){var o=n.count,i=n.index,s=new Float64Array(e.position.buffer,3*i*e.position.BYTES_PER_ELEMENT,3*o),h=n.holeIndices.map((function(n){return n-i})),g=new Uint32Array(t.earcut(s,h,3));r.push({position:s,faces:g}),a+=s.length,l+=g.length},h=0,g=e.polygons;h<g.length;h++){s(g[h])}var u=function(n,e,t){if(1===n.length)return n[0];for(var r=new Float64Array(e),o=new Uint32Array(t),i=0,a=0,l=0,s=0,h=n;s<h.length;s++){for(var g=h[s],u=0;u<g.position.length;u++)r[i++]=g.position[u];for(u=0;u<g.faces.length;u++)o[a++]=g.faces[u]+l;l=i/3}return{position:r,faces:o}}(r,a,l),f=o.default(u.position.buffer,6,{originalIndices:u.faces});return u.position=new Float64Array(f.buffer),u.faces=f.indices,u},e.pathsToTriangulationInfo=i}));