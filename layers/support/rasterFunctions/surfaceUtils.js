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

define(["require","exports","../PixelBlock"],(function(e,a,i){Object.defineProperty(a,"__esModule",{value:!0});var t=function(e){return e&&"esri.layers.support.PixelBlock"===e.declaredClass&&e.pixels&&e.pixels.length>0};function s(e){var a=e.altitude,i=e.azimuth,t=e.hillshadeType,s=e.pixelSizePower,r=e.pixelSizeFactor,l=e.scalingType,n=e.isGCS,o=e.resolution,h="multi-directional"===t?2*e.zFactor:e.zFactor,c=o.x,u=o.y,f=h/(8*c),d=h/(8*u);if(n&&h>.001&&(f/=111e3,d/=111e3),"adjusted"===l)if(n){var p=111e3*c,M=111e3*u;f=(h+Math.pow(p,s)*r)/(8*p),d=(h+Math.pow(M,s)*r)/(8*M)}else f=(h+Math.pow(c,s)*r)/(8*c),d=(h+Math.pow(u,s)*r)/(8*u);var w=(90-a)*Math.PI/180,x=Math.cos(w),m=(360-i+90)*Math.PI/180,v=Math.sin(w)*Math.cos(m),y=Math.sin(w)*Math.sin(m),A=[315,270,225,360,180,0],g=[60,60,60,60,60,90],Z=new Float32Array([3,5,3,2,1,4]),P=Z.reduce((function(e,a){return e+a})),k=Z.map((function(e){return e/P})),b="multi-directional"===t?A.length:1,C=new Float32Array(6),F=new Float32Array(6),z=new Float32Array(6);if("multi-directional"===t)for(var T=0;T<b;T++)i=A[T],w=(90-(a=g[T]))*Math.PI/180,x=Math.cos(w),m=(360-i+90)*Math.PI/180,v=Math.sin(w)*Math.cos(m),y=Math.sin(w)*Math.sin(m),C[T]=x,F[T]=v,z[T]=y;else C.fill(x),F.fill(v),z.fill(y);return{resolution:o,factor:[f,d],sinZcosA:v,sinZsinA:y,cosZ:x,sinZcosAs:F,sinZsinAs:z,cosZs:C,weights:k,hillshadeType:["traditional","multi-directional"].indexOf(t)}}a.calculateHillshadeParams=s,a.hillshade=function(e,a){if(!t(e))return e;var r=e.width,l=e.height,n=e.mask,o=new Uint8Array(r*l);n&&o.set(n);for(var h,c,u,f,d,p,M,w,x=s(a),m=x.factor,v=x.sinZcosA,y=x.sinZsinA,A=x.cosZ,g=x.sinZcosAs,Z=x.sinZsinAs,P=x.cosZs,k=x.weights,b=m[0],C=m[1],F=a.hillshadeType,z=e.pixels[0],T=new Uint8Array(r*l),U=1;U<l-1;U++)for(var I=U*r,S=1;S<r-1;S++)if(!n||n[I+S]){var j=8;if(n&&(j=n[I-r+S-1]+n[I-r+S]+n[I-r+S+1]+n[I+S-1]+n[I+S+1]+n[I+r+S-1]+n[I+r+S]+n[I+r+S+1])<7)T[I+S]=0,o[I+S]=0;else{7===j?(h=n[I-r+S-1]?z[I-r+S-1]:z[I+S],c=n[I-r+S]?z[I-r+S]:z[I+S],u=n[I-r+S+1]?z[I-r+S+1]:z[I+S],f=n[I+S-1]?z[I+S-1]:z[I+S],d=n[I+S+1]?z[I+S+1]:z[I+S],p=n[I+r+S-1]?z[I+r+S-1]:z[I+S],M=n[I+r+S]?z[I+r+S]:z[I+S],w=n[I+r+S+1]?z[I+r+S+1]:z[I+S]):(h=z[I-r+S-1],c=z[I-r+S],u=z[I-r+S+1],f=z[I+S-1],d=z[I+S+1],p=z[I+r+S-1],M=z[I+r+S],w=z[I+r+S+1]);var q=(u+d+d+w-(h+f+f+p))*b,B=(p+M+M+w-(h+c+c+u))*C,H=Math.sqrt(1+q*q+B*B),O=0;if("traditional"===F)(G=255*(A+y*B-v*q)/H)<0&&(G=0),O=G;else for(var V=Z.length,_=0;_<V;_++){var G;(G=255*(P[_]+Z[_]*B-g[_]*q)/H)<0&&(G=0),O+=G*k[_]}T[I+S]=255&O}}else T[I+S]=0;for(U=0;U<l;U++)T[U*r]=T[U*r+1],T[(U+1)*r-1]=T[(U+1)*r-2];for(U=1;U<r-1;U++)T[U]=T[U+r],T[U+(l-1)*r]=T[U+(l-2)*r];return new i({width:r,height:l,pixels:[T],mask:n?o:null,pixelType:"u8",validPixelCount:e.validPixelCount,statistics:[{minValue:0,maxValue:255}]})},a.tintHillshade=function(e,a,i,s){if(t(e)&&t(a)){for(var r=s.min,l=s.max,n=e.pixels[0],o=a.pixels,h=a.mask,c=o[0],u=255.00001/(l-r),f=new Uint8ClampedArray(c.length),d=new Uint8ClampedArray(c.length),p=new Uint8ClampedArray(c.length),M=i.length-1,w=0;w<c.length;w++)if(!h||0!==h[w]){var x=Math.floor((c[w]-r)*u),m=i[x<0?0:x>M?M:x],v=m[0],y=m[1],A=n[w],g=A*y,Z=g*(1-Math.abs(v%2-1)),P=A-g;switch(Math.floor(v)){case 0:f[w]=g+P,d[w]=Z+P,p[w]=P;break;case 1:f[w]=Z+P,d[w]=g+P,p[w]=P;break;case 2:f[w]=P,d[w]=g+P,p[w]=Z+P;break;case 3:f[w]=P,d[w]=Z+P,p[w]=g+P;break;case 4:f[w]=Z+P,d[w]=P,p[w]=g+P;break;case 5:case 6:f[w]=g+P,d[w]=P,p[w]=Z+P}}e.pixels=[f,d,p],e.updateStatistics()}}}));