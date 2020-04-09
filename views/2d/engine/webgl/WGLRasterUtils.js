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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../webgl"],(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.createRasterTexture=function(e,t,n,a){void 0===n&&(n="nearest"),void 0===a&&(a=!1);var i=!(a&&"u8"===t.pixelType),o=i?5126:5121,f=null==t.pixels||0===t.pixels.length?null:i?t.getAsRGBAFloat():t.getAsRGBA(),s={width:t.width,height:t.height,target:3553,pixelFormat:6408,internalFormat:6408,samplingMode:"bilinear"===n?9729:9728,dataType:o,wrapMode:33071,flipped:!1};return new r.Texture(e,s,f)},t.createFrameBuffer=function(e,t,n,a){var i={width:t,height:n,target:3553,pixelFormat:6408,internalFormat:6408,samplingMode:9728,dataType:a?5121:5126,wrapMode:33071,flipped:!1},o=new r.Texture(e,i);return new r.FramebufferObject(e,{colorTarget:0,depthStencilTarget:3,width:t,height:n},o)},t.createTransformTexture=function(e,t){for(var n=4*t.size[0],a=t.size[1],i={width:n,height:a,target:3553,pixelFormat:6408,internalFormat:6408,dataType:5126,samplingMode:9728,wrapMode:33071,flipped:!1},o=new Float32Array(n*a*4),f=0,s=0;s<t.coefficients.length;s++)o[f++]=t.coefficients[s],s%3==2&&(o[f++]=1);return new r.Texture(e,i,o)},t.createColormapTexture=function(e,t){var n={width:t.length/4,height:1,target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,flipped:!1};return new r.Texture(e,n,t)},t.getUniformInfos=function(e,t){for(var r,n=e.gl,a=t.glName,i=n.getProgramParameter(a,n.ACTIVE_UNIFORMS),o=new Map,f=0;f<i;f++)(r=n.getActiveUniform(a,f))&&o.set(r.name,{location:n.getUniformLocation(a,r.name),info:r});return o},t.setUniforms=function(e,t,r,n){Object.keys(n).forEach((function(a){var i=r.get(a)||r.get(a+"[0]");i&&function(e,t,r,n,a){if(null===a||null==n)return!1;var i=e.gl,o=a.info;switch(o.type){case i.FLOAT:o.size>1?t.setUniform1fv(r,n):t.setUniform1f(r,n);break;case i.FLOAT_VEC2:t.setUniform2fv(r,n);break;case i.FLOAT_VEC3:t.setUniform3fv(r,n);break;case i.FLOAT_VEC4:t.setUniform4fv(r,n);break;case i.FLOAT_MAT3:t.setUniformMatrix3fv(r,n);break;case i.FLOAT_MAT4:t.setUniformMatrix4fv(r,n);break;case i.INT:case i.BOOL:o.size>1?t.setUniform1iv(r,n):t.setUniform1i(r,n);break;case i.INT_VEC2:case i.BOOL_VEC2:t.setUniform2iv(r,n);break;case i.INT_VEC3:case i.BOOL_VEC3:t.setUniform3iv(r,n);break;case i.INT_VEC4:case i.BOOL_VEC4:t.setUniform4iv(r,n);break;default:return!1}}(e,t,a,n[a],i)}))},t.setTextures=function(e,t,r,n){r.length===n.length&&(n.some((function(e){return null==e}))||r.some((function(e){return null==e}))||r.forEach((function(r,a){t.setUniform1i(r,a),e.bindTexture(n[a],a)})))}}));