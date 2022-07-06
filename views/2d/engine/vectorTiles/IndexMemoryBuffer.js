/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import s from"./MemoryBuffer.js";class r extends s{constructor(){super(12)}add(s,r,t){const e=this.array;e.push(s),e.push(r),e.push(t)}}class t extends s{constructor(){super(4)}add(s){this.array.push(s)}}export{t as PointElementMemoryBuffer,r as TriangleIndexBuffer};
