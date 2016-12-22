// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../webgl-engine/lib/Camera","../webgl-engine/lib/gl-matrix"],function(e,r,t,i){var n=i.vec3d,a=function(){function e(e){this.view=e,this._renderTargetHelper=null,this.camera=new t,this.sunLight={direction:n.create(),diffuse:{color:n.create(),intensity:1},ambient:{color:n.create(),intensity:1}}}return e.prototype.resetWebGLState=function(){null!=this.rctx&&(this.rctx.enforceState(),this._renderTargetHelper&&this._renderTargetHelper.bindFramebuffer())},e.prototype.bindRenderTarget=function(){if(this._renderTargetHelper){var e=this._renderTargetHelper.getFramebuffer();e.initialize(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,e.glName)}},e}();return a});