/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["./utils"],(function(t){"use strict";const r={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/compositeband",attributes:new Map([["a_position",0],["a_texcoord",1]])};function e(t,e){return t.painter.materialManager.getProgram(r,[])}function n(r,e,n){t.setMultipleImageTextures(r,e,n),t.setCoordsAndTransforms(e)}return{createProgram:e,bindTextureAndUniforms:n}}));
