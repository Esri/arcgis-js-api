/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe"],(function(t,e){"use strict";let a=function(){function t(t,a=null){if(this.tile=t,e.isSome(a)){const e=t.extent;this.samplerData={pixelData:a.values,width:a.width,height:a.height,safeWidth:.99999999*(a.width-1),noDataValue:a.noDataValue,dx:(a.width-1)/(e[2]-e[0]),dy:(a.width-1)/(e[3]-e[1]),x0:e[0],y1:e[3]}}}return t.prototype.sample=function(t,a){if(e.isNone(this.samplerData))return;const{safeWidth:n,width:o,pixelData:l,noDataValue:s,dx:r,dy:h,y1:u,x0:d}=this.samplerData,f=i(h*(u-a),0,n),c=i(r*(t-d),0,n),p=Math.floor(f),x=Math.floor(c),D=p*o+x,y=D+o,m=l[D],w=l[y],v=l[D+1],M=l[y+1];if(m!==s&&w!==s&&v!==s&&M!==s){const t=c-x,e=m+(v-m)*t;return e+(w+(M-w)*t-e)*(f-p)}},t}();function i(t,e,a){return t<e?e:t>a?a:t}t.ElevationTile=a,t.default=a,Object.defineProperty(t,"__esModule",{value:!0})}));
