/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"../../../core/Error.js";import{isNone as e}from"../../../core/maybe.js";import{createVectorFieldRenderer as t}from"../../../renderers/support/rasterRendererHelper.js";import{processRasterRendererParameters as o}from"../support/utils.js";async function n(r){return r=await o(r)}async function s(o){o=await n(o);const s=t(o.layer.rasterInfo);if(e(s))throw new r("vector-field-renderer:not-supported","Only vector data is supported");return o.flowRepresentation&&(s.flowRepresentation=o.flowRepresentation),o.rotationType&&(s.rotationType=o.rotationType),o.style&&(s.style=o.style),{renderer:s}}export{s as createRenderer};
