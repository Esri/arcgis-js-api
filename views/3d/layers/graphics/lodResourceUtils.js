/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../webgl-engine/lib/lodRendering/LodResources"],(function(e,o,n){"use strict";function s(e){const s=new Array;return e.stageResources.geometries.forEach((o=>{const r=e.stageResources.textures;s.push(new n.LodComponentResources(o,r))})),{components:s,minScreenSpaceRadius:o.unwrapOr(e.lodThreshold,0),pivotOffset:e.pivotOffset}}function r(e){return{levels:e.map((e=>s(e)))}}e.makeLodResources=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
