/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{throwIfAborted as t}from"../../../core/promiseUtils.js";function a(){let a=new AbortController;return async r=>{a.abort(),a=new AbortController;const i={signal:a.signal},l=r.toArray().map((t=>o(t,i)));await Promise.all(l),t(i)}}async function o(a,o){await a.load(o),await a.loadAll(),t(o),a.summaryStatistics&&await a.summaryStatistics.load(o)}export{a as createLoadLayersFunction};
