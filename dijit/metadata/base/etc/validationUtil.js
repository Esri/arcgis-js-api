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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/has","dojo/i18n!../../nls/i18nBase","../../../../kernel"],function(e,t,i,n,a){var s={formatMessage:function(t,i){var a,s=t.label,l=null,d=n.validation.pattern,r=n.validation.patternWithHint;return!t.isValid&&t.considerHint&&void 0!==(a=t.inputWidget.hint)&&null!==a&&(a=e.trim(a),a.length>0&&(l=a)),null!=l?r.replace("{label}",s).replace("{message}",i).replace("{hint}",l):d.replace("{label}",s).replace("{message}",i)},validateValue:function(e,t){if(e.isValid=!0,e.message=this.formatMessage(e,n.validation.ok),e._continue=!0,this._checkEmpty(e,t),e.isValid&&e._continue&&(this._checkAlternates(e,t),e.isValid&&e._continue))if(e.considerHint=!0,e.inputWidget._isGxeInputNumber){if(this._checkNumber(e,t),!e.isValid||!e._continue)return}else if(e.inputWidget._isFgdcInputDate){if(this._checkFgdcDate(e,t),!e.isValid||!e._continue)return}else if(e.inputWidget._isFgdcInputTime){if(this._checkFgdcTime(e,t),!e.isValid||!e._continue)return}else if(e.inputWidget._isGxeInputDate&&(e.inputWidget.forceTime?this._checkDateTime(e,t):e.inputWidget.allowTime&&-1!==t.indexOf("T")?this._checkDateTime(e,t):this._checkDate(e,t),!e.isValid||!e._continue))return},_checkAlternates:function(e,i){var n=e.xnodeWidget.alternateValues;n&&n.push&&n.length>0&&t.some(n,function(e){return e===i})&&(e._continue=!1)},_checkDate:function(e,t){var i=!1,a=/^(\d{4})$/,s=/^(\d{2})$/,l=t.split("-");a.test(l[0])&&(l.length>1?s.test(l[1])&&(l.length>2?3==l.length&&("Z"===l[2].charAt(l[2].length-1)&&(l[2]=l[2].substring(0,l[2].length-1)),s.test(l[2])&&(i=!0)):i=!0):i=!0),i||(e.isValid=!1,e.message=this.formatMessage(e,n.validation.date))},_checkDateTime:function(e,t){/^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[0-1]|0[1-9]|[1-2][0-9])T(2[0-3]|[0-1][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-](?:2[0-3]|[0-1][0-9]):[0-5][0-9])?$/.test(t)||(e.isValid=!1,e.message=this.formatMessage(e,n.validation.other))},_checkEmpty:function(t,i){var a=t.isRequired,s=t.xnodeWidget.serializeIfEmpty,l=null===i;if(null!=i&&("string"==typeof i?l=t.xnodeWidget.trim?0===e.trim(i).length:0===i.length:i.push&&(l=0===i.length)),l)if(a)if(s)t._continue=!1;else{if(this._checkIndeterminates(t,i),!t._continue)return;t.isValid=!1,t.message=this.formatMessage(t,n.validation.empty)}else t._continue=!1},_checkFgdcDate:function(e,t){var i=!1;0===t.indexOf("-")&&(i=!0);var a=t.replace(/-/g,"");i&&(a="-"+a),/^\d{4}(\d{2}(\d{2})?)?$/.test(a)||(e.isValid=!1,e.message=this.formatMessage(e,n.validation.date))},_checkFgdcTime:function(e,t){var i=t.replace(/:/g,"");i=i.replace(/\./g,"");var a=/^\d{2}(\d{2}(\d{2,})?)?$/,s=/^\d{2}(\d{2}(\d{2,})?)?[+\-]\d{4}$/,l=/^\d{2}(\d{2}(\d{2,})?)?Z$/;a.test(i)||s.test(i)||l.test(i)||(e.isValid=!1,e.message=this.formatMessage(e,n.validation.other))},_checkIndeterminates:function(e,i){if(e.xnodeWidget._isGxeElement){var n,a=e.xnodeWidget.target,s=null;"gml:beginPosition"!==a&&"gml:endPosition"!==a||(s=e.xnodeWidget.findAttributes(),t.some(s,function(t){if("indeterminatePosition"===t.target)return!t._isOptionallyOff&&t.inputWidget&&("unknown"!==(n=t.inputWidget.getInputValue())&&"now"!==n||(e._continue=!1)),!0}))}},_checkNumber:function(e,t){var i,a=e.inputWidget,s=a.minValue,l=a.maxValue;if(a.integerOnly){if(i=/(^-?\d\d*$)/,!i.test(t))return e.isValid=!1,void(e.message=this.formatMessage(e,n.validation.integer))}else i=/(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/,i.test(t)||(e.isValid=!1,e.message=this.formatMessage(e,n.validation.number));if(null!==s||null!==l){var d=Number(t),r=!0,o=!0;null!=s&&(r=a.minValueIsExclusive?d>s:d>=s),null!=l&&(o=a.maxValueIsExclusive?d<l:d<=l),r&&o||(e.isValid=!1,e.message=this.formatMessage(e,n.validation.other))}}};return i("extend-esri")&&e.setObject("dijit.metadata.base.etc.validationUtil",s,a),s});