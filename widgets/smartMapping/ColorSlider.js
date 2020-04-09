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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./ColorSlider/nls/ColorSlider","../../core/accessorSupport/decorators","./SmartMappingSliderBase","./ColorSlider/ColorSliderViewModel","./../support/widget"],(function(e,i,r,l,o,t,a,s,n,d){var p="esri-color-slider",u="esri-color-slider__ramp",v="esri-color-slider__slider-container",m="esri-color-slider__histogram-container",c="esri-widget",h="esri-widget--panel",w="esri-disabled";return function(e){function i(i){var r=e.call(this,i)||this;return r._bgFillId=null,r._rampFillId=null,r.handlesSyncedToPrimary=null,r.label=t.widgetLabel,r.primaryHandleEnabled=null,r.stops=null,r.viewModel=new n,r.zoomOptions=null,r.viewModel&&r.viewModel.set("thumbsConstrained",!1),r._bgFillId=r.id+"-bg-fill",r._rampFillId=r.id+"-linear-gradient",r}var r;return l(i,e),r=i,i.fromRendererResult=function(e,i){var l=e.visualVariable.stops,o=e.statistics,t=o.avg,a=o.stddev,s=e.renderer.authoringInfo.visualVariables.filter((function(e){return"color"===e.type}))[0],n=s.minSliderValue,d=s.maxSliderValue;return new r({max:d,min:n,stops:l,histogramConfig:{average:t,standardDeviation:a,bins:i?i.bins:[]},primaryHandleEnabled:"high-to-low"!==s.theme})},i.prototype.updateFromRendererResult=function(e,i){var r=e.visualVariable.stops,l=e.statistics,o=l.avg,t=l.stddev,a=e.renderer.authoringInfo.visualVariables.filter((function(e){return"color"===e.type}))[0],s=a.minSliderValue,n=a.maxSliderValue;this.set({max:n,min:s,stops:r,histogramConfig:{average:o,standardDeviation:t,bins:i?i.bins:[]},primaryHandleEnabled:"high-to-low"!==a.theme})},i.prototype.render=function(){var e,i=this.state,r=this.label,l="disabled"===i,o=this.classes(p,c,h,((e={})[w]=l,e));return d.tsx("div",{"aria-label":r,class:o},l?null:this.renderContent(this.renderRamp(),v,m))},i.prototype.renderRamp=function(){var e=this._bgFillId,i=this._rampFillId,r=this.viewModel,l=this.zoomOptions,o=r.getStopInfo();return d.tsx("div",{class:u},d.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},d.tsx("defs",null,this.renderRampFillDefinition(i,o),this.renderBackgroundFillDefinition(e)),d.tsx("rect",{x:"0",y:"0",fill:"url(#"+e+")",height:"100%",width:"100%"}),d.tsx("rect",{x:"0",y:"0",fill:"url(#"+i+")",height:"100%",width:"100%"})),l?this.renderZoomCaps():null)},o([a.aliasOf("viewModel.handlesSyncedToPrimary")],i.prototype,"handlesSyncedToPrimary",void 0),o([a.property()],i.prototype,"label",void 0),o([a.aliasOf("viewModel.primaryHandleEnabled")],i.prototype,"primaryHandleEnabled",void 0),o([a.aliasOf("viewModel.stops")],i.prototype,"stops",void 0),o([a.property(),d.renderable(["viewModel.handlesSyncedToPrimary","viewModel.hasTimeData","viewModel.inputFormatFunction","viewModel.inputParseFunction","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.primaryHandleEnabled","viewModel.stops","viewModel.values","viewModel.zoomOptions"])],i.prototype,"viewModel",void 0),o([a.aliasOf("viewModel.zoomOptions")],i.prototype,"zoomOptions",void 0),i=r=o([a.subclass("esri.widgets.smartMapping.ColorSlider")],i)}(a.declared(s.SmartMappingSliderBase))}));