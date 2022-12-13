/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../core/ObjectPool"],(function(o,t){"use strict";let h=function(){function o(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}var t=o.prototype;return t.acquire=function(o,t,h,i,s,e,l,r,n){this.color=o,this.haloColor=t,this.haloSize=h,this.size=i,this.angle=s,this.offsetX=e,this.offsetY=l,this.hAnchor=r,this.vAnchor=n},t.release=function(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0},o}();h.pool=new t(h),o.TextProperties=h,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
