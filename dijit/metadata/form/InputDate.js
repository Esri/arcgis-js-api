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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/date/locale","dojo/dom-class","dojo/dom-construct","dojo/has","../base/etc/dateUtil","./InputText","dojo/text!./templates/InputDate.html","dojo/i18n!../nls/i18nBase","dijit/Dialog","../editor/util/OkCancelBar","../../../kernel","dijit/Calendar"],function(t,e,i,a,n,s,o,h,r,l,d,c,u,m){var f=t([h],{_isGxeInputDate:!0,templateString:r,allowTime:!1,forceTime:!1,hint:l.hints.date,size:40,useNow:!1,showNow:!0,postCreate:function(){this.inherited(arguments),this.connectAriaClickable(this.calendarNode,e.hitch(this,this._onCalendarClick)),this.connectAriaClickable(this.stampNode,e.hitch(this,this._onStampClick))},postMixInProperties:function(){this.inherited(arguments),this.forceTime&&this.hint===l.hints.date?this.hint=l.hints.dateTime:this.allowTime&&this.hint===l.hints.date&&(this.hint=l.hints.dateOrDateTime)},connectXNode:function(t,e){this.inherited(arguments),!this.showNow&&this.stampNode&&(this.stampNode.style.display="none"),!e&&this.useNow&&this.setInputValue(this.forceTime?this.formatDateTime(new Date):this.formatDate(new Date))},formatDate:function(t){return o.formatDate(t)},_onCalendarClick:function(){this.showCalendar()},_onStampClick:function(){var t=new Date;this.setInputValue(this.allowTime?o.formatDateTime(t):o.formatDate(t))},_getDateForCalendar:function(){var t="yyyy-MM-dd",a=this.getInputValue();if(null===a)return null;if(a=e.trim(a),0===a.length)return null;a=a.split("Z")[0].split("T")[0];var n=a.split("-");1===n.length?t="yyyy":2===n.length&&(t="yyyy-MM");var s=i.parse(a,{datePattern:t,selector:"date"});return s},showCalendar:function(){var t=null,i=l.calendar.title,s=this._getDateForCalendar();null===s&&(s=new Date);var o=n.create("div",{}),h=new m({"class":"gxeCenteredCalendar",value:s,onChange:e.hitch(this,function(e){e=this.formatDate(e),this.forceTime&&(e+="T00:00:00+00:00"),this.setInputValue(e),t&&t.hide()})},n.create("div",{},o));h.startup();var r=new c({onOkClick:e.hitch(this,function(){var e=h.get("value");null!==e&&(e=this.formatDate(e),this.forceTime&&(e+="T00:00:00"),this.setInputValue(e),t&&t.hide())}),onCancelClick:e.hitch(this,function(){t&&t.hide()})},n.create("div",{},o));a.add(r.workingNode,"gxeSmallText"),r.showWorking(this.formatDate(s),!1),t=new d({"class":"gxeDialog gxePopupDialog",title:i,content:o}),this.isLeftToRight()||a.add(t.domNode,"gxeRtl"),this.own(t.on("hide",e.hitch(this,function(){setTimeout(e.hitch(this,function(){r.destroyRecursive(!1),t.destroyRecursive(!1),h.destroyRecursive(!1)}),300)}))),t.show()}});return s("extend-esri")&&e.setObject("dijit.metadata.form.InputDate",f,u),f});