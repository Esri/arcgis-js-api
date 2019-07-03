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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./HeatmapSlider/nls/HeatmapSlider","../../core/accessorSupport/decorators","./SmartMappingSliderBase","./HeatmapSlider/HeatmapSliderViewModel","./../support/widget"],function(e,r,t,i,s,l,o,a,n,d){var p={base:"esri-heatmap-slider",rampElement:"esri-heatmap-slider__ramp",sliderContainer:"esri-heatmap-slider__slider-container",esriWidget:"esri-widget",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"};return function(e){function r(r){var t=e.call(this)||this;return t._rampFillId=null,t.label=l.widgetLabel,t.stops=null,t.viewModel=new n,t.slider.set({labelsVisible:!1,labelInputsEnabled:!1,rangeLabelInputsEnabled:!1}),t._rampFillId=t.id+"-ramp-fill",t}i(r,e),t=r,r.fromHeatmapRendererResult=function(e){return new t({stops:e.renderer.colorStops})},r.prototype.render=function(){var e=this,r=e.viewModel.state,t=e.label,i=this.classes(p.base,p.esriWidget,"disabled"===r?p.disabled:null);return d.tsx("div",{"aria-label":t,class:i},"disabled"===r?null:this.renderContent())},r.prototype.renderContent=function(){return this.slider.extraNodes=[this.renderRamp()],d.tsx("div",{class:p.sliderContainer},this.slider.render())},r.prototype.renderRamp=function(){var e=this._rampFillId,r="url(#"+e+")";return d.tsx("div",{class:p.rampElement},d.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},d.tsx("defs",null,this.renderRampFillDefinition()),d.tsx("rect",{x:"0",y:"0",fill:r,height:"100%",width:"100%"})))},r.prototype.renderRampFillDefinition=function(){return d.tsx("linearGradient",{id:this._rampFillId,x1:"0",x2:"0",y1:"0",y2:"1"},this.renderRampFillStops())},r.prototype.renderRampFillStops=function(){var e=this;return this.viewModel.getStopInfo().reverse().map(function(r,t){return e.renderStop(r,t)})},r.prototype.renderStop=function(e,r){var t=this.getPropsForStop(e),i=t.color,s=t.offset;return d.tsx("stop",{key:r+"-stop",offset:s,"stop-color":i})};var t;return s([o.property()],r.prototype,"label",void 0),s([o.aliasOf("viewModel.stops")],r.prototype,"stops",void 0),s([o.property(),d.renderable(["viewModel.max","viewModel.max","viewModel.values"])],r.prototype,"viewModel",void 0),r=t=s([o.subclass("esri.widgets.smartMapping.HeatmapSlider")],r)}(o.declared(a.SmartMappingSliderBase))});