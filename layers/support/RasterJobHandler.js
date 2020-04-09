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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/tsSupport/assignHelper","../../core/Error","../../core/promiseUtils","../../core/workers","./PixelBlock"],(function(r,e,t,o,n,i,s,c,a){return function(){function r(){this._workerThread=null,this._destroyed=!1}return r.prototype.initialize=function(){return o(this,void 0,void 0,(function(){var r;return t(this,(function(e){switch(e.label){case 0:return[4,c.open("RasterWorker")];case 1:return r=e.sent(),this._destroyed?r.close():this._workerThread=r,[2]}}))}))},r.prototype.destroy=function(){this._destroyed=!0,this._workerThread&&(this._workerThread.close(),this._workerThread=null)},r.prototype.decode=function(r,e){return o(this,void 0,void 0,(function(){var o;return t(this,(function(t){switch(t.label){case 0:if(!this._workerThread)throw new i("raster-jobhandler:no-connection","no available worker connection");return[4,this._workerThread.invoke("decode",r,e)];case 1:return[2,(o=t.sent())?new a(o):null]}}))}))},r.prototype.symbolize=function(r,e){return o(this,void 0,void 0,(function(){var o;return t(this,(function(t){switch(t.label){case 0:if(!this._workerThread)throw new i("raster-jobhandler:no-connection","no available worker connection");return[4,this._workerThread.invoke("symbolize",r.toJSON(),e)];case 1:return[2,(o=t.sent())?new a(o):null]}}))}))},r.prototype.updateSymbolizer=function(r,e){return o(this,void 0,void 0,(function(){var o;return t(this,(function(t){switch(t.label){case 0:if(!this._workerThread)throw new i("raster-jobhandler:no-connection","no available worker connection");return o=r&&r.renderer&&"raster-stretch"===r.renderer.type&&r.renderer.histograms,[4,s.all(this._workerThread.broadcast("updateSymbolizer",{symbolizerJSON:r.toJSON(),histograms:o},e))];case 1:return t.sent(),[2]}}))}))},r.prototype.stretch=function(r,e){return o(this,void 0,void 0,(function(){var o,n;return t(this,(function(t){switch(t.label){case 0:if(!this._workerThread)throw new i("raster-jobhandler:no-connection","no available worker connection");return r&&r.pixelBlock?(o={srcPixelBlock:r.pixelBlock.toJSON(),stretchParams:r.stretchParams},[4,this._workerThread.invoke("stretch",o,e)]):[2,null];case 1:return[2,(n=t.sent())?new a(n):null]}}))}))},r.prototype.mosaicAndTransform=function(r,e){return o(this,void 0,void 0,(function(){var o,s;return t(this,(function(t){switch(t.label){case 0:if(!this._workerThread)throw new i("raster-jobhandler:no-connection","no available worker connection");return r&&r.srcPixelBlocks&&r.srcPixelBlocks.length>0?(o=n({},r,{srcPixelBlocks:r.srcPixelBlocks.map((function(r){return r?r.toJSON():null}))}),[4,this._workerThread.invoke("mosaicAndTransform",o,e)]):[2,null];case 1:return[2,(s=t.sent())?new a(s):null]}}))}))},r}()}));