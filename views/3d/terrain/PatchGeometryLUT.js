/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{MAX_PATCH_TESSELATION as s}from"./TerrainConst.js";class o{constructor(){this.sinLonLUT=new Array(s+1),this.cosLonLUT=new Array(s+1)}update(s,o){const t=o[0],n=o[2];for(let r=0;r<=s;r++){const o=r/s,i=t*(1-o)+n*o;this.sinLonLUT[r]=Math.sin(i),this.cosLonLUT[r]=Math.cos(i)}}}export{o as PatchGeometryLUT};
