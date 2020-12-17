/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["require","exports","../../core/promiseUtils","../../assets"],(function(e,t,n,i){"use strict";function r(e){return i.getAssetUrl(`esri/libs/i3s/${e}`)}let s;t.getWorkerModule=function(){return s||(s=n.create((t=>new Promise((function(t,n){e(["../../chunks/i3s"],t,n)})).then((function(e){return e.i3s})).then((({default:e})=>{const n=e({locateFile:r,onRuntimeInitialized:()=>t(n)});delete n.then})))).catch((e=>n.reject(e)))),s},Object.defineProperty(t,"__esModule",{value:!0})}));
