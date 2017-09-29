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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojo/has","./highlight/HighlightRenderer","./highlight/HighlightSurfaces"],function(e,t,r,i,h){var l=.7,s=function(){function e(){this._hlRenderer=new i,this._hlSurfaces=new h,this._width=void 0,this._height=void 0}return e.prototype.setup=function(e,t,r){this._width=t,this._height=r;var i=Math.round(t*l),h=Math.round(r*l);this._hlRenderer.setup(e,i,h),this._hlSurfaces.setup(e,i,h)},e.prototype.setHighlightOptions=function(e){this._hlRenderer.setHighlightOptions({fillColor:e.fillColor,outlineColor:e.outlineColor,outlineWidth:e.outlineWidth*l,outerHaloWidth:e.outerHaloWidth*l,innerHaloWidth:e.innerHaloWidth*l,outlinePosition:e.outlinePosition*l})},e.prototype.startMaskDraw=function(e){e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setClearColor(0,0,0,0),e.setClearStencil(0),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.STENCIL_BUFFER_BIT),e.setViewport(0,0,this._width*l,this._height*l)},e.prototype.draw=function(e){e.setStencilTestEnabled(!1),e.setBlendingEnabled(!1),e.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(e,this._hlSurfaces.sharedBlur1Tex),r("esri-feature-highlight-debug")?(e.bindFramebuffer(null),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(e,this._hlSurfaces.sharedBlur2Tex)):(e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(e,this._hlSurfaces.sharedBlur2Tex),e.setBlendingEnabled(!0),e.bindFramebuffer(null),e.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(e,this._hlSurfaces.sharedBlur1Tex))},e}();return s});