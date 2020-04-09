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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./ClassedColorSlider/nls/ClassedColorSlider","../../core/accessorSupport/decorators","../../renderers/support/ClassBreakInfo","./SmartMappingSliderBase","./ClassedColorSlider/ClassedColorSliderViewModel","./../support/widget"],(function(e,r,l,i,s,o,t,a,n,d,p){var u="esri-classed-color-slider",c="esri-classed-color-slider__ramp",m="esri-classed-color-slider__slider-container",b="esri-classed-color-slider__histogram-container",f="esri-widget",v="esri-widget--panel",g="esri-disabled";return function(e){function r(r){var l=e.call(this,r)||this;return l._bgFillId=null,l._rampFillId=null,l.breaks=null,l.label=o.widgetLabel,l.viewModel=new d,l._bgFillId=l.id+"-bg-fill",l._rampFillId=l.id+"-linear-gradient",l}var l;return i(r,e),l=r,r.fromRendererResult=function(e,r){var i=e.renderer.classBreakInfos.map((function(e){var r=e.symbol.color;return{min:e.minValue,max:e.maxValue,color:r}}));return new l({breaks:i,histogramConfig:{bins:r?r.bins:[]}})},r.prototype.updateClassBreakInfos=function(e){var r=this.breaks;if(r.length===e.length)return e.map((function(e,l){var i=e.symbol;return i.color=r[l].color,new a({minValue:r[l].min,maxValue:r[l].max,symbol:i})}));console.error("Number of input breakInfos must match number of slider breaks: "+r.length)},r.prototype.updateFromRendererResult=function(e,r){var l=e.renderer.classBreakInfos.map((function(e){var r=e.symbol.color;return{min:e.minValue,max:e.maxValue,color:r}}));this.set({breaks:l,histogramConfig:{bins:r?r.bins:[]}})},r.prototype.render=function(){var e,r=this.state,l=this.label,i="disabled"===r,s=this.classes(u,f,v,((e={})[g]=i,e));return p.tsx("div",{"aria-label":l,class:s},i?null:this.renderContent(this.renderRamp(),m,b))},r.prototype.renderRamp=function(){var e=this._bgFillId,r=this._rampFillId,l=this.viewModel.getStopInfo();return p.tsx("div",{class:c},p.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},p.tsx("defs",null,this.renderRampFillDefinition(r,l),this.renderBackgroundFillDefinition(e)),p.tsx("rect",{x:"0",y:"0",fill:"url(#"+e+")",height:"100%",width:"100%"}),p.tsx("rect",{x:"0",y:"0",fill:"url(#"+r+")",height:"100%",width:"100%"})))},s([t.aliasOf("viewModel.breaks")],r.prototype,"breaks",void 0),s([t.property()],r.prototype,"label",void 0),s([t.property(),p.renderable(["viewModel.breaks","viewModel.hasTimeData","viewModel.inputFormatFunction","viewModel.inputParseFunction","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.values"])],r.prototype,"viewModel",void 0),r=l=s([t.subclass("esri.widgets.smartMapping.ClassedColorSlider")],r)}(t.declared(n.SmartMappingSliderBase))}));