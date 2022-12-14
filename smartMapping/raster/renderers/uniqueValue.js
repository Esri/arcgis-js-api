/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../core/Error.js";import{isNone as r}from"../../../core/maybe.js";import{createUVRenderer as t,isSingleBand8BitRasterWithStats as a,getClassField as s}from"../../../renderers/support/rasterRendererHelper.js";import{processRasterRendererParameters as o}from"../support/utils.js";async function n(r){r=await o(r);const{rasterInfo:t}=r.layer;if(t.bandCount>1)throw new e("raster-class-breaks-renderer:not-supported","Multiband raster is not supported");if(null===t.attributeTable&&!a(t))throw new e("raster-unique-value-renderer:not-supported","The source raster does not have an attribute table");const n=r.classFieldName?.toLowerCase();if(n&&!t.attributeTable.fields.some((e=>e.name.toLowerCase()===n)))throw new e("raster-unique-value-renderer:invalid-parameters","A valid 'classfieldName' is required");return n||(r.classFieldName=s(t.attributeTable).name),r}async function i(a){a=await n(a);const{classFieldName:s,colors:o,colorRamp:i}=a,u=t(a.layer.rasterInfo,s,o,i);if(r(u))throw new e("raster-unique-value-renderer:not-supported","UniqueValueRenderer is not supported on the provided data source");return{renderer:u,classFieldName:s}}export{i as createRenderer};