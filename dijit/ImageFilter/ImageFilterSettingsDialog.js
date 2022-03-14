// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","dojo/string","dojo/query","dojo/json","dojo/dom-class","dojo/text!./templates/ImageFilterSettingsDialog.html","dojo/i18n!../../nls/jsapi","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","../../domUtils"],(function(e,t,i,a,s,r,o,m,h,l,n,d,c){return e([l,n,d],{templateString:m,widgetsInTemplate:!0,_supportsTime:{shortDate:!0,shortDateLE:!0},constructor:function(i,a){e.safeMixin(this,i),this._i18n=h.widgets.imageFilter.imageFilterSettings,this._i18n=t.mixin(this._i18n,h.common),this._i18n=t.mixin(this._i18n,h.widgets.visibleScaleRangeSlider)},show:function(){this._loadSettings(),this.dialog.show()},_getFormatter:function(){var e,t=this.fieldValue,i=t.type;s(".formatTime").addClass("hide"),s(".esriImageFilterFieldFormat, .legendTitle, .format").forEach((function(e){c.hide(e)}));var a=t.format;a&&((e=r.parse(a))&&(i in this.imageFilter.esriDataType.decimal||i in this.imageFilter.esriDataType.integer)?(i in this.imageFilter.esriDataType.decimal&&this._formatNumberSelect.set("value",e.places,!1),this._formatNumberCheck.set("value",e.digitSeparator,!1),i in this.imageFilter.esriDataType.decimal?s(".esriImageFilterFieldFormat, .legendTitle, .formatNumber").forEach((function(e){c.show(e)})):s(".esriImageFilterFieldFormat, .legendTitle, .formatInteger").forEach((function(e){c.show(e)}))):e&&i in this.imageFilter.esriDataType.date?(s(".formatTime").removeClass("hide"),s(".esriImageFilterFieldFormat, .legendTitle, .esriImageFilterFormatDate").forEach((function(e){c.show(e)})),e.dateFormat.indexOf("LETime")>-1||e.dateFormat.indexOf("LEShortTime")>-1||e.dateFormat.indexOf("LELongTime")>-1?(this._formatDateSelect.set("value","shortDateLE",!1),this._formatTimeCheck.set("checked",!0),this._formatTimeSelect.set("value",e.dateFormat.split("shortDateLE")[1],!1),this._enableUpdateTime(!0)):e.dateFormat.indexOf("Time")>-1?(this._formatDateSelect.set("value","shortDate",!1),this._formatTimeCheck.set("checked",!0),this._formatTimeSelect.set("value",e.dateFormat.split("shortDate")[1],!1),this._enableUpdateTime(!0)):(this._formatDateSelect.set("value",e.dateFormat,!1),this._enableUpdateTime(e.dateFormat in this._supportsTime))):s(".esriImageFilterFieldFormat, .legendTitle").forEach((function(e){c.hide(e)})))},_setFormatter:function(e,t){var i=this.fieldValue,a=r.parse(i.format);if(s(".formatTime").addClass("hide"),"dateFormat"===e){var o=t||this._formatDateSelect.get("value"),m=o in this._supportsTime,h=m&&this._formatTimeCheck.get("checked")?this._formatTimeSelect.get("value"):"";s(".formatTime").removeClass("hide"),this._enableUpdateTime(m),a[e]=o+h}else a[e]="places"===e?parseInt(t,10):t;this.fieldValue.format=r.stringify(a)},_enableUpdateTime:function(e){this._formatTimeCheck.set("disabled",!e),o[e?"remove":"add"](this.timeCheckboxLbl,"disabled"),e||this._formatTimeCheck.set("checked",!1)},_setFormatHandles:function(){this._formatDateSelect.on("change",t.hitch(this,"_setFormatter","dateFormat")),this._formatTimeSelect.on("change",t.hitch(this,"_setFormatter","dateFormat",null)),this._formatNumberSelect.on("change",t.hitch(this,"_setFormatter","places")),this._formatNumberCheck.on("change",t.hitch(this,"_setFormatter","digitSeparator")),this._formatTimeCheck.on("change",t.hitch(this,(function(){var e=this._formatTimeCheck.get("checked");o[e?"remove":"add"](this._formatTimeSelect.domNode,"hide"),this._setFormatter("dateFormat")})))},_loadSettings:function(){this.imageFilter&&(this.fieldValue=t.clone(this.imageFilter.field),this._getFormatter(),this._setFormatHandles())},_saveSettings:function(){var e={field:t.clone(this.fieldValue)};this.imageFilter.updateFilterFeatureFormat(e)},_handleOKButtonClick:function(){this._saveSettings(),this.dialog.hide()},hide:function(){this.dialog.hide(),this.imageFilter.refresh()}})}));