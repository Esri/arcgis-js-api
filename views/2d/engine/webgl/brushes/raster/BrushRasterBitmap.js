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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../VertexStream","../WGLBrush","../../../../../webgl/rasterUtils"],(function(e,t,r,i,o,s){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._desc={lut:{path:"raster/lut",attributes:{a_position:0,a_texcoord:1}},stretch:{path:"raster/stretch",attributes:{a_position:0,a_texcoord:1}},hillshade:{path:"raster/hillshade",attributes:{a_position:0,a_texcoord:1}}},t._rendererUniformInfos=new Map,t}return r.__extends(t,e),t.prototype.dispose=function(){this._quad&&this._quad.dispose()},t.prototype.prepareState=function(e,t){var r=e.context;r.setBlendingEnabled(!0),r.setBlendFunctionSeparate(1,771,1,771),r.setColorMask(!0,!0,!0,!0),r.setStencilWriteMask(0),r.setStencilTestEnabled(!0),r.setStencilFunction(514,t.stencilRef,255)},t.prototype.draw=function(e,t){if(t.source&&!t.suspended){e.timeline.begin(this.name);var r=e.context,i=this.getShaderVariations(t),o=e.painter.materialManager.getProgram(e,this._desc[t.symbolizerParameters.type],i);this.drawWithProgram(r,o,t),e.timeline.end(this.name)}},t.prototype.drawWithProgram=function(e,t,o,a,n,d){void 0===a&&(a=1),void 0===n&&(n=[0,0]),void 0===d&&(d=!1),this._quad||(this._quad=new i(e,[0,0,1,0,0,1,1,1]));var p=o.symbolizerParameters,f=o.transformGrid,h=o.width,l=o.height,u=o.opacity,c=p.type;e.bindProgram(t);var m=this.getShaderVariations(o),g=this.getUniformInfos(c,e,t,m),_=o.getTextures(),v=_.names,y=_.textures;s.setTextures(e,t,v,y);var U=s.getBasicGridUniforms(a,n),b=s.getCommonUniforms(f,[h,l],[o.source.width,o.source.height],u,d);if(s.setUniforms(t,g,r.__assign(r.__assign({u_coordScale:o.coordScale,u_dvsMat3:o.transforms.dvs},U),b)),p.colormap){var S=p.colormap,x=p.colormapOffset,w=s.getColormapUniforms(S,x);s.setUniforms(t,g,w)}if("stretch"===p.type){var P=s.getStretchUniforms(p);s.setUniforms(t,g,P)}else if("hillshade"===p.type){var I=s.getShadedReliefUniforms(p);s.setUniforms(t,g,I)}this._quad.draw()},t.prototype.getUniformInfos=function(e,t,r,i){var o=i.length>0?e+"-"+i.join("-"):e;if(this._rendererUniformInfos.has(o))return this._rendererUniformInfos.get(o);var a=s.getUniformLocationInfos(t,r);return this._rendererUniformInfos.set(o,a),a},t.prototype.getShaderVariations=function(e){var t=[];return"cubic"===e.interpolation&&t.push("bicubic"),e.symbolizerParameters.colormap&&t.push("applyColormap"),e.transformGrid&&t.push("applyProjection"),t},t}(o.default);t.default=a}));