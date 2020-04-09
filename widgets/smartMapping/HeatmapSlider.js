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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./HeatmapSlider/nls/HeatmapSlider","../../core/accessorSupport/decorators","./SmartMappingSliderBase","./HeatmapSlider/HeatmapSliderViewModel","./../support/widget"],(function(e,r,t,i,l,s,a,o,p,n){var d="esri-heatmap-slider",u="esri-heatmap-slider__ramp",c="esri-heatmap-slider__slider-container",m="esri-widget",v="esri-widget--panel",w="esri-disabled";return function(e){function r(r){var t=e.call(this,r)||this;return t._rampFillId=null,t.label=s.widgetLabel,t.stops=null,t.viewModel=new p,t.slider.set({visibleElements:{labels:!1},labelInputsEnabled:!1,rangeLabelInputsEnabled:!1}),t._rampFillId=t.id+"-ramp-fill",t}var t;return i(r,e),t=r,r.fromHeatmapRendererResult=function(e){return new t({stops:e.renderer.colorStops})},r.prototype.render=function(){var e,r=this.state,t=this.label,i="disabled"===r,l=this.classes(d,m,v,((e={})[w]=i,e));return n.tsx("div",{"aria-label":t,class:l},i?null:this.renderContent(this.renderRamp(),c))},r.prototype.renderRamp=function(){var e=this._rampFillId,r=this.viewModel.getStopInfo();return n.tsx("div",{class:u},n.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},n.tsx("defs",null,this.renderRampFillDefinition(e,r)),n.tsx("rect",{x:"0",y:"0",fill:"url(#"+e+")",height:"100%",width:"100%"})))},l([a.property()],r.prototype,"label",void 0),l([a.aliasOf("viewModel.stops")],r.prototype,"stops",void 0),l([a.property(),n.renderable(["viewModel.inputFormatFunction","viewModel.inputParseFunction","viewModel.labelFormatFunction","viewModel.max","viewModel.max","viewModel.stops","viewModel.values"])],r.prototype,"viewModel",void 0),r=t=l([a.subclass("esri.widgets.smartMapping.HeatmapSlider")],r)}(a.declared(o.SmartMappingSliderBase))}));