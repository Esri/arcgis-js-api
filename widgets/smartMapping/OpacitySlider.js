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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./OpacitySlider/nls/OpacitySlider","../../Color","../../core/accessorSupport/decorators","./SmartMappingSliderBase","./OpacitySlider/OpacitySliderViewModel","./../support/widget"],function(e,i,t,r,s,l,o,a,n,d,p){var c={base:"esri-opacity-slider",rampElement:"esri-opacity-slider__ramp",sliderContainer:"esri-opacity-slider__slider-container",histogramContainer:"esri-opacity-slider__histogram-container",esriWidget:"esri-widget",esriWidgetPanel:"esri-widget--panel",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"},u={trackFillColor:new o([0,121,193])};return function(e){function i(i){var r=e.call(this)||this;return r._bgFillId=null,r._rampFillId=null,r.label=l.widgetLabel,r.stops=null,r.style=t({},u),r.viewModel=new d,r.zoomOptions=null,r._rampFillId=r.id+"-ramp-fill",r._bgFillId=r.id+"-bg-fill",r}r(i,e),o=i,i.prototype.castStyle=function(e){return t({},u,e)},i.fromVisualVariableResult=function(e,i){var t=e.visualVariable.stops,r=e.statistics,s=r.avg,l=r.max,a=r.min,n=r.stddev;return new o({max:l,min:a,stops:t,histogramConfig:{average:s,standardDeviation:n,bins:i?i.bins:[]}})},i.prototype.updateFromVisualVariableResult=function(e,i){var t=e.visualVariable.stops,r=e.statistics,s=r.avg,l=r.max,o=r.min,a=r.stddev;this.set({max:l,min:o,stops:t,histogramConfig:{average:s,standardDeviation:a,bins:i?i.bins:[]}})},i.prototype.render=function(){var e,i=this,t=i.state,r=i.label,s="disabled"===t,l=this.classes(c.base,c.esriWidget,c.esriWidgetPanel,(e={},e[c.disabled]=s,e));return p.tsx("div",{"aria-label":r,class:l},s?null:this.renderContent(this.renderRamp(),c.sliderContainer,c.histogramContainer))},i.prototype.renderRamp=function(){var e=this,i=e._bgFillId,t=e._rampFillId,r=e.style,s=e.viewModel,l=e.zoomOptions,o=s.getStopInfo(r.trackFillColor);return p.tsx("div",{class:c.rampElement},p.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},p.tsx("defs",null,this.renderRampFillDefinition(t,o),this.renderBackgroundFillDefinition(i)),p.tsx("rect",{x:"0",y:"0",fill:"url(#"+i+")",height:"100%",width:"100%"}),p.tsx("rect",{x:"0",y:"0",fill:"url(#"+t+")",height:"100%",width:"100%"})),l?this.renderZoomCaps():null)};var o;return s([a.property()],i.prototype,"label",void 0),s([a.aliasOf("viewModel.stops")],i.prototype,"stops",void 0),s([a.property(),p.renderable()],i.prototype,"style",void 0),s([a.cast("style")],i.prototype,"castStyle",null),s([a.property(),p.renderable(["viewModel.hasTimeData","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.stops","viewModel.values","viewModel.zoomOptions"])],i.prototype,"viewModel",void 0),s([a.aliasOf("viewModel.zoomOptions")],i.prototype,"zoomOptions",void 0),i=o=s([a.subclass("esri.widgets.smartMapping.OpacitySlider")],i)}(a.declared(n.SmartMappingSliderBase))});