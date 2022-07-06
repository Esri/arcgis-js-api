/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{equals as t}from"../../../../core/arrayUtils.js";import{r as a}from"../../../../chunks/vec2.js";import{AccumulationType as i}from"./UpdateVertices.js";class s{constructor(t,a,s=i.CUMULATIVE){this.origin=t,this.angle=a,this.accumulationType=s}_rotate(t,i){a(t.pos,t.pos,this.origin,i)}apply(t){this._rotate(t,this.angle)}undo(t){this._rotate(t,-this.angle)}canAccumulate(a){return a instanceof s&&t(this.origin,a.origin)}accumulate(t,a){const s=a.accumulationType===i.REPLACE;this._rotate(t,s?a.angle-this.angle:a.angle)}accumulateParams(t){const a=t.accumulationType===i.REPLACE;this.angle=a?t.angle:this.angle+t.angle}}export{s as RotateVertex};
