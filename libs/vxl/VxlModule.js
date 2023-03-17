/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","exports","../../assets"],(function(e,t,n){"use strict";function i(t){return new Promise((n=>new Promise(((t,n)=>e(["../../chunks/vxlLayer"],t,n))).then((e=>e.vxlLayer)).then((({default:e})=>{const i=e({locateFile:r,preinitializedWebGLContext:t,onRuntimeInitialized:()=>n(i)})})))).catch((e=>{throw e}))}function r(e){return n.getAssetUrl(`esri/libs/vxl/${e}`)}t.loadVoxelWASM=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
