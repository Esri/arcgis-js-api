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

define(["require","exports","tslib","../../Color","../../core/accessorSupport/decorators","./SmartMappingSliderBase","./OpacitySlider/OpacitySliderViewModel","./../support/widget"],(function(e,i,t,r,s,o,a,l){var n="esri-opacity-slider",d="esri-opacity-slider__ramp",p="esri-opacity-slider__slider-container",c="esri-opacity-slider__histogram-container",u="esri-widget",v="esri-widget--panel",m="esri-disabled",g={trackFillColor:new r([0,121,193])};return function(e){function i(i,r){var s=e.call(this,i,r)||this;return s._bgFillId=null,s._rampFillId=null,s.label=void 0,s.messages=null,s.stops=null,s.style=t.__assign({},g),s.viewModel=new a,s.zoomOptions=null,s._rampFillId=s.id+"-ramp-fill",s._bgFillId=s.id+"-bg-fill",s}var r;return t.__extends(i,e),r=i,i.prototype.castStyle=function(e){return t.__assign(t.__assign({},g),e)},i.fromVisualVariableResult=function(e,i){var t=e.visualVariable.stops,s=e.statistics,o=s.avg,a=s.max,l=s.min,n=s.stddev;return new r({max:a,min:l,stops:t,histogramConfig:{average:o,standardDeviation:n,bins:i?i.bins:[]}})},i.prototype.updateFromVisualVariableResult=function(e,i){var t=e.visualVariable.stops,r=e.statistics,s=r.avg,o=r.max,a=r.min,l=r.stddev;this.set({max:o,min:a,stops:t,histogramConfig:{average:s,standardDeviation:l,bins:i?i.bins:[]}})},i.prototype.render=function(){var e,i=this.state,t=this.label,r="disabled"===i,s=this.classes(n,u,v,((e={})[m]=r,e));return l.tsx("div",{"aria-label":t,class:s},r?null:this.renderContent(this.renderRamp(),p,c))},i.prototype.renderRamp=function(){var e=this,i=e._bgFillId,t=e._rampFillId,r=e.style.trackFillColor,s=e.viewModel,o=e.zoomOptions,a=s.getStopInfo(r);return l.tsx("div",{class:d},l.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},l.tsx("defs",null,this.renderRampFillDefinition(t,a),this.renderBackgroundFillDefinition(i)),l.tsx("rect",{x:"0",y:"0",fill:"url(#"+i+")",height:"100%",width:"100%"}),l.tsx("rect",{x:"0",y:"0",fill:"url(#"+t+")",height:"100%",width:"100%"})),o?this.renderZoomCaps():null)},t.__decorate([s.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],i.prototype,"label",void 0),t.__decorate([s.property(),l.renderable(),l.messageBundle("esri/widgets/smartMapping/OpacitySlider/t9n/OpacitySlider")],i.prototype,"messages",void 0),t.__decorate([s.aliasOf("viewModel.stops")],i.prototype,"stops",void 0),t.__decorate([s.property(),l.renderable()],i.prototype,"style",void 0),t.__decorate([s.cast("style")],i.prototype,"castStyle",null),t.__decorate([s.property(),l.renderable(["viewModel.hasTimeData","viewModel.inputFormatFunction","viewModel.inputParseFunction","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.stops","viewModel.values","viewModel.zoomOptions"])],i.prototype,"viewModel",void 0),t.__decorate([s.aliasOf("viewModel.zoomOptions")],i.prototype,"zoomOptions",void 0),i=r=t.__decorate([s.subclass("esri.widgets.smartMapping.OpacitySlider")],i)}(o.SmartMappingSliderBase)}));