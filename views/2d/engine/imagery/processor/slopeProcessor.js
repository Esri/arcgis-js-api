/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["./utils"],(function(e){"use strict";const r={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/slope",attributes:new Map([["a_position",0],["a_texcoord",1]])};function t(e,t){const{painter:s,rasterFunction:i}=e,{slopeType:n}=i.parameters,o="percent-rise"===n?["percentRise"]:[];return s.materialManager.getProgram(r,o)}function s(r,t,s){e.setSingleImageTextures(r,t,s),e.setCoordsAndTransforms(t);const{width:i,height:n,resolution:o}=s,{zFactor:a,slopeType:u,pixelSizePower:c,pixelSizeFactor:f}=r.rasterFunction.parameters;t.setUniform2fv("u_srcImageSize",[i,n]),t.setUniform2fv("u_cellSize",[o,o]),t.setUniform1f("u_zFactor",a),t.setUniform1f("u_pixelSizePower","adjusted"===u?c:0),t.setUniform1f("u_pixelSizeFactor","adjusted"===u?f:0)}return{createProgram:t,bindTextureAndUniforms:s}}));
