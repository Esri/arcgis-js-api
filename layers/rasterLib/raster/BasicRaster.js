// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/_base/array","dojo/_base/config","dojo/_base/json","dojo/sniff","dojo/DeferredList","dojo/when","../../../kernel","../../../Evented","../../../request","../../../geometry/Extent","../../../geometry/Point","../../../SpatialReference","../../../deferredUtils","../../../urlUtils","../../MosaicRule","../../ImageServiceParameters","../../PixelBlock","../../rasterFormats/rasterCodec","../tile/RasterHandler","./rasterProjectionHelper","./RasterInfo"],function(e,t,r,n,i,s,o,a,l,d,c,h,f,u,_,p,v,j,I,g,m,w,x,y,b){return t([h],{url:null,dataType:null,rasterInfo:null,tileInfo:null,serviceInfo:null,loaded:null,constructor:function(e){if(e){var t=e.url;if(t){var r=j.urlToObject(t);this.url=r.path,this._query=r.query}this.dataType=e.dataType,this.serviceInfo=e.serviceInfo,this.rasterInfo=e.rasterInfo,this.tileInfo=e.tileInfo,this.serviceInfo=e.serviceInfo}},open:function(){},read:function(e){},getProjectedFullExtent:function(e,t){var i=new n;if(this.projectedFullExtent&&!t)return i.resolve(this.projectedFullExtent),i.promise;var s,o=this.rasterInfo.extent;return y.requirePE(this.rasterInfo.extent.spatialReference,e)?y.load().then(r.hitch(this,function(){s=y.project(o,e),s=new u(s.toJson()),this.projectedFullExtent=s,i.resolve(s)}),function(){i.reject(new Error("cannot project into this spatial reference"))}):(s=y.project(o,e),i.resolve(s)),i.promise},setFetchParameters:function(e,t){},_setRasterHandler:function(e){this._rasterHandler=e,this.getMemberRasters&&this.getMemberRasters().forEach(r.hitch(this,function(t){t._rasterHandler=e}))},_findCredential:function(){this.url&&(this._credential=c.id&&c.id.findCredential(this.url),(this._credential&&this._credential.ssl||this.serviceInfo&&this.serviceInfo._ssl)&&(this.url=this.url.replace(/^http:/i,"https:")))},_initWorker:function(){this._rasterHandler=new x,this._rasterHandler.start().then(function(){this._rasterHandlerInitialized=!0}.bind(this))},_requestPixels:function(e){var t=e.url,i=e.payload,s=e.decodeParams,o=e.tileOptions,a=new n(v._dfdCanceller);this._rasterHandler||this._initWorker();var l=this._rasterHandler,d={},c={url:t,handleAs:"arraybuffer",content:i};return e.headers&&(c.headers=e.headers),a._pendingDfd=f(c).then(r.hitch(this,function(e){var t;t=l&&this._rasterHandlerInitialized?l.decode({encodedData:e,decodeParams:s}):w.decode(e,s),t.then(function(e){d.pixelBlock=new m(e),d.extent=o.extent,d.level=o.level,d.row=o.row,d.col=o.col,d.width=o.width,d.height=o.height,v._resDfd(a,[d])},function(e){v._resDfd(a,[e],!0)})}),function(e){v._resDfd(a,[e],!0)}),a},_computeSignature:function(e){if("string"==typeof e){for(var t=new Uint8Array(e.length),r=0;r<e.length;r++)t[r]=e.charCodeAt(r);e=t}for(var n=65535,i=65535,s=e.length,o=Math.floor(s/2),a=0;o;){var l=o>=359?359:o;o-=l;do{n+=e[a++]<<8,i+=n+=e[a++]}while(--l);n=(65535&n)+(n>>>16),i=(65535&i)+(i>>>16)}return 1&s&&(i+=n+=e[a]<<8),n=(65535&n)+(n>>>16),((i=(65535&i)+(i>>>16))<<16|n)>>>0}})});