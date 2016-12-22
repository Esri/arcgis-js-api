// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../layers/support/rasterFormats/LercCodec","./TerrainConst","../support/mathUtils"],function(t,a,e,r,i){var l=function(){function t(t,a,e,r){this.samplerData=null,this.level=t,this.i=a,this.j=e,this.extent=r}return t.prototype.computeMinMaxValue=function(t,a,e,l){var h=1/0,n=-(1/0),o=t-this.level,s=Math.pow(2,o),u=Math.floor(a/s)===this.i&&Math.floor(e/s)===this.j;if(u&&o>0){var p=this.samplerData.width,m=this.samplerData.pixelData,x=.5*r.ELEVATION_NODATA_VALUE,f=(p-1)/s,d=(e-this.j*s)*f,M=(a-this.i*s)*f;if(1>f){var D=Math.floor(d),v=Math.floor(M),V=D+v*p,c=m[V],w=m[V+1],b=m[V+p],y=m[V+p+1];if(x>c+w+b+y){var A=i.bilerp(c,w,b,y,d-D,M-v),E=i.bilerp(c,w,b,y,d-D+f,M-v),L=i.bilerp(c,w,b,y,d-D,M-v+f),j=i.bilerp(c,w,b,y,d-D+f,M-v+f);return l[0]=Math.min(A,E,L,j),l[1]=Math.max(A,E,L,j),l}d=D,M=v,f=1}else d=Math.floor(d),M=Math.floor(M),f=Math.ceil(f);for(var C=d;d+f>=C;C++)for(var T=M;M+f>=T;T++){var V=C+T*p,g=m[V];x>g?(h=Math.min(h,g),n=Math.max(n,g)):(h=h>0?0:h,n=0>n?0:n)}}return l[0]=h,l[1]=n,l},t.createFromLERC=function(a,r,i,l){var h=e.decode(i,l),n=new t(a[0],a[1],a[2],r);n.samplerData={pixelData:h.pixelData,width:h.width,height:h.height,minValue:h.minValue,maxValue:h.maxValue,noDataValue:h.noDataValue,safeWidth:.99999999*(h.width-1),dx:(h.width-1)/(n.extent[2]-n.extent[0]),dy:(h.width-1)/(n.extent[3]-n.extent[1]),x0:n.extent[0],y1:n.extent[3]};var o=n.samplerData.maxValue>-3e38?n.samplerData.maxValue:0;return n.bounds=[n.samplerData.minValue,o],n},t}();return l});