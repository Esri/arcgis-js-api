/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../webgl-engine/lib/lodRendering/LodResources"],(function(e,s){"use strict";function t(e){const s=[];return e.stageResources.geometries.forEach(((t,n)=>{const o=e.stageResources.materials[n],c=e.stageResources.textures;s.push({material:o,geometry:t,textures:c})})),{components:s,minScreenSpaceRadius:e.lodThreshold,pivotOffset:e.pivotOffset}}function n(e,t=o){const n=s.computeFaceCount(e);return Math.sqrt(n/(t*Math.PI))}const o=.05;e.estimateMinScreenSpaceRadius=n,e.fillEstimatedMinScreenSpaceRadius=function(e){e.levels.forEach((e=>{e.minScreenSpaceRadius||(e.minScreenSpaceRadius=n(e))}))},e.makeLodLevelResources=t,e.makeLodResources=function(e){return{levels:e.map((e=>t(e)))}},Object.defineProperty(e,"__esModule",{value:!0})}));
