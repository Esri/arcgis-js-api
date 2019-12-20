// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/libs/earcut/earcut","./coordsUtils","./meshUtils/deduplicate"],function(n,e,t,r,o){function i(n){for(var e=l(n.rings,n.hasZ,1),r=[],i=0,s=0,h=0,f=e.polygons;h<f.length;h++){var g=f[h];!function(n){var o=n.count,a=n.index,l=new Float64Array(e.position.buffer,3*a*e.position.BYTES_PER_ELEMENT,3*o),h=n.holeIndices.map(function(n){return n-a}),f=new Uint32Array(t(l,h,3));r.push({position:l,faces:f}),i+=l.length,s+=f.length}(g)}var u=a(r,i,s),c=o.default(u.position.buffer,6,{originalIndices:u.faces});return u.position=new Float64Array(c.buffer),u.faces=c.indices,u}function a(n,e,t){if(1===n.length)return n[0];for(var r=new Float64Array(e),o=new Uint32Array(t),i=0,a=0,l=0,s=0,h=n;s<h.length;s++){for(var f=h[s],g=0;g<f.position.length;g++)r[i++]=f.position[g];for(var g=0;g<f.faces.length;g++)o[a++]=f.faces[g]+l;l=i/3}return{position:r,faces:o}}function l(n,e,t){for(var r=n.length,o=new Array(r),i=new Array(r),a=new Array(r),l=0,f=0,g=0,u=0,c=0;c<r;++c)u+=n[c].length;for(var p=new Float64Array(3*u),v=0,d=r-1;d>=0;d--){var y=n[d],w=1===t&&h(y);if(w&&1!==r)o[l++]=y;else{for(var A=y.length,c=0;c<l;++c)A+=o[c].length;var x={index:v,pathLengths:new Array(l+1),count:A,holeIndices:new Array(l)};x.pathLengths[0]=y.length,y.length>0&&(a[g++]={index:v,count:y.length}),v=w?s(y,y.length-1,-1,p,v,y.length,e):s(y,0,1,p,v,y.length,e);for(var b=0;b<l;++b){var E=o[b];x.holeIndices[b]=v,x.pathLengths[b+1]=E.length,E.length>0&&(a[g++]={index:v,count:E.length}),v=s(E,0,1,p,v,E.length,e)}l=0,x.count>0&&(i[f++]=x)}}for(var b=0;b<l;++b){var E=o[b];E.length>0&&(a[g++]={index:v,count:E.length}),v=s(E,0,1,p,v,E.length,e)}return f<r&&(i.length=f),g<r&&(a.length=g),{position:p,polygons:i,outlines:a}}function s(n,e,t,r,o,i,a){o*=3;for(var l=0;l<i;++l){var s=n[e];r[o++]=s[0],r[o++]=s[1],r[o++]=a?s[2]:0,e+=t}return o/3}function h(n){return!r.isClockwise(n,!1,!1)}Object.defineProperty(e,"__esModule",{value:!0}),e.triangulate=i,e.pathsToTriangulationInfo=l});