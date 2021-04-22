/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/maybe","../../core/Logger","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/aliasOf","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../Color","../../renderers/visualVariables/support/SizeStop","../../renderers/visualVariables/SizeVariable","../support/widgetUtils","../support/decorators/messageBundle","../../chunks/index","./support/utils","./SmartMappingSliderBase","./SizeSlider/SizeSliderViewModel"],(function(e,i,s,t,a,r,o,l,n,d,p,m,u,c,g,h,z,v,_,S,b){"use strict";var f;const y={base:"esri-size-slider",rampElement:"esri-size-slider__ramp",sliderContainer:"esri-size-slider__slider-container",histogramContainer:"esri-size-slider__histogram-container",zoomCapTop:"esri-size-slider__zoom-cap-top",zoomCapBottom:"esri-size-slider__zoom-cap-bottom",zoomCapLine:"esri-size-slider__zoom-cap-line",zoomCapMask:"esri-size-slider__zoom-cap-mask",zoomCapUnderline:"esri-size-slider__zoom-cap-underline",esriWidget:"esri-widget",esriWidgetPanel:"esri-widget--panel",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"},V={trackFillColor:new u([149,149,149]),trackBackgroundColor:new u([224,224,224])};let w=f=function(i){function s(e,s){var t;return(t=i.call(this,e,s)||this)._maxRampFillWidth=1,t._minRampFillWidth=.2,t._rampNode=null,t.handlesSyncedToPrimary=null,t.label=void 0,t.messages=null,t.persistSizeRangeEnabled=null,t.primaryHandleEnabled=null,t.stops=null,t.style={...V},t.viewModel=new b,t.zoomOptions=null,t}e._inheritsLoose(s,i);var a=s.prototype;return a.castStyle=function(e){return{...V,...e}},s.fromRendererResult=function(e,i){const{visualVariables:s,statistics:t}=e,{avg:a,stddev:r}=t,o=s[0],[l,n]=_.getSizesFromVariable(o),d=e.renderer.authoringInfo.visualVariables[0],p=d.minSliderValue,m=d.maxSliderValue;return new f({max:m,min:p,stops:[{value:o.minDataValue,size:n},{value:o.maxDataValue,size:l}],histogramConfig:{average:a,standardDeviation:r,bins:i?i.bins:[]}})},a.updateFromRendererResult=function(e,i){const{visualVariables:s,statistics:t}=e,{avg:a,stddev:r}=t,o=s[0],[l,n]=_.getSizesFromVariable(o),d=e.renderer.authoringInfo.visualVariables[0],p=d.minSliderValue,m=d.maxSliderValue;this.set({max:m,min:p,stops:[{value:o.minDataValue,size:n},{value:o.maxDataValue,size:l}],histogramConfig:{average:a,standardDeviation:r,bins:i?i.bins:[]}})},a.updateVisualVariable=function(e){const i=e.clone(),{stops:s}=this;if(!e||!s)return null;if(i.stops)return i.stops=s,i;const t=s[0],a=s[s.length-1];let r=i.maxSize,o=i.minSize;if(r instanceof g){const e=r.stops,i=a.size/e[0].size,s=e.map((e=>(e.size*=i,e)));r.stops=s}else r=a.size;if(o instanceof g){const e=o.stops,i=t.size/e[0].size,s=e.map((e=>(e.size*=i,e)));o.stops=s}else o=t.size;return i.set({maxDataValue:a.value,minDataValue:t.value,maxSize:r,minSize:o}),i},a.updateFromVisualVariable=function(e){if(!e)return;const{maxDataValue:i,minDataValue:s,stops:t}=e;if(t)this.stops=t;else{const[t,a]=_.getSizesFromVariable(e);this.stops=[new c({value:s,size:a}),new c({value:i,size:t})]}},a.render=function(){const{state:e,label:i}=this,s="disabled"===e,t=this.classes(y.base,y.esriWidget,y.esriWidgetPanel,{[y.disabled]:s});return v.jsx("div",{"aria-label":i,class:t},s?null:this.renderContent(this.renderRamp(),y.sliderContainer,y.histogramContainer))},a.renderRamp=function(){const{style:{trackBackgroundColor:e},zoomOptions:i}=this;return v.jsx("div",{afterCreate:h.storeNode,bind:this,class:y.rampElement,"data-node-ref":"_rampNode"},v.jsx("svg",{key:"ramp-svg",xmlns:"http://www.w3.org/2000/svg"},v.jsx("rect",{x:"0",y:"0",fill:_.getFillFromColor(e),height:"100%",width:"100%"}),this.renderPath()),i?this.renderZoomCaps():null)},a.renderPath=function(){if(!this._rampNode)return;const{offsetHeight:e=0,offsetWidth:i=0}=this._rampNode;if(!t.isSome(e)||!t.isSome(i))return;const{primaryHandleEnabled:s,stops:a,style:{trackFillColor:r},values:o,viewModel:{max:l,min:n},_maxRampFillWidth:d,_minRampFillWidth:p}=this,m=[d,p];a[0].size<a[a.length-1].size&&m.reverse();const[u,c]=m,[g,h]=o,z=s?_.getDynamicPathForSizeStops({max:l,min:n,pathHeight:e,pathWidth:i,stops:a,padding:c}):_.getPathForSizeStops({bottomValue:g,bottomWidth:u,max:l,min:n,pathHeight:e,pathWidth:i,topValue:h,topWidth:c});return v.jsx("path",{d:z,fill:_.getFillFromColor(r)})},s}(S.SmartMappingSliderBase);return i.__decorate([o.aliasOf("viewModel.handlesSyncedToPrimary")],w.prototype,"handlesSyncedToPrimary",void 0),i.__decorate([r.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],w.prototype,"label",void 0),i.__decorate([r.property(),z.messageBundle("esri/widgets/smartMapping/SizeSlider/t9n/SizeSlider")],w.prototype,"messages",void 0),i.__decorate([o.aliasOf("viewModel.persistSizeRangeEnabled")],w.prototype,"persistSizeRangeEnabled",void 0),i.__decorate([o.aliasOf("viewModel.primaryHandleEnabled")],w.prototype,"primaryHandleEnabled",void 0),i.__decorate([o.aliasOf("viewModel.stops")],w.prototype,"stops",void 0),i.__decorate([r.property()],w.prototype,"style",void 0),i.__decorate([l.cast("style")],w.prototype,"castStyle",null),i.__decorate([r.property()],w.prototype,"viewModel",void 0),i.__decorate([o.aliasOf("viewModel.zoomOptions")],w.prototype,"zoomOptions",void 0),w=f=i.__decorate([n.subclass("esri.widgets.smartMapping.SizeSlider")],w),w}));
