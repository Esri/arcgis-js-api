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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/global","../../views/3d/support/mathUtils"],function(t,e,r,a){function n(t,e,r,a){for(var n,o=e.blurRadius,i=e.fieldOffset,l=e.field,c=new Float64Array(r*a),h=u(o),g=Math.round(4.5*o),d=Number.NEGATIVE_INFINITY,m=f(l,i),p=0,y=t;p<y.length;p++)for(var v=y[p],s=v.geometry,b=v.attributes,w=s.x-g,M=s.y-g,I=Math.max(0,w),x=Math.max(0,M),A=Math.min(a,s.y+g),U=Math.min(r,s.x+g),F=+m(b),C=x;C<A;C++)for(var D=h[C-M],N=I;N<U;N++){var E=h[N-w],G=C*r+N;n=c[G]+=D*E*F,n>d&&(d=n)}return{matrix:c.buffer,max:d}}function o(t,e,r,a,n,o){var u=t.getContext("2d");u.clearRect(0,0,e,e);var f=u.getImageData(0,0,e,e);return f.data.set(new Uint8ClampedArray(i(e,r,a,n,o))),u.putImageData(f,0,0),t}function i(t,e,r,n,o){for(var i=new Uint32Array(t*t),u=("buffer"in e?e:new Float64Array(e)),f=("buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer)),l=f.length/(o-n),c=0;c<u.length;c++){var h=u[c],g=Math.floor((h-n)*l);i[c]=f[a.clamp(g,0,f.length-1)]}return i.buffer}function u(t){for(var e=Math.round(4.5*t),r=t*t,a=new Float64Array(2*e+1),n=0;n<=a.length;n++)a[n]=Math.exp(-Math.pow(n-e,2)/(2*r))/Math.sqrt(2*Math.PI)*(t/2);return a}function f(t,e){return"function"==typeof t?t:t?"string"==typeof e?function(e){return-1*+e[t]}:function(r){return+r[t]+e}:function(t){return 1}}Object.defineProperty(e,"__esModule",{value:!0}),e.generateGradient=function(){if(!("document"in r))return function(t){return null};var t=document.createElement("canvas"),e=t.getContext("2d");return t.height=512,t.width=1,function(r){for(var a=e.createLinearGradient(0,0,0,t.height),n=0,o=r.colorStops;n<o.length;n++){var i=o[n],u=i.ratio,f=i.color;a.addColorStop(u,"rgba("+f[0]+", "+f[1]+", "+f[2]+", "+f[3]+")")}return e.fillStyle=a,e.fillRect(0,0,1,t.height),e.getImageData(0,0,1,t.height).data}}(),e.calculateHeatmapIntensityInfo=n,e.drawHeatmap=o,e.createHeatmapImageData=i,e.createKernel=u,e.createValueFunction=f});