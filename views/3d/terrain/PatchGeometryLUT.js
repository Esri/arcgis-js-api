/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./TerrainConst"],(function(t,n){"use strict";let s=function(){function t(){this.sinLonLUT=new Array(n.MAX_PATCH_TESSELATION+1),this.cosLonLUT=new Array(n.MAX_PATCH_TESSELATION+1),this.sinLatLUT=new Array(n.MAX_PATCH_TESSELATION+1),this.cosLatLUT=new Array(n.MAX_PATCH_TESSELATION+1)}return t.prototype.update=function(t,n,s){const o=n[0],e=n[2];for(let i=0;i<=t;i++){const n=i/t,T=o*(1-n)+e*n;this.sinLonLUT[i]=Math.sin(T),this.cosLonLUT[i]=Math.cos(T);const L=s(n);this.sinLatLUT[i]=Math.sin(L),this.cosLatLUT[i]=Math.cos(L)}},t}();t.PatchGeometryLUT=s,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
