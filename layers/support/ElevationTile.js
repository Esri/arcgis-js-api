/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","./ElevationSamplerData"],(function(t,e,a){"use strict";let i=function(){function t(t,i=null){if(this.tile=t,this.zmin=0,this.zmax=0,e.isSome(i)&&e.isSome(t)){const e=t.extent;this._samplerData=new a.ElevationSamplerData(i,e),this.zmin=i.minValue,this.zmax=i.maxValue}}return t.prototype.sample=function(t,a){if(e.isNone(this._samplerData))return;const{safeWidth:i,width:o,pixelData:l,noDataValue:s,dx:r,dy:u,y1:m,x0:f}=this._samplerData,h=n(u*(m-a),0,i),c=n(r*(t-f),0,i),p=Math.floor(h),d=Math.floor(c),x=p*o+d,D=x+o,S=l[x],v=l[D],y=l[x+1],_=l[D+1];if(S!==s&&v!==s&&y!==s&&_!==s){const t=c-d,e=S+(y-S)*t;return e+(v+(_-v)*t-e)*(h-p)}},t}();function n(t,e,a){return t<e?e:t>a?a:t}t.ElevationTile=i,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
