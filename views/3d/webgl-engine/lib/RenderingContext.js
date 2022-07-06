/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../../../../core/maybe.js";import{RenderingContext as t}from"../../../webgl/RenderingContext.js";class r extends t{constructor(e,t,r){super(e,t),this.newCache=r,this._refCount=1}dispose(){--this._refCount>0||super.dispose()}ref(){++this._refCount}bindTechnique(t,r,s,n){this.useProgram(t.program);const o=e(s)?s.slot:null;return t.bindPipelineState(this,o,n),e(r)&&e(s)&&t.bindPass(r,s),t.program}get test(){return this.programCache.test}}export{r as RenderingContext};
