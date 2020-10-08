// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","./TileInfo"],(function(e,r,n,i){"use strict";function l(e,r,l,o){if(!e)return null;var t=r.minScale,a=r.maxScale,s=r.minLOD,f=r.maxLOD;if(null!=s&&null!=f)return o&&o.ignoreMinMaxLOD?i.fromJSON(e):i.fromJSON(n.__assign(n.__assign({},e),{lods:e.lods.filter((function(e){var r=e.level;return null!=r&&r>=s&&r<=f}))}));if(0!==t&&0!==a){var u=function(e){return Math.round(1e4*e)/1e4},c=t?u(t):1/0,d=a?u(a):-1/0;return i.fromJSON(n.__assign(n.__assign({},e),{lods:e.lods.filter((function(e){var r=u(e.scale);return r<=c&&r>=d}))}))}return i.fromJSON(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.readServiceTileInfo=r.serviceTileInfoProperty=void 0,r.serviceTileInfoProperty={type:i,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}},r.readServiceTileInfo=l}));