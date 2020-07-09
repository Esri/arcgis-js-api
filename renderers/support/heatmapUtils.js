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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../core/global","../../core/mathUtils"],(function(t,e,r,a){function n(t,e,r,n,i){for(var o=new Uint32Array(t*t),u=("buffer"in e?e:new Float64Array(e)),f=("buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer)),c=f.length/(i-n),l=0;l<u.length;l++){var h=u[l],g=Math.floor((h-n)*c);o[l]=f[a.clamp(g,0,f.length-1)]}return o.buffer}function i(t){for(var e=Math.round(3*t),r=2*t*t,a=new Float64Array(2*e+1),n=0;n<=a.length;n++)a[n]=Math.exp(-Math.pow(n-e,2)/r)/Math.sqrt(2*Math.PI)*(t/2);return a}function o(t,e){return"function"==typeof t?t:t?"string"==typeof e?function(e){return-1*+e[t]}:function(r){return+r[t]+e}:function(){return 1}}Object.defineProperty(e,"__esModule",{value:!0}),e.generateGradient=function(){if(!("document"in r))return function(){return null};var t=document.createElement("canvas"),e=t.getContext("2d");return t.height=512,t.width=1,function(r){e.clearRect(0,0,1,t.height);for(var a=e.createLinearGradient(0,0,0,t.height),n=0,i=r.colorStops;n<i.length;n++){var o=i[n],u=o.ratio,f=o.color;a.addColorStop(Math.max(u,.001),"rgba("+f[0]+", "+f[1]+", "+f[2]+", "+f[3]+")")}return e.fillStyle=a,e.fillRect(0,0,1,t.height),e.getImageData(0,0,1,t.height).data}}(),e.calculateHeatmapIntensityInfo=function(t,e,r,a){for(var n,u=e.blurRadius,f=e.fieldOffset,c=e.field,l=new Float64Array(r*a),h=i(u),g=Math.round(3*u),m=Number.NEGATIVE_INFINITY,d=o(c,f),y=0,v=t;y<v.length;y++)for(var p=v[y],s=p.geometry,M=p.attributes,b=s.x-g,w=s.y-g,I=Math.max(0,b),x=Math.max(0,w),A=Math.min(a,s.y+g),U=Math.min(r,s.x+g),F=+d(M),D=x;D<A;D++)for(var N=h[D-w],R=I;R<U;R++){var C=h[R-b];(n=l[D*r+R]+=N*C*F)>m&&(m=n)}return{matrix:l.buffer,max:m}},e.drawHeatmap=function(t,e,r,a,i,o){t.canvas.width=t.canvas.height=e,t.clearRect(0,0,e,e);var u=t.getImageData(0,0,e,e);r&&a&&u.data.set(new Uint8ClampedArray(n(e,r,a,i,o))),t.putImageData(u,0,0)},e.createHeatmapImageData=n,e.createKernel=i,e.createValueFunction=o}));