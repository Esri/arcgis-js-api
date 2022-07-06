/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{computeFaceCount as e}from"../../webgl-engine/lib/lodRendering/LodResources.js";function t(e){const t=[];return e.stageResources.geometries.forEach(((s,n)=>{const o=e.stageResources.materials[n],r=e.stageResources.textures;t.push({material:o,geometry:s,textures:r})})),{components:t,minScreenSpaceRadius:e.lodThreshold,pivotOffset:e.pivotOffset}}function s(e){return{levels:e.map((e=>t(e)))}}function n(t,s=r){const n=e(t);return Math.sqrt(n/(s*Math.PI))}function o(e){e.levels.forEach((e=>{e.minScreenSpaceRadius||(e.minScreenSpaceRadius=n(e))}))}const r=.05;export{n as estimateMinScreenSpaceRadius,o as fillEstimatedMinScreenSpaceRadius,t as makeLodLevelResources,s as makeLodResources};
