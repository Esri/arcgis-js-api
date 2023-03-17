/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./PropertyOrigin"],(function(e,t){"use strict";function n(e,n,r){n.keys().forEach((e=>{r.set(e,n.get(e),t.OriginId.DEFAULTS)}));const i=e.metadatas;Object.keys(i).forEach((n=>{e.internalGet(n)&&r.set(n,e.internalGet(n),t.OriginId.DEFAULTS)}))}e.setupConstructedDefaults=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
