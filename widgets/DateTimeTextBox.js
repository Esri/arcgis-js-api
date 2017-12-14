// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["./Widgette","dojo/_base/lang","dojo/date/locale","dojo/keys","../renderers/support/utils","dijit/form/_DateTimeTextBox","dijit/form/ValidationTextBox"],function(t,e,i,a,s,n,o){var r=t.createSubclass([o],{declaredClass:"esri.widgets.DateTimeTextBox",properties:{visible:!0,value:null,date:null},_timeSeparator:", ",_dateFormatOptions:{dateOptions:{formatLength:"short",selector:"date",fullYear:!0},timeOptions:{formatLength:"short",selector:"time"}},constructor:function(t,i){this._getValidDateTimeRE=e.hitch(this,this._getValidDateTimeRE),this.set("pattern",this._getValidDateTimeRE),this.set("invalidMessage",this._getInvalidMessage())},postCreate:function(){this.inherited(arguments),this.set("value",this.date),this.own(this.watch("date",e.hitch(this,this._dateChangeHandler)),this.on("change",e.hitch(this,this._valueChangeHandler)),this.on("keydown",e.hitch(this,this._keydownHandler)))},format:function(t){var e=this._formatDate(t);return e},parse:function(t,e){var i=this._parseDateString(t,e);return i.isValid?new Date(i.value):void 0},compare:n.prototype.compare,_isInvalidDate:n.prototype._isInvalidDate,_dateChangeHandler:function(t,e,i){this.date!==this.value&&this.set("value",i)},_valueChangeHandler:function(t){this.isValid()&&this.set("date",t)},_keydownHandler:function(t){t.keyCode===a.ENTER&&this._commitValueToDate()},_commitValueToDate:function(){var t=this._parseDateString(this.textbox.value);t.isValid&&this.set("value",new Date(t.value))},_formatDate:function(t){var e="";if(t instanceof Date&&(t=t.getTime()),"number"==typeof t&&!isNaN(t)){var i=s.formatDate(t,{selector:"date",dateOptions:this._dateFormatOptions.dateOptions}),a=s.formatDate(t,{selector:"time",timeOptions:this._dateFormatOptions.timeOptions});e=this._mergeDateTime(i,a)}return e},_parseDateString:function(t,e){t=t||"",e=e||{};var a=t.split(this._timeSeparator),s=a[0],n=a[1],o=i.parse(s,this._dateFormatOptions.dateOptions),r=i.parse(n,this._dateFormatOptions.timeOptions),h=!1,d=e.min,m=e.max,l=o&&o.getTime();if("number"!=typeof l||isNaN(l))l=null;else if(r){var u=r&&r.getTime();"number"!=typeof u||isNaN(u)||(u-=60*r.getTimezoneOffset()*1e3,l+=u,h=!0)}else h=!n;return h&&(d=d&&d.getTime(),m=m&&m.getTime(),"number"!=typeof d||isNaN(d)||d>l&&(h=!1),"number"!=typeof m||isNaN(m)||l>m&&(h=!1)),{isValid:h,value:l}},_getValidDateTimeRE:function(){var t=i.regexp(this._dateFormatOptions.dateOptions),e=i.regexp(this._dateFormatOptions.timeOptions),a=t+"(,\\s"+e+")?";return a},_getInvalidMessage:function(){return this._formatDate(new Date(0))},_mergeDateTime:function(t,e){return t+(e?this._timeSeparator+e:"")}});return r});