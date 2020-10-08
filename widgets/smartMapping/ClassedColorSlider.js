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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/accessorSupport/decorators","../../renderers/support/ClassBreakInfo","./SmartMappingSliderBase","./ClassedColorSlider/ClassedColorSliderViewModel","./../support/widget"],(function(e,r,s,i,l,o,t,a){"use strict";var n="esri-classed-color-slider",d="esri-classed-color-slider__ramp",u="esri-classed-color-slider__slider-container",p="esri-classed-color-slider__histogram-container",c="esri-widget",m="esri-widget--panel",b="esri-disabled";return function(e){function r(r,s){var i=e.call(this,r,s)||this;return i._bgFillId=null,i._rampFillId=null,i.breaks=null,i.label=void 0,i.messages=null,i.viewModel=new t,i._bgFillId=i.id+"-bg-fill",i._rampFillId=i.id+"-linear-gradient",i}var o;return s.__extends(r,e),o=r,r.fromRendererResult=function(e,r){var s=e.renderer.classBreakInfos.map((function(e){var r=e.symbol.color;return{min:e.minValue,max:e.maxValue,color:r}}));return new o({breaks:s,histogramConfig:{bins:r?r.bins:[]}})},r.prototype.updateClassBreakInfos=function(e){var r=this.breaks;if(r.length===e.length)return e.map((function(e,s){var i=e.symbol;return i.color=r[s].color,new l({minValue:r[s].min,maxValue:r[s].max,symbol:i})}));console.error("Number of input breakInfos must match number of slider breaks: "+r.length)},r.prototype.updateFromRendererResult=function(e,r){var s=e.renderer.classBreakInfos.map((function(e){var r=e.symbol.color;return{min:e.minValue,max:e.maxValue,color:r}}));this.set({breaks:s,histogramConfig:{bins:r?r.bins:[]}})},r.prototype.render=function(){var e,r=this.state,s=this.label,i="disabled"===r,l=this.classes(n,c,m,((e={})[b]=i,e));return a.tsx("div",{"aria-label":s,class:l},i?null:this.renderContent(this.renderRamp(),u,p))},r.prototype.renderRamp=function(){var e=this._bgFillId,r=this._rampFillId,s=this.viewModel.getStopInfo();return a.tsx("div",{class:d},a.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},a.tsx("defs",null,this.renderRampFillDefinition(r,s),this.renderBackgroundFillDefinition(e)),a.tsx("rect",{x:"0",y:"0",fill:"url(#"+e+")",height:"100%",width:"100%"}),a.tsx("rect",{x:"0",y:"0",fill:"url(#"+r+")",height:"100%",width:"100%"})))},s.__decorate([i.aliasOf("viewModel.breaks")],r.prototype,"breaks",void 0),s.__decorate([i.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],r.prototype,"label",void 0),s.__decorate([i.property(),a.renderable(),a.messageBundle("esri/widgets/smartMapping/ClassedColorSlider/t9n/ClassedColorSlider")],r.prototype,"messages",void 0),s.__decorate([i.property(),a.renderable(["viewModel.breaks","viewModel.hasTimeData","viewModel.inputFormatFunction","viewModel.inputParseFunction","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.values"])],r.prototype,"viewModel",void 0),r=o=s.__decorate([i.subclass("esri.widgets.smartMapping.ClassedColorSlider")],r)}(o.SmartMappingSliderBase)}));