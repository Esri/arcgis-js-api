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

define(["../../../core/declare","dojo/Deferred","dojo/_base/lang","../webgl-engine/Stage","../webgl-engine/lib/Texture","../webgl-engine/lib/Util"],function(e,t,r,n,i,o){var s=o.assert,u=e(null,{constructor:function(e,t,r){this._streamDataSupplier=e,this._stage=t,this._textureRecords={},this._loadedHandler=this._loadedHandler.bind(this),this._errorHandler=this._errorHandler.bind(this),this._textureOptions=r||{}},acquire:function(e,r){var i,o=this._textureRecords[e];if(o)return o.referenceCount++,o.texture||o.clientDfd;if(r){var s=r(e);return this._stage.add(n.ModelContentType.TEXTURE,s),o={texture:s,referenceCount:1},this._textureRecords[e]=o,s}i=new t;var u=this._streamDataSupplier.request(e,"image");return this._textureRecords[e]={clientDfd:i,loaderDfd:u,texture:null,referenceCount:1},u.then(this._loadedHandler,this._errorHandler),i.promise},release:function(e){var t=this._textureRecords[e];t?(t.referenceCount<1&&console.warn("TextureCollection: reference count is < 1 for "+e),t.referenceCount--,t.referenceCount<1&&(t.texture?(this._stage.remove(n.ModelContentType.TEXTURE,t.texture.getId()),t.texture=null):this._streamDataSupplier.cancelRequest(t.loaderDfd),delete this._textureRecords[e])):console.warn("TextureCollection: texture doesn't exist: "+e)},isInUse:function(e){var t=this._textureRecords[e];return s(!t||t.referenceCount>0,"texture record with zero reference count"),!!t},_loadedHandler:function(e,t,o){var u=this._textureRecords[e];s(u&&!u.texture);var d=r.mixin({width:t.width,height:t.height},this._textureOptions),a=new i(t,"symbol",d);this._stage.add(n.ModelContentType.TEXTURE,a),u.texture=a,u.clientDfd.resolve(a)},_errorHandler:function(e){var t=this._textureRecords[e];s(t&&!t.texture),t.clientDfd.reject()}});return u});