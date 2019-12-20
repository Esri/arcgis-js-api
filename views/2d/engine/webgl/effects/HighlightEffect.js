// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/has","../BitBlitRenderer","../effects/Effect","./highlight/HighlightGradient","./highlight/HighlightRenderer","./highlight/HighlightSurfaces"],function(e,t,r,i,h,s,l,d,n){Object.defineProperty(t,"__esModule",{value:!0});var u=.75,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defines=["highlight"],e._hlRenderer=new d.default,e._hlGradient=new l.default,e._width=void 0,e._height=void 0,e._hlSurfaces=new n.default,e._adjustedWidth=void 0,e._adjustedHeight=void 0,e._blitRenderer=new h.BitBlitRenderer,e}return r(e,t),e.prototype.dispose=function(){this._hlSurfaces&&this._hlSurfaces.dispose(),this._hlRenderer&&this._hlRenderer.dispose(),this._hlGradient&&this._hlGradient.destroy(),this._boundFBO=null},e.prototype.bind=function(e){var t=e.context,r=e.painter,i=t.getViewport(),h=i.width,s=i.height,l=r.getFbos(h,s).effect0;this.setup(e,h,s),t.bindFramebuffer(l),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)},e.prototype.unbind=function(){},e.prototype.setup=function(e,t,r){var i=e.context,h=(this._width=t)%4,s=(this._height=r)%4;t+=h<2?-h:4-h,r+=s<2?-s:4-s,this._adjustedWidth=t,this._adjustedHeight=r,this._boundFBO=i.getBoundFramebufferObject();var l=Math.round(t*u),d=Math.round(r*u);this._hlRenderer.setup(i,l,d),this._hlSurfaces.setup(i,l,d)},e.prototype.draw=function(e){var t=e.context,r=t.getBoundFramebufferObject();t.setViewport(0,0,this._adjustedWidth*u,this._adjustedHeight*u),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setStencilTestEnabled(!1),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(t,r.colorTexture,9728,1),t.setStencilTestEnabled(!1),t.setBlendingEnabled(!1),t.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(t,this._hlSurfaces.sharedBlur1Tex),i("esri-feature-highlight-debug")?(t.bindFramebuffer(null),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(t,this._hlSurfaces.sharedBlur2Tex)):(t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(t,this._hlSurfaces.sharedBlur2Tex),t.bindFramebuffer(this._boundFBO),t.setBlendingEnabled(!0),t.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(t,this._hlSurfaces.sharedBlur1Tex,this._hlGradient),this._boundFBO=null)},e.prototype.setHighlightOptions=function(e){this._hlGradient.setHighlightOptions(e)},e}(s.Effect);t.default=a});