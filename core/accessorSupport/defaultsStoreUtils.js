/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./PropertyOrigin"],(function(e,t){"use strict";function n(e,n,i){n.keys().forEach((e=>{i.set(e,n.get(e),t.OriginId.DEFAULTS)}));const r=e.metadatas;Object.keys(r).forEach((n=>{e.internalGet(n)&&i.set(n,e.internalGet(n),t.OriginId.DEFAULTS)}))}e.setupConstructedDefaults=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
