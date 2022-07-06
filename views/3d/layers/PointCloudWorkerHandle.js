/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as t}from"../../../core/maybe.js";import{WorkerHandle as r}from"../../../core/workers/WorkerHandle.js";class e extends r{constructor(t){super("PointCloudWorker","transform",{transform:t=>this._getTransferList(t)},t)}_getTransferList(r){const e=[r.geometryBuffer];if(t(r.primaryAttributeData)&&r.primaryAttributeData.buffer&&e.push(r.primaryAttributeData.buffer),t(r.modulationAttributeData)&&r.modulationAttributeData.buffer&&e.push(r.modulationAttributeData.buffer),t(r.filterAttributesData))for(const a of r.filterAttributesData)t(a)&&a.buffer&&e.push(a.buffer);for(const t of r.userAttributesData)t.buffer&&e.push(t.buffer);return e}}export{e as PointCloudWorkerHandle};
