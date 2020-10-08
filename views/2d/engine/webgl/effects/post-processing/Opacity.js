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

define(["require","exports","../../../../../webgl"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Opacity=void 0;var i=function(){function e(){this._size=[0,0]}return e.prototype.dispose=function(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)},e.prototype.draw=function(e,t,r){this._createOrResizeResources(e);var i=e.context,s=e.state,a=e.pixelRatio,o=e.painter,n=s.size,u=r.amount,l=[Math.round(a*n[0]),Math.round(a*n[1])],p=i.gl,h=this._layerFBOTexture;i.bindFramebuffer(t),t.copyToTexture(0,0,l[0],l[1],0,0,h),i.setBlendingEnabled(!0),i.setStencilTestEnabled(!1),i.setDepthTestEnabled(!1),i.setClearColor(0,0,0,0),i.clear(p.COLOR_BUFFER_BIT),o.blitTexture(i,h,9728,u)},e.prototype._createOrResizeResources=function(e){var t=e.context,i=e.state,s=e.pixelRatio,a=i.size,o=Math.round(s*a[0]),n=Math.round(s*a[1]);this._layerFBOTexture&&this._size[0]===o&&this._size[1]===n||(this._size[0]=o,this._size[1]=n,this._layerFBOTexture?this._layerFBOTexture.resize(o,n):this._layerFBOTexture=new r.Texture(t,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:o,height:n}))},e}();t.Opacity=i}));