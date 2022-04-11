/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../webgl-engine/lib/lodRendering/LodResources"],(function(e,t){"use strict";function s(e){const t=[];return e.stageResources.geometries.forEach(((s,n)=>{const o=e.stageResources.materials[n],r=e.stageResources.textures;t.push({material:o,geometry:s,textures:r})})),{components:t,minScreenSpaceRadius:e.lodThreshold,pivotOffset:e.pivotOffset}}function n(e){return{levels:e.map((e=>s(e)))}}function o(e,s=c){const n=t.computeFaceCount(e);return Math.sqrt(n/(s*Math.PI))}function r(e){e.levels.forEach((e=>{e.minScreenSpaceRadius||(e.minScreenSpaceRadius=o(e))}))}const c=.05;e.estimateMinScreenSpaceRadius=o,e.fillEstimatedMinScreenSpaceRadius=r,e.makeLodLevelResources=s,e.makeLodResources=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
