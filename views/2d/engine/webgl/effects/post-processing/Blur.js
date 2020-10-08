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

define(["require","exports","../../../../../webgl","../../VertexStream"],(function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Blur=void 0;var s=[1,0],a=[0,1],n=function(){function e(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:{a_position:0}},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}}}return e.prototype.dispose=function(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)},e.prototype.draw=function(e,t,r){var s=e.context,a=r.type,n=r.radius;if(0!==n){this._createOrResizeResources(e),this._quad||(this._quad=new i(s,[-1,-1,1,-1,-1,1,1,1]));var o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(e,t,n):this._radialBlur(e,t),o.unbind()}},e.prototype._gaussianBlur=function(e,t,r){var i=e.context,n=e.state,o=e.painter,u=e.pixelRatio,l=n.size,d=o.materialManager,p=this._programDesc,b=this._quad,h=[Math.round(u*l[0]),Math.round(u*l[1])],c=this._blurFBO,_=d.getProgram(e,p.gaussianBlur,[{name:"radius",value:Math.ceil(r)}]);i.bindProgram(_),i.setBlendingEnabled(!1),i.bindFramebuffer(c),i.bindTexture(t.colorTexture,4),_.setUniform1i("u_colorTexture",4),_.setUniform2fv("u_texSize",h),_.setUniform2fv("u_direction",s),_.setUniform1f("u_sigma",r),b.draw(),i.bindFramebuffer(t),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.bindTexture(c.colorTexture,5),_.setUniform1i("u_colorTexture",5),_.setUniform2fv("u_direction",a),b.draw(),i.setBlendingEnabled(!0),i.setBlendFunction(1,771),i.setStencilTestEnabled(!0)},e.prototype._radialBlur=function(e,t){var r=e.context,i=e.painter.materialManager,s=this._programDesc,a=this._quad,n=this._blurFBO;r.bindFramebuffer(n);var o=i.getProgram(e,s.radialBlur);r.bindProgram(o),r.setBlendingEnabled(!1),r.bindTexture(t.colorTexture,4),o.setUniform1i("u_colorTexture",4),a.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setBlendingEnabled(!0);var u=i.getProgram(e,s.blit);r.bindProgram(u),r.bindTexture(n.colorTexture,5),u.setUniform1i("u_texture",5),r.setBlendFunction(1,771),a.draw()},e.prototype._createOrResizeResources=function(e){var t=e.context,i=e.state,s=e.pixelRatio,a=i.size,n=Math.round(s*a[0]),o=Math.round(s*a[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===o||(this._size[0]=n,this._size[1]=o,this._blurFBO?this._blurFBO.resize(n,o):this._blurFBO=new r.FramebufferObject(t,{colorTarget:0,depthStencilTarget:0,width:n,height:o},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:o}))},e}();t.Blur=n}));