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

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/Error","../../core/promiseUtils","../../core/requireUtils","../../core/workers","./PixelBlock","module"],function(e,r,t,o,n,i,s,a,c,h){return function(){function r(){this._workerThread=null,this._destroyed=!1}return r.prototype.initialize=function(){return o(this,void 0,void 0,function(){var r;return t(this,function(t){switch(t.label){case 0:return[4,a.open(s.getAbsMid("./RasterWorker",e,h))];case 1:return r=t.sent(),this._destroyed?r.close():this._workerThread=r,[2]}})})},r.prototype.destroy=function(){this._destroyed=!0,this._workerThread&&(this._workerThread.close(),this._workerThread=null)},r.prototype.decode=function(e,r){return o(this,void 0,void 0,function(){var o;return t(this,function(t){switch(t.label){case 0:if(!this._workerThread)throw new n("raster-jobhandler:no-connection","no available worker connection");return[4,this._workerThread.invoke("decode",e,r)];case 1:return o=t.sent(),[2,o?new c(o):null]}})})},r.prototype.symbolize=function(e,r){return o(this,void 0,void 0,function(){var o;return t(this,function(t){switch(t.label){case 0:if(!this._workerThread)throw new n("raster-jobhandler:no-connection","no available worker connection");return[4,this._workerThread.invoke("symbolize",e.toJSON(),r)];case 1:return o=t.sent(),[2,o?new c(o):null]}})})},r.prototype.updateSymbolizer=function(e,r){return o(this,void 0,void 0,function(){var o;return t(this,function(t){switch(t.label){case 0:if(!this._workerThread)throw new n("raster-jobhandler:no-connection","no available worker connection");return o=e&&e.renderer&&"raster-stretch"===e.renderer.type&&e.renderer.histograms,[4,i.all(this._workerThread.broadcast("updateSymbolizer",{symbolizerJSON:e.toJSON(),histograms:o},r))];case 1:return t.sent(),[2]}})})},r}()});