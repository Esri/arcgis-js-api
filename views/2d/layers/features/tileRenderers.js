/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function e(e,r){if(!e)return null;switch(e.type){case"symbol":return new((await import("./tileRenderers/SymbolTileRenderer.js")).default)(r);case"heatmap":return new((await import("./tileRenderers/HeatmapTileRenderer.js")).default)(r)}}export{e as createOrReuseTileRenderer};
