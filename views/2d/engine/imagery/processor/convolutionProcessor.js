/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["./utils"],(function(e){"use strict";const r={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/convolution",attributes:new Map([["a_position",0],["a_texcoord",1]])};function t(e,t){const{painter:n,rasterFunction:a}=e,{kernelRows:s,kernelCols:o}=a.parameters,i=[{name:"rows",value:s},{name:"cols",value:o}];return n.materialManager.getProgram(r,i)}function n(r,t,n){e.setSingleImageTextures(r,t,n),e.setCoordsAndTransforms(t),t.setUniform2fv("u_srcImageSize",[n.width,n.height]);const{kernel:a,clampRange:s}=r.rasterFunction.parameters;t.setUniform1fv("u_kernel",a),t.setUniform2fv("u_clampRange",s)}return{createProgram:t,bindTextureAndUniforms:n}}));
