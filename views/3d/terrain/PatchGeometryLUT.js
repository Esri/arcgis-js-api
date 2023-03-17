/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./TerrainConst"],(function(t,n){"use strict";let o=function(){function t(){this.sinLonLUT=new Array(n.MAX_PATCH_TESSELATION+1),this.cosLonLUT=new Array(n.MAX_PATCH_TESSELATION+1),this.sinLatLUT=new Array(n.MAX_PATCH_TESSELATION+1),this.cosLatLUT=new Array(n.MAX_PATCH_TESSELATION+1)}return t.prototype.update=function(t,n,o){const s=n[0],i=n[2];for(let T=0;T<=t;T++){const n=T/t,e=s*(1-n)+i*n;this.sinLonLUT[T]=Math.sin(e),this.cosLonLUT[T]=Math.cos(e);const L=o(n);this.sinLatLUT[T]=Math.sin(L),this.cosLatLUT[T]=Math.cos(L)}},t}();t.PatchGeometryLUT=o,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
