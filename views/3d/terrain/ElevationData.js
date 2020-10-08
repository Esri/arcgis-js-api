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

define(["require","exports","../../../core/mathUtils","../support/mathUtils","./TerrainConst"],(function(a,t,e,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ElevationData=void 0;var l=function(){function a(a,t,e){this.samplerData=null,this.level=a[0],this.i=a[1],this.j=a[2],this.extent=t;for(var i=e.noDataValue,r=e.values,l=1/0,h=-1/0,o=!0,s=!1,n=0;n<r.length;n++){var u=r[n];u!==i?(l=u<l?u:l,h=u>h?u:h,o=!1):s=!0}o&&(l=0,h=0),h=h>-3e38?h:0,this.samplerData={pixelData:e.values,width:e.width,height:e.height,noDataValue:i,safeWidth:.99999999*(e.width-1),dx:(e.width-1)/(t[2]-t[0]),dy:(e.width-1)/(t[3]-t[1]),x0:t[0],y1:t[3]},this.bounds=[l,h],this.hasNoDataValues=s}return a.prototype.release=function(){this.samplerData=null,this.bounds=null},a.prototype.computeMinMaxValue=function(a,t,e,l){l.min=1/0,l.max=-1/0,l.hasNoDataValues=!1;var h=a-this.level;if(h<=0)return l;var o=Math.pow(2,h);if(!(Math.floor(t/o)===this.i&&Math.floor(e/o)===this.j))return l;var s=1/0,n=-1/0,u=this.samplerData.width,f=this.samplerData.pixelData,p=.5*r.ELEVATION_NODATA_VALUE,v=(u-1)/o,m=(e-this.j*o)*v,d=(t-this.i*o)*v;if(v<1){var D=Math.floor(m),M=Math.floor(d),x=f[g=D+M*u],c=f[g+1],V=f[g+u],w=f[g+u+1];if(x+c+V+w<p){var A=m-D,E=d-M,b=i.bilerp(x,c,V,w,A,E),y=i.bilerp(x,c,V,w,A+v,E),N=i.bilerp(x,c,V,w,A,E+v),_=i.bilerp(x,c,V,w,A+v,E+v);return l.min=Math.min(b,y,N,_),l.max=Math.max(b,y,N,_),l}m=D,d=M,v=1}else m=Math.floor(m),d=Math.floor(d),v=Math.ceil(v);for(var O=m;O<=m+v;O++)for(var T=d;T<=d+v;T++){var g,j=f[g=O+T*u];j<p?(s=Math.min(s,j),n=Math.max(n,j)):l.hasNoDataValues=!0}return l.min=s,l.max=n,l},a.sample=function(a,t,i){for(var l=0,h=i;l<h.length;l++){var o=h[l];if(o){var s=o.safeWidth,n=o.width,u=o.pixelData,f=e.clamp(o.dy*(o.y1-t),0,s),p=e.clamp(o.dx*(a-o.x0),0,s),v=Math.floor(f),m=Math.floor(p),d=v*n+m,D=d+n,M=u[d],x=u[D],c=u[d+1],V=u[D+1];if(M+x+c+V<.5*r.ELEVATION_NODATA_VALUE){var w=M+(c-M)*(p-=m);return w+(x+(V-x)*p-w)*(f-=v)}}}return null},a}();t.ElevationData=l}));