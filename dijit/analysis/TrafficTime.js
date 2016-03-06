// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/event","dojo/_base/kernel","dojo/dom-attr","dojo/string","dojo/dom-style","dojo/dom-class","dojo/has","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/form/CheckBox","dijit/form/RadioButton","dijit/form/TimeTextBox","dijit/form/Select","dijit/form/HorizontalSlider","dijit/form/HorizontalRule","dijit/form/HorizontalRuleLabels","../../kernel","dojo/i18n!../../nls/jsapi","dojo/text!./templates/TrafficTime.html"],function(i,e,t,a,s,l,f,n,r,o,d,c,h,T,_,u,m,b,v,g,j,y,R,L,C,p){var w=e([c,h,T,_,u],{declaredClass:"esri.dijit.analysis.TrafficTime",i18n:null,templateString:p,widgetsInTemplate:!0,_liveOffset:0,showLiveTraffic:!0,postMixInProperties:function(){this.i18n={},t.mixin(this.i18n,C.common),t.mixin(this.i18n,C.driveTimes)},postCreate:function(){this.inherited(arguments),this._handleUseTrafficCheckChange(this._useTrafficCheck.get("value"))},_handleUseTrafficCheckChange:function(i){this._typicalTrafficRadioBtn.set("disabled",!i),this._liveTrafficRadioBtn.set("disabled",!i),i?this._handleLifeTrafficRadioChange(this._liveTrafficRadioBtn.get("value")&&this.showLiveTraffic):(this._liveTimeSlider.set("disabled",!i),this._trafficTime.set("disabled",!i),this._trafficDay.set("disabled",!i)),i?(o.remove(this._liveTraficLabel,"esriAnalysisTextDisabled"),o.remove(this._typicalTraficLabel,"esriAnalysisTextDisabled"),o.remove(this._liveTimeRuleLabels,"esriAnalysisTextDisabled")):(o.add(this._liveTraficLabel,"esriAnalysisTextDisabled"),o.add(this._typicalTraficLabel,"esriAnalysisTextDisabled"),o.add(this._liveTimeRuleLabels,"esriAnalysisTextDisabled"))},_handleLifeTrafficRadioChange:function(i){this._liveTimeSlider.set("disabled",!i),this._trafficTime.set("disabled",i),this._trafficDay.set("disabled",i)},_setDisabledAttr:function(i){this._useTrafficCheck.set("disabled",i)},_setResetAttr:function(i){i&&this._useTrafficCheck.set("checked",!1)},_getCheckedAttr:function(){return this._useTrafficCheck.get("checked")},_setCheckedAttr:function(i){this._useTrafficCheck.set("checked",i)},_getTimeOfDayAttr:function(){var i,e;return this._liveTrafficRadioBtn.get("value")?i=(new Date).getTime()+60*this._liveOffset*1e3:(e=new Date(this._trafficDay.get("value")),i=e.getTime()-60*e.getTimezoneOffset()*1e3+this._trafficTime.get("value").getTime()-60*this._trafficTime.get("value").getTimezoneOffset()*1e3),i},_getTimeZoneForTimeOfDayAttr:function(){return this._liveTrafficRadioBtn.get("value")?"UTC":""},_handleLiveTimeSliderChange:function(i){var e,t,a,s;e=60*i,t=Math.floor(i),a=e-60*t,s=0===t&&0===a?this.i18n.liveTrafficLabel:0===t?n.substitute(this.i18n.liveTimeMinutesLabel,{minute:a}):1===t?0===a?this.i18n.liveSingularHourTimeLabel:n.substitute(this.i18n.liveSingularTimeLabel,{minute:a}):0===a?n.substitute(this.i18n.liveTimeHoursLabel,{hour:t,minute:a}):n.substitute(this.i18n.liveTimeLabel,{hour:t,minute:a}),this._liveOffset=e,f.set(this._liveTraficLabel,"innerHTML",s)},_setShowLiveTrafficAttr:function(i){this._set("showLiveTraffic",i),this._liveTrafficRadioRow&&r.set(this._liveTrafficRadioRow,"display",i?"table-row":"none"),this._liveTrafficCtrlRow&&r.set(this._liveTrafficCtrlRow,"display",i?"table-row":"none"),this._typicalTrafficRadioRow&&r.set(this._typicalTrafficRadioRow,"display",i?"table-row":"none"),this._typicalTrafficRadioBtn&&this._typicalTrafficRadioBtn.set("checked",!i),this._availabilityRow&&r.set(this._availabilityRow,"display",i?"table-row":"none"),this._useTrafficLabel&&f.set(this._useTrafficLabel,"innerHTML",this.i18n.typicalTraffCdtnLabel)}});return d("extend-esri")&&t.setObject("dijit.analysis.TrafficTime",w,L),w});