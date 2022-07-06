/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{computeDepthRange as t}from"./DepthRange.js";class e{constructor(t){this._objects=t}submit(t,e){this._objects.preSubmit(e),this._objects.visibleObjects.forAll((s=>s.renderable.material.submit(t,e,s)))}queryShadowCasterDepthRange(e){return this._objects.visibleObjects.length?t(e,this._objects.visibleObjects):null}}export{e as RenderSubmitSystem};
