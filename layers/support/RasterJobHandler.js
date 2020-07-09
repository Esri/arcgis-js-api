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

define(["require","exports","tslib","../../core/Error","../../core/promiseUtils","../../core/workers","./PixelBlock"],(function(e,r,t,n,o,i,s){return function(){function e(){this._workerThread=null,this._destroyed=!1}return e.prototype.initialize=function(){return t.__awaiter(this,void 0,void 0,(function(){var e;return t.__generator(this,(function(r){switch(r.label){case 0:return[4,i.open("RasterWorker")];case 1:return e=r.sent(),this._destroyed?e.close():this._workerThread=e,[2]}}))}))},e.prototype.destroy=function(){this._destroyed=!0,this._workerThread&&(this._workerThread.close(),this._workerThread=null)},e.prototype.decode=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){var o;return t.__generator(this,(function(t){switch(t.label){case 0:if(!this._workerThread)throw new n("raster-jobhandler:no-connection","no available worker connection");return[4,this._workerThread.invoke("decode",e,r)];case 1:return[2,(o=t.sent())?new s(o):null]}}))}))},e.prototype.symbolize=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){var o,i;return t.__generator(this,(function(t){switch(t.label){case 0:if(!this._workerThread)throw new n("raster-jobhandler:no-connection","no available worker connection");return o={extent:e.extent&&e.extent.toJSON(),pixelBlock:e.pixelBlock.toJSON(),simpleStretchParams:e.simpleStretchParams,bandIds:e.bandIds},[4,this._workerThread.invoke("symbolize",o,r)];case 1:return[2,(i=t.sent())?new s(i):null]}}))}))},e.prototype.updateSymbolizer=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){var i;return t.__generator(this,(function(t){switch(t.label){case 0:if(!this._workerThread)throw new n("raster-jobhandler:no-connection","no available worker connection");return i=e&&e.renderer&&"raster-stretch"===e.renderer.type&&e.renderer.histograms,[4,o.all(this._workerThread.broadcast("updateSymbolizer",{symbolizerJSON:e.toJSON(),histograms:i},r))];case 1:return t.sent(),[2]}}))}))},e.prototype.stretch=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){var o,i;return t.__generator(this,(function(t){switch(t.label){case 0:if(!this._workerThread)throw new n("raster-jobhandler:no-connection","no available worker connection");return e&&e.pixelBlock?(o={srcPixelBlock:e.pixelBlock.toJSON(),stretchParams:e.stretchParams},[4,this._workerThread.invoke("stretch",o,r)]):[2,null];case 1:return[2,(i=t.sent())?new s(i):null]}}))}))},e.prototype.mosaicAndTransform=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){var o,i;return t.__generator(this,(function(a){switch(a.label){case 0:if(!this._workerThread)throw new n("raster-jobhandler:no-connection","no available worker connection");return e&&e.srcPixelBlocks&&e.srcPixelBlocks.length>0?(o=t.__assign(t.__assign({},e),{srcPixelBlocks:e.srcPixelBlocks.map((function(e){return e?e.toJSON():null}))}),[4,this._workerThread.invoke("mosaicAndTransform",o,r)]):[2,null];case 1:return[2,(i=a.sent())?new s(i):null]}}))}))},e}()}));