// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../VertexStream","../WGLBrush","../../../../../webgl/rasterUtils"],(function(t,e,r,s,i,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._desc={lut:{vsPath:"raster/lut",fsPath:"raster/lut",attributes:{a_position:0,a_texcoord:1}},stretch:{vsPath:"raster/stretch",fsPath:"raster/stretch",attributes:{a_position:0,a_texcoord:1}},hillshade:{vsPath:"raster/hillshade",fsPath:"raster/hillshade",attributes:{a_position:0,a_texcoord:1}}},e._rendererUniformInfos=new Map,e}return r.__extends(e,t),e.prototype.dispose=function(){this._quad&&this._quad.dispose()},e.prototype.prepareState=function(t,e){var r=t.context;r.setBlendingEnabled(!0),r.setBlendFunctionSeparate(1,771,1,771),r.setColorMask(!0,!0,!0,!0),r.setStencilWriteMask(0),r.setStencilTestEnabled(!0),r.setStencilFunction(514,e.stencilRef,255)},e.prototype.draw=function(t,e){if(e.source&&!e.suspended){t.timeline.begin(this.name),e.updateTexture(t);var r=this.getShaderVariations(e),s=t.painter.materialManager.getProgram(t,this._desc[e.symbolizerParameters.type],r);this.drawWithProgram(t.context,s,e),t.timeline.end(this.name)}},e.prototype.drawWithProgram=function(t,e,i,o,n,d){void 0===o&&(o=1),void 0===n&&(n=[0,0]),void 0===d&&(d=!1),this._quad||(this._quad=new s(t,[0,0,1,0,0,1,1,1]));var h=i.symbolizerParameters,f=i.transformGrid,u=i.width,l=i.height,c=i.opacity,p=h.type;t.bindProgram(e);var m=this.getShaderVariations(i),g=this.getUniformInfos(p,t,e,m),_=i.getTextures(),v=_.names,y=_.textures;a.setTextures(t,e,v,y);var U=a.getBasicGridUniforms(o,n),b=a.getCommonUniforms(f,[u,l],[i.source.width,i.source.height],c,d);if(a.setUniforms(e,g,r.__assign(r.__assign({u_coordScale:i.coordScale,u_dvsMat3:i.transforms.dvs},U),b)),h.colormap){var P=h.colormap,S=h.colormapOffset,x=a.getColormapUniforms(P,S);a.setUniforms(e,g,x)}if("stretch"===h.type){var w=a.getStretchUniforms(h);a.setUniforms(e,g,w)}else if("hillshade"===h.type){var I=a.getShadedReliefUniforms(h);a.setUniforms(e,g,I)}this._quad.draw()},e.prototype.getUniformInfos=function(t,e,r,s){var i=s.length>0?t+"-"+s.join("-"):t;if(this._rendererUniformInfos.has(i))return this._rendererUniformInfos.get(i);var o=a.getUniformLocationInfos(e,r);return this._rendererUniformInfos.set(i,o),o},e.prototype.getShaderVariations=function(t){var e=[];return"cubic"===t.interpolation&&e.push("bicubic"),t.symbolizerParameters.colormap&&e.push("applyColormap"),t.transformGrid&&e.push("applyProjection"),e},e}(i.default);e.default=o}));