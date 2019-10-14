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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./ColorSlider/nls/ColorSlider","../../core/accessorSupport/decorators","./SmartMappingSliderBase","./ColorSlider/ColorSliderViewModel","./../support/widget"],function(e,i,r,o,l,t,s,a,n,d){var p={base:"esri-color-slider",rampElement:"esri-color-slider__ramp",sliderContainer:"esri-color-slider__slider-container",histogramContainer:"esri-color-slider__histogram-container",esriWidget:"esri-widget",esriWidgetPanel:"esri-widget--panel",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"};return function(e){function i(i){var r=e.call(this)||this;return r._bgFillId=null,r._rampFillId=null,r.handlesSyncedToPrimary=null,r.label=t.widgetLabel,r.primaryHandleEnabled=null,r.stops=null,r.viewModel=new n,r.zoomOptions=null,r.viewModel&&r.viewModel.set("thumbsConstrained",!1),r._bgFillId=r.id+"-bg-fill",r._rampFillId=r.id+"-linear-gradient",r}o(i,e),r=i,i.fromRendererResult=function(e,i){var o=e.visualVariable.stops,l=e.statistics,t=l.avg,s=l.max,a=l.min,n=l.stddev;return new r({max:s,min:a,stops:o,histogramConfig:{average:t,standardDeviation:n,bins:i?i.bins:[]}})},i.prototype.updateFromRendererResult=function(e,i){var r=e.visualVariable.stops,o=e.statistics,l=o.avg,t=o.max,s=o.min,a=o.stddev;this.set({max:t,min:s,stops:r,histogramConfig:{average:l,standardDeviation:a,bins:i?i.bins:[]}})},i.prototype.render=function(){var e,i=this,r=i.state,o=i.label,l="disabled"===r,t=this.classes(p.base,p.esriWidget,p.esriWidgetPanel,(e={},e[p.disabled]=l,e));return d.tsx("div",{"aria-label":o,class:t},l?null:this.renderContent(this.renderRamp(),p.sliderContainer,p.histogramContainer))},i.prototype.renderRamp=function(){var e=this,i=e._bgFillId,r=e._rampFillId,o=e.viewModel,l=e.zoomOptions,t=o.getStopInfo();return d.tsx("div",{class:p.rampElement},d.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},d.tsx("defs",null,this.renderRampFillDefinition(r,t),this.renderBackgroundFillDefinition(i)),d.tsx("rect",{x:"0",y:"0",fill:"url(#"+i+")",height:"100%",width:"100%"}),d.tsx("rect",{x:"0",y:"0",fill:"url(#"+r+")",height:"100%",width:"100%"})),l?this.renderZoomCaps():null)};var r;return l([s.aliasOf("viewModel.handlesSyncedToPrimary")],i.prototype,"handlesSyncedToPrimary",void 0),l([s.property()],i.prototype,"label",void 0),l([s.aliasOf("viewModel.primaryHandleEnabled")],i.prototype,"primaryHandleEnabled",void 0),l([s.aliasOf("viewModel.stops")],i.prototype,"stops",void 0),l([s.property(),d.renderable(["viewModel.handlesSyncedToPrimary","viewModel.hasTimeData","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.primaryHandleEnabled","viewModel.stops","viewModel.values","viewModel.zoomOptions"])],i.prototype,"viewModel",void 0),l([s.aliasOf("viewModel.zoomOptions")],i.prototype,"zoomOptions",void 0),i=r=l([s.subclass("esri.widgets.smartMapping.ColorSlider")],i)}(s.declared(a.SmartMappingSliderBase))});