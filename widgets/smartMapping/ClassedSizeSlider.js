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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./ClassedSizeSlider/nls/ClassedSizeSlider","../../Color","../../core/maybe","../../core/accessorSupport/decorators","../../renderers/support/ClassBreakInfo","./SmartMappingSliderBase","./ClassedSizeSlider/ClassedSizeSliderViewModel","./support/utils","./../support/widget"],(function(e,r,s,t,i,a,o,l,n,d,p,c,u,m){var h="esri-classed-size-slider",f="esri-classed-size-slider__ramp",v="esri-classed-size-slider__slider-container",b="esri-classed-size-slider__histogram-container",w="esri-widget",y="esri-widget--panel",g="esri-disabled",k={trackFillColor:new o([149,149,149]),trackBackgroundColor:new o([224,224,224])};return function(e){function r(r){var t=e.call(this,r)||this;return t._rampNode=null,t.breaks=null,t.label=a.widgetLabel,t.style=s({},k),t.viewModel=new c,t}var o;return t(r,e),o=r,r.prototype.castStyle=function(e){return s({},k,e)},r.fromRendererResult=function(e,r){var s=e.renderer.classBreakInfos.map((function(e){var r,s=e.symbol;switch(s.type){case"simple-line":r=s.width;break;case"simple-marker":case"picture-marker":r=s.size}return{min:e.minValue,max:e.maxValue,size:r}}));return new o({breaks:s,histogramConfig:{bins:r?r.bins:[]}})},r.prototype.updateClassBreakInfos=function(e){var r=this.breaks;if(r.length===e.length)return e.map((function(e,s){var t=e.symbol;switch(t.type){case"simple-line":t.width=r[s].size;break;case"simple-marker":case"picture-marker":t.size=r[s].size}return new d({minValue:r[s].min,maxValue:r[s].max,symbol:t})}));console.error("Number of input breakInfos must match number of slider breaks: "+r.length)},r.prototype.updateFromRendererResult=function(e,r){var s=e.renderer.classBreakInfos.map((function(e){var r,s=e.symbol;switch(s.type){case"simple-line":r=s.width;break;case"simple-marker":case"picture-marker":r=s.size}return{min:e.minValue,max:e.maxValue,size:r}}));this.set({breaks:s,histogramConfig:{bins:r?r.bins:[]}})},r.prototype.render=function(){var e,r=this.state,s=this.label,t="disabled"===r,i=this.classes(h,w,y,((e={})[g]=t,e));return m.tsx("div",{"aria-label":s,class:i},t?null:this.renderContent(this.renderRamp(),v,b))},r.prototype.renderRamp=function(){var e=this.style.trackBackgroundColor;return m.tsx("div",{afterCreate:m.storeNode,bind:this,class:f,"data-node-ref":"_rampNode"},m.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},m.tsx("rect",{x:"0",y:"0",fill:u.getFillFromColor(e),height:"100%",width:"100%"}),this.renderPath()))},r.prototype.renderPath=function(){if(this._rampNode){var e=this._rampNode,r=e.offsetHeight,s=void 0===r?0:r,t=e.offsetWidth,i=void 0===t?0:t;if(l.isSome(s)&&l.isSome(i)){var a=this.breaks,o=this.viewModel,n=o.max,d=o.min,p=this.style.trackFillColor,c=n-d,h=i/a.length,f=a.map((function(e){return s-Math.round((e.min-d)/c*s)+1})).reverse(),v=a[0].size>a[a.length-1].size||!1,b=v?h:i,w="M"+b+" 0 ";return f.forEach((function(e,r){var s=h*(r+1);w+="L"+b+" "+e+" ",w+="L"+(b=v?h+s:i-s)+" "+e+" "})),w+="L0 "+s+" L0 "+s+" L0 0 Z",m.tsx("path",{d:w,fill:u.getFillFromColor(p)})}}},i([n.aliasOf("viewModel.breaks")],r.prototype,"breaks",void 0),i([n.property()],r.prototype,"label",void 0),i([n.property(),m.renderable()],r.prototype,"style",void 0),i([n.cast("style")],r.prototype,"castStyle",null),i([n.property(),m.renderable(["viewModel.hasTimeData","viewModel.inputFormatFunction","viewModel.inputParseFunction","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.values"])],r.prototype,"viewModel",void 0),r=o=i([n.subclass("esri.widgets.smartMapping.ClassedSizeSlider")],r)}(n.declared(p.SmartMappingSliderBase))}));