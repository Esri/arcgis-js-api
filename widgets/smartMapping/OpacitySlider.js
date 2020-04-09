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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./OpacitySlider/nls/OpacitySlider","../../Color","../../core/accessorSupport/decorators","./SmartMappingSliderBase","./OpacitySlider/OpacitySliderViewModel","./../support/widget"],(function(e,i,t,r,o,l,s,a,n,p,d){var c="esri-opacity-slider",u="esri-opacity-slider__ramp",v="esri-opacity-slider__slider-container",m="esri-opacity-slider__histogram-container",y="esri-widget",g="esri-widget--panel",w="esri-disabled",b={trackFillColor:new s([0,121,193])};return function(e){function i(i){var r=e.call(this,i)||this;return r._bgFillId=null,r._rampFillId=null,r.label=l.widgetLabel,r.stops=null,r.style=t({},b),r.viewModel=new p,r.zoomOptions=null,r._rampFillId=r.id+"-ramp-fill",r._bgFillId=r.id+"-bg-fill",r}var s;return r(i,e),s=i,i.prototype.castStyle=function(e){return t({},b,e)},i.fromVisualVariableResult=function(e,i){var t=e.visualVariable.stops,r=e.statistics,o=r.avg,l=r.max,a=r.min,n=r.stddev;return new s({max:l,min:a,stops:t,histogramConfig:{average:o,standardDeviation:n,bins:i?i.bins:[]}})},i.prototype.updateFromVisualVariableResult=function(e,i){var t=e.visualVariable.stops,r=e.statistics,o=r.avg,l=r.max,s=r.min,a=r.stddev;this.set({max:l,min:s,stops:t,histogramConfig:{average:o,standardDeviation:a,bins:i?i.bins:[]}})},i.prototype.render=function(){var e,i=this.state,t=this.label,r="disabled"===i,o=this.classes(c,y,g,((e={})[w]=r,e));return d.tsx("div",{"aria-label":t,class:o},r?null:this.renderContent(this.renderRamp(),v,m))},i.prototype.renderRamp=function(){var e=this,i=e._bgFillId,t=e._rampFillId,r=e.style.trackFillColor,o=e.viewModel,l=e.zoomOptions,s=o.getStopInfo(r);return d.tsx("div",{class:u},d.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},d.tsx("defs",null,this.renderRampFillDefinition(t,s),this.renderBackgroundFillDefinition(i)),d.tsx("rect",{x:"0",y:"0",fill:"url(#"+i+")",height:"100%",width:"100%"}),d.tsx("rect",{x:"0",y:"0",fill:"url(#"+t+")",height:"100%",width:"100%"})),l?this.renderZoomCaps():null)},o([a.property()],i.prototype,"label",void 0),o([a.aliasOf("viewModel.stops")],i.prototype,"stops",void 0),o([a.property(),d.renderable()],i.prototype,"style",void 0),o([a.cast("style")],i.prototype,"castStyle",null),o([a.property(),d.renderable(["viewModel.hasTimeData","viewModel.inputFormatFunction","viewModel.inputParseFunction","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.stops","viewModel.values","viewModel.zoomOptions"])],i.prototype,"viewModel",void 0),o([a.aliasOf("viewModel.zoomOptions")],i.prototype,"zoomOptions",void 0),i=s=o([a.subclass("esri.widgets.smartMapping.OpacitySlider")],i)}(a.declared(n.SmartMappingSliderBase))}));