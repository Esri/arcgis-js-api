/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["require","exports","../../assets","../../core/maybe"],(function(e,s,t,n){"use strict";function i(){if(n.isNone(r)){const s=e=>t.getAssetUrl(`esri/libs/basisu/${e}`);r=new Promise((function(s,t){e(["../../chunks/basis_transcoder"],s,t)})).then((function(e){return e.basis_transcoder})).then((({default:e})=>e({locateFile:s}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return r}let r;s.getBasisTranscoder=i,Object.defineProperty(s,"__esModule",{value:!0})}));
