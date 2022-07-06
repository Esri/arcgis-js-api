/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as t,isNone as a}from"../../core/maybe.js";class i{constructor(a,i=null){if(this.tile=a,this.zmin=0,this.zmax=0,t(i)){const t=a.extent;this.samplerData={pixelData:i.values,width:i.width,height:i.height,safeWidth:.99999999*(i.width-1),noDataValue:i.noDataValue,dx:(i.width-1)/(t[2]-t[0]),dy:(i.width-1)/(t[3]-t[1]),x0:t[0],y1:t[3]},this.zmin=i.minValue,this.zmax=i.maxValue}}sample(t,i){if(a(this.samplerData))return;const{safeWidth:h,width:s,pixelData:l,noDataValue:n,dx:o,dy:r,y1:m,x0:d}=this.samplerData,u=e(r*(m-i),0,h),x=e(o*(t-d),0,h),f=Math.floor(u),c=Math.floor(x),p=f*s+c,D=p+s,w=l[p],y=l[D],V=l[p+1],z=l[D+1];if(w!==n&&y!==n&&V!==n&&z!==n){const t=x-c,a=w+(V-w)*t;return a+(y+(z-y)*t-a)*(u-f)}}}function e(t,a,i){return t<a?a:t>i?i:t}export{i as ElevationTile};
