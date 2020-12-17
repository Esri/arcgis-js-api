/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../core/Error","../../../renderers/support/rasterRendererHelper","../support/utils"],(function(e,r,t,o,n){"use strict";e.createRenderer=async function(e){e=await n.processRasterRendererParameters(e);const s=o.createColormapRenderer(e.layer.rasterInfo);if(!r.isSome(s))throw new t("raster-colormap-renderer:not-supported","Only single band data with colormap is supported");return{renderer:s}},Object.defineProperty(e,"__esModule",{value:!0})}));
