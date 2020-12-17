/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./Util"],(function(e,t){"use strict";function o(e){return o=e.data,t.getFirstObjectValue(o.indices).length>=1;var o}e.splitRenderGeometryChangeSetByMaterial=function(e){const t=new Map;let n=null,r=null;const d=e=>{if(e===n)return r;let o=t.get(e);return o||(o={toAdd:[],numToAdd:-1,toRemove:[],numToRemove:-1,toUpdate:[],numToUpdate:-1},t.set(e,o)),n=e,r=o,o};for(let t=0;t<e.numToAdd;t++){const n=e.toAdd[t];if(o(n)){d(n.material).toAdd.push(n)}}for(let t=0;t<e.numToRemove;t++){const n=e.toRemove[t];if(o(n)){d(n.material).toRemove.push(n)}}for(let t=0;t<e.numToUpdate;t++){const n=e.toUpdate[t];if(o(n.renderGeometry)){d(n.renderGeometry.material).toUpdate.push(n)}}return t},Object.defineProperty(e,"__esModule",{value:!0})}));
