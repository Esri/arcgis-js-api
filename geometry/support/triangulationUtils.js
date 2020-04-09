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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/libs/earcut/earcut","./coordsUtils","./meshUtils/deduplicate"],(function(n,e,t,r,o){function i(n,e,t){for(var o=n.length,i=new Array(o),l=new Array(o),s=new Array(o),h=0,f=0,g=0,u=0,c=0;c<o;++c)u+=n[c].length;for(var p,d=new Float64Array(3*u),v=0,y=o-1;y>=0;y--){var w=n[y],A=1===t&&(p=w,!r.isClockwise(p,!1,!1));if(A&&1!==o)i[h++]=w;else{var x=w.length;for(c=0;c<h;++c)x+=i[c].length;var b={index:v,pathLengths:new Array(h+1),count:x,holeIndices:new Array(h)};b.pathLengths[0]=w.length,w.length>0&&(s[g++]={index:v,count:w.length}),v=A?a(w,w.length-1,-1,d,v,w.length,e):a(w,0,1,d,v,w.length,e);for(var E=0;E<h;++E){var I=i[E];b.holeIndices[E]=v,b.pathLengths[E+1]=I.length,I.length>0&&(s[g++]={index:v,count:I.length}),v=a(I,0,1,d,v,I.length,e)}h=0,b.count>0&&(l[f++]=b)}}for(E=0;E<h;++E){(I=i[E]).length>0&&(s[g++]={index:v,count:I.length}),v=a(I,0,1,d,v,I.length,e)}return f<o&&(l.length=f),g<o&&(s.length=g),{position:d,polygons:l,outlines:s}}function a(n,e,t,r,o,i,a){o*=3;for(var l=0;l<i;++l){var s=n[e];r[o++]=s[0],r[o++]=s[1],r[o++]=a?s[2]:0,e+=t}return o/3}Object.defineProperty(e,"__esModule",{value:!0}),e.triangulate=function(n){for(var e=i(n.rings,n.hasZ,1),r=[],a=0,l=0,s=function(n){var o=n.count,i=n.index,s=new Float64Array(e.position.buffer,3*i*e.position.BYTES_PER_ELEMENT,3*o),h=n.holeIndices.map((function(n){return n-i})),f=new Uint32Array(t.earcut(s,h,3));r.push({position:s,faces:f}),a+=s.length,l+=f.length},h=0,f=e.polygons;h<f.length;h++){s(f[h])}var g=function(n,e,t){if(1===n.length)return n[0];for(var r=new Float64Array(e),o=new Uint32Array(t),i=0,a=0,l=0,s=0,h=n;s<h.length;s++){for(var f=h[s],g=0;g<f.position.length;g++)r[i++]=f.position[g];for(g=0;g<f.faces.length;g++)o[a++]=f.faces[g]+l;l=i/3}return{position:r,faces:o}}(r,a,l),u=o.default(g.position.buffer,6,{originalIndices:g.faces});return g.position=new Float64Array(u.buffer),g.faces=u.indices,g},e.pathsToTriangulationInfo=i}));