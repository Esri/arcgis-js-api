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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","./IdGen","./Util","./GLUtil","./DDSUtil"],function(t,a,i,e,n,r){function s(t,a,i,e,r,s,o,p){o=o!==!1;var h=new Image;h.src=t,h.onerror=function(){s(),h.onerror=void 0,h.onload=void 0},h.onload=function(){i.isTexture(a)&&n.texImage2D(h,a,i,e,r,o,!0,p),s(),h.onerror=void 0,h.onload=void 0}}var o=function(){function t(a,i,e){this.data=a,this.id=t.idGen.gen(i),this.unloadFunc=void 0,this.params=e||{},this.params.wrapClamp=this.params.wrapClamp||!1,this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.estimatedTexMemRequiredMB=t.estimateTexMemRequiredMB(this.data,this.params)}return t.estimateTexMemRequiredMB=function(t,a){return null==t?0:t instanceof ArrayBuffer||t instanceof Uint8Array?t.byteLength/1e6:1.3*a.width*a.height*4/1e6},t.prototype.getId=function(){return this.id},t.prototype.getEstimatedTexMemRequiredMB=function(){return this.estimatedTexMemRequiredMB},t.prototype.dispose=function(){this.data=void 0},t.prototype.deferredLoading=function(){return"string"==typeof this.data},t.prototype.getWidth=function(){return this.params.width},t.prototype.getHeight=function(){return this.params.height},t.prototype.loadDDS=function(t,a){var i=r.uploadDDSLevels(t,a,this.params.mipmap);null!==i&&(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,i.mipmapCount>1?t.LINEAR_MIPMAP_LINEAR:t.LINEAR),this.params.width=i.width,this.params.height=i.height)},t.prototype.loadGl=function(a,i,r,o,p){var h=this.data;if("string"==typeof h)s(h,i,r,o,p,a,this.params.mipmap,this.params.noUnpackFlip);else if(h instanceof Image||h instanceof ImageData||h instanceof HTMLCanvasElement)this.params.width=h.width,this.params.height=h.height,n.texImage2D(this.data,i,r,o,p,this.params.mipmap,this.params.mipmap||!this.params.wrapClamp,this.params.noUnpackFlip);else if(h instanceof ArrayBuffer&&this.params.encoding===t.DDS_ENCODING)this.loadDDS(r,h);else if(h instanceof Uint8Array&&this.params.encoding===t.DDS_ENCODING)this.loadDDS(r,h.buffer);else if(h instanceof Uint8Array){this.params.noUnpackFlip===!0&&r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),e.assert(this.params.width>0&&this.params.height>0);var m=r.RGBA;1===this.params.components&&(m=r.LUMINANCE),r.texImage2D(r.TEXTURE_2D,0,m,this.params.width,this.params.height,0,m,r.UNSIGNED_BYTE,h),this.params.mipmap?(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.generateMipmap(r.TEXTURE_2D)):r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),this.params.noUnpackFlip===!0&&r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0)}else if(null!==h)throw console.warn("Unsupported image data"),new Error("Unsupported image data");r._isTracingEnabled&&(i._debugTracingType="Texture"),this.data=void 0},t.prototype.setUnloadFunc=function(t){this.unloadFunc=t},t.prototype.unload=function(){void 0!==this.unloadFunc&&(this.unloadFunc(this.id),this.unloadFunc=void 0)},t.idGen=new i,t.DDS_ENCODING="image/vnd-ms.dds",t}();return o});