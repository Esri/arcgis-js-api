// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/dom-class","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/form/DateTextBox","dijit/form/Form","dijit/form/NumberTextBox","dijit/form/TimeTextBox","dijit/form/Select","../../../../kernel","../../../../lang","../../utils","dojo/i18n!../../../../nls/jsapi","dojo/i18n!../../nls/TimeBoundarySelect","dojo/text!./TimeBoundarySelect.html"],(function(e,t,i,n,a,r,s,d,l,o,u,m,y,c,f,h,B,_,T,g,S){var p={timeIntervalLabel:"esriLeadingMargin2",timeBoundaryValue:"esriLeadingMargin2",timeBoundaryUnitSelect:"mediumInput esriAnalysisSelect",timeAlignLabel:"esriLeadingMargin2",timeRefDateSelect:"esriLeadingMargin2 esriAnalysisSelect"},j=t([r,s,d,l,o],{declaredClass:"esri.dijit.analysis.TimeBoundarySelect",templateString:S,widgetsInTemplate:!0,i18n:null,cssClass:{},constructor:function(e){e.containerNode&&(this.container=e.containerNode),this.cssClass=i.mixin(p,this.cssClass)},destroy:function(){this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments),this.i18n=i.mixin({},T.common),i.mixin(this.i18n,g)},postCreate:function(){this.inherited(arguments)},startup:function(){},validate:function(){return this._form.validate()},_setTimeBoundarySplitAttr:function(e){this.timeBoundarySplit=e,this._timeBoundarySplitValue&&this._timeBoundarySplitValue.set("value",e)},_getTimeBoundarySplitAttr:function(){return this._timeBoundarySplitValue.get("value")},_setTimeBoundarySplitUnitAttr:function(e){this.timeBoundarySplitUnit=e,this._timeBoundarySplitUnitSelect&&this._timeBoundarySplitUnitSelect.set("value",e)},_getTimeBoundarySplitUnitAttr:function(){return this._timeBoundarySplitUnitSelect.get("value")},_getTimeBoundaryReferenceAttr:function(){if(this._timeBdryRefDay){var e,t,i,n,a="",r="",s="";e=this._timeBdryRefDay.get("value"),t=this._timeBdryRefTime.get("value"),e&&(a=e.toDateString(),s="Date"),t&&(r=t.toTimeString(),s="DateTime"),this.set("timeBoundaryReferenceType",s),i=r&&-1!==r.indexOf("GMT")?a+" "+r.substring(0,r.indexOf("GMT")+"GMT".length):r?a+" "+r.split(" ")[0]+" GMT":a+" GMT",n=new Date(i),this.timeBoundaryReference=n.getTime()}return this.timeBoundaryReference},_setTimeBoundaryReferenceAttr:function(e){var t=new Date(e),i=new Date(e+60*t.getTimezoneOffset()*1e3);this._timeBdryRefDay&&this._timeBdryRefDay.set("value",i),this._timeBdryRefTime&&"DateTime"===this.timeBoundaryReferenceType&&this._timeBdryRefTime.set("value",i)},_setTimeBoundaryReferenceTypeAttr:function(e){this.timeBoundaryReferenceType=e},_setDisabledAttr:function(e){this._timeBoundarySplitValue.set("disabled",e),this._timeBoundarySplitValue.set("required",!e),this._timeBoundarySplitUnitSelect.set("disabled",e),this._timeBoundarySplitUnitSelect.set("required",!e),this._timeBdryRefDay.set("disabled",e),this._timeBdryRefTime.set("disabled",e),a.toggle(this._timeIntervalLabel,"esriAnalysisTextDisabled",e),a.toggle(this._timeAlignLabel,"esriAnalysisTextDisabled",e)},_handleTimIntervalChange:function(e){},_handleTimeIntervalUnitChange:function(e){},_handleRefTimeChange:function(e){this._timeBdryRefDay.set("required",e&&!this._timeBdryRefDay.get("value"))}});return n("extend-esri")&&i.setObject("dijit.analysis.TimeBoundarySelect",j,h),j}));