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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/libs/earcut/earcut","./coordsUtils","./meshUtils/deduplicate"],function(n,e,t,r,o){function a(n){for(var e=l(n.rings,n.hasZ),r=[],a=0,h=0,s=0,f=e.polygons;s<f.length;s++){var u=f[s];!function(n){var o=n.count,i=n.index,l=new Float64Array(e.position.buffer,3*i*e.position.BYTES_PER_ELEMENT,3*o),s=n.holeIndices.map(function(n){return n-i}),f=new Uint32Array(t(l,s,3));r.push({position:l,faces:f}),a+=l.length,h+=f.length}(u)}var g=i(r,a,h),c=o.default(g.position.buffer,6,g.faces);return g.position=new Float64Array(c.buffer),g.faces=c.indices,g}function i(n,e,t){if(1===n.length)return n[0];for(var r=new Float64Array(e),o=new Uint32Array(t),a=0,i=0,l=0,h=0,s=n;h<s.length;h++){for(var f=s[h],u=0;u<f.position.length;u++)r[a++]=f.position[u];for(var u=0;u<f.faces.length;u++)o[i++]=f.faces[u]+l;l=a/3}return{position:r,faces:o}}function l(n,e){for(var t=n.length,r=new Array(t),o=new Array(t),a=new Array(t),i=0,l=0,f=0,u=0,g=0;g<t;++g)u+=n[g].length;for(var c=new Float64Array(3*u),p=0,v=t-1;v>=0;v--){var d=n[v],y=s(d);if(y&&1!==t)r[i++]=d;else{for(var w=d.length,g=0;g<i;++g)w+=r[g].length;var A={index:p,pathLengths:new Array(i+1),count:w,holeIndices:new Array(i)};A.pathLengths[0]=d.length,d.length>0&&(a[f++]={index:p,count:d.length}),p=y?h(d,d.length-1,-1,c,p,d.length,e):h(d,0,1,c,p,d.length,e);for(var x=0;x<i;++x){var b=r[x];A.holeIndices[x]=p,A.pathLengths[x+1]=b.length,b.length>0&&(a[f++]={index:p,count:b.length}),p=h(b,0,1,c,p,b.length,e)}i=0,A.count>0&&(o[l++]=A)}}for(var x=0;x<i;++x){var b=r[x];b.length>0&&(a[f++]={index:p,count:b.length}),p=h(b,0,1,c,p,b.length,e)}return l<t&&(o.length=l),f<t&&(a.length=f),{position:c,polygons:o,outlines:a}}function h(n,e,t,r,o,a,i){o*=3;for(var l=0;l<a;++l){var h=n[e];r[o++]=h[0],r[o++]=h[1],r[o++]=i?h[2]:0,e+=t}return o/3}function s(n){return!r.isClockwise(n,!1,!1)}Object.defineProperty(e,"__esModule",{value:!0}),e.triangulate=a,e.pathsToTriangulationInfo=l});