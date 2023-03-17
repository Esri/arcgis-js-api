/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["./utils"],(function(t){"use strict";const r={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/bandarithmetic",attributes:new Map([["a_position",0],["a_texcoord",1]])};function e(t,e){const{painter:n,rasterFunction:a}=t,{indexType:s}=a.parameters;return n.materialManager.getProgram(r,[s])}function n(r,e,n){t.setSingleImageTextures(r,e,n),t.setCoordsAndTransforms(e);const{bandIndexMat3:a}=r.rasterFunction.parameters;e.setUniformMatrix3fv("u_bandIndexMat3",a)}return{createProgram:e,bindTextureAndUniforms:n}}));
