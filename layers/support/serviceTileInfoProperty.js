/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./TileInfo"],(function(e,r){"use strict";const n={type:r,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:o}}}}};function o(e,n,o,l){if(!e)return null;const{minScale:i,maxScale:t,minLOD:c,maxLOD:f}=n;if(null!=c&&null!=f)return l&&l.ignoreMinMaxLOD?r.fromJSON(e):r.fromJSON({...e,lods:e.lods.filter((({level:e})=>null!=e&&e>=c&&e<=f))});if(0!==i&&0!==t){const n=e=>Math.round(1e4*e)/1e4,o=i?n(i):1/0,l=t?n(t):-1/0;return r.fromJSON({...e,lods:e.lods.filter((e=>{const r=n(e.scale);return r<=o&&r>=l}))})}return r.fromJSON(e)}e.readServiceTileInfo=o,e.serviceTileInfoProperty=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
