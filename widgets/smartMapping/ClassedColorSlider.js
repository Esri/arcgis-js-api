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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./ClassedColorSlider/nls/ClassedColorSlider","../../core/accessorSupport/decorators","../../renderers/support/ClassBreakInfo","./SmartMappingSliderBase","./ClassedColorSlider/ClassedColorSliderViewModel","./../support/widget"],function(e,r,i,l,s,o,t,a,n,d,p){var u={base:"esri-classed-color-slider",rampElement:"esri-classed-color-slider__ramp",sliderContainer:"esri-classed-color-slider__slider-container",histogramContainer:"esri-classed-color-slider__histogram-container",esriWidget:"esri-widget",esriWidgetPanel:"esri-widget--panel",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"};return function(e){function r(r){var i=e.call(this,r)||this;return i._bgFillId=null,i._rampFillId=null,i.breaks=null,i.label=o.widgetLabel,i.viewModel=new d,i._bgFillId=i.id+"-bg-fill",i._rampFillId=i.id+"-linear-gradient",i}l(r,e),i=r,r.fromRendererResult=function(e,r){var l=e.renderer.classBreakInfos,s=l.map(function(e){var r=e.symbol,i=r.color;return{min:e.minValue,max:e.maxValue,color:i}});return new i({breaks:s,histogramConfig:{bins:r?r.bins:[]}})},r.prototype.updateClassBreakInfos=function(e){var r=this.breaks;return r.length!==e.length?void console.error("Number of input breakInfos must match number of slider breaks: "+r.length):e.map(function(e,i){var l=e.symbol;return l.color=r[i].color,new a.default({minValue:r[i].min,maxValue:r[i].max,symbol:l})})},r.prototype.updateFromRendererResult=function(e,r){var i=e.renderer.classBreakInfos,l=i.map(function(e){var r=e.symbol,i=r.color;return{min:e.minValue,max:e.maxValue,color:i}});this.set({breaks:l,histogramConfig:{bins:r?r.bins:[]}})},r.prototype.render=function(){var e,r=this,i=r.state,l=r.label,s="disabled"===i,o=this.classes(u.base,u.esriWidget,u.esriWidgetPanel,(e={},e[u.disabled]=s,e));return p.tsx("div",{"aria-label":l,class:o},s?null:this.renderContent(this.renderRamp(),u.sliderContainer,u.histogramContainer))},r.prototype.renderRamp=function(){var e=this,r=e._bgFillId,i=e._rampFillId,l=e.viewModel,s=l.getStopInfo();return p.tsx("div",{class:u.rampElement},p.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},p.tsx("defs",null,this.renderRampFillDefinition(i,s),this.renderBackgroundFillDefinition(r)),p.tsx("rect",{x:"0",y:"0",fill:"url(#"+r+")",height:"100%",width:"100%"}),p.tsx("rect",{x:"0",y:"0",fill:"url(#"+i+")",height:"100%",width:"100%"})))};var i;return s([t.aliasOf("viewModel.breaks")],r.prototype,"breaks",void 0),s([t.property()],r.prototype,"label",void 0),s([t.property(),p.renderable(["viewModel.breaks","viewModel.hasTimeData","viewModel.inputFormatFunction","viewModel.inputParseFunction","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.values"])],r.prototype,"viewModel",void 0),r=i=s([t.subclass("esri.widgets.smartMapping.ClassedColorSlider")],r)}(t.declared(n.SmartMappingSliderBase))});