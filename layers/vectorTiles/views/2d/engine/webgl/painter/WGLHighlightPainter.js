// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["require","exports","dojo/has","./highlight/HighlightRenderer","./highlight/HighlightSurfaces"],(function(e,t,i,r,h){return function(){function e(){this._hlRenderer=new r,this._hlSurfaces=new h,this._width=void 0,this._height=void 0}return e.prototype.dispose=function(){this._hlSurfaces&&this._hlSurfaces.dispose(),this._hlRenderer&&this._hlRenderer.dispose(),this._boundFBO=null},e.prototype.setup=function(e,t,i){var r=t%4,h=i%4;t+=r<2?-r:4-r,i+=h<2?-h:4-h,this._width=t,this._height=i,this._boundFBO=e.getBoundFramebufferObject();var l=Math.round(.75*t),s=Math.round(.75*i);this._hlRenderer.setup(e,l,s),this._hlSurfaces.setup(e,l,s)},e.prototype.setHighlightOptions=function(e){this._hlRenderer.setHighlightOptions({fillColor:e.fillColor,outlineColor:e.outlineColor,outlineWidth:.75*e.outlineWidth,outerHaloWidth:.75*e.outerHaloWidth,innerHaloWidth:.75*e.innerHaloWidth,outlinePosition:.75*e.outlinePosition})},e.prototype.startMaskDraw=function(e){e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setClearColor(0,0,0,0),e.setClearStencil(0),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.STENCIL_BUFFER_BIT),e.setViewport(0,0,.75*this._width,.75*this._height)},e.prototype.draw=function(e){e.setStencilTestEnabled(!1),e.setBlendingEnabled(!1),e.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(e,this._hlSurfaces.sharedBlur1Tex),i("esri-feature-highlight-debug")?(e.bindFramebuffer(null),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(e,this._hlSurfaces.sharedBlur2Tex)):(e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(e,this._hlSurfaces.sharedBlur2Tex),e.bindFramebuffer(this._boundFBO),e.setBlendingEnabled(!0),e.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(e,this._hlSurfaces.sharedBlur1Tex),this._boundFBO=null)},e}()}));