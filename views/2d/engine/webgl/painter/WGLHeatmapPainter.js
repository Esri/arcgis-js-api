// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../webgl/Program","../../../../webgl/VertexArrayObject","../../../../webgl/BufferObject","../../../../webgl/Texture","../../../../webgl/FramebufferObject","dojo/text!../shaders/heatmap.vs.glsl","dojo/text!../shaders/heatmap.fs.glsl"],function(t,e,i,r,a,n,o,s,h){function l(t){for(var e=[],i=0;i<t.values.length;++i){var r=t.values[i],a=Math.floor(255*t.colors[4*i+0]),n=Math.floor(255*t.colors[4*i+1]),o=Math.floor(255*t.colors[4*i+2]),s=t.colors[4*i+3];e.push({ratio:r,color:"rgba("+a+", "+n+", "+o+", "+s+")"})}return e}var d=512,_=function(){function t(){this._initialized=!1,this._initWGLExtensions=!1}return t.prototype.bindHeatmapSurface=function(t,e,i){if(!this._initWGLExtensions){var r=t.extensions;if(!r.textureFloatLinear||!r.colorBufferFloat)throw Error("Required WebGL extensions needed for the heatmap drawing are not available!");this._initWGLExtensions=!0}var a=Math.round(e/4),s=Math.round(i/4);if(!this._intensityFBO||this._intensityFBO.width!==a||this._intensityFBO.height!==s){this._intensityFBO&&this._intensityFBO.dispose();var h=new n(t,{target:3553,internalFormat:34836,pixelFormat:6408,dataType:5126,samplingMode:t.extensions.textureFloatLinear?9729:9728,wrapMode:33071,width:a,height:s});this._intensityFBO=o.createWithAttachments(t,h,{colorTarget:0,depthStencilTarget:3,width:a,height:s,multisampled:!1})}this._boundFBO=t.getBoundFramebufferObject(),t.bindFramebuffer(this._intensityFBO),this._prevVP=t.getViewport(),t.setViewport(0,0,a,s),t.setStencilWriteMask(255),t.setClearColor(0,0,0,0),t.setClearStencil(0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.STENCIL_BUFFER_BIT)},t.prototype.drawHeatmap=function(t,e,i){t.bindFramebuffer(this._boundFBO),this._boundFBO=null,t.setViewport(this._prevVP.x,this._prevVP.y,this._prevVP.width,this._prevVP.height),this._initialized||(this._initialized=this._initialize(t)),t.setBlendFunctionSeparate(1,771,1,771),t.setBlendingEnabled(!0),t.bindVAO(this._vertexArrayObject),t.bindProgram(this._program),t.bindTexture(this._intensityFBO.colorTexture,2),this._program.setUniform1i("u_texture",2),this._program.setUniform1f("u_opacity",i);var r=e.heatmapParameters;this._updateGradient(t,r),this._program.setUniform2f("u_minmax",r.minPixelIntensity,r.maxPixelIntensity),t.setActiveTexture(5),t.bindTexture(this._gradientTex,5),this._program.setUniform1i("u_gradient",5),t.drawArrays(5,0,4),t.bindVAO()},t.prototype._initialize=function(t){if(this._initialized)return!0;var e={a_pos:0,a_tex:1},n=new i(t,s,h,e);if(!n)return!1;var o={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:4,normalized:!1,divisor:0},{name:"a_tex",count:2,type:5120,offset:2,stride:4,normalized:!1,divisor:0}]},l=new Int8Array(16);l[0]=-1,l[1]=-1,l[2]=0,l[3]=0,l[4]=1,l[5]=-1,l[6]=1,l[7]=0,l[8]=-1,l[9]=1,l[10]=0,l[11]=1,l[12]=1,l[13]=1,l[14]=1,l[15]=1;var d=new r(t,e,o,{geometry:a.createVertex(t,35044,l)});return this._program=n,this._vertexArrayObject=d,this._initialized=!0,!0},t.prototype._updateGradient=function(t,e){if(!this._gradientTex||e.color.refreshColorRamp){this._gradientTex&&(this._gradientTex.dispose(),this._gradientTex=null),this._gradientTex=new n(t,{target:3553,internalFormat:6408,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:1,height:d});var i=document.createElement("CANVAS");i.width=1,i.height=d;for(var r=i.getContext("2d"),a=l(e.color),o=r.createLinearGradient(0,0,0,d),s=0;s<a.length;s++){var h=a[s];o.addColorStop(h.ratio,h.color)}r.fillStyle=o,r.fillRect(0,0,1,d),this._gradientTex.setData(i),e.color.refreshColorRamp=!1}},t}();return _});