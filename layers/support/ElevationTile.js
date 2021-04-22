/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let e=function(){function t(t,e){if(this.tile=t,!e)return void(this.samplerData=null);const i=this.tile.extent;this.samplerData={pixelData:e.values,width:e.width,height:e.height,safeWidth:.99999999*(e.width-1),noDataValue:e.noDataValue,dx:(e.width-1)/(i[2]-i[0]),dy:(e.width-1)/(i[3]-i[1]),x0:i[0],y1:i[3]}}return t.prototype.sample=function(t,e){if(this.samplerData)return i(this.samplerData,t,e)},t}();function i(t,e,i){const{safeWidth:n,width:l,pixelData:o,noDataValue:r}=t,s=a(t.dy*(t.y1-i),0,n),h=a(t.dx*(e-t.x0),0,n),u=Math.floor(s),d=Math.floor(h),f=u*l+d,c=f+l,p=o[f],D=o[c],x=o[f+1],w=o[c+1];if(p!==r&&D!==r&&x!==r&&w!==r){const t=h-d,e=p+(x-p)*t;return e+(D+(w-D)*t-e)*(s-u)}}function a(t,e,i){return t<e?e:t>i?i:t}t.ElevationTile=e,t.default=e,Object.defineProperty(t,"__esModule",{value:!0})}));
