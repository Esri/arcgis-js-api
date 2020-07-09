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

define(["require","exports","tslib","../../geometry","../../core/promiseUtils","./PixelBlock","./rasterFormats/RasterCodec","./rasterFunctions/pixelUtils","../../renderers/support/RasterSymbolizer"],(function(r,e,t,o,i,n,s,a,c){return function(){function r(){}return r.prototype.decode=function(r){return t.__awaiter(this,void 0,void 0,(function(){var e;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,s.decode(r.data,r.options)];case 1:return[2,(e=t.sent())&&e.toJSON()]}}))}))},r.prototype.symbolize=function(r){r.pixelBlock=n.fromJSON(r.pixelBlock),r.extent=r.extent?o.Extent.fromJSON(r.extent):null;var e=this.symbolizer.symbolize(r);return i.resolve(e&&e.toJSON())},r.prototype.updateSymbolizer=function(r){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(e){return this.symbolizer=c.fromJSON(r.symbolizerJSON),r.histograms&&this.symbolizer&&this.symbolizer.renderer&&"histograms"in this.symbolizer.renderer&&(this.symbolizer.renderer.histograms=r.histograms),[2]}))}))},r.prototype.stretch=function(r){var e=this.symbolizer.simpleStretch(n.fromJSON(r.srcPixelBlock),r.stretchParams);return i.resolve(e&&e.toJSON())},r.prototype.mosaicAndTransform=function(r){return t.__awaiter(this,void 0,void 0,(function(){var e,o,i;return t.__generator(this,(function(t){return e=r.srcPixelBlocks.map((function(r){return r?new n(r):null})),o=a.mosaic(e,r.srcMosaicSize),r.coefs?[2,(i=a.approximateTransform(o,r.destDimension,r.coefs,r.sampleSpacing))&&i.toJSON()]:[2,o&&o.toJSON()]}))}))},r}()}));