// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../../core/has","./highlight/HighlightGradient","./highlight/HighlightRenderer","./highlight/HighlightSurfaces"],function(e,t,h,i,r,s){Object.defineProperty(t,"__esModule",{value:!0});var d=.75,l=function(){function e(){this._hlRenderer=new r.default,this._hlSurfaces=new s.default,this._hlGradient=new i.default,this._width=void 0,this._height=void 0,this._adjustedWidth=void 0,this._adjustedHeight=void 0}return e.prototype.dispose=function(){this._hlSurfaces&&this._hlSurfaces.dispose(),this._hlRenderer&&this._hlRenderer.dispose(),this._hlGradient&&this._hlGradient.destroy(),this._boundFBO=null},e.prototype.setup=function(e,t,h){var i=(this._width=t)%4,r=(this._height=h)%4;t+=i<2?-i:4-i,h+=r<2?-r:4-r,this._adjustedWidth=t,this._adjustedHeight=h,this._boundFBO=e.getBoundFramebufferObject();var s=Math.round(t*d),l=Math.round(h*d);this._hlRenderer.setup(e,s,l),this._hlSurfaces.setup(e,s,l)},e.prototype.startMaskDraw=function(e){e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setClearColor(0,0,0,0),e.setClearStencil(0),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.STENCIL_BUFFER_BIT),e.setViewport(0,0,this._adjustedWidth*d,this._adjustedHeight*d)},e.prototype.draw=function(e){e.setStencilTestEnabled(!1),e.setBlendingEnabled(!1),e.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(e,this._hlSurfaces.sharedBlur1Tex),h("esri-feature-highlight-debug")?(e.bindFramebuffer(null),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(e,this._hlSurfaces.sharedBlur2Tex)):(e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(e,this._hlSurfaces.sharedBlur2Tex),e.bindFramebuffer(this._boundFBO),e.setBlendingEnabled(!0),e.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(e,this._hlSurfaces.sharedBlur1Tex,this._hlGradient),this._boundFBO=null)},e.prototype.setHighlightOptions=function(e){this._hlGradient.setHighlightOptions(e)},e}();t.default=l});