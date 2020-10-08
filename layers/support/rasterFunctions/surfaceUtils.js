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

define(["require","exports","../PixelBlock"],(function(e,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.tintHillshade=a.hillshade=a.calculateHillshadeParams=void 0;var t=function(e){return e&&"esri.layers.support.PixelBlock"===e.declaredClass&&e.pixels&&e.pixels.length>0};function s(e){var a=e.altitude,i=e.azimuth,t=e.hillshadeType,s=e.pixelSizePower,l=e.pixelSizeFactor,r=e.scalingType,n=e.isGCS,o=e.resolution,h="multi-directional"===t?2*e.zFactor:e.zFactor,c=o.x,u=o.y,d=h/(8*c),f=h/(8*u);if(n&&h>.001&&(d/=111e3,f/=111e3),"adjusted"===r)if(n){var p=111e3*c,M=111e3*u;d=(h+Math.pow(p,s)*l)/(8*p),f=(h+Math.pow(M,s)*l)/(8*M)}else d=(h+Math.pow(c,s)*l)/(8*c),f=(h+Math.pow(u,s)*l)/(8*u);var w=(90-a)*Math.PI/180,x=Math.cos(w),m=(360-i+90)*Math.PI/180,v=Math.sin(w)*Math.cos(m),y=Math.sin(w)*Math.sin(m),A=[315,270,225,360,180,0],g=[60,60,60,60,60,90],P=new Float32Array([3,5,3,2,1,4]),Z=P.reduce((function(e,a){return e+a})),k=P.map((function(e){return e/Z})),b="multi-directional"===t?A.length:1,C=new Float32Array(6),F=new Float32Array(6),z=new Float32Array(6);if("multi-directional"===t)for(var T=0;T<b;T++)i=A[T],w=(90-(a=g[T]))*Math.PI/180,x=Math.cos(w),m=(360-i+90)*Math.PI/180,v=Math.sin(w)*Math.cos(m),y=Math.sin(w)*Math.sin(m),C[T]=x,F[T]=v,z[T]=y;else C.fill(x),F.fill(v),z.fill(y);return{resolution:o,factor:[d,f],sinZcosA:v,sinZsinA:y,cosZ:x,sinZcosAs:F,sinZsinAs:z,cosZs:C,weights:k,hillshadeType:["traditional","multi-directional"].indexOf(t)}}a.calculateHillshadeParams=s,a.hillshade=function(e,a){if(!t(e))return e;var l=e.width,r=e.height,n=e.mask,o=new Uint8Array(l*r);n&&o.set(n);for(var h,c,u,d,f,p,M,w,x=s(a),m=x.factor,v=x.sinZcosA,y=x.sinZsinA,A=x.cosZ,g=x.sinZcosAs,P=x.sinZsinAs,Z=x.cosZs,k=x.weights,b=m[0],C=m[1],F=a.hillshadeType,z=e.pixels[0],T=new Uint8Array(l*r),U=1;U<r-1;U++)for(var H=U*l,I=1;I<l-1;I++)if(!n||n[H+I]){var S=8;if(n&&(S=n[H-l+I-1]+n[H-l+I]+n[H-l+I+1]+n[H+I-1]+n[H+I+1]+n[H+l+I-1]+n[H+l+I]+n[H+l+I+1])<7)T[H+I]=0,o[H+I]=0;else{7===S?(h=n[H-l+I-1]?z[H-l+I-1]:z[H+I],c=n[H-l+I]?z[H-l+I]:z[H+I],u=n[H-l+I+1]?z[H-l+I+1]:z[H+I],d=n[H+I-1]?z[H+I-1]:z[H+I],f=n[H+I+1]?z[H+I+1]:z[H+I],p=n[H+l+I-1]?z[H+l+I-1]:z[H+I],M=n[H+l+I]?z[H+l+I]:z[H+I],w=n[H+l+I+1]?z[H+l+I+1]:z[H+I]):(h=z[H-l+I-1],c=z[H-l+I],u=z[H-l+I+1],d=z[H+I-1],f=z[H+I+1],p=z[H+l+I-1],M=z[H+l+I],w=z[H+l+I+1]);var j=(u+f+f+w-(h+d+d+p))*b,q=(p+M+M+w-(h+c+c+u))*C,B=Math.sqrt(1+j*j+q*q),O=0;if("traditional"===F)(G=255*(A+y*q-v*j)/B)<0&&(G=0),O=G;else for(var V=P.length,_=0;_<V;_++){var G;(G=255*(Z[_]+P[_]*q-g[_]*j)/B)<0&&(G=0),O+=G*k[_]}T[H+I]=255&O}}else T[H+I]=0;for(U=0;U<r;U++)T[U*l]=T[U*l+1],T[(U+1)*l-1]=T[(U+1)*l-2];for(U=1;U<l-1;U++)T[U]=T[U+l],T[U+(r-1)*l]=T[U+(r-2)*l];return new i({width:l,height:r,pixels:[T],mask:n?o:null,pixelType:"u8",validPixelCount:e.validPixelCount,statistics:[{minValue:0,maxValue:255}]})},a.tintHillshade=function(e,a,i,s){if(t(e)&&t(a)){for(var l=s.min,r=s.max,n=e.pixels[0],o=a.pixels,h=a.mask,c=o[0],u=255.00001/(r-l),d=new Uint8ClampedArray(c.length),f=new Uint8ClampedArray(c.length),p=new Uint8ClampedArray(c.length),M=i.length-1,w=0;w<c.length;w++)if(!h||0!==h[w]){var x=Math.floor((c[w]-l)*u),m=i[x<0?0:x>M?M:x],v=m[0],y=m[1],A=n[w],g=A*y,P=g*(1-Math.abs(v%2-1)),Z=A-g;switch(Math.floor(v)){case 0:d[w]=g+Z,f[w]=P+Z,p[w]=Z;break;case 1:d[w]=P+Z,f[w]=g+Z,p[w]=Z;break;case 2:d[w]=Z,f[w]=g+Z,p[w]=P+Z;break;case 3:d[w]=Z,f[w]=P+Z,p[w]=g+Z;break;case 4:d[w]=P+Z,f[w]=Z,p[w]=g+Z;break;case 5:case 6:d[w]=g+Z,f[w]=Z,p[w]=P+Z}}e.pixels=[d,f,p],e.updateStatistics()}}}));