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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./ClassedSizeSlider/nls/ClassedSizeSlider","../../Color","../../core/maybe","../../core/accessorSupport/decorators","../../renderers/support/ClassBreakInfo","./SmartMappingSliderBase","./ClassedSizeSlider/ClassedSizeSliderViewModel","./support/utils","./../support/widget"],function(e,r,i,s,t,a,o,l,n,d,p,c,m,u){var h={base:"esri-classed-size-slider",rampElement:"esri-classed-size-slider__ramp",sliderContainer:"esri-classed-size-slider__slider-container",histogramContainer:"esri-classed-size-slider__histogram-container",esriWidget:"esri-widget",esriWidgetPanel:"esri-widget--panel",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"},b={trackFillColor:new o([149,149,149]),trackBackgroundColor:new o([224,224,224])};return function(e){function r(r){var s=e.call(this,r)||this;return s._rampNode=null,s.breaks=null,s.label=a.widgetLabel,s.style=i({},b),s.viewModel=new c,s}s(r,e),o=r,r.prototype.castStyle=function(e){return i({},b,e)},r.fromRendererResult=function(e,r){var i=e.renderer.classBreakInfos,s=i.map(function(e){var r,i=e.symbol;switch(i.type){case"simple-line":r=i.width;break;case"simple-marker":case"picture-marker":r=i.size}return{min:e.minValue,max:e.maxValue,size:r}});return new o({breaks:s,histogramConfig:{bins:r?r.bins:[]}})},r.prototype.updateClassBreakInfos=function(e){var r=this.breaks;return r.length!==e.length?void console.error("Number of input breakInfos must match number of slider breaks: "+r.length):e.map(function(e,i){var s=e.symbol;switch(s.type){case"simple-line":s.width=r[i].size;break;case"simple-marker":case"picture-marker":s.size=r[i].size}return new d.default({minValue:r[i].min,maxValue:r[i].max,symbol:s})})},r.prototype.updateFromRendererResult=function(e,r){var i=e.renderer.classBreakInfos,s=i.map(function(e){var r,i=e.symbol;switch(i.type){case"simple-line":r=i.width;break;case"simple-marker":case"picture-marker":r=i.size}return{min:e.minValue,max:e.maxValue,size:r}});this.set({breaks:s,histogramConfig:{bins:r?r.bins:[]}})},r.prototype.render=function(){var e,r=this,i=r.state,s=r.label,t="disabled"===i,a=this.classes(h.base,h.esriWidget,h.esriWidgetPanel,(e={},e[h.disabled]=t,e));return u.tsx("div",{"aria-label":s,class:a},t?null:this.renderContent(this.renderRamp(),h.sliderContainer,h.histogramContainer))},r.prototype.renderRamp=function(){var e=this.style.trackBackgroundColor;return u.tsx("div",{afterCreate:u.storeNode,bind:this,class:h.rampElement,"data-node-ref":"_rampNode"},u.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},u.tsx("rect",{x:"0",y:"0",fill:m.getFillFromColor(e),height:"100%",width:"100%"}),this.renderPath()))},r.prototype.renderPath=function(){if(this._rampNode){var e=this._rampNode,r=e.offsetHeight,i=void 0===r?0:r,s=e.offsetWidth,t=void 0===s?0:s;if(l.isSome(i)&&l.isSome(t)){var a=this,o=a.breaks,n=a.viewModel,d=n.max,p=n.min,c=a.style.trackFillColor,h=d-p,b=t/o.length,f=o.map(function(e){return i-Math.round((e.min-p)/h*i)+1}).reverse(),v=o[0].size>o[o.length-1].size||!1,g=v?b:t,w="M"+g+" 0 ";return f.forEach(function(e,r){var i=b*(r+1);w+="L"+g+" "+e+" ",g=v?b+i:t-i,w+="L"+g+" "+e+" "}),w+="L0 "+i+" L0 "+i+" L0 0 Z",u.tsx("path",{d:w,fill:m.getFillFromColor(c)})}}};var o;return t([n.aliasOf("viewModel.breaks")],r.prototype,"breaks",void 0),t([n.property()],r.prototype,"label",void 0),t([n.property(),u.renderable()],r.prototype,"style",void 0),t([n.cast("style")],r.prototype,"castStyle",null),t([n.property(),u.renderable(["viewModel.hasTimeData","viewModel.inputFormatFunction","viewModel.inputParseFunction","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.values"])],r.prototype,"viewModel",void 0),r=o=t([n.subclass("esri.widgets.smartMapping.ClassedSizeSlider")],r)}(n.declared(p.SmartMappingSliderBase))});