/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["./utils"],(function(e){"use strict";const t={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/aspect",attributes:new Map([["a_position",0],["a_texcoord",1]])};function r(e,r){return e.painter.materialManager.getProgram(t,[])}function n(t,r,n){e.setSingleImageTextures(t,r,n),e.setCoordsAndTransforms(r);const{width:s,height:i,resolution:a}=n;r.setUniform2fv("u_srcImageSize",[s,i]),r.setUniform2fv("u_cellSize",[a,a])}return{createProgram:r,bindTextureAndUniforms:n}}));
