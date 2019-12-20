// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/Logger","../../../../core/maybe","../../../webgl","./VertexStream"],function(e,r,t,n,g,d){Object.defineProperty(r,"__esModule",{value:!0});var m=t.getLogger("esri.views.2d.engine.webgl.WebGLDriverTest"),i=function(){function e(e){this._ignoresSamplerPrecision=null,this._context=e}return Object.defineProperty(e.prototype,"ignoresSamplerPrecision",{get:function(){return n.isNone(this._ignoresSamplerPrecision)&&(this._ignoresSamplerPrecision=r.testSamplerPrecision(this._context)),this._ignoresSamplerPrecision},enumerable:!0,configurable:!0}),e}();r.testWebGLDriver=function(e){return new i(e)},r.testSamplerPrecision=function(e){var r=new g.FramebufferObject(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),t=new Uint8Array(4),n=new d(e,[0,0,1,0,0,1,1,1]),i=new g.Program(e,"\nprecision highp float;\n\nattribute vec2 a_pos;\n\nuniform highp sampler2D u_texture;\nvarying vec4 v_color;\n\nfloat getBit(in float bitset, in int bitIndex) {\n  float offset = pow(2.0, float(bitIndex));\n\n  return mod(floor(bitset / offset), 2.0);\n}\n\nvoid main() {\n  vec4 value = texture2D(u_texture, vec2(0.0));\n\n  float bit = getBit(value.x * 255.0, 1);\n\n  v_color = bit * vec4(1.0);\n\n  gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}\n","\nprecision highp float;\n\nvarying vec4 v_color;\n\nvoid main() {\n  gl_FragColor = v_color;\n}\n",{a_pos:0}),o=new g.Texture(e,{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array([2,255,0,0]));i.setUniform1i("u_texture",0),e.bindTexture(o,0),e.bindFramebuffer(r),e.bindProgram(i);var a=e.getViewport(),s=a.x,l=a.y,p=a.width,c=a.height;e.setViewport(0,0,1,1),n.draw(),e.setViewport(s,l,p,c),r.readPixels(0,0,1,1,6408,5121,t),i.dispose(),n.dispose(),r.dispose();var u=255!==t[0]||255!==t[1]||255!==t[2]||255!==t[3];return u&&m.warn("A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. ["+t[0]+"."+t[1]+"."+t[2]+"."+t[3]+"]"),u}});