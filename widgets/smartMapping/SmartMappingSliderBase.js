/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import o from"../../Color.js";import{isNone as i,isSome as e}from"../../core/maybe.js";import{watch as n}from"../../core/reactiveUtils.js";import{aliasOf as s}from"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/arrayUtils.js";import"../../core/has.js";import{cast as a}from"../../core/accessorSupport/decorators/cast.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import l from"../Histogram.js";import p from"../Slider.js";import c from"../Widget.js";import{getDeviationValues as d}from"./support/utils.js";import"../support/widgetUtils.js";import{tsx as h}from"../support/jsxFactory.js";const g={zoomCap:"zoom-cap",maxZoomCap:"zoom-cap--max",minZoomCap:"zoom-cap--min",zoomCapLine:"zoom-cap--line",zoomCapMask:"zoom-cap--mask",zoomCapUnderline:"zoom-cap--underline"},u={interactiveTrack:!1};let b=class extends c{constructor(t,o){super(t,o),this.hasTimeData=null,this.histogram=new l({layout:"vertical"}),this.histogramConfig=null,this.inputFormatFunction=null,this.inputParseFunction=null,this.labelFormatFunction=null,this.precision=4,this.slider=new p({syncedSegmentsEnabled:!0,thumbsConstrained:!1,layout:"vertical",visibleElements:{labels:!0,rangeLabels:!0},labelInputsEnabled:!0,rangeLabelInputsEnabled:!0}),this.state=null,this.syncedSegmentsEnabled=!1,this.viewModel=null,this.visibleElements={...u},this.zoomOptions=null;const i=this.slider;!t?.hasTimeData||t?.inputParseFunction||t?.inputFormatFunction||i.set({labelInputsEnabled:!1,rangeLabelInputsEnabled:!1}),i.draggableSegmentsEnabled=!!t?.visibleElements?.interactiveTrack,this.own([i.on("max-change",(t=>this.emit("max-change",t))),i.on("max-click",(t=>this.emit("max-click",t))),i.on("min-change",(t=>this.emit("min-change",t))),i.on("min-click",(t=>this.emit("min-click",t))),i.on("segment-click",(t=>this.emit("segment-click",t))),i.on("segment-drag",(t=>this.emit("segment-drag",t))),i.on("thumb-change",(t=>this.emit("thumb-change",t))),i.on("thumb-click",(t=>this.emit("thumb-click",t))),i.on("thumb-drag",(t=>this.emit("thumb-drag",t))),i.on("track-click",(t=>this.emit("track-click",t))),n((()=>[this.histogramConfig,this.max,this.min,this.zoomOptions]),(()=>{const{histogram:t,histogramConfig:o,viewModel:{max:i,min:e}}=this,n=this.getParamsFromHistogramConfig(o);t.set({...n,max:i,min:e})})),n((()=>this.labelFormatFunction),(()=>{const{histogram:t,labelFormatFunction:o}=this;t.set({labelFormatFunction:o})})),n((()=>this.hasTimeData),(t=>{const{labelInputsEnabled:o,rangeLabelInputsEnabled:e}=this.slider,n=!t||this.inputFormatFunction&&this.inputParseFunction;i.set({labelInputsEnabled:o&&n,rangeLabelInputsEnabled:e&&n})})),n((()=>this.visibleElements?.interactiveTrack),(t=>{i.draggableSegmentsEnabled=!!t}))]),this._onMaxZoomCapPointerDown=this._onMaxZoomCapPointerDown.bind(this),this._onMinZoomCapPointerDown=this._onMinZoomCapPointerDown.bind(this)}initialize(){const{histogramConfig:t={},viewModel:o}=this,{labelFormatFunction:i,max:e,min:n}=o,s=this.getParamsFromHistogramConfig(t);this.histogram.set({labelFormatFunction:i,...s,max:e,min:n}),this.slider.set({viewModel:o})}get max(){return this.commitProperty("max"),this.viewModel?.getUnzoomedMax()??null}set max(t){this.viewModel.max=t,this._set("max",t)}get min(){return this.commitProperty("min"),this.viewModel?.getUnzoomedMin()??null}set min(t){this.viewModel.min=t,this._set("min",t)}castVisibleElements(t){return{...u,...t}}renderContent(t,o,i){return this.slider.extraNodes=[t,this.renderHistogram(i)],h("div",{class:o},this.slider.render())}renderHistogram(t){return this.histogramConfig?h("div",{key:"histogram",class:t||null},this.histogram.render()):null}renderBackgroundFillDefinition(t){return h("pattern",{id:t,patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"15",height:"15"},h("image",{x:"0",y:"0",width:"15",height:"15",href:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNjY2MiIC8+PHBhdGggZD0iTTAgMCBMOCAwIEw4IDggTDAgOCBaIiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDgpIiAvPjxwYXRoIGQ9Ik0wIDAgTDggMCBMOCA4IEwwIDggWiIgZmlsbD0iI2NjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCw4KSIgLz48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgsMCkiIC8+PC9zdmc+"}))}renderRampFillDefinition(t,o){return h("linearGradient",{id:t,x1:"0",x2:"0",y1:"0",y2:"1"},this.renderRampFillStops(o))}renderRampFillStops(t){return t.reverse().map(((t,o)=>this.renderStop(t,o)))}renderStop(t,o){const{color:i,offset:e,opacity:n}=this.getPropsForStop(t);return h("stop",{key:`${o}-stop`,offset:e,"stop-color":i,"stop-opacity":n})}renderZoomCaps(){return[this.renderMaxZoomCap(),this.renderMinZoomCap()]}renderMinZoomCap(){if(this.zoomOptions&&!i(this.zoomOptions.min))return h("svg",{key:"bottom",class:this.classes(g.zoomCap,g.minZoomCap),viewBox:"0 0 30 11",xmlns:"http://www.w3.org/2000/svg",onpointerdown:this._onMinZoomCapPointerDown},h("polygon",{class:g.zoomCapMask,key:"mask",fill:"#1B8617",points:"0 11.3846154 30 11.3846154 30 1 25 5.38461538 20 1 15 5.38461538 10 1 5 5.38461538 0 1"}),h("polygon",{class:g.zoomCapUnderline,key:"underline",fill:"#69DCFF",points:"0 0 5 4.38461538 10 0 15 4.38461538 20 0 25 4.38461538 30 0 30 4.61538462 25 9 20 4.61538462 15 9 10 4.61538462 5 9 0 4.61538462"}),h("polygon",{class:g.zoomCapLine,key:"line",fill:"#DA5656",points:"0 1 5 5.38461538 10 1 15 5.38461538 20 1 25 5.38461538 30 1 30 5.61538462 25 10 20 5.61538462 15 10 10 5.61538462 5 10 0 5.61538462"}))}renderMaxZoomCap(){if(this.zoomOptions&&!i(this.zoomOptions.max))return h("svg",{key:"top",class:this.classes(g.zoomCap,g.maxZoomCap),viewBox:"0 0 30 11",xmlns:"http://www.w3.org/2000/svg",onpointerdown:this._onMaxZoomCapPointerDown},h("polygon",{class:g.zoomCapMask,key:"mask",points:"0 -1.81994377e-12 30 -1.81994377e-12 30 8.23076923 25 3.61538462 20 8.23076923 15 3.61538462 10 8.23076923 5 3.61538462 0 8.23076923"}),h("polygon",{class:g.zoomCapUnderline,key:"underline",points:"0 5.61538462 5 1 10 5.61538462 15 1 20 5.61538462 25 1 30 5.61538462 30 10.2307692 25 5.61538462 20 10.2307692 15 5.61538462 10 10.2307692 5 5.61538462 0 10.2307692"}),h("polygon",{class:g.zoomCapLine,key:"line",points:"0 4.61538462 5 -1.87329639e-12 10 4.61538462 15 -1.87329639e-12 20 4.61538462 25 -1.87329639e-12 30 4.61538462 30 9.23076923 25 4.61538462 20 9.23076923 15 4.61538462 10 9.23076923 5 4.61538462 0 9.23076923"}))}getPropsForStop(t){const{color:i,offset:e}=t;return{color:i instanceof o?i.toCss(!0):o.fromString(i).toCss(!0),offset:(100*e).toFixed(2)+"%",opacity:i instanceof o?i.toRgba()[3]:null}}getParamsFromHistogramConfig(t){if(!t)return null;const{average:o,barCreatedFunction:i,bins:e,dataLineCreatedFunction:n,dataLineUpdatedFunction:s}=t;return{average:o,barCreatedFunction:i,bins:e,dataLineCreatedFunction:n,dataLineUpdatedFunction:s,dataLines:this._getDataLines(t)}}_onMaxZoomCapPointerDown(){const{zoomOptions:t}=this;if(t&&e(t.max)){const{min:o}=t;this.zoomOptions=e(o)?{min:o}:null}}_onMinZoomCapPointerDown(){const{zoomOptions:t}=this;if(t&&e(t.min)){const{max:o}=t;this.zoomOptions=e(o)?{max:o}:null}}_getDataLines(t){const{average:o,standardDeviation:i,standardDeviationCount:e}=t,{max:n,min:s}=this.viewModel.getBounds();return[...this._getStandardDeviationDataLines(i,o,e||1),...t.dataLines||[]].filter((({value:t})=>t<=n&&t>=s))}_getStandardDeviationDataLines(t,o,i){const{max:e,min:n}=this.viewModel,s=.06*(e-n);return d(t,o,i).filter((t=>Math.abs(o-t)>s)).map(((t,i,e)=>{const n=this.labelFormatFunction?this.labelFormatFunction(t):t,s=e.length/2,a=i>=s?i-s+1:s-i;return{value:t,label:`${t>o?"+":"-"}${1===a?"":a}σ ${n}`}}))}};t([s("viewModel.hasTimeData")],b.prototype,"hasTimeData",void 0),t([r()],b.prototype,"histogram",void 0),t([r()],b.prototype,"histogramConfig",void 0),t([s("viewModel.inputFormatFunction")],b.prototype,"inputFormatFunction",void 0),t([s("viewModel.inputParseFunction")],b.prototype,"inputParseFunction",void 0),t([s("viewModel.labelFormatFunction")],b.prototype,"labelFormatFunction",void 0),t([r()],b.prototype,"max",null),t([r()],b.prototype,"min",null),t([s("viewModel.precision")],b.prototype,"precision",void 0),t([r()],b.prototype,"slider",void 0),t([s("viewModel.state")],b.prototype,"state",void 0),t([s("slider.syncedSegmentsEnabled")],b.prototype,"syncedSegmentsEnabled",void 0),t([s("viewModel.values")],b.prototype,"values",void 0),t([r()],b.prototype,"viewModel",void 0),t([r()],b.prototype,"visibleElements",void 0),t([a("visibleElements")],b.prototype,"castVisibleElements",null),t([s("viewModel.zoomOptions")],b.prototype,"zoomOptions",void 0),b=t([m("esri.widgets.smartMapping.SmartMappingSliderBase")],b);export{b as SmartMappingSliderBase};