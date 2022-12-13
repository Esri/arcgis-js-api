/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../webgl/enums","../../../webgl/VertexElementDescriptor"],(function(e,t,n){"use strict";function o(e,t=0){const o=e.stride;return e.fieldNames.filter((t=>{const n=e.fields.get(t).optional;return!(n&&n.glPadding)})).map((a=>{const i=e.fields.get(a),l=i.constructor.ElementCount,u=r(i.constructor.ElementType),s=i.offset,p=!(!i.optional||!i.optional.glNormalized);return new n.VertexElementDescriptor(a,l,u,s,o,p,t)}))}function r(e){const t=a[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}const a={u8:t.DataType.UNSIGNED_BYTE,u16:t.DataType.UNSIGNED_SHORT,u32:t.DataType.UNSIGNED_INT,i8:t.DataType.BYTE,i16:t.DataType.SHORT,i32:t.DataType.INT,f32:t.DataType.FLOAT};e.glLayout=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
