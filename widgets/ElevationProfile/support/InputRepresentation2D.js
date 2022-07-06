/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{abortMaybe as i,removeMaybe as t,isNone as h,isSome as e}from"../../../core/maybe.js";import{createTask as s,throwIfAborted as r}from"../../../core/promiseUtils.js";import{highlightsSupported as l}from"../../../views/support/layerViewUtils.js";class o{constructor(i){this._params=i,this._highlightTask=null,this._highlightHandle=null}destroy(){this.remove()}remove(){this._highlightTask=i(this._highlightTask),this._highlightHandle=t(this._highlightHandle)}update(i){if(this.remove(),h(i)||!a(i))return;const t=i.layer;this._highlightTask=s((async h=>{const e=await this._params.view.whenLayerView(t);r(h),l(e)&&(this._highlightHandle=e.highlight(i))}))}}function a(i){return e(i.geometry)&&"polyline"===i.geometry.type}export{o as InputRepresentation2D};
