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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["../../../core/declare","../../../core/urlUtils","dojo/Deferred","dojo/_base/lang","../webgl-engine/Stage","../webgl-engine/lib/Texture","../webgl-engine/lib/Util"],function(e,t,r,n,i,o,s){var d=s.assert,u=e(null,{constructor:function(e,t,r){this._streamDataSupplier=e,this._stage=t,this._textureRecords={},this._loadedHandler=this._loadedHandler.bind(this),this._errorHandler=this._errorHandler.bind(this),this._textureOptions=r||{}},acquire:function(e,t,n){var o,s=this._textureRecords[e];if(s)return s.referenceCount++,s.texture||s.clientDfd;if(t){var d=t(e);return this._stage.add(i.ModelContentType.TEXTURE,d),s={texture:d,referenceCount:1},this._textureRecords[e]=s,d}o=new r;var u=this._streamDataSupplier.request(e,"image");return this._textureRecords[e]={clientDfd:o,loaderDfd:u,texture:null,size:Math.ceil(n||0),referenceCount:1},u.then(this._loadedHandler,this._errorHandler),o.promise},release:function(e){var t=this._textureRecords[e];t?(t.referenceCount<1&&console.warn("TextureCollection: reference count is < 1 for "+e),t.referenceCount--,t.referenceCount<1&&(t.texture?(this._stage.remove(i.ModelContentType.TEXTURE,t.texture.getId()),t.texture=null):this._streamDataSupplier.cancelRequest(t.loaderDfd),delete this._textureRecords[e])):console.warn("TextureCollection: texture doesn't exist: "+e)},isInUse:function(e){var t=this._textureRecords[e];return d(!t||t.referenceCount>0,"texture record with zero reference count"),!!t},_loadedHandler:function(e,r,s){var u=this._textureRecords[e];if(d(u&&!u.texture),t.isSVG(e)&&(u.size||0===r.width&&0===r.height)){var a=r.width?r.height/r.width:1,l=u.size||64;a>1?(r.width=Math.round(l/a),r.height=l):(r.width=l,r.height=Math.round(l*a))}var h=n.mixin({width:r.width,height:r.height},this._textureOptions),c=new o(r,"symbol",h);this._stage.add(i.ModelContentType.TEXTURE,c),u.texture=c,u.clientDfd.resolve(c)},_errorHandler:function(e){var t=this._textureRecords[e];d(t&&!t.texture),t.clientDfd.reject()}});return u});