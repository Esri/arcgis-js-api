/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/maybe","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/aliasOf","../../core/accessorSupport/decorators/subclass","../../core/Error","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../renderers/visualVariables/support/ColorStop","../../renderers/visualVariables/support/SizeStop","../support/widgetUtils","../support/decorators/messageBundle","../../chunks/index","./support/utils","./SmartMappingSliderBase","../../renderers/visualVariables/support/ColorSizeStop","./ColorSizeSlider/ColorSizeSliderViewModel"],(function(e,i,l,r,s,a,o,t,n,d,u,p,c,m,v,h,g,b,f,S,z,_){"use strict";var x;const y={base:"esri-color-size-slider",rampElement:"esri-color-size-slider__ramp",sliderContainer:"esri-color-size-slider__slider-container",histogramContainer:"esri-color-size-slider__histogram-container",esriWidget:"esri-widget",esriWidgetPanel:"esri-widget--panel",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"};let w=x=function(i){function l(e,l){var r;return(r=i.call(this,e,l)||this)._bgFillId=null,r._backgroundFillColor="#e0e0e0",r._minRampFillWidth=.2,r._rampFillId=null,r._rampNode=null,r._maxRampFillWidth=1,r.handlesSyncedToPrimary=null,r.label=void 0,r.messages=null,r.persistSizeRangeEnabled=null,r.primaryHandleEnabled=null,r.stops=null,r.viewModel=new _,r.zoomOptions=null,r._bgFillId=`${r.id}-bg-fill`,r._rampFillId=`${r.id}-linear-gradient`,r}e._inheritsLoose(l,i),l.fromRendererResult=function(e,i){const{renderer:{authoringInfo:{univariateTheme:l}},color:{visualVariable:{stops:r}},size:{visualVariables:s},statistics:a}=e,{avg:o,stddev:t}=a;if(!r)throw new d("ColorSizeSlider-fromRendererResult:invalid-renderer-result","'result' must include 'color' variable.");const n="above-and-below"===l,u=e.renderer.authoringInfo.visualVariables[0],p=u.minSliderValue,c=u.maxSliderValue,m=s.find((e=>"outline"!==(null==e?void 0:e.target)&&!(null!=e&&e.axis&&(null==e||!e.field)&&(null==e||!e.valueExpression))&&((null==e?void 0:e.field)||(null==e?void 0:e.valueExpression)))),v=m.stops,h=r.map(((e,i)=>{const{color:l,label:s,value:a}=e;let o;return o=v&&v.length>0?v[i].size:0===i?m.minSize:i===r.length-1?m.maxSize:null,new z({color:l,label:s,value:a,size:o})}));return new x({max:c,min:p,stops:h,primaryHandleEnabled:n,handlesSyncedToPrimary:n,persistSizeRangeEnabled:n,histogramConfig:{average:o,standardDeviation:t,bins:i?i.bins:[]}})};var s=l.prototype;return s.updateFromRendererResult=function(e,i){const{renderer:{authoringInfo:{univariateTheme:l}},color:{visualVariable:{stops:r}},size:{visualVariables:s},statistics:a}=e,{avg:o,stddev:t}=a;if(!r)throw new d("ColorSizeSlider-fromRendererResult:invalid-renderer-result","'result' must include 'color' variable.");const n="above-and-below"===l,u=e.renderer.authoringInfo.visualVariables[0],p=u.minSliderValue,c=u.maxSliderValue,m=s.find((e=>"outline"!==(null==e?void 0:e.target)&&!(null!=e&&e.axis&&(null==e||!e.field)&&(null==e||!e.valueExpression))&&((null==e?void 0:e.field)||(null==e?void 0:e.valueExpression)))),v=m.stops,h=r.map(((e,i)=>{const{color:l,label:s,value:a}=e;let o;return o=v&&v.length>0?v[i].size:0===i?m.minSize:i===r.length-1?m.maxSize:null,new z({color:l,label:s,value:a,size:o})}));this.set({max:c,min:p,stops:h,primaryHandleEnabled:n,handlesSyncedToPrimary:n,persistSizeRangeEnabled:n,histogramConfig:{average:o,standardDeviation:t,bins:i?i.bins:[]}})},s.updateRenderer=function(e){const{stops:i}=this,l=i[0],s=i[i.length-1],a=i[Math.floor(i.length/2)],o=e.clone(),t=o.visualVariables.map((e=>{if("size"===e.type){if("outline"===(null==e?void 0:e.target)||null!=e&&e.axis&&(null==e||!e.field)&&(null==e||!e.valueExpression))return e;r.isSome(e.minSize)&&r.isSome(e.maxSize)?e.set({maxDataValue:s.value,minDataValue:l.value,maxSize:s.size,minSize:l.size}):e.stops&&e.set({stops:i.map((e=>{const{label:i,size:l,value:r}=e;return new v({label:i,size:l,value:r})}))})}else"color"===e.type&&e.set({stops:this.stops.map((e=>{const{color:i,label:l,value:r}=e;return new m({color:i,label:l,value:r})}))});return e}));if(o.visualVariables=t,o.classBreakInfos.length>1){const e=a.value;o.classBreakInfos[0].maxValue=e,o.classBreakInfos[1].minValue=e}return o},s.updateVisualVariables=function(e){return e.map((e=>{const i=e.clone();if("size"===e.type){if("outline"===(null==e?void 0:e.target)||null!=e&&e.axis&&(null==e||!e.field)&&(null==e||!e.valueExpression))return i;if(r.isSome(e.minSize)&&r.isSome(e.maxSize)){const{stops:e}=this,l=e[0],r=e[e.length-1];i.set({maxDataValue:r.value,minDataValue:l.value,maxSize:r.size,minSize:l.size})}else e.stops&&i.set({stops:this.stops.map((e=>{const{label:i,size:l,value:r}=e;return new v({label:i,size:l,value:r})}))})}else"color"===e.type&&i.set({stops:this.stops.map((e=>{const{color:i,label:l,value:r}=e;return new m({color:i,label:l,value:r})}))});return i}))},s.render=function(){const{state:e,label:i}=this,l="disabled"===e,r=this.classes(y.base,y.esriWidget,y.esriWidgetPanel,{[y.disabled]:l});return b.jsx("div",{"aria-label":i,class:r},l?null:this.renderContent(this.renderRamp(),y.sliderContainer,y.histogramContainer))},s.renderRamp=function(){const{_bgFillId:e,_rampFillId:i,viewModel:l,zoomOptions:r}=this,s=l.getStopInfo();return b.jsx("div",{afterCreate:h.storeNode,bind:this,class:y.rampElement,"data-node-ref":"_rampNode"},b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg"},b.jsx("defs",null,this.renderRampFillDefinition(i,s),this.renderBackgroundFillDefinition(e)),b.jsx("rect",{x:"0",y:"0",fill:this._backgroundFillColor,height:"100%",width:"100%"}),this.renderPaths()),r?this.renderZoomCaps():null)},s.renderPaths=function(){if(!this._rampNode)return;const{offsetHeight:e=0,offsetWidth:i=0}=this._rampNode;if(!r.isSome(e)||!r.isSome(i))return;const{primaryHandleEnabled:l,stops:s,values:a,viewModel:{max:o,min:t},_bgFillId:n,_maxRampFillWidth:d,_minRampFillWidth:u,_rampFillId:p}=this,c=[d,u];s[0].size<s[s.length-1].size&&c.reverse();const[m,v]=c,[h,g]=a,S=l?f.getDynamicPathForSizeStops({max:o,min:t,pathHeight:e,pathWidth:i,stops:s,padding:u}):f.getPathForSizeStops({bottomValue:h,bottomWidth:m,max:o,min:t,pathHeight:e,pathWidth:i,topValue:g,topWidth:v});return[b.jsx("path",{key:"background",d:S,fill:`url(#${n})`}),b.jsx("path",{key:"fill",d:S,fill:`url(#${p})`})]},l}(S.SmartMappingSliderBase);return i.__decorate([t.aliasOf("viewModel.handlesSyncedToPrimary")],w.prototype,"handlesSyncedToPrimary",void 0),i.__decorate([o.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],w.prototype,"label",void 0),i.__decorate([o.property(),g.messageBundle("esri/widgets/smartMapping/ColorSizeSlider/t9n/ColorSizeSlider")],w.prototype,"messages",void 0),i.__decorate([t.aliasOf("viewModel.persistSizeRangeEnabled")],w.prototype,"persistSizeRangeEnabled",void 0),i.__decorate([t.aliasOf("viewModel.primaryHandleEnabled")],w.prototype,"primaryHandleEnabled",void 0),i.__decorate([t.aliasOf("viewModel.stops")],w.prototype,"stops",void 0),i.__decorate([o.property()],w.prototype,"viewModel",void 0),i.__decorate([t.aliasOf("viewModel.zoomOptions")],w.prototype,"zoomOptions",void 0),w=x=i.__decorate([n.subclass("esri.widgets.smartMapping.ColorSizeSlider")],w),w}));
