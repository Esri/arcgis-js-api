// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/lang"],(function(e){return{hillshade:function(e,t){if(null!==e&&null!==e.pixelBlock&&null!==e.pixelBlock.pixels){var l=this._clonePixelBlock(e.pixelBlock),i=t.altitude,a=t.azimuth,n=t.zFactor,o=t.psPower,s=t.psFactor,r=t.hillshadeType,x=t.slopeType,p=t.isGCS;1===r&&(n*=2);var h=l.width,c=l.height,f=l.pixels[0],u=l.mask,M=new Uint8Array(h*c);u&&M.set(u);var m=new Uint8Array(h*c),k=(e.extent.xmax-e.extent.xmin)/h,w=(e.extent.ymax-e.extent.ymin)/c,y=n/(8*k),B=n/(8*w);if(n>.001&&p&&(y/=111e3,B/=111e3),3===x)if(p){var v=111e3*k,P=111e3*w;y=(n+Math.pow(v,o)*s)/(8*v),B=(n+Math.pow(P,o)*s)/(8*P)}else y=(n+Math.pow(k,o)*s)/(8*k),B=(n+Math.pow(w,o)*s)/(8*w);var d,F,A,T,V,g,U,_,I,z,b,q,C,G,S,j,D,E,H=(90-i)*Math.PI/180,J=Math.cos(H),K=(360-a+90)*Math.PI/180,L=Math.sin(H)*Math.cos(K),N=Math.sin(H)*Math.sin(K),O=[],Q=[],R=[],W=[315,270,225,360,180,0],X=[60,60,60,60,60,90],Y=[3,5,3,2,1,4],Z=Y.reduce((function(e,t){return e+t})),$=Y.map((function(e){return e/Z}));if(1===r)for(E=W.length,d=0;d<E;d++)a=W[d],H=(90-(i=X[d]))*Math.PI/180,J=Math.cos(H),K=(360-a+90)*Math.PI/180,L=Math.sin(H)*Math.cos(K),N=Math.sin(H)*Math.sin(K),O.push(J),Q.push(L),R.push(N);var ee,te=0;for(d=1;d<c-1;d++)for(T=d*h,F=1;F<h-1;F++)if(!u||u[T+F])if(ee=0,u&&(ee=u[T-h+F-1]+u[T-h+F]+u[T-h+F+1]+u[T+F-1]+u[T+F+1]+u[T+h+F-1]+u[T+h+F]+u[T+h+F+1])<7)m[T+F]=0,M[T+F]=0;else{if(7===ee?(V=u[T-h+F-1]?f[T-h+F-1]:f[T+F],g=u[T-h+F]?f[T-h+F]:f[T+F],U=u[T-h+F+1]?f[T-h+F+1]:f[T+F],_=u[T+F-1]?f[T+F-1]:f[T+F],I=u[T+F+1]?f[T+F+1]:f[T+F],z=u[T+h+F-1]?f[T+h+F-1]:f[T+F],b=u[T+h+F]?f[T+h+F]:f[T+F],q=u[T+h+F+1]?f[T+h+F+1]:f[T+F]):(V=f[T-h+F-1],g=f[T-h+F],U=f[T-h+F+1],_=f[T+F-1],I=f[T+F+1],z=f[T+h+F-1],b=f[T+h+F],q=f[T+h+F+1]),C=(U+I+I+q-(V+_+_+z))*y,G=(z+b+b+q-(V+g+g+U))*B,S=Math.sqrt(1+C*C+G*G),te=0,0===r)(D=255*(J+(j=N*G-L*C))/S)<0&&(D=0),te=D;else if(1===r)for(A=0;A<E;A++)j=R[A]*G-Q[A]*C,(D=255*(O[A]+j)/S)<0&&(D=0),te+=D*$[A];m[T+F]=te}else m[T+F]=0;for(d=0;d<c;d++)m[d*h]=m[d*h+1],m[(d+1)*h-1]=m[(d+1)*h-2];for(d=1;d<h-1;d++)m[d]=m[d+h],m[d+(c-1)*h]=m[d+(c-2)*h];return l.pixelType="U8",l.pixels=[m],l.statistics=[{minValue:0,maxValue:255}],u&&(l.mask=M),{extent:e.extent,pixelBlock:l}}},slope:function(e,t){if(null!==e&&null!==e.pixelBlock&&null!==e.pixelBlock.pixels){var l=this._clonePixelBlock(e.pixelBlock),i=t.zFactor,a=t.psPower,n=t.psFactor,o=t.slopeType,s=t.isGCS,r=l.width,x=l.height,p=l.pixels[0],h=l.mask,c=new Uint8Array(r*x);h&&c.set(h);var f=new Float32Array(r*x),u=(e.extent.xmax-e.extent.xmin)/r,M=(e.extent.ymax-e.extent.ymin)/x,m=i/(8*u),k=i/(8*M);if(Math.abs(i-1)<1e-4&&s&&(m/=111e3,k/=111e3),3===o)if(s){var w=111e3*u,y=111e3*M;m=(i+Math.pow(w,a)*n)/(8*w),k=(i+Math.pow(y,a)*n)/(8*y)}else m=(i+Math.pow(u,a)*n)/(8*u),k=(i+Math.pow(M,a)*n)/(8*M);var B,v,P,d,F,A,T,V,g,U,_,I,z,b,q;for(B=1;B<x-1;B++)for(P=B*r,v=1;v<r-1;v++)!h||h[P+v]?(b=0,h&&(b=h[P-r+v-1]+h[P-r+v]+h[P-r+v+1]+h[P+v-1]+h[P+v+1]+h[P+r+v-1]+h[P+r+v]+h[P+r+v+1])<7?(f[P+v]=0,c[P+v]=0):(7===b?(d=h[P-r+v-1]?p[P-r+v-1]:p[P+v],F=h[P-r+v]?p[P-r+v]:p[P+v],A=h[P-r+v+1]?p[P-r+v+1]:p[P+v],T=h[P+v-1]?p[P+v-1]:p[P+v],V=h[P+v+1]?p[P+v+1]:p[P+v],g=h[P+r+v-1]?p[P+r+v-1]:p[P+v],U=h[P+r+v]?p[P+r+v]:p[P+v],_=h[P+r+v+1]?p[P+r+v+1]:p[P+v]):(d=p[P-r+v-1],F=p[P-r+v],A=p[P-r+v+1],T=p[P+v-1],V=p[P+v+1],g=p[P+r+v-1],U=p[P+r+v],_=p[P+r+v+1]),I=(A+V+V+_-(d+T+T+g))*m,z=(g+U+U+_-(d+F+F+A))*k,q=Math.sqrt(I*I+z*z),f[P+v]=1===o||3===o?57.2957795*Math.atan(q):100*q)):f[P+v]=0;for(B=0;B<x;B++)f[B*r]=f[B*r+1],f[(B+1)*r-1]=f[(B+1)*r-2];for(B=1;B<r-1;B++)f[B]=f[B+r],f[B+(x-1)*r]=f[B+(x-2)*r];return l.pixelType="F32",l.pixels=[f],l.statistics=[{minValue:0,maxValue:255}],h&&(l.mask=c),{extent:e.extent,pixelBlock:l}}},aspect:function(e){if(null!==e&&null!==e.pixelBlock&&null!==e.pixelBlock.pixels){var t=this._clonePixelBlock(e.pixelBlock),l=t.width,i=t.height,a=t.pixels[0],n=t.mask,o=new Uint8Array(l*i);n&&o.set(n);var s,r,x,p,h,c,f,u,M,m,k,w,y,B,v=new Float32Array(l*i),P=1/((e.extent.xmax-e.extent.xmin)/l),d=1/((e.extent.ymax-e.extent.ymin)/i);for(s=1;s<i-1;s++)for(x=s*l,r=1;r<l-1;r++){var F;if(!n||n[x+r])if(B=0,n&&(B=n[x-l+r-1]+n[x-l+r]+n[x-l+r+1]+n[x+r-1]+n[x+r+1]+n[x+l+r-1]+n[x+l+r]+n[x+l+r+1])<7)v[x+r]=0,o[x+r]=0;else 7===B?(p=n[x-l+r-1]?a[x-l+r-1]:a[x+r],h=n[x-l+r]?a[x-l+r]:a[x+r],c=n[x-l+r+1]?a[x-l+r+1]:a[x+r],f=n[x+r-1]?a[x+r-1]:a[x+r],u=n[x+r+1]?a[x+r+1]:a[x+r],M=n[x+l+r-1]?a[x+l+r-1]:a[x+r],m=n[x+l+r]?a[x+l+r]:a[x+r],k=n[x+l+r+1]?a[x+l+r+1]:a[x+r]):(p=a[x-l+r-1],h=a[x-l+r],c=a[x-l+r+1],f=a[x+r-1],u=a[x+r+1],M=a[x+l+r-1],m=a[x+l+r],k=a[x+l+r+1]),y=(M+m+m+k-(p+h+h+c))*d,0===(w=(c+u+u+k-(p+f+f+M))*P)&&0===y?F=-1:((F=90-57.29578*Math.atan2(y,-w))<0&&(F+=360),360===F?F=0:F>360&&(F%=360)),v[x+r]=F;else v[x+r]=0}for(s=0;s<i;s++)v[s*l]=v[s*l+1],v[(s+1)*l-1]=v[(s+1)*l-2];for(s=1;s<l-1;s++)v[s]=v[s+l],v[s+(i-1)*l]=v[s+(i-2)*l];return t.pixelType="F32",t.pixels=[v],t.statistics={minValue:0,maxValue:360},n&&(t.mask=o),{extent:e.extent,pixelBlock:t}}},_clonePixelBlock:function(t){return t.clone?t.clone():e.clone(t)}}}));