/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{DISPLAY_RECORD_INT_PER_ELEMENT as e}from"../definitions.js";import{WGLGeometryType as r}from"../enums.js";const i=new Map;function t(e){return i.get(e)}function c(r,t,c){const{indicesPerRecord:s,multiplier:o,verticesPerRecord:d}=i.get(r);return{recordBytes:c*e*Uint32Array.BYTES_PER_ELEMENT,indexBytes:o*s*c*Uint32Array.BYTES_PER_ELEMENT,vertexBytes:o*d*c*t}}i.set(r.MARKER,{multiplier:1,indicesPerRecord:6,verticesPerRecord:4}),i.set(r.LINE,{multiplier:1,indicesPerRecord:24,verticesPerRecord:8}),i.set(r.FILL,{multiplier:1,indicesPerRecord:10,verticesPerRecord:10}),i.set(r.TEXT,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4}),i.set(r.LABEL,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4});export{t as getMeshHeuristic,c as getMeshSizeHint};
