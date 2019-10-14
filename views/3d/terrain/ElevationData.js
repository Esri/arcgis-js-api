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

define(["require","exports","../../../core/mathUtils","../support/mathUtils","./TerrainConst"],function(t,a,e,r,i){return function(){function t(t,a,e,r){this.samplerData=null,this.level=t,this.i=a,this.j=e,this.extent=r}return t.prototype.release=function(){this.samplerData=null,this.bounds=null},t.prototype.computeMinMaxValue=function(t,a,e,l){l.min=1/0,l.max=-1/0,l.hasNoDataValues=!1;var n=t-this.level;if(n<=0)return l;var h=Math.pow(2,n);if(Math.floor(a/h)!==this.i||Math.floor(e/h)!==this.j)return l;var o=1/0,s=-1/0,u=this.samplerData.width,f=this.samplerData.pixelData,p=.5*i.ELEVATION_NODATA_VALUE,m=(u-1)/h,x=(e-this.j*h)*m,v=(a-this.i*h)*m;if(m<1){var d=Math.floor(x),M=Math.floor(v),D=d+M*u,c=f[D],V=f[D+1],w=f[D+u],A=f[D+u+1];if(c+V+w+A<p){var N=x-d,b=v-M,y=r.bilerp(c,V,w,A,N,b),E=r.bilerp(c,V,w,A,N+m,b),T=r.bilerp(c,V,w,A,N,b+m),g=r.bilerp(c,V,w,A,N+m,b+m);return l.min=Math.min(y,E,T,g),l.max=Math.max(y,E,T,g),l}x=d,v=M,m=1}else x=Math.floor(x),v=Math.floor(v),m=Math.ceil(m);for(var L=x;L<=x+m;L++)for(var O=v;O<=v+m;O++){var D=L+O*u,U=f[D];U<p?(o=Math.min(o,U),s=Math.max(s,U)):l.hasNoDataValues=!0}return l.min=o,l.max=s,l},t.create=function(a,e,r){for(var i=new t(a[0],a[1],a[2],e),l=r.noDataValue,n=r.values,h=1/0,o=-1/0,s=!0,u=!1,f=0;f<n.length;f++){var p=n[f];p!==l?(h=p<h?p:h,o=p>o?p:o,s=!1):u=!0}return s&&(h=0,o=0),o=o>-3e38?o:0,i.samplerData={pixelData:r.values,width:r.width,height:r.height,minValue:h,maxValue:o,noDataValue:l,safeWidth:.99999999*(r.width-1),dx:(r.width-1)/(i.extent[2]-i.extent[0]),dy:(r.width-1)/(i.extent[3]-i.extent[1]),x0:i.extent[0],y1:i.extent[3]},i.bounds=[h,o],i.hasNoDataValues=u,i},t.sample=function(t,a,r){for(var l=0,n=r;l<n.length;l++){var h=n[l];if(h){var o=h.safeWidth,s=h.width,u=h.pixelData,f=e.clamp(h.dy*(h.y1-a),0,o),p=e.clamp(h.dx*(t-h.x0),0,o),m=Math.floor(f),x=Math.floor(p),v=m*s+x,d=v+s,M=u[v],D=u[d],c=u[v+1],V=u[d+1];if(M+D+c+V<.5*i.ELEVATION_NODATA_VALUE){f-=m,p-=x;var w=M+(c-M)*p;return w+(D+(V-D)*p-w)*f}}}return null},t}()});