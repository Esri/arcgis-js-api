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

define(["require","exports","tslib","../../core/accessorSupport/decorators","./SmartMappingSliderBase","./HeatmapSlider/HeatmapSliderViewModel","./../support/widget"],(function(e,r,t,i,s,a,l){var o="esri-heatmap-slider",d="esri-heatmap-slider__ramp",n="esri-heatmap-slider__slider-container",p="esri-widget",u="esri-widget--panel",m="esri-disabled";return function(e){function r(r,t){var i=e.call(this,r,t)||this;return i._rampFillId=null,i.label=void 0,i.messages=null,i.stops=null,i.viewModel=new a,i.slider.set({visibleElements:{labels:!1,rangeLabels:!0},labelInputsEnabled:!1,rangeLabelInputsEnabled:!1}),i._rampFillId=i.id+"-ramp-fill",i}var s;return t.__extends(r,e),s=r,r.fromHeatmapRendererResult=function(e){return new s({stops:e.renderer.colorStops})},r.prototype.render=function(){var e,r=this.state,t=this.label,i="disabled"===r,s=this.classes(o,p,u,((e={})[m]=i,e));return l.tsx("div",{"aria-label":t,class:s},i?null:this.renderContent(this.renderRamp(),n))},r.prototype.renderRamp=function(){var e=this._rampFillId,r=this.viewModel.getStopInfo();return l.tsx("div",{class:d},l.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},l.tsx("defs",null,this.renderRampFillDefinition(e,r)),l.tsx("rect",{x:"0",y:"0",fill:"url(#"+e+")",height:"100%",width:"100%"})))},t.__decorate([i.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],r.prototype,"label",void 0),t.__decorate([i.property(),l.renderable(),l.messageBundle("esri/widgets/smartMapping/HeatmapSlider/t9n/HeatmapSlider")],r.prototype,"messages",void 0),t.__decorate([i.aliasOf("viewModel.stops")],r.prototype,"stops",void 0),t.__decorate([i.property(),l.renderable(["viewModel.inputFormatFunction","viewModel.inputParseFunction","viewModel.labelFormatFunction","viewModel.max","viewModel.max","viewModel.stops","viewModel.values"])],r.prototype,"viewModel",void 0),r=s=t.__decorate([i.subclass("esri.widgets.smartMapping.HeatmapSlider")],r)}(s.SmartMappingSliderBase)}));