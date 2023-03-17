/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["./utils"],(function(a){"use strict";const e={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/remap",attributes:new Map([["a_position",0],["a_texcoord",1]])};function r(a,r){return a.painter.materialManager.getProgram(e,[])}function t(e,r,t){a.setSingleImageTextures(e,r,t),a.setCoordsAndTransforms(r);const{noDataRanges:n,rangeMaps:s,allowUnmatched:o,clampRange:i}=e.rasterFunction.parameters;r.setUniform1fv("u_noDataRanges",n),r.setUniform1fv("u_rangeMaps",s),r.setUniform1f("u_unmatchMask",o?1:0),r.setUniform2fv("u_clampRange",i)}return{createProgram:r,bindTextureAndUniforms:t}}));
