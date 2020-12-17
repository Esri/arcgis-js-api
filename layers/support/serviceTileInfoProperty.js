/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./TileInfo"],(function(e,r){"use strict";const n={type:r,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}};function l(e,n,l,o){if(!e)return null;const{minScale:i,maxScale:t,minLOD:s,maxLOD:c}=n;if(null!=s&&null!=c)return o&&o.ignoreMinMaxLOD?r.fromJSON(e):r.fromJSON({...e,lods:e.lods.filter((({level:e})=>null!=e&&e>=s&&e<=c))});if(0!==i&&0!==t){const n=e=>Math.round(1e4*e)/1e4,l=i?n(i):1/0,o=t?n(t):-1/0;return r.fromJSON({...e,lods:e.lods.filter((e=>{const r=n(e.scale);return r<=l&&r>=o}))})}return r.fromJSON(e)}e.readServiceTileInfo=l,e.serviceTileInfoProperty=n,Object.defineProperty(e,"__esModule",{value:!0})}));
