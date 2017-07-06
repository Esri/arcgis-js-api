// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../layers/support/rasterFormats/LercCodec","./TerrainConst","../support/mathUtils"],function(t,e,a,i,r){var l=function(){function t(t,e,a,i){this.samplerData=null,this.level=t,this.i=e,this.j=a,this.extent=i}return t.prototype.computeMinMaxValue=function(t,e,a,l){var n=1/0,h=-(1/0),o=t-this.level,s=Math.pow(2,o),u=Math.floor(e/s)===this.i&&Math.floor(a/s)===this.j;if(u&&o>0){var x=this.samplerData.width,m=this.samplerData.pixelData,p=.5*i.ELEVATION_NODATA_VALUE,d=(x-1)/s,f=(a-this.j*s)*d,D=(e-this.i*s)*d;if(1>d){var v=Math.floor(f),V=Math.floor(D),c=v+V*x,w=m[c],M=m[c+1],b=m[c+x],y=m[c+x+1];if(p>w+M+b+y){var g=r.bilerp(w,M,b,y,f-v,D-V),A=r.bilerp(w,M,b,y,f-v+d,D-V),E=r.bilerp(w,M,b,y,f-v,D-V+d),F=r.bilerp(w,M,b,y,f-v+d,D-V+d);return l[0]=Math.min(g,A,E,F),l[1]=Math.max(g,A,E,F),l}f=v,D=V,d=1}else f=Math.floor(f),D=Math.floor(D),d=Math.ceil(d);for(var L=f;f+d>=L;L++)for(var T=D;D+d>=T;T++){var c=L+T*x,j=m[c];p>j?(n=Math.min(n,j),h=Math.max(h,j)):(n=n>0?0:n,h=0>h?0:h)}}return l[0]=n,l[1]=h,l},t.createFromLERC=function(e,i,r,l){var n=a.decode(r,l),h=new t(e[0],e[1],e[2],i);h.samplerData={pixelData:n.pixelData,width:n.width,height:n.height,minValue:n.minValue,maxValue:n.maxValue,noDataValue:n.noDataValue,safeWidth:.99999999*(n.width-1),dx:(n.width-1)/(h.extent[2]-h.extent[0]),dy:(n.width-1)/(h.extent[3]-h.extent[1]),x0:h.extent[0],y1:h.extent[3]};var o=h.samplerData.maxValue>-3e38?h.samplerData.maxValue:0;return h.bounds=[h.samplerData.minValue,o],h},t.createFromFetchTileResult=function(e,a,i){for(var r=new t(e[0],e[1],e[2],a),l=i.values,n=i.noDataValue,h=1/0,o=-(1/0),s=!0,u=0;u<l.length;u++){var x=l[u];x!==n&&(h=h>x?x:h,o=x>o?x:o,s=!1)}return s&&(h=0,o=0),r.samplerData={pixelData:i.values,width:i.width,height:i.height,minValue:h,maxValue:o,noDataValue:n,safeWidth:.99999999*(i.width-1),dx:(i.width-1)/(r.extent[2]-r.extent[0]),dy:(i.width-1)/(r.extent[3]-r.extent[1]),x0:r.extent[0],y1:r.extent[3]},r.bounds=[h,o],r},t}();return l});