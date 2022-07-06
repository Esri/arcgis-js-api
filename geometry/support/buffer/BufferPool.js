/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../core/PooledArray.js";class t{constructor(e,t){this._factoryCallback=e,this._lengthCallback=t,this._pool=new Map}acquire(e){if(!t.test.disabled){const t=this._pool.get(e);if(t&&0!==t.length)return t.pop()}try{return this._factoryCallback(e)}catch(o){const t=window.performance&&window.performance.memory;let i="";throw t&&(i=`\n  totalJSHeapSize: ${t.totalJSHeapSize}, usedJSHeapSize: ${t.usedJSHeapSize}, jsHeapSizeLimit: ${t.jsHeapSizeLimit}`),console.log("Array allocation of size "+e+" failed: "+o+i),o}}release(o){if(t.test.disabled)return;const i=this._lengthCallback(o);let s=this._pool.get(i);s||(s=new e({shrink:!0}),this._pool.set(i,s)),s.push(o)}clear(){this._pool.clear()}get test(){return{size:this._pool.size}}}t.test={disabled:!1};export{t as BufferPool};
