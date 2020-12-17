/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["require","exports"],(function(e,n){"use strict";function t(e){return Object.freeze({__proto__:null,default:e})}n.createOrReuseTileRenderer=async function(n,r){if(!n)return null;switch(n.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":return new((await new Promise((function(n,r){e(["./tileRenderers/SymbolTileRenderer"],(function(e){n(t(e))}),r)}))).default)(r);case"heatmap":return new((await new Promise((function(n,r){e(["./tileRenderers/HeatmapTileRenderer"],(function(e){n(t(e))}),r)}))).default)(r)}},Object.defineProperty(n,"__esModule",{value:!0})}));
