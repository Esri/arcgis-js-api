/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t=0){const n=e.stride;return e.fieldNames.filter((t=>{const o=e.fields.get(t).optional;return!(o&&o.glPadding)})).map((r=>{const i=e.fields.get(r),s=i.constructor.ElementCount,u=o(i.constructor.ElementType),f=i.offset,l=!(!i.optional||!i.optional.glNormalized);return{name:r,stride:n,count:s,type:u,offset:f,normalized:l,divisor:t}}))}function o(e){const t=n[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}const n={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126};e.glLayout=t,Object.defineProperty(e,"__esModule",{value:!0})}));
