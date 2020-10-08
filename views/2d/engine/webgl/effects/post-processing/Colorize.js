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

define(["require","exports","../../../../../webgl","../../VertexStream"],(function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Colorize=void 0;var s=function(){function e(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:{a_position:0}}}return e.prototype.dispose=function(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)},e.prototype.draw=function(e,t,r){this._createOrResizeResources(e);var i=e.context,s=e.state,a=e.painter,o=e.pixelRatio,n=s.size,u=a.materialManager,l=this._programDesc,d=this._quad,p=[Math.round(o*n[0]),Math.round(o*n[1])],h=r.colorMatrix;d.bind();var c=this._layerFBOTexture;i.bindFramebuffer(t),t.copyToTexture(0,0,p[0],p[1],0,0,c),i.setBlendingEnabled(!1),i.setStencilTestEnabled(!1);var _=u.getProgram(e,l);i.bindProgram(_),i.bindTexture(c,2),_.setUniformMatrix4fv("u_coefficients",h),_.setUniform1i("u_colorTexture",2),d.draw(),i.setBlendingEnabled(!0),i.setBlendFunction(1,771),i.setStencilTestEnabled(!0),d.unbind()},e.prototype._createOrResizeResources=function(e){var t=e.context,s=e.state,a=e.pixelRatio,o=s.size,n=Math.round(a*o[0]),u=Math.round(a*o[1]);this._layerFBOTexture&&this._size[0]===n&&this._size[1]===u||(this._size[0]=n,this._size[1]=u,this._layerFBOTexture?this._layerFBOTexture.resize(n,u):this._layerFBOTexture=new r.Texture(t,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:u}),this._quad||(this._quad=new i(t,[-1,-1,1,-1,-1,1,1,1])))},e}();t.Colorize=s}));