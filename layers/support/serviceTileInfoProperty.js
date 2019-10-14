// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","./TileInfo"],function(e,r,n,i){function l(e,r,l,o){if(!e)return null;var t=r.minScale,u=r.maxScale,a=r.minLOD,f=r.maxLOD;if(null!=a&&null!=f)return o&&o.ignoreMinMaxLOD?i.fromJSON(e):i.fromJSON(n({},e,{lods:e.lods.filter(function(e){var r=e.level;return null!=r&&r>=a&&r<=f})}));if(0!==t&&0!==u){var c=function(e){return Math.round(1e4*e)/1e4},s=t?c(t):1/0,m=u?c(u):-1/0;return i.fromJSON(n({},e,{lods:e.lods.filter(function(e){var r=c(e.scale);return r<=s&&r>=m})}))}return i.fromJSON(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.serviceTileInfoProperty={type:i,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}},r.readServiceTileInfo=l});