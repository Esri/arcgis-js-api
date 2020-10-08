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

define(["require","exports","../../../../../../core/screenUtils","../../../../../webgl","../../VertexStream"],(function(e,t,r,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DropShadow=void 0;var o=[1,0],a=[0,1],n=function(){function e(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:{a_position:0}},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}}}return e.prototype.dispose=function(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null)},e.prototype.draw=function(e,t,i){var n=e.context,l=e.state,u=e.painter,h=e.pixelRatio,p=l.size,d=u.materialManager,c=this._programDesc,f=Math.round(h*p[0]),_=Math.round(h*p[1]),B=[Math.round(f/2),Math.round(_/2)],m=i.blurRadius,F=i.offsetX,b=i.offsetY,g=i.color,x=[h*r.pt2px(F/2),h*r.pt2px(b/2)];this._createOrResizeResources(e,B);var T=this._horizontalBlurFBO,v=this._verticalBlurFBO;n.setStencilWriteMask(0),n.setStencilTestEnabled(!1),n.setDepthWriteEnabled(!1),n.setDepthTestEnabled(!1);var O=this._layerFBOTexture;t.copyToTexture(0,0,f,_,0,0,O),this._quad||(this._quad=new s(n,[-1,-1,1,-1,-1,1,1,1])),n.setViewport(0,0,B[0],B[1]);var w=this._quad;w.bind(),n.setBlendingEnabled(!1);var z=d.getProgram(e,c.blur,[{name:"radius",value:Math.ceil(m)}]);n.bindProgram(z),n.bindFramebuffer(T),n.bindTexture(t.colorTexture,4),z.setUniformMatrix3fv("u_displayViewMat3",l.displayMat3),z.setUniform2fv("u_offset",x),z.setUniform1i("u_colorTexture",4),z.setUniform2fv("u_texSize",B),z.setUniform2fv("u_direction",o),z.setUniform1f("u_sigma",m),w.draw(),n.bindFramebuffer(v),n.bindTexture(T.colorTexture,5),z.setUniformMatrix3fv("u_displayViewMat3",l.displayMat3),z.setUniform2fv("u_offset",[0,0]),z.setUniform1i("u_colorTexture",5),z.setUniform2fv("u_direction",a),w.draw(),n.bindFramebuffer(t),n.setViewport(0,0,f,_);var M=d.getProgram(e,c.composite);n.bindProgram(M),n.bindTexture(v.colorTexture,2),M.setUniform1i("u_blurTexture",2),n.bindTexture(O,3),M.setUniform1i("u_layerFBOTexture",3),M.setUniform4fv("u_shadowColor",[g[3]*(g[0]/255),g[3]*(g[1]/255),g[3]*(g[2]/255),g[3]]),w.draw(),n.setBlendingEnabled(!0),n.setStencilTestEnabled(!0),n.setBlendFunction(1,771),w.unbind()},e.prototype._createOrResizeResources=function(e,t){var r=e.context,s=e.pixelRatio,o=e.state.size,a=Math.round(s*o[0]),n=Math.round(s*o[1]);this._horizontalBlurFBO&&this._size[0]===a&&this._size[1]===n||(this._size[0]=a,this._size[1]=n,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(t[0],t[1]):this._horizontalBlurFBO=new i.FramebufferObject(r,{colorTarget:0,depthStencilTarget:0,width:t[0],height:t[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:t[0],height:t[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(t[0],t[1]):this._verticalBlurFBO=new i.FramebufferObject(r,{colorTarget:0,depthStencilTarget:0,width:t[0],height:t[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:t[0],height:t[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(a,n):this._layerFBOTexture=new i.Texture(r,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:a,height:n}))},e}();t.DropShadow=n}));