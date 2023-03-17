/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["./utils","../../../../webgl/rasterUtils"],(function(t,e){"use strict";const r={vsPath:"raster/common",fsPath:"raster/lut",attributes:new Map([["a_position",0],["a_texcoord",1]])};function s(e,s,o){const n=o?[]:t.getProjectionDefines(s.transformGrid);return{defines:n,program:e.painter.materialManager.getProgram(r,n)}}function o(t,r,s,o,n=!1){const{names:a,textures:i}=s.getTextures({useProcessedTexture:n});e.setTextures(t.context,r,a,i),e.setUniforms(r,o,s.commonUniforms),r.setUniformMatrix3fv("u_dvsMat3",s.transforms.dvs);const{colormap:m,colormapOffset:f}=s.symbolizerParameters,c=e.getColormapUniforms(m,f);e.setUniforms(r,o,c)}return{createProgram:s,bindTextureAndUniforms:o}}));
