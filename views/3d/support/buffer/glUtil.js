/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{DataType as t}from"../../../webgl/enums.js";import{VertexElementDescriptor as e}from"../../../webgl/VertexElementDescriptor.js";function o(t,o=0){const n=t.stride;return t.fieldNames.filter((e=>{const o=t.fields.get(e).optional;return!(o&&o.glPadding)})).map((i=>{const s=t.fields.get(i),l=s.constructor.ElementCount,u=r(s.constructor.ElementType),f=s.offset,c=!(!s.optional||!s.optional.glNormalized);return new e(i,l,u,f,n,c,o)}))}function r(t){const e=n[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const n={u8:t.UNSIGNED_BYTE,u16:t.UNSIGNED_SHORT,u32:t.UNSIGNED_INT,i8:t.BYTE,i16:t.SHORT,i32:t.INT,f32:t.FLOAT};export{o as glLayout};
