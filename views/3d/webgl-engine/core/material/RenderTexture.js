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

define(["require","exports","../../../../../core/maybe"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RenderTexture=void 0;var i=function(){function e(e,t){var i=this;this._textureRep=e,this._textureId=t,this._textureRef=r.applySome(this._textureId,(function(e){return i._textureRep.acquire(e)}))}return e.prototype.dispose=function(){var e=this;this._textureRef=r.applySome(this._textureId,(function(t){e._textureRep.release(t)}))},e.prototype.bind=function(e,t,i,u,n){if(r.isSome(this._textureRef)&&(t.setUniform1i(i,u),e.bindTexture(this._textureRef.glTexture,u),n)){var o=this._textureRef.glTexture;t.setUniform2f(n,o.descriptor.width,o.descriptor.height)}},e}();t.RenderTexture=i}));