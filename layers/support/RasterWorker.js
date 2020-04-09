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

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/promiseUtils","./PixelBlock","./rasterFormats/RasterCodec","./rasterFunctions/pixelUtils","../../renderers/support/RasterSymbolizer"],(function(r,t,e,o,i,s,n,c,u){return function(){function r(){}return r.prototype.decode=function(r){return o(this,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return[4,n.decode(r.data,r.options)];case 1:return[2,(t=e.sent())&&t.toJSON()]}}))}))},r.prototype.symbolize=function(r){return o(this,void 0,void 0,(function(){var t;return e(this,(function(e){return[2,(t=this.symbolizer.symbolize(s.fromJSON(r)))&&t.toJSON()]}))}))},r.prototype.updateSymbolizer=function(r){return o(this,void 0,void 0,(function(){return e(this,(function(t){return this.symbolizer=u.fromJSON(r.symbolizerJSON),r.histograms&&this.symbolizer&&this.symbolizer.renderer&&"histograms"in this.symbolizer.renderer&&(this.symbolizer.renderer.histograms=r.histograms),[2]}))}))},r.prototype.stretch=function(r){var t=this.symbolizer.simpleStretch(s.fromJSON(r.srcPixelBlock),r.stretchParams);return i.resolve(t&&t.toJSON())},r.prototype.mosaicAndTransform=function(r){return o(this,void 0,void 0,(function(){var t,o,i;return e(this,(function(e){return t=r.srcPixelBlocks.map((function(r){return r?new s(r):null})),o=c.mosaic(t,r.srcMosaicSize),r.coefs?[2,(i=c.approximateTransform(o,r.destDimension,r.coefs,r.sampleSpacing))&&i.toJSON()]:[2,o&&o.toJSON()]}))}))},r}()}));