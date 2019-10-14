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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./ClassedSizeSlider/nls/ClassedSizeSlider","../../core/maybe","../../core/accessorSupport/decorators","../../renderers/support/ClassBreakInfo","./SmartMappingSliderBase","./ClassedSizeSlider/ClassedSizeSliderViewModel","./../support/widget"],function(e,r,i,s,a,t,n,o,l,d,p,m){var c={base:"esri-classed-size-slider",rampElement:"esri-classed-size-slider__ramp",sliderContainer:"esri-classed-size-slider__slider-container",histogramContainer:"esri-classed-size-slider__histogram-container",esriWidget:"esri-widget",esriWidgetPanel:"esri-widget--panel",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"};return function(e){function r(r){var i=e.call(this)||this;return i._backgroundFillColor="#e0e0e0",i._fillColor="#959595",i._rampNode=null,i.breaks=null,i.label=t.widgetLabel,i.viewModel=new p,i}s(r,e),i=r,r.fromRendererResult=function(e,r){var s=e.renderer.classBreakInfos,a=s.map(function(e){var r,i=e.symbol;switch(i.type){case"simple-line":r=i.width;break;case"simple-marker":case"picture-marker":r=i.size}return{min:e.minValue,max:e.maxValue,size:r}});return new i({breaks:a,histogramConfig:{bins:r?r.bins:[]}})},r.prototype.updateClassBreakInfos=function(e){var r=this.breaks;return r.length!==e.length?void console.error("Number of input breakInfos must match number of slider breaks: "+r.length):e.map(function(e,i){var s=e.symbol;switch(s.type){case"simple-line":s.width=r[i].size;break;case"simple-marker":case"picture-marker":s.size=r[i].size}return new l.default({minValue:r[i].min,maxValue:r[i].max,symbol:s})})},r.prototype.updateFromRendererResult=function(e,r){var i=e.renderer.classBreakInfos,s=i.map(function(e){var r,i=e.symbol;switch(i.type){case"simple-line":r=i.width;break;case"simple-marker":case"picture-marker":r=i.size}return{min:e.minValue,max:e.maxValue,size:r}});this.set({breaks:s,histogramConfig:{bins:r?r.bins:[]}})},r.prototype.render=function(){var e,r=this,i=r.state,s=r.label,a="disabled"===i,t=this.classes(c.base,c.esriWidget,c.esriWidgetPanel,(e={},e[c.disabled]=a,e));return m.tsx("div",{"aria-label":s,class:t},a?null:this.renderContent(this.renderRamp(),c.sliderContainer,c.histogramContainer))},r.prototype.renderRamp=function(){return m.tsx("div",{afterCreate:m.storeNode,bind:this,class:c.rampElement,"data-node-ref":"_rampNode"},m.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},m.tsx("rect",{x:"0",y:"0",fill:this._backgroundFillColor,height:"100%",width:"100%"}),this.renderPath()))},r.prototype.renderPath=function(){if(this._rampNode){var e=this._rampNode,r=e.offsetHeight,i=void 0===r?0:r,s=e.offsetWidth,a=void 0===s?0:s;if(n.isSome(i)&&n.isSome(a)){var t=this,o=t.breaks,l=t.viewModel,d=l.max,p=l.min,c=t._fillColor,u=d-p,h=a/o.length,b=o.map(function(e){return[i-Math.round((e.min-p)/u*i),i-Math.round((e.max-p)/u*i)]});b.reverse();var f=a,v="M"+f+" 0";return b.forEach(function(e,r){v+="L"+f+" "+e[0],f=a-h*(r+1),v+="L"+f+" "+e[0]}),v+="L1 "+i+" L0 "+i+" L0 0 Z",m.tsx("path",{d:v,fill:c})}}};var i;return a([o.aliasOf("viewModel.breaks")],r.prototype,"breaks",void 0),a([o.property()],r.prototype,"label",void 0),a([o.property(),m.renderable(["viewModel.hasTimeData","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.values"])],r.prototype,"viewModel",void 0),r=i=a([o.subclass("esri.widgets.smartMapping.ClassedSizeSlider")],r)}(o.declared(d.SmartMappingSliderBase))});