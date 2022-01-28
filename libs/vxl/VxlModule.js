/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["require","exports","../../assets"],(function(e,t,i){"use strict";function n(t){return new Promise((i=>new Promise(((t,i)=>e(["../../chunks/vxlLayer"],t,i))).then((e=>e.vxlLayer)).then((({default:e})=>{const n=e({locateFile:r,preinitializedWebGLContext:t,onRuntimeInitialized:()=>i(n)})})))).catch((e=>Promise.reject(e)))}function r(e){return i.getAssetUrl(`esri/libs/vxl/${e}`)}t.loadVoxelWASM=n,Object.defineProperty(t,"__esModule",{value:!0})}));
