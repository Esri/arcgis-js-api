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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../../../layers/support/rasterFormats/LercCodec","./TerrainConst"],function(a,t,e,i){var r=function(){function a(a,t,e,i){this.samplerData=null,this.level=a,this.i=t,this.j=e,this.extent=i}return a.prototype.computeMinMaxValue=function(a,t,e,r){var n=Number.MAX_VALUE,l=-Number.MAX_VALUE,s=a-this.level,u=t>>s===this.i&&e>>s===this.j;if(u&&s>0)for(var h=this.samplerData.width-1,m=h/Math.pow(2,s),o=t-(this.i<<s),V=e-(this.j<<s),x=V*m;(V+1)*m>=x;x++)for(var p=o*m;(o+1)*m>=p;p++){var D=this.samplerData.pixelData[x+p*(h+1)];D!==i.ELEVATION_NODATA_VALUE&&(n=Math.min(n,D),l=Math.max(l,D))}r[0]=n===Number.MAX_VALUE?this.samplerData.minValue:n,r[1]=l===-Number.MAX_VALUE?this.samplerData.maxValue:l},a.createFromLERC=function(t,r,n){var l=e.decode(n,{noDataValue:i.ELEVATION_NODATA_VALUE}),s=new a(t[0],t[1],t[2],r);s.samplerData={pixelData:l.pixelData,width:l.width,height:l.height,minValue:l.minValue,maxValue:l.maxValue,noDataValue:l.noDataValue,safeWidth:.99999999*(l.width-1),dx:(l.width-1)/(s.extent[2]-s.extent[0]),dy:(l.width-1)/(s.extent[3]-s.extent[1]),x0:s.extent[0],y1:s.extent[3]};var u=s.samplerData.maxValue>-3e38?s.samplerData.maxValue:0;return s.bounds=[s.samplerData.minValue,u],s},a}();return r});