/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e={divisor:0};const o={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126};t.glLayout=function(t,n={}){n={...e,...n};const r=t.stride;return t.fieldNames.filter((e=>{const o=t.fields.get(e).optional;return!(o&&o.glPadding)})).map((e=>{const i=t.fields.get(e),s=i.constructor.ElementCount,u=function(t){const e=o[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}(i.constructor.ElementType),f=i.offset,c=!(!i.optional||!i.optional.glNormalized);return{name:e,stride:r,count:s,type:u,offset:f,normalized:c,divisor:n.divisor}}))},Object.defineProperty(t,"__esModule",{value:!0})}));
