// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/libs/earcut/earcut","./coordsUtils"],function(n,e,r,t){function o(n){for(var e=i(n.rings,n.hasZ),t=[],o=0,l=0,h=0,g=e.polygons;h<g.length;h++){var s=g[h];!function(n){var a=n.count,i=n.index,h=new Float64Array(e.position.buffer,3*i*e.position.BYTES_PER_ELEMENT,3*a),g=n.holeIndices.map(function(n){return n-i}),s=new Uint32Array(r(h,g,3));t.push({position:h,faces:s}),o+=h.length,l+=s.length}(s)}return a(t,o,l)}function a(n,e,r){if(1===n.length)return n[0];for(var t=new Float64Array(e),o=new Uint32Array(r),a=0,i=0,l=0,h=n;l<h.length;l++){for(var g=h[l],s=0;s<g.position.length;s++)t[a++]=g.position[s];for(var s=0;s<g.faces.length;s++)o[i++]=g.faces[s]}return{position:t,faces:o}}function i(n,e){for(var r=n.length,t=new Array(r),o=new Array(r),a=new Array(r),i=0,g=0,s=0,u=0,f=0;f<r;++f)u+=n[f].length;for(var c=new Float64Array(3*u),v=0,p=r-1;p>=0;p--){var y=n[p];if(h(y)&&1!==r)t[i++]=y;else{for(var d=y.length,f=0;f<i;++f)d+=t[f].length;var w={index:v,pathLengths:new Array(i+1),count:d,holeIndices:new Array(i)};w.pathLengths[0]=y.length,y.length>0&&(a[s++]={index:v,count:y.length}),v=l(y,0,c,v,y.length,e);for(var A=0;A<i;++A){var x=t[A];w.holeIndices[A]=v,w.pathLengths[A+1]=x.length,x.length>0&&(a[s++]={index:v,count:x.length}),v=l(x,0,c,v,x.length,e)}i=0,w.count>0&&(o[g++]=w)}}for(var A=0;A<i;++A){var x=t[A];x.length>0&&(a[s++]={index:v,count:x.length}),v=l(x,0,c,v,x.length,e)}return g<r&&(o.length=g),s<r&&(a.length=s),{position:c,polygons:o,outlines:a}}function l(n,e,r,t,o,a){t*=3;for(var i=0;i<o;++i){var l=n[e++];r[t++]=l[0],r[t++]=l[1],r[t++]=a?l[2]:0}return t/3}function h(n){return!t.isClockwise(n,!1,!1)}Object.defineProperty(e,"__esModule",{value:!0}),e.triangulate=o,e.pathsToTriangulationInfo=i});