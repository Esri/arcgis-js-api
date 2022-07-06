/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{makeHandle as n}from"../../../core/handleUtils.js";import{nextTick as e}from"../../../core/nextTick.js";import{SceneSnappingEngine as r}from"./SceneSnappingEngine.js";import{SnappingManager as o}from"./SnappingManager.js";const t=new Map;function a(e){t.has(e)||t.set(e,{referenceCount:0,snappingManager:p(e)});const r=t.get(e);r.referenceCount++;const o=n((()=>i(e,r)));return{snappingManager:r.snappingManager,...o}}function i(n,r){r.referenceCount--,r.referenceCount>0||e((()=>{0===r.referenceCount&&(r.snappingManager.destroy(),t.delete(n))}))}function p(n){return new o({view:n,snappingEnginesFactory:(e,o)=>[new r({view:n,options:o})]})}export{a as acquire};
