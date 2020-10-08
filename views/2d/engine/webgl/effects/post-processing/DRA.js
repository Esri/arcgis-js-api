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

define(["require","exports","../../../../../../core/Logger","../../../../../webgl","../../VertexStream"],(function(e,t,r,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DRA=void 0;var o=r.getLogger("esri.views.2d.engine.webgl.effects.post-processing.DRA"),a=function(){function e(){this._fbos=null,this._colorAttachmentsPoints=[36064,36065],this._size=[0,0],this._programDesc={"min-max":{vsPath:"post-processing/pp",fsPath:"post-processing/dra/min-max",attributes:{a_position:0}},dra:{vsPath:"post-processing/pp",fsPath:"post-processing/dra",attributes:{a_position:0}}}}return e.prototype.dispose=function(){this._disposeFBOs(),this._layerTexture&&(this._layerTexture.dispose(),this._layerTexture=null)},e.prototype.draw=function(e,t,r){this._createOrResizeResources(e);var i=e.context,a=e.state,n=e.painter,h=e.pixelRatio,u=n.materialManager,d=this._programDesc,p=a.size,l=this._fbos,f=[h*p[0],h*p[1]],_=i.capabilities.drawBuffers;if(_){this._quad||(this._quad=new s(i,[-1,-1,1,-1,-1,1,1,1]));var c=this._layerTexture;t.copyToTexture(0,0,f[0],f[1],0,0,c);var m=this._quad;m.bind();var x=u.getProgram(e,d["min-max"]);i.bindProgram(x),i.setBlendingEnabled(!1);for(var g,b=t.colorTexture,T=t.colorTexture,w=[f[0],f[1]],v=[0,0],M=0;M<l.length;M++){var y=l[M],P=y.descriptor;v[0]=P.width,v[1]=P.height,i.bindFramebuffer(y),_.drawBuffers(this._colorAttachmentsPoints),i.setViewport(0,0,P.width,P.height),(g=M)>6&&(g=6),i.bindTexture(b,g),i.bindTexture(T,g+1),x.setUniform1i("u_minTexture",g),x.setUniform1i("u_maxTexture",g+1),x.setUniform2fv("u_srcResolution",w),x.setUniform2fv("u_dstResolution",v),m.draw(),b=y.getColorTexture(36064),T=y.getColorTexture(36065),w[0]=v[0],w[1]=v[1]}i.setViewport(0,0,f[0],f[1]),i.bindFramebuffer(t);var R=u.getProgram(e,d.dra);i.bindProgram(R),i.bindTexture(b,5),i.bindTexture(T,6),i.bindTexture(c,7),R.setUniform1i("u_minColor",5),R.setUniform1i("u_maxColor",6),R.setUniform1i("u_texture",7),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),m.draw(),i.setBlendingEnabled(!0),i.setBlendFunction(1,771),i.setStencilTestEnabled(!0),m.unbind()}else o.error("esri.DRA","WebGL Extension WEBGL_draw_buffers isn't supported!")},e.prototype._createOrResizeResources=function(e){var t=e.context,r=e.state,s=e.pixelRatio,o=r.size,a=Math.round(s*o[0]),n=Math.round(s*o[1]);if(this._size[0]!==a||this._size[1]!==n){for(this._size[0]=a,this._size[1]=n,this._disposeFBOs(),this._fbos=[];a>1||n>1;){var h={pixelFormat:6408,internalFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,flipped:!1,width:a=Math.max(1,0|Math.floor((a+2-1)/2)),height:n=Math.max(1,0|Math.floor((n+2-1)/2))},u=new i.FramebufferObject(t,{depthStencilTarget:0,width:a,height:n},[{attachmentPoint:36064,texture:h},{attachmentPoint:36065,texture:h}]);this._fbos.push(u)}this._layerTexture?this._layerTexture.resize(Math.round(s*o[0]),Math.round(s*o[1])):this._layerTexture=new i.Texture(t,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:Math.round(s*o[0]),height:Math.round(s*o[1])})}},e.prototype._disposeFBOs=function(){if(this._fbos){for(var e=0,t=this._fbos;e<t.length;e++){t[e].dispose()}this._fbos.length=0,this._fbos=null}},e}();t.DRA=a}));