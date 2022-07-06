/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"../../../core/Error.js";import{isNone as e}from"../../../core/maybe.js";import{createColormapRenderer as o}from"../../../renderers/support/rasterRendererHelper.js";import{processRasterRendererParameters as t}from"../support/utils.js";async function s(s){s=await t(s);const p=o(s.layer.rasterInfo);if(e(p))throw new r("raster-colormap-renderer:not-supported","Only single band data with colormap is supported");return{renderer:p}}export{s as createRenderer};
