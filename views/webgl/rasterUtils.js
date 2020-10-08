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

define(["require","exports","../webgl"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setTextures=t.setUniforms=t.getUniformLocationInfos=t.getShadedReliefUniforms=t.getStretchUniforms=t.getBasicGridUniforms=t.getColormapUniforms=t.getCommonUniforms=t.createColormapTexture=t.createTransformTexture=t.createFrameBuffer=t.createRasterTexture=void 0,t.createRasterTexture=function(e,t,n,a){void 0===n&&(n="nearest"),void 0===a&&(a=!1);var i=!(a&&"u8"===t.pixelType),o=i?5126:5121,u=null==t.pixels||0===t.pixels.length?null:i?t.getAsRGBAFloat():t.getAsRGBA(),s={width:t.width,height:t.height,target:3553,pixelFormat:6408,internalFormat:6408,samplingMode:"bilinear"===n||"cubic"===n?9729:9728,dataType:o,wrapMode:33071,flipped:!1};return new r.Texture(e,s,u)},t.createFrameBuffer=function(e,t,n,a){var i={width:t,height:n,target:3553,pixelFormat:6408,internalFormat:6408,samplingMode:9728,dataType:a?5121:5126,wrapMode:33071,flipped:!1},o=new r.Texture(e,i);return new r.FramebufferObject(e,{colorTarget:0,depthStencilTarget:3,width:t,height:n},o)},t.createTransformTexture=function(e,t){for(var n=4*t.size[0],a=t.size[1],i={width:n,height:a,target:3553,pixelFormat:6408,internalFormat:6408,dataType:5126,samplingMode:9728,wrapMode:33071,flipped:!1},o=new Float32Array(n*a*4),u=0,s=0;s<t.coefficients.length;s++)o[u++]=t.coefficients[s],s%3==2&&(o[u++]=1);return new r.Texture(e,i,o)},t.createColormapTexture=function(e,t){var n={width:t.length/4,height:1,target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,flipped:!1};return new r.Texture(e,n,t)},t.getCommonUniforms=function(e,t,r,n,a,i){return void 0===n&&(n=1),void 0===a&&(a=!0),void 0===i&&(i=!1),{u_flipY:a,u_isFloatTexture:i,u_applyTransform:!!e,u_opacity:n,u_transformSpacing:e?e.spacing:null,u_transformGridSize:e?e.size:null,u_targetImageSize:t,u_srcImageSize:r}},t.getColormapUniforms=function(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:null}},t.getBasicGridUniforms=function(e,t){return{u_scale:e,u_offset:t}},t.getStretchUniforms=function(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}},t.getShadedReliefUniforms=function(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}},t.getUniformLocationInfos=function(e,t){for(var r,n=e.gl,a=t.glName,i=n.getProgramParameter(a,n.ACTIVE_UNIFORMS),o=new Map,u=0;u<i;u++)(r=n.getActiveUniform(a,u))&&o.set(r.name,{location:n.getUniformLocation(a,r.name),info:r});return o},t.setUniforms=function(e,t,r){Object.keys(r).forEach((function(n){var a=t.get(n)||t.get(n+"[0]");a&&function(e,t,r,n){if(null===n||null==r)return!1;var a=n.info;switch(a.type){case 5126:a.size>1?e.setUniform1fv(t,r):e.setUniform1f(t,r);break;case 35664:e.setUniform2fv(t,r);break;case 35665:e.setUniform3fv(t,r);break;case 35666:e.setUniform4fv(t,r);break;case 35675:e.setUniformMatrix3fv(t,r);break;case 35676:e.setUniformMatrix4fv(t,r);break;case 5124:a.size>1?e.setUniform1iv(t,r):e.setUniform1i(t,r);break;case 35670:e.setUniform1i(t,r?1:0);break;case 35667:case 35671:e.setUniform2iv(t,r);break;case 35668:case 35672:e.setUniform3iv(t,r);break;case 35669:case 35673:e.setUniform4iv(t,r);break;default:return!1}}(e,n,r[n],a)}))},t.setTextures=function(e,t,r,n){r.length===n.length&&(n.some((function(e){return null==e}))||r.some((function(e){return null==e}))||r.forEach((function(r,a){t.setUniform1i(r,a),e.bindTexture(n[a],a)})))}}));