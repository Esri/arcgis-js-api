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

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","./PixelBlock","./rasterFormats/RasterCodec","../../renderers/support/RasterSymbolizer"],function(r,e,t,o,i,n,s){return function(){function r(){}return r.prototype.decode=function(r){return o(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return[4,n.decode(r.data,r.options)];case 1:return e=t.sent(),[2,e&&e.toJSON()]}})})},r.prototype.symbolize=function(r){return o(this,void 0,void 0,function(){var e;return t(this,function(t){return e=this.symbolizer.symbolize(i.fromJSON(r)),[2,e&&e.toJSON()]})})},r.prototype.updateSymbolizer=function(r){return o(this,void 0,void 0,function(){return t(this,function(e){return this.symbolizer=s.fromJSON(r.symbolizerJSON),r.histograms&&this.symbolizer&&this.symbolizer.renderer&&"histograms"in this.symbolizer.renderer&&(this.symbolizer.renderer.histograms=r.histograms),[2]})})},r}()});