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

define(["require","exports","tslib","../../core/accessorSupport/decorators","./SmartMappingSliderBase","./ColorSlider/ColorSliderViewModel","./../support/widget"],(function(e,i,r,o,t,l,a){"use strict";var s="esri-color-slider",n="esri-color-slider__ramp",d="esri-color-slider__slider-container",p="esri-color-slider__histogram-container",u="esri-widget",m="esri-widget--panel",v="esri-disabled";return function(e){function i(i,r){var o=e.call(this,i,r)||this;return o._bgFillId=null,o._rampFillId=null,o.handlesSyncedToPrimary=null,o.label=void 0,o.messages=null,o.primaryHandleEnabled=null,o.stops=null,o.viewModel=new l,o.zoomOptions=null,o.viewModel&&o.viewModel.set("thumbsConstrained",!1),o._bgFillId=o.id+"-bg-fill",o._rampFillId=o.id+"-linear-gradient",o}var t;return r.__extends(i,e),t=i,i.fromRendererResult=function(e,i){var r=e.visualVariable.stops,o=e.statistics,l=o.avg,a=o.stddev,s=e.renderer.authoringInfo.visualVariables.filter((function(e){return"color"===e.type}))[0],n=s.minSliderValue,d=s.maxSliderValue;return new t({max:d,min:n,stops:r,histogramConfig:{average:l,standardDeviation:a,bins:i?i.bins:[]},primaryHandleEnabled:"high-to-low"!==s.theme})},i.prototype.updateFromRendererResult=function(e,i){var r=e.visualVariable.stops,o=e.statistics,t=o.avg,l=o.stddev,a=e.renderer.authoringInfo.visualVariables.filter((function(e){return"color"===e.type}))[0],s=a.minSliderValue,n=a.maxSliderValue;this.set({max:n,min:s,stops:r,histogramConfig:{average:t,standardDeviation:l,bins:i?i.bins:[]},primaryHandleEnabled:"high-to-low"!==a.theme})},i.prototype.render=function(){var e,i=this.state,r=this.label,o="disabled"===i,t=this.classes(s,u,m,((e={})[v]=o,e));return a.tsx("div",{"aria-label":r,class:t},o?null:this.renderContent(this.renderRamp(),d,p))},i.prototype.renderRamp=function(){var e=this._bgFillId,i=this._rampFillId,r=this.viewModel,o=this.zoomOptions,t=r.getStopInfo();return a.tsx("div",{class:n},a.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},a.tsx("defs",null,this.renderRampFillDefinition(i,t),this.renderBackgroundFillDefinition(e)),a.tsx("rect",{x:"0",y:"0",fill:"url(#"+e+")",height:"100%",width:"100%"}),a.tsx("rect",{x:"0",y:"0",fill:"url(#"+i+")",height:"100%",width:"100%"})),o?this.renderZoomCaps():null)},r.__decorate([o.aliasOf("viewModel.handlesSyncedToPrimary")],i.prototype,"handlesSyncedToPrimary",void 0),r.__decorate([o.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],i.prototype,"label",void 0),r.__decorate([o.property(),a.renderable(),a.messageBundle("esri/widgets/smartMapping/ColorSlider/t9n/ColorSlider")],i.prototype,"messages",void 0),r.__decorate([o.aliasOf("viewModel.primaryHandleEnabled")],i.prototype,"primaryHandleEnabled",void 0),r.__decorate([o.aliasOf("viewModel.stops")],i.prototype,"stops",void 0),r.__decorate([o.property(),a.renderable(["viewModel.handlesSyncedToPrimary","viewModel.hasTimeData","viewModel.inputFormatFunction","viewModel.inputParseFunction","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.primaryHandleEnabled","viewModel.stops","viewModel.values","viewModel.zoomOptions"])],i.prototype,"viewModel",void 0),r.__decorate([o.aliasOf("viewModel.zoomOptions")],i.prototype,"zoomOptions",void 0),i=t=r.__decorate([o.subclass("esri.widgets.smartMapping.ColorSlider")],i)}(t.SmartMappingSliderBase)}));