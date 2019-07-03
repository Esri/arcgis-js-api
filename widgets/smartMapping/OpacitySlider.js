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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./OpacitySlider/nls/OpacitySlider","../../core/accessorSupport/decorators","./SmartMappingSliderBase","./OpacitySlider/OpacitySliderViewModel","./../support/widget"],function(e,i,t,r,s,a,o,n,l,d){var p={base:"esri-opacity-slider",rampElement:"esri-opacity-slider__ramp",sliderContainer:"esri-opacity-slider__slider-container",histogramContainer:"esri-opacity-slider__histogram-container",esriWidget:"esri-widget",esriWidgetPanel:"esri-widget--panel",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"};return function(e){function i(i){var t=e.call(this)||this;return t._bgFillId=null,t._rampFillId=null,t.label=a.widgetLabel,t.stops=null,t.viewModel=new l,t._rampFillId=t.id+"-ramp-fill",t._bgFillId=t.id+"-bg-fill",t}r(i,e),t=i,i.fromVisualVariableResult=function(e,i){var r=e.visualVariable.stops,s=e.statistics,a=s.avg,o=s.max,n=s.min,l=s.stddev;return new t({max:o,min:n,stops:r,histogramConfig:{average:a,standardDeviation:l,bins:i?i.bins:[]}})},i.prototype.updateFromVisualVariableResult=function(e,i){var t=e.visualVariable.stops,r=e.statistics,s=r.avg,a=r.max,o=r.min,n=r.stddev;this.set({max:a,min:o,stops:t,histogramConfig:{average:s,standardDeviation:n,bins:i?i.bins:[]}})},i.prototype.render=function(){var e=this,i=e.viewModel.state,t=e.label,r=this.classes(p.base,p.esriWidgetPanel,p.esriWidget,"disabled"===i?p.disabled:null);return d.tsx("div",{"aria-label":t,class:r},"disabled"===i?null:this.renderContent())},i.prototype.renderContent=function(){return this.slider.extraNodes=[this.renderRamp(),this.renderHistogram()],d.tsx("div",{class:p.sliderContainer},this.slider.render())},i.prototype.renderRamp=function(){var e=this,i=e._bgFillId,t=e._rampFillId,r="url(#"+t+")",s="url(#"+i+")";return d.tsx("div",{class:p.rampElement},d.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},d.tsx("defs",null,this.renderRampFillDefinition(),this.renderBackgroundFillDefinition()),d.tsx("rect",{x:"0",y:"0",fill:s,height:"100%",width:"100%"}),d.tsx("rect",{x:"0",y:"0",fill:r,height:"100%",width:"100%"})))},i.prototype.renderHistogram=function(){return this.histogramConfig?d.tsx("div",{class:p.histogramContainer},this.histogram.render()):null},i.prototype.renderRampFillDefinition=function(){return d.tsx("linearGradient",{id:this._rampFillId,x1:"0",x2:"0",y1:"0",y2:"1"},this.renderRampFillStops())},i.prototype.renderBackgroundFillDefinition=function(){return d.tsx("pattern",{id:this._bgFillId,patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"15",height:"15"},d.tsx("image",{x:"0",y:"0",width:"15",height:"15",href:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNjY2MiIC8+PHBhdGggZD0iTTAgMCBMOCAwIEw4IDggTDAgOCBaIiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDgpIiAvPjxwYXRoIGQ9Ik0wIDAgTDggMCBMOCA4IEwwIDggWiIgZmlsbD0iI2NjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCw4KSIgLz48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgsMCkiIC8+PC9zdmc+"}))},i.prototype.renderRampFillStops=function(){var e=this;return this.viewModel.getStopInfo().reverse().map(function(i,t){return e.renderStop(i,t)})},i.prototype.renderStop=function(e,i){var t=this.getPropsForStop(e),r=t.color,s=t.offset,a=t.opacity;return d.tsx("stop",{key:i+"-stop",offset:s,"stop-color":r,"stop-opacity":a})};var t;return s([o.property()],i.prototype,"label",void 0),s([o.aliasOf("viewModel.stops")],i.prototype,"stops",void 0),s([o.property(),d.renderable(["viewModel.hasTimeData","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.values"])],i.prototype,"viewModel",void 0),i=t=s([o.subclass("esri.widgets.smartMapping.OpacitySlider")],i)}(o.declared(n.SmartMappingSliderBase))});