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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/has","../BitBlitRenderer","./Effect","./highlight/HighlightGradient","./highlight/HighlightRenderer","./highlight/HighlightSurfaces"],(function(e,t,r,i,h,s,l,d,n){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.defines=["highlight"],t._hlRenderer=new d.default,t._hlGradient=new l.default,t._width=void 0,t._height=void 0,t._hlSurfaces=new n.default,t._adjustedWidth=void 0,t._adjustedHeight=void 0,t._blitRenderer=new h.BitBlitRenderer,t}return r.__extends(t,e),t.prototype.dispose=function(){this._hlSurfaces&&this._hlSurfaces.dispose(),this._hlRenderer&&this._hlRenderer.dispose(),this._hlGradient&&this._hlGradient.destroy(),this._boundFBO=null},t.prototype.bind=function(e){var t=e.context,r=e.painter,i=t.getViewport(),h=i.width,s=i.height,l=r.getFbos(h,s).effect0;this.setup(e,h,s),t.bindFramebuffer(l),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)},t.prototype.unbind=function(){},t.prototype.setup=function(e,t,r){var i=e.context;this._width=t,this._height=r;var h=t%4,s=r%4;t+=h<2?-h:4-h,r+=s<2?-s:4-s,this._adjustedWidth=t,this._adjustedHeight=r,this._boundFBO=i.getBoundFramebufferObject();var l=Math.round(.75*t),d=Math.round(.75*r);this._hlRenderer.setup(i,l,d),this._hlSurfaces.setup(i,l,d)},t.prototype.draw=function(e){var t=e.context,r=t.getBoundFramebufferObject();t.setViewport(0,0,.75*this._adjustedWidth,.75*this._adjustedHeight),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setStencilTestEnabled(!1),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(t,r.colorTexture,9728,1),t.setStencilTestEnabled(!1),t.setBlendingEnabled(!1),t.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(t,this._hlSurfaces.sharedBlur1Tex),i("esri-feature-highlight-debug")?(t.bindFramebuffer(null),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(t,this._hlSurfaces.sharedBlur2Tex)):(t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(t,this._hlSurfaces.sharedBlur2Tex),t.bindFramebuffer(this._boundFBO),t.setBlendingEnabled(!0),t.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(t,this._hlSurfaces.sharedBlur1Tex,this._hlGradient),this._boundFBO=null)},t.prototype.setHighlightOptions=function(e){this._hlGradient.setHighlightOptions(e)},t}(s.Effect);t.default=u}));