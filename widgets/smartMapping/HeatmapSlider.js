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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./HeatmapSlider/nls/HeatmapSlider","../../core/accessorSupport/decorators","./SmartMappingSliderBase","./HeatmapSlider/HeatmapSliderViewModel","./../support/widget"],function(e,r,t,i,l,s,a,d,o,n){var p={base:"esri-heatmap-slider",rampElement:"esri-heatmap-slider__ramp",sliderContainer:"esri-heatmap-slider__slider-container",esriWidget:"esri-widget",esriWidgetPanel:"esri-widget--panel",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"};return function(e){function r(r){var t=e.call(this,r)||this;return t._rampFillId=null,t.label=s.widgetLabel,t.stops=null,t.viewModel=new o,t.slider.set({labelsVisible:!1,labelInputsEnabled:!1,rangeLabelInputsEnabled:!1}),t._rampFillId=t.id+"-ramp-fill",t}i(r,e),t=r,r.fromHeatmapRendererResult=function(e){return new t({stops:e.renderer.colorStops})},r.prototype.render=function(){var e,r=this,t=r.state,i=r.label,l="disabled"===t,s=this.classes(p.base,p.esriWidget,p.esriWidgetPanel,(e={},e[p.disabled]=l,e));return n.tsx("div",{"aria-label":i,class:s},l?null:this.renderContent(this.renderRamp(),p.sliderContainer))},r.prototype.renderRamp=function(){var e=this,r=e._rampFillId,t=e.viewModel,i=t.getStopInfo();return n.tsx("div",{class:p.rampElement},n.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},n.tsx("defs",null,this.renderRampFillDefinition(r,i)),n.tsx("rect",{x:"0",y:"0",fill:"url(#"+r+")",height:"100%",width:"100%"})))};var t;return l([a.property()],r.prototype,"label",void 0),l([a.aliasOf("viewModel.stops")],r.prototype,"stops",void 0),l([a.property(),n.renderable(["viewModel.inputFormatFunction","viewModel.inputParseFunction","viewModel.labelFormatFunction","viewModel.max","viewModel.max","viewModel.stops","viewModel.values"])],r.prototype,"viewModel",void 0),r=t=l([a.subclass("esri.widgets.smartMapping.HeatmapSlider")],r)}(a.declared(d.SmartMappingSliderBase))});