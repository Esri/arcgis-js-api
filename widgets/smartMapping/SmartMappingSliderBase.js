// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../Color","../../core/watchUtils","../../core/accessorSupport/decorators","../Histogram","../Slider","../Widget","./support/utils"],function(t,e,a,o,i,n,r,s,l,u,p,m){Object.defineProperty(e,"__esModule",{value:!0});var d=function(t){function e(e){var a=t.call(this)||this;a.hasTimeData=null,a.histogram=new l({layout:"vertical"}),a.histogramConfig=null,a.labelFormatFunction=null,a.max=null,a.min=null,a.slider=new u({layout:"vertical",labelsVisible:!0,labelInputsEnabled:!0,rangeLabelsVisible:!0,rangeLabelInputsEnabled:!0}),a.state=null,a.viewModel=null;var o=a.slider;return a.own(o.on("max-change",function(t){return a.emit("max-change",t)}),o.on("min-change",function(t){return a.emit("min-change",t)}),o.on("thumb-change",function(t){return a.emit("thumb-change",t)}),o.on("thumb-drag",function(t){return a.emit("thumb-drag",t)}),r.watch(a,["histogramConfig","max","min"],function(){var t=a,e=t.histogram,o=t.histogramConfig,n=t.max,r=t.min,s=a.getParamsFromHistogramConfig(o);e.set(i({},s,{max:n,min:r}))}),r.watch(a,"labelFormatFunction",function(){var t=a,e=t.histogram,o=t.labelFormatFunction;e.set({labelFormatFunction:o})})),a}return a(e,t),e.prototype.postInitialize=function(){var t=this,e=t.histogramConfig,a=void 0===e?{}:e,o=t.labelFormatFunction,n=t.max,r=t.min,s=t.viewModel,l=this.getParamsFromHistogramConfig(a);this.histogram.set(i({},l,{labelFormatFunction:o,max:n,min:r})),this.slider.set({viewModel:s})},e.prototype.getPropsForStop=function(t){var e=t.color,a=t.offset,o=e instanceof n?e.toCss(!0):n.fromString(e).toCss(!0),i=e instanceof n?e.toRgba()[3]:null;return{color:o,offset:(100*a).toFixed(2)+"%",opacity:i}},e.prototype.getParamsFromHistogramConfig=function(t){return t?{average:t.average,barCreatedFunction:t.barCreatedFunction,bins:t.bins,dataLineCreatedFunction:t.dataLineCreatedFunction,dataLines:this._getDataLines(t)}:null},e.prototype._getDataLines=function(t){var e=t.average,a=t.standardDeviation,o=t.standardDeviationCount;return this._getStandardDeviationDataLines(a,e,o||1).concat(t.dataLines||[])},e.prototype._getStandardDeviationDataLines=function(t,e,a){return m.getDeviationValues(t,e,a).map(function(t){return{value:t}})},o([s.aliasOf("viewModel.hasTimeData")],e.prototype,"hasTimeData",void 0),o([s.property()],e.prototype,"histogram",void 0),o([s.property()],e.prototype,"histogramConfig",void 0),o([s.aliasOf("viewModel.labelFormatFunction")],e.prototype,"labelFormatFunction",void 0),o([s.aliasOf("viewModel.max")],e.prototype,"max",void 0),o([s.aliasOf("viewModel.min")],e.prototype,"min",void 0),o([s.property()],e.prototype,"slider",void 0),o([s.aliasOf("viewModel.state")],e.prototype,"state",void 0),o([s.aliasOf("viewModel.values")],e.prototype,"values",void 0),o([s.property()],e.prototype,"viewModel",void 0),e=o([s.subclass("esri.widgets.smartMapping.SmartMappingSliderBase")],e)}(s.declared(p));e.SmartMappingSliderBase=d});