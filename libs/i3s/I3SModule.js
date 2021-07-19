/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["require","exports","../../assets"],(function(e,t,n){"use strict";function i(){return r||(r=new Promise((t=>new Promise((function(t,n){e(["../../chunks/i3s"],t,n)})).then((function(e){return e.i3s})).then((({default:e})=>{const n=e({locateFile:s,onRuntimeInitialized:()=>t(n)});delete n.then})))).catch((e=>Promise.reject(e)))),r}function s(e){return n.getAssetUrl(`esri/libs/i3s/${e}`)}let r;t.get=i,Object.defineProperty(t,"__esModule",{value:!0})}));
