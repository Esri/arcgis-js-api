/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["require","exports","../../assets"],(function(e,t,n){"use strict";function i(t){return new Promise((n=>new Promise((function(t,n){e(["../../chunks/vxlLayer"],t,n)})).then((function(e){return e.vxlLayer})).then((({default:e})=>{const i=e({locateFile:r,preinitializedWebGLContext:t,onRuntimeInitialized:()=>n(i)})})))).catch((e=>Promise.reject(e)))}function r(e){return n.getAssetUrl(`esri/libs/vxl/${e}`)}t.loadVoxelWASM=i,Object.defineProperty(t,"__esModule",{value:!0})}));
