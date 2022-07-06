/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as s}from"../../../chunks/vec2f64.js";class t{constructor(){this.offset=s(),this.scale=0,this.tile=null}init(s,t,i,e){this.tile=s,this.offset[0]=t,this.offset[1]=i,this.scale=e}dispose(){this.tile=null,this.offset[0]=0,this.offset[1]=0,this.scale=0}}export{t as UpsampleInfo};
