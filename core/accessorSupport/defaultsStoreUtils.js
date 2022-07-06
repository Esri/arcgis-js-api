/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{OriginId as t}from"./PropertyOrigin.js";function e(e,r,n){r.keys().forEach((e=>{n.set(e,r.get(e),t.DEFAULTS)}));const o=e.metadatas;Object.keys(o).forEach((r=>{e.internalGet(r)&&n.set(r,e.internalGet(r),t.DEFAULTS)}))}export{e as setupConstructedDefaults};
