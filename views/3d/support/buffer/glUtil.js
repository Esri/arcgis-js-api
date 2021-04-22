/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e={divisor:0};function o(t,o={}){o={...e,...o};const r=t.stride;return t.fieldNames.filter((e=>{const o=t.fields.get(e).optional;return!(o&&o.glPadding)})).map((e=>{const i=t.fields.get(e),s=i.constructor.ElementCount,u=n(i.constructor.ElementType),f=i.offset,c=!(!i.optional||!i.optional.glNormalized);return{name:e,stride:r,count:s,type:u,offset:f,normalized:c,divisor:o.divisor}}))}function n(t){const e=r[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const r={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126};t.glLayout=o,Object.defineProperty(t,"__esModule",{value:!0})}));
