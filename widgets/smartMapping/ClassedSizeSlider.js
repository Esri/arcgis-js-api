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

define(["require","exports","tslib","../../Color","../../core/maybe","../../core/accessorSupport/decorators","../../renderers/support/ClassBreakInfo","./SmartMappingSliderBase","./ClassedSizeSlider/ClassedSizeSliderViewModel","./support/utils","./../support/widget"],(function(e,r,s,t,i,a,o,l,n,d,p){var c="esri-classed-size-slider",m="esri-classed-size-slider__ramp",u="esri-classed-size-slider__slider-container",h="esri-classed-size-slider__histogram-container",f="esri-widget",v="esri-widget--panel",b="esri-disabled",g={trackFillColor:new t([149,149,149]),trackBackgroundColor:new t([224,224,224])};return function(e){function r(r,t){var i=e.call(this,r,t)||this;return i._rampNode=null,i.breaks=null,i.label=void 0,i.messages=null,i.style=s.__assign({},g),i.viewModel=new n,i}var t;return s.__extends(r,e),t=r,r.prototype.castStyle=function(e){return s.__assign(s.__assign({},g),e)},r.fromRendererResult=function(e,r){var s=e.renderer.classBreakInfos.map((function(e){var r,s=e.symbol;switch(s.type){case"simple-line":r=s.width;break;case"simple-marker":case"picture-marker":r=s.size}return{min:e.minValue,max:e.maxValue,size:r}}));return new t({breaks:s,histogramConfig:{bins:r?r.bins:[]}})},r.prototype.updateClassBreakInfos=function(e){var r=this.breaks;if(r.length===e.length)return e.map((function(e,s){var t=e.symbol;switch(t.type){case"simple-line":t.width=r[s].size;break;case"simple-marker":case"picture-marker":t.size=r[s].size}return new o({minValue:r[s].min,maxValue:r[s].max,symbol:t})}));console.error("Number of input breakInfos must match number of slider breaks: "+r.length)},r.prototype.updateFromRendererResult=function(e,r){var s=e.renderer.classBreakInfos.map((function(e){var r,s=e.symbol;switch(s.type){case"simple-line":r=s.width;break;case"simple-marker":case"picture-marker":r=s.size}return{min:e.minValue,max:e.maxValue,size:r}}));this.set({breaks:s,histogramConfig:{bins:r?r.bins:[]}})},r.prototype.render=function(){var e,r=this.state,s=this.label,t="disabled"===r,i=this.classes(c,f,v,((e={})[b]=t,e));return p.tsx("div",{"aria-label":s,class:i},t?null:this.renderContent(this.renderRamp(),u,h))},r.prototype.renderRamp=function(){var e=this.style.trackBackgroundColor;return p.tsx("div",{afterCreate:p.storeNode,bind:this,class:m,"data-node-ref":"_rampNode"},p.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},p.tsx("rect",{x:"0",y:"0",fill:d.getFillFromColor(e),height:"100%",width:"100%"}),this.renderPath()))},r.prototype.renderPath=function(){if(this._rampNode){var e=this._rampNode,r=e.offsetHeight,s=void 0===r?0:r,t=e.offsetWidth,a=void 0===t?0:t;if(i.isSome(s)&&i.isSome(a)){var o=this.breaks,l=this.viewModel,n=l.max,c=l.min,m=this.style.trackFillColor,u=n-c,h=a/o.length,f=o.map((function(e){return s-Math.round((e.min-c)/u*s)+1})).reverse(),v=o[0].size>o[o.length-1].size||!1,b=v?h:a,g="M"+b+" 0 ";return f.forEach((function(e,r){var s=h*(r+1);g+="L"+b+" "+e+" ",g+="L"+(b=v?h+s:a-s)+" "+e+" "})),g+="L0 "+s+" L0 "+s+" L0 0 Z",p.tsx("path",{d:g,fill:d.getFillFromColor(m)})}}},s.__decorate([a.aliasOf("viewModel.breaks")],r.prototype,"breaks",void 0),s.__decorate([a.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],r.prototype,"label",void 0),s.__decorate([a.property(),p.renderable(),p.messageBundle("esri/widgets/smartMapping/ClassedSizeSlider/t9n/ClassedSizeSlider")],r.prototype,"messages",void 0),s.__decorate([a.property(),p.renderable()],r.prototype,"style",void 0),s.__decorate([a.cast("style")],r.prototype,"castStyle",null),s.__decorate([a.property(),p.renderable(["viewModel.hasTimeData","viewModel.inputFormatFunction","viewModel.inputParseFunction","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.values"])],r.prototype,"viewModel",void 0),r=t=s.__decorate([a.subclass("esri.widgets.smartMapping.ClassedSizeSlider")],r)}(l.SmartMappingSliderBase)}));