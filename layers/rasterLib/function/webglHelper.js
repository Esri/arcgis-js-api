// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define([],(function(){var e={getUniforms:function(e,r){var n,a,o=e.getProgramParameter(r,e.ACTIVE_UNIFORMS),t={};for(n=0;n<o;n++)(a=e.getActiveUniform(r,n))&&(t[a.name]={location:e.getUniformLocation(r,a.name),info:a});return t},setUniform:function(e,r,n){var a=r.info,o=r.location,t=a.type;if(null!=n)switch(t){case e.FLOAT:if(a.size>1){if(0===n.length)return void console.log("uniform "+r.info.name+" has length 0");e.uniform1fv(o,n)}else e.uniform1f(o,n);break;case e.FLOAT_VEC2:if(0===n.length)return void console.log("uniform "+r.info.name+" has length 0");e.uniform2fv(o,n);break;case e.FLOAT_VEC3:if(0===n.length)return void console.log("uniform "+r.info.name+" has length 0");e.uniform3fv(o,n);break;case e.FLOAT_VEC4:if(0===n.length)return void console.log("uniform "+r.info.name+" has length 0");e.uniform4fv(o,n);break;case e.INT:case e.BOOL:if(a.size>1){if(0===n.length)return void console.log("uniform "+r.info.name+" has length 0");e.uniform1iv(o,n)}else e.uniform1i(o,n);break;case e.INT_VEC2:case e.BOOL_VEC2:if(0===n.length)return void console.log("uniform "+r.info.name+" has length 0");e.uniform2iv(o,n);break;case e.INT_VEC3:case e.BOOL_VEC3:if(0===n.length)return void console.log("uniform "+r.info.name+" has length 0");e.uniform3iv(o,n);break;case e.INT_VEC4:case e.BOOL_VEC4:if(0===n.length)return void console.log("uniform "+r.info.name+" has length 0");e.uniform4iv(o,n)}else console.log("uniform "+r.info.name+" has null or undefined value")},createTexture:function(e,r){var n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,r?e.LINEAR:e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,r?e.LINEAR:e.NEAREST),n},createBufferTexture:function(r,n,a){var o=e.createTexture(r,n);r.getExtension("OES_texture_float"),a=a||[r.drawingBufferWidth,r.drawingBufferHeight],r.texImage2D(r.TEXTURE_2D,0,r.RGBA,a[0],a[1],0,r.RGBA,r.FLOAT,null);var t=r.createFramebuffer();return r.bindFramebuffer(r.FRAMEBUFFER,t),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,o,0),{texture:o,frameBuffer:t}},getShader:function(e,r,n){var a;return a=n?e.createShader(e.VERTEX_SHADER):e.createShader(e.FRAGMENT_SHADER),e.shaderSource(a,r),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS)||(console.log(e.getShaderInfoLog(a)),a=null),a},loadProgram:function(e,r,n){var a=e.createProgram();return e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),e.getProgramParameter(a,e.LINK_STATUS)||(console.warn("failed to load webgl program: "+e.getProgramInfoLog(a)),e.deleteProgram(a),a=null),a},createMesh:function(e,r){if(!e||1===e[0]&&1===e[1])return new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]);var n;n=e&&r?new Float32Array(e[0]*e[1]*20):new Float32Array(e[0]*e[1]*12);var a,o,t,i,f=.9998/e[1],u=.9998/e[0],l=0;for(a=0;a<e[1];a++)for(o=0;o<e[0];o++)t=1e-4+f*a,i=1e-4+u*o,e&&!r?(n[l++]=t,n[l++]=i,n[l++]=t+f,n[l++]=i,n[l++]=t,n[l++]=i+u,n[l++]=t,n[l++]=i+u,n[l++]=t+f,n[l++]=i,n[l++]=t+f,n[l++]=i+u):(n[l++]=t,n[l++]=i,n[l++]=t,n[l++]=i+u,n[l++]=t,n[l++]=i+u,n[l++]=t+f,n[l++]=i+u,n[l++]=t+f,n[l++]=i+u,n[l++]=t+f,n[l++]=i,n[l++]=t,n[l++]=i,n[l++]=t+f,n[l++]=i,n[l++]=t,n[l++]=i+u,n[l++]=t+f,n[l++]=i);return n}};return e}));