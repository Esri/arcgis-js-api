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

define(["require","exports","../../core/global","../../core/mathUtils"],(function(t,e,a,r){"use strict";function n(t,e,a,n,u){for(var i=new Uint32Array(t*t),o=("buffer"in e?e:new Float64Array(e)),f=("buffer"in a?new Uint32Array(a.buffer):new Uint32Array(new Uint8Array(a).buffer)),c=f.length/(u-n),l=0;l<o.length;l++){var h=o[l],d=Math.floor((h-n)*c);i[l]=f[r.clamp(d,0,f.length-1)]}return i.buffer}function u(t){for(var e=Math.round(3*t),a=2*t*t,r=new Float64Array(2*e+1),n=0;n<=r.length;n++)r[n]=Math.exp(-Math.pow(n-e,2)/a)/Math.sqrt(2*Math.PI)*(t/2);return r}function i(t,e){return"function"==typeof t?t:t?"string"==typeof e?function(e){return-1*+e[t]}:function(a){return+a[t]+e}:function(){return 1}}function o(t,e){return null!=t?"string"==typeof e?function(e){return-1*+e.readAttribute(t)}:function(a){return+a.readAttribute(t)+e}:function(t){return 1}}Object.defineProperty(e,"__esModule",{value:!0}),e.createValueFunctionCursor=e.createValueFunction=e.createKernel=e.createHeatmapImageData=e.drawHeatmap=e.calculateHeatmapIntensityInfoReaders=e.calculateHeatmapIntensityInfo=e.generateGradient=void 0,e.generateGradient=function(){if(!("document"in a))return function(){return null};var t=document.createElement("canvas"),e=t.getContext("2d");return t.height=512,t.width=1,function(a){e.clearRect(0,0,1,t.height);for(var r=e.createLinearGradient(0,0,0,t.height),n=0,u=a.colorStops;n<u.length;n++){var i=u[n],o=i.ratio,f=i.color;r.addColorStop(Math.max(o,.001),"rgba("+f[0]+", "+f[1]+", "+f[2]+", "+f[3]+")")}return e.fillStyle=r,e.fillRect(0,0,1,t.height),e.getImageData(0,0,1,t.height).data}}(),e.calculateHeatmapIntensityInfo=function(t,e,a,r){for(var n,o=e.blurRadius,f=e.fieldOffset,c=e.field,l=new Float64Array(a*r),h=u(o),d=Math.round(3*o),m=Number.NEGATIVE_INFINITY,g=i(c,f),s=0,y=t;s<y.length;s++)for(var I=y[s],v=I.geometry,p=I.attributes,b=v.x-d,M=v.y-d,x=Math.max(0,b),w=Math.max(0,M),A=Math.min(r,v.y+d),F=Math.min(a,v.x+d),H=+g(p),N=w;N<A;N++)for(var R=h[N-M],C=x;C<F;C++){var G=h[C-b];(n=l[N*a+C]+=R*G*H)>m&&(m=n)}return{matrix:l.buffer,max:m}},e.calculateHeatmapIntensityInfoReaders=function(t,e,a,r){for(var n,i=e.blurRadius,f=e.fieldOffset,c=e.field,l=new Float64Array(a*r),h=u(i),d=Math.round(3*i),m=Number.NEGATIVE_INFINITY,g=o(c,f),s=new Set,y=0,I=t;y<I.length;y++)for(var v=I[y].getCursor();v.next();){var p=v.getObjectId();if(!s.has(p)){s.add(p);for(var b=v.readLegacyPointGeometry(),M=+g(v),x=b.x-d,w=b.y-d,A=Math.max(0,x),F=Math.max(0,w),H=Math.min(r,b.y+d),N=Math.min(a,b.x+d),R=F;R<H;R++)for(var C=h[R-w],G=A;G<N;G++){var U=h[G-x];(n=l[R*a+G]+=C*U*M)>m&&(m=n)}}}return{matrix:l.buffer,max:m}},e.drawHeatmap=function(t,e,a,r,u,i){t.canvas.width=t.canvas.height=e,t.clearRect(0,0,e,e);var o=t.getImageData(0,0,e,e);a&&r&&o.data.set(new Uint8ClampedArray(n(e,a,r,u,i))),t.putImageData(o,0,0)},e.createHeatmapImageData=n,e.createKernel=u,e.createValueFunction=i,e.createValueFunctionCursor=o}));