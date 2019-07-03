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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/mathUtils","../support/mathUtils","./TerrainConst"],function(t,a,e,r,i){return function(){function t(t,a,e,r){this.samplerData=null,this.level=t,this.i=a,this.j=e,this.extent=r}return t.prototype.computeMinMaxValue=function(t,a,e,l){var n=1/0,h=-1/0,o=t-this.level,u=Math.pow(2,o);if(Math.floor(a/u)===this.i&&Math.floor(e/u)===this.j&&o>0){var s=this.samplerData.width,f=this.samplerData.pixelData,p=.5*i.ELEVATION_NODATA_VALUE,x=(s-1)/u,v=(e-this.j*u)*x,m=(a-this.i*u)*x;if(x<1){var M=Math.floor(v),d=Math.floor(m),c=M+d*s,D=f[c],V=f[c+1],w=f[c+s],A=f[c+s+1];if(D+V+w+A<p){var E=v-M,b=m-d,y=r.bilerp(D,V,w,A,E,b),T=r.bilerp(D,V,w,A,E+x,b),g=r.bilerp(D,V,w,A,E,b+x),L=r.bilerp(D,V,w,A,E+x,b+x);return l[0]=Math.min(y,T,g,L),l[1]=Math.max(y,T,g,L),l}v=M,m=d,x=1}else v=Math.floor(v),m=Math.floor(m),x=Math.ceil(x);for(var N=v;N<=v+x;N++)for(var O=m;O<=m+x;O++){var c=N+O*s,U=f[c];U<p?(n=Math.min(n,U),h=Math.max(h,U)):(n=n>0?0:n,h=h<0?0:h)}}return l[0]=n,l[1]=h,l},t.create=function(a,e,r){var i=new t(a[0],a[1],a[2],e),l=r.noDataValue,n=r.minValue,h=r.maxValue;if(null==n||null==h){var o=r.values;n=1/0,h=-1/0;for(var u=!0,s=0;s<o.length;s++){var f=o[s];f!==l&&(n=f<n?f:n,h=f>h?f:h,u=!1)}u&&(n=0,h=0)}return h=h>-3e38?h:0,i.samplerData={pixelData:r.values,width:r.width,height:r.height,minValue:n,maxValue:h,noDataValue:l,safeWidth:.99999999*(r.width-1),dx:(r.width-1)/(i.extent[2]-i.extent[0]),dy:(r.width-1)/(i.extent[3]-i.extent[1]),x0:i.extent[0],y1:i.extent[3]},i.bounds=[n,h],i},t.sample=function(t,a,r){for(var l=0,n=r;l<n.length;l++){var h=n[l];if(h){var o=h.safeWidth,u=h.width,s=h.pixelData,f=e.clamp(h.dy*(h.y1-a),0,o),p=e.clamp(h.dx*(t-h.x0),0,o),x=Math.floor(f),v=Math.floor(p),m=x*u+v,M=m+u,d=s[m],c=s[M],D=s[m+1],V=s[M+1];if(d+c+D+V<.5*i.ELEVATION_NODATA_VALUE){f-=x,p-=v;var w=d+(D-d)*p;return w+(c+(V-c)*p-w)*f}}}return null},t}()});