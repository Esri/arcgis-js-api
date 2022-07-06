/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{f as s}from"../../../chunks/vec3f64.js";import{f as t}from"../../../chunks/vec4f64.js";class e{constructor(e,f,o,r,c,i){this.texture=e,this.type=f,e.retain(),this.offsetAndScale=t(o.offset[0],o.offset[1],o.scale,o.scale),this.opacities=s(r,i,c)}destroy(){this.texture.release()}}export{e as TextureReference};
