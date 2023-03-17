/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["./utils"],(function(t){"use strict";const e={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/mask",attributes:new Map([["a_position",0],["a_texcoord",1]])};function n(t,n){const{painter:r,rasterFunction:a}=t,s=a.parameters.bandCount>1?["multiBand"]:[];return r.materialManager.getProgram(e,s)}function r(e,n,r){t.setSingleImageTextures(e,n,r),t.setCoordsAndTransforms(n);const{includedRanges:a,noDataValues:s}=e.rasterFunction.parameters;n.setUniform1fv("u_includedRanges",a),n.setUniform1fv("u_noDataValues",s)}return{createProgram:n,bindTextureAndUniforms:r}}));
