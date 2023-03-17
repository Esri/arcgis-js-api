/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../definitions","../enums"],(function(e,r,i){"use strict";const t=new Map;function c(e,i,c){const{indicesPerRecord:o,multiplier:s,verticesPerRecord:d}=t.get(e);return{recordBytes:c*r.DISPLAY_RECORD_INT_PER_ELEMENT*Uint32Array.BYTES_PER_ELEMENT,indexBytes:s*o*c*Uint32Array.BYTES_PER_ELEMENT,vertexBytes:s*d*c*i}}t.set(i.WGLGeometryType.MARKER,{multiplier:1,indicesPerRecord:6,verticesPerRecord:4}),t.set(i.WGLGeometryType.LINE,{multiplier:1,indicesPerRecord:24,verticesPerRecord:8}),t.set(i.WGLGeometryType.FILL,{multiplier:1,indicesPerRecord:10,verticesPerRecord:10}),t.set(i.WGLGeometryType.TEXT,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4}),t.set(i.WGLGeometryType.LABEL,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4}),e.getMeshSizeHint=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
