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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["../../../core/declare","../../../core/lang","../../../core/urlUtils","dojo/Deferred","../webgl-engine/Stage","../webgl-engine/lib/Texture","../webgl-engine/lib/Util"],function(e,t,r,i,n,o,s){var d=s.assert;return e(null,{constructor:function(e,t,r){this._streamDataSupplier=e,this._stage=t,this._textureRecords={},this._loadedHandler=this._loadedHandler.bind(this),this._errorHandler=this._errorHandler.bind(this),this._textureOptions=r||{}},acquire:function(e,t,r){var o,s=this._textureRecords[e];if(s)return s.referenceCount++,s.texture||s.clientDfd;if(t){var d=t(e);return this._stage.add(n.ModelContentType.TEXTURE,d),s={texture:d,referenceCount:1},this._textureRecords[e]=s,d}o=new i;var u=this._streamDataSupplier.request(e,"image");return this._textureRecords[e]={clientDfd:o,loaderDfd:u,texture:null,size:Math.ceil(r||0),referenceCount:1},u.then(this._loadedHandler,this._errorHandler),o.promise},release:function(e){var t=this._textureRecords[e];t?(t.referenceCount<1&&console.warn("TextureCollection: reference count is < 1 for "+e),--t.referenceCount<1&&(t.texture?(this._stage.remove(n.ModelContentType.TEXTURE,t.texture.id),t.texture=null):this._streamDataSupplier.cancelRequest(t.loaderDfd),delete this._textureRecords[e])):console.warn("TextureCollection: texture doesn't exist: "+e)},isInUse:function(e){var t=this._textureRecords[e];return d(!t||t.referenceCount>0,"texture record with zero reference count"),!!t},_loadedHandler:function(e,i){var s=this._textureRecords[e];if(d(s&&!s.texture),r.isSVG(e)&&(s.size||0===i.width&&0===i.height)){var u=i.width?i.height/i.width:1,a=s.size||64;u>1?(i.width=Math.round(a/u),i.height=a):(i.width=a,i.height=Math.round(a*u))}var l=t.mixin({width:i.width,height:i.height},this._textureOptions),h=new o(i,"symbol",l);this._stage.add(n.ModelContentType.TEXTURE,h),s.texture=h,s.clientDfd.resolve(h)},_errorHandler:function(e){var t=this._textureRecords[e];d(t&&!t.texture),t.clientDfd.reject()}})});