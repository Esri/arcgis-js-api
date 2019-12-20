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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./OpacitySlider/nls/OpacitySlider","../../Color","../../core/accessorSupport/decorators","./SmartMappingSliderBase","./OpacitySlider/OpacitySliderViewModel","./../support/widget"],function(e,i,t,r,s,o,l,a,n,d,p){var c={base:"esri-opacity-slider",rampElement:"esri-opacity-slider__ramp",sliderContainer:"esri-opacity-slider__slider-container",histogramContainer:"esri-opacity-slider__histogram-container",esriWidget:"esri-widget",esriWidgetPanel:"esri-widget--panel",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"},u={trackFillColor:new l([0,121,193])};return function(e){function i(i){var r=e.call(this,i)||this;return r._bgFillId=null,r._rampFillId=null,r.label=o.widgetLabel,r.stops=null,r.style=t({},u),r.viewModel=new d,r.zoomOptions=null,r._rampFillId=r.id+"-ramp-fill",r._bgFillId=r.id+"-bg-fill",r}r(i,e),l=i,i.prototype.castStyle=function(e){return t({},u,e)},i.fromVisualVariableResult=function(e,i){var t=e.visualVariable.stops,r=e.statistics,s=r.avg,o=r.max,a=r.min,n=r.stddev;return new l({max:o,min:a,stops:t,histogramConfig:{average:s,standardDeviation:n,bins:i?i.bins:[]}})},i.prototype.updateFromVisualVariableResult=function(e,i){var t=e.visualVariable.stops,r=e.statistics,s=r.avg,o=r.max,l=r.min,a=r.stddev;this.set({max:o,min:l,stops:t,histogramConfig:{average:s,standardDeviation:a,bins:i?i.bins:[]}})},i.prototype.render=function(){var e,i=this,t=i.state,r=i.label,s="disabled"===t,o=this.classes(c.base,c.esriWidget,c.esriWidgetPanel,(e={},e[c.disabled]=s,e));return p.tsx("div",{"aria-label":r,class:o},s?null:this.renderContent(this.renderRamp(),c.sliderContainer,c.histogramContainer))},i.prototype.renderRamp=function(){var e=this,i=e._bgFillId,t=e._rampFillId,r=e.style.trackFillColor,s=e.viewModel,o=e.zoomOptions,l=s.getStopInfo(r);return p.tsx("div",{class:c.rampElement},p.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},p.tsx("defs",null,this.renderRampFillDefinition(t,l),this.renderBackgroundFillDefinition(i)),p.tsx("rect",{x:"0",y:"0",fill:"url(#"+i+")",height:"100%",width:"100%"}),p.tsx("rect",{x:"0",y:"0",fill:"url(#"+t+")",height:"100%",width:"100%"})),o?this.renderZoomCaps():null)};var l;return s([a.property()],i.prototype,"label",void 0),s([a.aliasOf("viewModel.stops")],i.prototype,"stops",void 0),s([a.property(),p.renderable()],i.prototype,"style",void 0),s([a.cast("style")],i.prototype,"castStyle",null),s([a.property(),p.renderable(["viewModel.hasTimeData","viewModel.inputFormatFunction","viewModel.inputParseFunction","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.stops","viewModel.values","viewModel.zoomOptions"])],i.prototype,"viewModel",void 0),s([a.aliasOf("viewModel.zoomOptions")],i.prototype,"zoomOptions",void 0),i=l=s([a.subclass("esri.widgets.smartMapping.OpacitySlider")],i)}(a.declared(n.SmartMappingSliderBase))});