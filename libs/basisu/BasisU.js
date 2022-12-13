/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["require","exports","../../assets","../../core/maybe"],(function(e,s,t,i){"use strict";function n(){if(i.isNone(r)){const s=e=>t.getAssetUrl(`esri/libs/basisu/${e}`);r=new Promise(((s,t)=>e(["../../chunks/basis_transcoder"],s,t))).then((e=>e.basis_transcoder)).then((({default:e})=>e({locateFile:s}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return r}let r;s.getBasisTranscoder=n,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
