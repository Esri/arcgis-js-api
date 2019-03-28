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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../support/mathUtils","./TerrainConst"],function(t,a,e,i){return function(){function t(t,a,e,i){this.samplerData=null,this.level=t,this.i=a,this.j=e,this.extent=i}return t.prototype.computeMinMaxValue=function(t,a,r,l){var n=1/0,h=-1/0,o=t-this.level,u=Math.pow(2,o);if(Math.floor(a/u)===this.i&&Math.floor(r/u)===this.j&&o>0){var s=this.samplerData.width,f=this.samplerData.pixelData,p=.5*i.ELEVATION_NODATA_VALUE,x=(s-1)/u,v=(r-this.j*u)*x,m=(a-this.i*u)*x;if(x<1){var M=Math.floor(v),d=Math.floor(m),D=M+d*s,V=f[D],c=f[D+1],w=f[D+s],b=f[D+s+1];if(V+c+w+b<p){var A=v-M,g=m-d,j=e.bilerp(V,c,w,b,A,g),y=e.bilerp(V,c,w,b,A+x,g),E=e.bilerp(V,c,w,b,A,g+x),T=e.bilerp(V,c,w,b,A+x,g+x);return l[0]=Math.min(j,y,E,T),l[1]=Math.max(j,y,E,T),l}v=M,m=d,x=1}else v=Math.floor(v),m=Math.floor(m),x=Math.ceil(x);for(var L=v;L<=v+x;L++)for(var N=m;N<=m+x;N++){var D=L+N*s,O=f[D];O<p?(n=Math.min(n,O),h=Math.max(h,O)):(n=n>0?0:n,h=h<0?0:h)}}return l[0]=n,l[1]=h,l},t.create=function(a,e,i){var r=new t(a[0],a[1],a[2],e),l=i.noDataValue,n=i.minValue,h=i.maxValue;if(null==n||null==h){var o=i.values;n=1/0,h=-1/0;for(var u=!0,s=0;s<o.length;s++){var f=o[s];f!==l&&(n=f<n?f:n,h=f>h?f:h,u=!1)}u&&(n=0,h=0)}return h=h>-3e38?h:0,r.samplerData={pixelData:i.values,width:i.width,height:i.height,minValue:n,maxValue:h,noDataValue:l,safeWidth:.99999999*(i.width-1),dx:(i.width-1)/(r.extent[2]-r.extent[0]),dy:(i.width-1)/(r.extent[3]-r.extent[1]),x0:r.extent[0],y1:r.extent[3]},r.bounds=[n,h],r},t}()});