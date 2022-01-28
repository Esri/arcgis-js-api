/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Error","../../../core/maybe","../../../renderers/support/rasterRendererHelper","../support/utils"],(function(e,r,t,n,o,s){"use strict";function a(e){return p.apply(this,arguments)}function p(){return(p=r._asyncToGenerator((function*(e){e=yield s.processRasterRendererParameters(e);const r=o.createColormapRenderer(e.layer.rasterInfo);if(!n.isSome(r))throw new t("raster-colormap-renderer:not-supported","Only single band data with colormap is supported");return{renderer:r}}))).apply(this,arguments)}e.createRenderer=a,Object.defineProperty(e,"__esModule",{value:!0})}));
