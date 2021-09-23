/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../intl","../core/Handles","../core/maybe","../core/timeUtils","../core/accessorSupport/decorators/aliasOf","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/accessorSupport/trackingUtils","../intl/substitute","./Slider","./Widget","./ShadowCast/css","./ShadowCast/ShadowCastViewModel","./ShadowCast/ShadowCastVisibleElements","./ShadowCast/components/DiscreteConfigurator","./ShadowCast/components/DurationConfigurator","./ShadowCast/components/ShadowTooltip","./ShadowCast/components/ThresholdConfigurator","./ShadowCast/components/TimezonePicker","./support/DatePicker","./support/Heading","./support/timeWidgetUtils","./support/widgetUtils","./support/decorators/messageBundle","./support/jsxFactory","../intl/date"],(function(e,i,t,o,s,a,n,r,l,d,c,u,p,h,m,v,S,g,_,y,w,f,b,C,M,T,k,z,x,D,V,O){"use strict";const L={hour:"2-digit",minute:"2-digit",timeZone:"UTC"},P=/(.*)\s(.*)/,R={labelFormatFunction:z.formatSliderLabel,min:0,max:1439,steps:15,rangeLabelInputsEnabled:!1,visibleElements:{labels:!1,rangeLabels:!1},tickConfigs:[{mode:"position",values:[0,360,720,1080,1439],labelsVisible:!0,tickCreatedFunction:(e,i,t)=>{i.classList.add(g.CSS.timeRangePrimaryTick),t.classList.add(g.CSS.timeRangePrimaryTickLabel);const o=t.innerText.match(P);o&&(t.innerHTML=`${o[1]}<br><div class="${g.CSS.timeRangeAMPMLabel}">${o[2]}</div>`)}},{mode:"position",values:[120,240,480,600,840,960,1200,1320],tickCreatedFunction:(e,i)=>{i.classList.add(g.CSS.timeRangeSecondaryTick)}}]};let E=function(t){function o(e,i){var o;return(o=t.call(this,e,i)||this).viewModel=null,o.view=null,o.headingLevel=4,o.iconClass=g.CSS.widgetIcon,o.label=void 0,o.visibleElements=new y,o._handles=new s,o._defaultViewModel=null,o._timeSlider=new v({...R,container:document.createElement("div")}),o._tooltip=null,o._onTimezoneChange=e=>{o.viewModel.utcOffset=e},o._onDateChange=e=>{o.viewModel.date=e},null!=e&&e.viewModel||(o._defaultViewModel=new _({view:null==e?void 0:e.view}),o.viewModel=o._defaultViewModel),o}i._inheritsLoose(o,t);var r=o.prototype;return r.initialize=function(){this._handles.add([h.reactionInit((()=>({viewModel:this.viewModel,slider:this._timeSlider})),(e=>this._connectTimeSlider(e))),h.reactionInit((()=>({container:a.applySome(this.view,(e=>e.surface)),viewModel:this.viewModel,tooltipVisible:this.visibleElements.tooltip})),(({container:e,viewModel:i,tooltipVisible:t})=>{this._tooltip=a.destroyMaybe(this._tooltip),!a.isNone(e)&&t&&(this._tooltip=new b.ShadowTooltip({viewModel:i,container:e}))})),h.reactionInit((()=>({viewModel:this.viewModel,visible:this.visible})),(({viewModel:e,visible:i})=>e.setRunning(i)))])},r.destroy=function(){this._handles=a.destroyMaybe(this._handles),this._timeSlider=a.destroyMaybe(this._timeSlider),a.isSome(this._defaultViewModel)&&this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy()},r.loadDependencies=function(){return new Promise((function(i,t){e(["../chunks/select"],i,t)}))},r.render=function(){const{visibleElements:e,viewModel:i}=this,t="disabled"===i.state;return V.tsx("div",{key:this,class:this.classes(g.CSS.base,g.CSS.esriWidget,{[g.CSS.esriWidgetDisabled]:t})},this._renderTimeRangeSection(),e.visualizationOptions&&this._renderVisualizationOptionsSection())},r._connectTimeSlider=function({viewModel:e,slider:i}){if(this._handles.remove("slider"),a.isNone(i))return;const t=e=>n.convertTime(e,"milliseconds","minutes"),o=e=>n.convertTime(e,"minutes","milliseconds"),s=({index:i,value:t})=>{0===i?e.startTimeOfDay=o(t):e.endTimeOfDay=o(t)};this._handles.add([h.reactionInit((()=>[e.startTimeOfDay,e.endTimeOfDay]),(e=>{i.values=e.map(t)})),i.on("thumb-change",s),i.on("thumb-drag",s),i.on("segment-drag",(()=>{[e.startTimeOfDay,e.endTimeOfDay]=i.values.map(o)}))],"slider")},r._renderTimeRangeSection=function(){const{visibleElements:e}=this;return e.timeRangeSlider||e.datePicker?V.tsx("section",{key:"time-range",class:g.CSS.timeRange},V.tsx(k.Heading,{level:this.headingLevel},this.messages.timeLabel),e.timeRangeSlider&&this._renderTimeRange(),e.datePicker&&this._renderDatePicker()):null},r._renderTimeRange=function(){const{messages:e,viewModel:i,visibleElements:t}=this,{startTimeOfDay:o,endTimeOfDay:s}=i,[a,n]=[o,s].map((e=>O.formatDate(new Date(e),L)));return[V.tsx("div",{key:"time-range-indicator",class:g.CSS.timeRangeIndicator},m.substitute(e.timeRange,{start:a,end:n}),t.timezone&&V.tsx(M.TimezonePicker,{value:i.utcOffset,onChange:this._onTimezoneChange})),V.tsx("div",{key:"time-slider-container",bind:this,afterCreate:this._timeSliderContainerAfterCreate,afterRemoved:this._timeSliderContainerAfterRemoved})]},r._timeSliderContainerAfterCreate=function(e){a.applySome(this._timeSlider,(i=>{e.appendChild(i.container)}))},r._timeSliderContainerAfterRemoved=function(e){a.applySome(this._timeSlider,(i=>{e.removeChild(i.container)}))},r._renderDatePicker=function(){return V.tsx("div",{key:"date-picker",class:g.CSS.datePickerContainer},V.tsx(T,{value:this.viewModel.date,onChange:this._onDateChange}))},r._renderVisualizationOptionsSection=function(){const{headingLevel:e,messages:i,viewModel:t,visibleElements:o}=this,s=o.colorPicker,a=e=>this.classes(t.visualizationType===e?null:g.CSS.visualizationConfigHidden);return V.tsx("section",{key:"visualization",class:g.CSS.visualization},V.tsx(k.Heading,{level:e},i.visualizationLabel),this._renderVisualizationSelect(),V.tsx("div",{key:"threshold-configurator",class:a("threshold")},V.tsx(C.ThresholdConfigurator,{options:t.thresholdOptions,colorPickerVisible:s})),V.tsx("div",{key:"duration-configurator",class:a("duration")},V.tsx(f.DurationConfigurator,{options:t.durationOptions,colorPickerVisible:s})),V.tsx("div",{key:"discrete-configurator",class:a("discrete")},V.tsx(w.DiscreteConfigurator,{options:t.discreteOptions,colorPickerVisible:s})))},r._renderVisualizationSelect=function(){const e=this.messages,i=this.viewModel.visualizationType;return V.tsx("calcite-select",{class:g.CSS.visualizationSelect,key:"visualization-select",label:e.visualizationLabel,bind:this,onCalciteSelectChange:this._onVisualizationTypeChange},[{type:"threshold",label:e.threshold.label},{type:"duration",label:e.duration.label},{type:"discrete",label:e.discrete.label}].map((({type:e,label:t})=>V.tsx("calcite-option",{value:e,selected:e===i},t))))},r._onVisualizationTypeChange=function(e){var i;const t=null==(i=e.target.selectedOption)?void 0:i.value;this.viewModel.visualizationType=null!=t?t:"threshold"},i._createClass(o,[{key:"testData",get:function(){return{tooltip:this._tooltip}}}]),o}(S);return t.__decorate([u.property()],E.prototype,"viewModel",void 0),t.__decorate([r.aliasOf("viewModel.view")],E.prototype,"view",void 0),t.__decorate([u.property()],E.prototype,"headingLevel",void 0),t.__decorate([u.property()],E.prototype,"iconClass",void 0),t.__decorate([r.aliasOf("messages.widgetLabel",{overridable:!0})],E.prototype,"label",void 0),t.__decorate([u.property({type:y,nonNullable:!0})],E.prototype,"visibleElements",void 0),t.__decorate([u.property(),D.messageBundle("esri/widgets/ShadowCast/t9n/ShadowCast")],E.prototype,"messages",void 0),t.__decorate([u.property()],E.prototype,"_defaultViewModel",void 0),t.__decorate([u.property()],E.prototype,"_timeSlider",void 0),t.__decorate([u.property()],E.prototype,"_tooltip",void 0),E=t.__decorate([p.subclass("esri.widgets.ShadowCast")],E),E}));
