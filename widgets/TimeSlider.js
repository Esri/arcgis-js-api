// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","dojo/i18n!../nls/common","dojo/i18n!./TimeSlider/nls/TimeSlider","../TimeInterval","../core/arrayUtils","../core/Collection","../core/compilerUtils","../core/Error","../core/events","../core/mathUtils","../core/maybe","../core/throttle","../core/accessorSupport/decorators","../intl/date","../layers/support/timeUtils","./Slider","./Widget","./TimeSlider/TimeSliderViewModel","./support/widget","./support/widgetUtils"],function(e,t,i,n,r,o,a,s,l,u,m,c,d,p,v,f,h,w,y,b,_,x,T,g){var k={slider:"esri-time-slider esri-widget",sliderMode:"esri-time-slider--",widgetIcon:"esri-icon-time-clock",playButton:"esri-widget--button esri-time-slider__play",timeDisplay:"esri-time-slider__dates",timeExtentDate:"esri-time-slider__time-extent-date",timeExtentTime:"esri-time-slider__time-extent-time",timeExtentSeparator:"esri-time-slider__time-extent-separator",timeTrack:"esri-time-slider__track",previousButton:"esri-widget--button esri-time-slider__previous",nextButton:"esri-widget--button esri-time-slider__next",buttonDisabled:"esri-button--disabled",previousIcon:"esri-icon-reverse esri-time-slider__previous-icon",nextIcon:"esri-icon-forward esri-time-slider__next-icon",playIcon:"esri-icon-play esri-time-slider__play-icon",stopIcon:"esri-icon-pause esri-time-slider__pause-icon",majorTick:"majorTick",minorTick:"minorTick",majorLabel:"majorLabel"},j=new u([{minor:new s({value:100,unit:"milliseconds"}),major:new s({value:1,unit:"seconds"}),format:{second:"numeric"}},{minor:new s({value:500,unit:"milliseconds"}),major:new s({value:5,unit:"seconds"}),format:{second:"numeric"}},{minor:new s({value:1,unit:"seconds"}),major:new s({value:20,unit:"seconds"}),format:{minute:"numeric",second:"numeric"}},{minor:new s({value:2,unit:"seconds"}),major:new s({value:30,unit:"seconds"}),format:{minute:"numeric",second:"numeric"}},{minor:new s({value:10,unit:"seconds"}),major:new s({value:1,unit:"minutes"}),format:{minute:"numeric"}},{minor:new s({value:15,unit:"seconds"}),major:new s({value:5,unit:"minutes"}),format:{hour:"numeric",minute:"numeric"}},{minor:new s({value:1,unit:"minutes"}),major:new s({value:20,unit:"minutes"}),format:{hour:"numeric",minute:"numeric"}},{minor:new s({value:5,unit:"minutes"}),major:new s({value:2,unit:"hours"}),format:{hour:"numeric",minute:"numeric"}},{minor:new s({value:15,unit:"minutes"}),major:new s({value:6,unit:"hours"}),format:{hour:"numeric",minute:"numeric"}},{minor:new s({value:1,unit:"hours"}),major:new s({value:1,unit:"days"}),format:{day:"numeric",month:"short"}},{minor:new s({value:6,unit:"hours"}),major:new s({value:1,unit:"weeks"}),format:{day:"numeric",month:"short"}},{minor:new s({value:1,unit:"days"}),major:new s({value:1,unit:"months"}),format:{month:"long"}},{minor:new s({value:2,unit:"days"}),major:new s({value:1,unit:"months"}),format:{month:"short"}},{minor:new s({value:3,unit:"days"}),major:new s({value:1,unit:"months"}),format:{month:"short"}},{minor:new s({value:4,unit:"days"}),major:new s({value:3,unit:"months"}),format:{month:"short",year:"numeric"}},{minor:new s({value:1,unit:"weeks"}),major:new s({value:1,unit:"years"}),format:{year:"numeric"}},{minor:new s({value:1,unit:"months"}),major:new s({value:1,unit:"years"}),format:{year:"numeric"}},{minor:new s({value:2,unit:"months"}),major:new s({value:2,unit:"years"}),format:{year:"numeric"}},{minor:new s({value:1,unit:"years"}),major:new s({value:1,unit:"decades"}),format:{year:"numeric"}},{minor:new s({value:2,unit:"years"}),major:new s({value:5,unit:"decades"}),format:{year:"numeric"}},{minor:new s({value:5,unit:"decades"}),major:new s({value:10,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new s({value:1,unit:"centuries"}),major:new s({value:10,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new s({value:2,unit:"centuries"}),major:new s({value:20,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new s({value:5,unit:"centuries"}),major:new s({value:50,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new s({value:10,unit:"centuries"}),major:new s({value:100,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new s({value:20,unit:"centuries"}),major:new s({value:200,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new s({value:50,unit:"centuries"}),major:new s({value:500,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new s({value:100,unit:"centuries"}),major:new s({value:1e3,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new s({value:200,unit:"centuries"}),major:new s({value:1e3,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new s({value:500,unit:"centuries"}),major:new s({value:5e3,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new s({value:1e3,unit:"centuries"}),major:new s({value:1e4,unit:"centuries"}),format:{era:"short",year:"numeric"}}]);return function(e){function t(t){var i=e.call(this)||this;return i._slider=null,i._tickFormat=null,i.effectiveStops=null,i.fullTimeExtent=null,i.iconClass=k.widgetIcon,i.label=a.widgetLabel,i.loop=!0,i.playRate=1e3,i.mode="time-window",i.stops={count:10},i.timeExtent=null,i.timeVisible=!1,i.values=null,i.view=null,i.viewModel=new x,i}return i(t,e),t.prototype.postInitialize=function(){var e=this;this._slider=new b({precision:0,rangeLabelsVisible:!0,rangeLabelInputsEnabled:!1,labelFormatFunction:function(t,i){if(("min"===i||"max"===i)&&t){var n=new Date(t),r=e._formateDate(n),o=e._formateTime(n);return e.timeVisible?r+"\n"+o:""+r}return null}});var t=f.throttle(function(){return e.scheduleRender()},100);this.own([this._slider.on(["value-change","values-change"],function(){e.set("values",e._slider.values.map(function(e){return new Date(e)}))}),d.on(window,"resize",t),this.watch("effectiveStops",function(){e._updateSliderSteps()}),this.watch(["stops","fullTimeExtent"],function(){e._createDefaultValues()})]),this._updateSliderSteps(),this._createDefaultValues(),this._validateTimeExtent()},t.prototype.destroy=function(){this.view=null,this._slider.destroy(),this._tickFormat=null},t.prototype.next=function(){},t.prototype.play=function(){},t.prototype.previous=function(){},t.prototype.stop=function(){return null},t.prototype.render=function(){var e=this,t=e.fullTimeExtent,i=e.mode,n=e._slider,r=e.effectiveStops,a=e.timeVisible,s=e.values,u=e.viewModel;if(null!=t){var m=t.start,c=t.end;if(null==m||null==c)return;n.min=m.valueOf(),n.max=c.valueOf();var d=n.trackElement?n.trackElement.offsetWidth:400,p=(c.getTime()-m.getTime())/d,f=j.find(function(e){return e.minor.toMilliseconds()>3*p});if(this._tickFormat!==f&&null!=f){this._tickFormat=f;var h=this._getTickPositions(f.minor),y={mode:"position",values:h,labelsVisible:!1,tickCreatedFunction:function(e,t,i){t.classList.add(k.minorTick)}},b=this._getTickPositions(f.major),_={mode:"position",values:b,labelsVisible:!0,tickCreatedFunction:function(e,t,i){t.classList.add(k.majorTick),i.classList.add(k.majorLabel)},labelFormatFunction:function(e){return w.formatDate(e,f.format)}};n.tickConfigs=[y,_]}}var x=s?s.map(function(e){return e.getTime()}):null;l.equals(n.values,x)||(n.values=x);var S=null,E=null,D=null,M=null;if(s&&s.length>0){var O=s[0];S=this._formateDate(O),a&&(E=this._formateTime(O))}if("time-window"===i&&s&&s.length>1){var O=s[1];D=this._formateDate(O),a&&(M=this._formateTime(O))}var C=u.state,I="ready"===C,V="playing"===C,F="disabled"===C||0===r.length,L=T.tsx("button",{"aria-disabled":F?"true":"false","aria-label":V?o.control.stop:o.control.play,bind:this,class:this.classes(k.playButton,F&&k.buttonDisabled),disabled:F,title:V?o.control.stop:o.control.play,onclick:this._playOrStopClick},T.tsx("div",{class:this.classes((I||F)&&k.playIcon,V&&k.stopIcon)})),R=T.tsx("div",{class:k.timeDisplay},v.isSome(S)?T.tsx("div",{key:"start-date",class:k.timeExtentDate},S):null,v.isSome(E)?T.tsx("div",{key:"start-time",class:k.timeExtentTime},E):null,v.isSome(D)?T.tsx("div",{key:"separator",class:k.timeExtentSeparator},"–"):null,v.isSome(D)?T.tsx("div",{key:"end-date",class:k.timeExtentDate},D):null,v.isSome(M)?T.tsx("div",{key:"end-time",class:k.timeExtentTime},M):null),B=T.tsx("div",{class:k.timeTrack},n.render()),H=T.tsx("button",{"aria-disabled":F?"true":"false","aria-label":o.pagination.previous,bind:this,class:this.classes(k.previousButton,(V||F)&&k.buttonDisabled),disabled:F,title:o.pagination.previous,onclick:this._previousClick},T.tsx("div",{class:k.previousIcon})),U=T.tsx("button",{"aria-disabled":F?"true":"false","aria-label":o.pagination.next,bind:this,class:this.classes(k.nextButton,(V||F)&&k.buttonDisabled),disabled:F,title:o.pagination.next,onclick:this._nextClick},T.tsx("div",{class:k.nextIcon})),P=[L,R,B,H,U];return g.isRTL()&&P.reverse(),T.tsx("div",{class:this.classes(k.slider,""+k.sliderMode+i)},P)},t.prototype._createDefaultValues=function(){var e=this,t=e.fullTimeExtent,i=e.effectiveStops,n=e.mode,r=e.values;t&&i&&n&&!r&&(this.values="time-window"===n?i.length>1?[i[0],i[1]]:null:i.length>0?[i[0]]:null)},t.prototype._getTickPositions=function(e){for(var t=this.fullTimeExtent,i=t.start,n=t.end,r=[],o=y.truncateDate(i,e.unit);o.getTime()<=n.getTime();)o.getTime()>=i.getTime()&&r.push(o.getTime()),o=y.appendDate(o,e);return r},t.prototype._formateDate=function(e){return w.formatDate(e,w.convertDateFormatToIntlOptions("short-date"))},t.prototype._formateTime=function(e){return w.formatDate(e,w.convertDateFormatToIntlOptions("long-time"))},t.prototype._updateSliderSteps=function(){this._slider.steps=this.effectiveStops.length>0?this.effectiveStops.map(function(e){return e.getTime()}):null},t.prototype._validateTimeExtent=function(){var e=this;if(this.fullTimeExtent&&this.mode&&this.values){if(!Array.isArray(this.values))throw new c("time-slider:invalid-values","Values must be an array of dates.");if(0===this.values.length||this.values.some(function(e){return!(e instanceof Date)}))throw new c("time-slider:invalid-values","Values must be an array of dates.");switch(this.values=this.values.map(function(t){var i=t.getTime(),n=p.clamp(i,e.fullTimeExtent.start.getTime(),e.fullTimeExtent.end.getTime());return new Date(n)}),this.mode){case"instant":case"cumulative-from-start":case"cumulative-from-end":this.values.length>1&&this.values.splice(1);break;case"time-window":1===this.values.length?this.values.push(this.fullTimeExtent.end):this.values.length>2&&this.values.splice(2),this.values.sort(function(e,t){return e.getTime()-t.getTime()});break;default:m.neverReached(this.mode)}}},t.prototype._playOrStopClick=function(){switch(this.viewModel.state){case"ready":this.viewModel.play();break;case"playing":this.viewModel.stop();break;case"disabled":break;default:m.neverReached(this.viewModel.state)}},t.prototype._previousClick=function(){this.viewModel.previous()},t.prototype._nextClick=function(){this.viewModel.next()},n([h.aliasOf("viewModel.effectiveStops"),T.renderable()],t.prototype,"effectiveStops",void 0),n([h.aliasOf("viewModel.fullTimeExtent"),T.renderable()],t.prototype,"fullTimeExtent",void 0),n([h.property()],t.prototype,"iconClass",void 0),n([h.property()],t.prototype,"label",void 0),n([h.aliasOf("viewModel.loop")],t.prototype,"loop",void 0),n([h.aliasOf("viewModel.playRate")],t.prototype,"playRate",void 0),n([h.aliasOf("viewModel.mode"),T.renderable()],t.prototype,"mode",void 0),n([h.aliasOf("viewModel.stops")],t.prototype,"stops",void 0),n([h.aliasOf("viewModel.timeExtent")],t.prototype,"timeExtent",void 0),n([h.property({nonNullable:!0}),T.renderable()],t.prototype,"timeVisible",void 0),n([h.aliasOf("viewModel.values"),T.renderable()],t.prototype,"values",void 0),n([h.aliasOf("viewModel.view")],t.prototype,"view",void 0),n([h.property({type:x}),T.renderable(["viewModel.state"])],t.prototype,"viewModel",void 0),n([h.aliasOf("viewModel.next")],t.prototype,"next",null),n([h.aliasOf("viewModel.play")],t.prototype,"play",null),n([h.aliasOf("viewModel.previous")],t.prototype,"previous",null),n([h.aliasOf("viewModel.stop")],t.prototype,"stop",null),n([T.accessibleHandler()],t.prototype,"_playOrStopClick",null),n([T.accessibleHandler()],t.prototype,"_previousClick",null),n([T.accessibleHandler()],t.prototype,"_nextClick",null),t=n([h.subclass("esri.widgets.TimeSlider")],t)}(h.declared(_))});