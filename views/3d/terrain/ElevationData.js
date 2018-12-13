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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../layers/support/rasterFormats/LercCodec","../support/mathUtils","./TerrainConst"],function(t,e,a,i,r){return function(){function t(t,e,a,i){this.samplerData=null,this.level=t,this.i=e,this.j=a,this.extent=i}return t.prototype.computeMinMaxValue=function(t,e,a,l){var n=1/0,h=-1/0,o=t-this.level,s=Math.pow(2,o);if(Math.floor(e/s)===this.i&&Math.floor(a/s)===this.j&&o>0){var u=this.samplerData.width,x=this.samplerData.pixelData,m=.5*r.ELEVATION_NODATA_VALUE,p=(u-1)/s,d=(a-this.j*s)*p,f=(e-this.i*s)*p;if(p<1){var D=Math.floor(d),V=Math.floor(f),v=D+V*u,c=x[v],w=x[v+1],M=x[v+u],b=x[v+u+1];if(c+w+M+b<m){var y=i.bilerp(c,w,M,b,d-D,f-V),g=i.bilerp(c,w,M,b,d-D+p,f-V),A=i.bilerp(c,w,M,b,d-D,f-V+p),E=i.bilerp(c,w,M,b,d-D+p,f-V+p);return l[0]=Math.min(y,g,A,E),l[1]=Math.max(y,g,A,E),l}d=D,f=V,p=1}else d=Math.floor(d),f=Math.floor(f),p=Math.ceil(p);for(var F=d;F<=d+p;F++)for(var L=f;L<=f+p;L++){var v=F+L*u,T=x[v];T<m?(n=Math.min(n,T),h=Math.max(h,T)):(n=n>0?0:n,h=h<0?0:h)}}return l[0]=n,l[1]=h,l},t.createFromLERC=function(e,i,r,l){var n=a.decode(r,l),h=new t(e[0],e[1],e[2],i);h.samplerData={pixelData:n.pixelData,width:n.width,height:n.height,minValue:n.minValue,maxValue:n.maxValue,noDataValue:n.noDataValue,safeWidth:.99999999*(n.width-1),dx:(n.width-1)/(h.extent[2]-h.extent[0]),dy:(n.width-1)/(h.extent[3]-h.extent[1]),x0:h.extent[0],y1:h.extent[3]};var o=h.samplerData.maxValue>-3e38?h.samplerData.maxValue:0;return h.bounds=[h.samplerData.minValue,o],h},t.createFromFetchTileResult=function(e,a,i){for(var r=new t(e[0],e[1],e[2],a),l=i.values,n=i.noDataValue,h=1/0,o=-1/0,s=!0,u=0;u<l.length;u++){var x=l[u];x!==n&&(h=x<h?x:h,o=x>o?x:o,s=!1)}return s&&(h=0,o=0),r.samplerData={pixelData:i.values,width:i.width,height:i.height,minValue:h,maxValue:o,noDataValue:n,safeWidth:.99999999*(i.width-1),dx:(i.width-1)/(r.extent[2]-r.extent[0]),dy:(i.width-1)/(r.extent[3]-r.extent[1]),x0:r.extent[0],y1:r.extent[3]},r.bounds=[h,o],r},t}()});