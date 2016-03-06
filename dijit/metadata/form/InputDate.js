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

define(["dojo/_base/declare","dojo/_base/lang","dojo/date/locale","dojo/dom-class","dojo/dom-construct","dojo/has","../base/etc/dateUtil","./InputText","dojo/text!./templates/InputDate.html","dojo/i18n!../nls/i18nBase","dijit/Dialog","../editor/util/OkCancelBar","../../../kernel","dijit/Calendar"],function(t,e,i,a,n,o,s,r,h,l,d,u,c,m){var f=t([r],{_isGxeInputDate:!0,templateString:h,allowTime:!1,forceTime:!1,hint:l.hints.date,size:40,useNow:!1,showNow:!0,postCreate:function(){this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments),this.forceTime&&this.hint===l.hints.date?this.hint=l.hints.dateTime:this.allowTime&&this.hint===l.hints.date&&(this.hint=l.hints.dateOrDateTime)},connectXNode:function(t,e){this.inherited(arguments),!this.showNow&&this.stampNode&&(this.stampNode.style.display="none"),!e&&this.useNow&&this.setInputValue(this.forceTime?this.formatDateTime(new Date):this.formatDate(new Date))},formatDate:function(t){return s.formatDate(t)},_onCalendarClick:function(){this.showCalendar()},_onStampClick:function(){var t=new Date;this.setInputValue(this.allowTime?s.formatDateTime(t):s.formatDate(t))},_getDateForCalendar:function(){var t="yyyy-MM-dd",a=this.getInputValue();if(null===a)return null;if(a=e.trim(a),0===a.length)return null;a=a.split("Z")[0].split("T")[0];var n=a.split("-");1===n.length?t="yyyy":2===n.length&&(t="yyyy-MM");var o=i.parse(a,{datePattern:t,selector:"date"});return o},showCalendar:function(){var t=null,i=l.calendar.title,o=this._getDateForCalendar();null===o&&(o=new Date);var s=n.create("div",{}),r=new m({"class":"gxeCenteredCalendar",value:o,onChange:e.hitch(this,function(e){e=this.formatDate(e),this.forceTime&&(e+="T00:00:00+00:00"),this.setInputValue(e),t&&t.hide()})},n.create("div",{},s));r.startup();var h=new u({onOkClick:e.hitch(this,function(){var e=r.get("value");null!==e&&(e=this.formatDate(e),this.forceTime&&(e+="T00:00:00"),this.setInputValue(e),t&&t.hide())}),onCancelClick:e.hitch(this,function(){t&&t.hide()})},n.create("div",{},s));a.add(h.workingNode,"gxeSmallText"),h.showWorking(this.formatDate(o),!1),t=new d({"class":"gxeDialog gxePopupDialog",title:i,content:s}),this.isLeftToRight()||a.add(t.domNode,"gxeRtl"),this.own(t.on("hide",e.hitch(this,function(){setTimeout(e.hitch(this,function(){h.destroyRecursive(!1),t.destroyRecursive(!1),r.destroyRecursive(!1)}),300)}))),t.show()}});return o("extend-esri")&&e.setObject("dijit.metadata.form.InputDate",f,c),f});