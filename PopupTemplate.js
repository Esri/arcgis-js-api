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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["./core/JSONSupport","./core/kebabDictionary","./core/Collection","./core/lang","./support/Action"],function(t,e,o,n,r){var i=e({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),s=e({shortDate:"short-date",shortDateLE:"short-date-le",longDate:"long-date",dayShortMonthYear:"day-short-month-year",longMonthDayYear:"long-month-day-year",shortDateLongTime:"short-date-long-time",shortDateLELongTime:"short-date-le-long-time",shortDateShortTime:"short-date-short-time",shortDateLEShortTime:"short-date-le-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLongTime24:"short-date-long-time-24",shortDateLELongTime24:"short-date-le-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year"}),a=e({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"}),l={attachments:"attachments",fields:"fields",media:"media",text:"text"},d="list",f=t.createSubclass({properties:{actions:{type:o.ofType(r)},content:{value:null,json:{read:{source:["description","popupElements","mediaInfos","showAttachments"]}}},expressionInfos:{value:null},fieldInfos:{value:null},overwriteActions:{value:!1},title:{value:""},relatedRecordsInfo:{value:null}},declaredClass:"esri.PopupTemplate",actions:null,content:"",expressionInfos:null,fieldInfos:null,_fieldInfosReader:function(t){return this._readFieldInfos(t)},overwriteActions:!1,title:"",relatedRecordsInfo:null,_relatedRecordsInfoReader:function(t){return t?n.clone(t):t},_dateFormatKebabDict:s,clone:function(){var t=this.actions;return t&&(t=n.clone(t.toArray())),new f({actions:t||[],content:Array.isArray(this.content)?n.clone(this.content):this.content,fieldInfos:this.fieldInfos?n.clone(this.fieldInfos):null,overwriteActions:this.overwriteActions,relatedRecordsInfo:this.relatedRecordsInfo?n.clone(this.relatedRecordsInfo):null,title:this.title})},toJSON:function(){var t={showAttachments:!1,title:this.title};this.expressionInfos&&(t.expressionInfos=n.clone(this.expressionInfos)),this.fieldInfos&&(t.fieldInfos=this._writeFieldInfos(n.clone(this.fieldInfos))),this.relatedRecordsInfo&&(t.relatedRecordsInfo=n.clone(this.relatedRecordsInfo));var e=this.content;return"string"==typeof e?t.description=e:Array.isArray(e)&&(t.popupElements=n.clone(e),t.popupElements.forEach(function(e){return e.type!==l.attachments||t.showAttachments?e.type!==l.media||t.mediaInfos?e.type!==l.text||t.description?e.type!==l.fields||t.fieldInfos||(e.fieldInfos&&(t.fieldInfos=this._writeFieldInfos(n.clone(e.fieldInfos))),delete e.fieldInfos):(e.text&&(t.description=e.text),delete e.text):(e.mediaInfos&&(t.mediaInfos=n.clone(e.mediaInfos),t.mediaInfos.forEach(function(t){t.type=a.toJSON(t.type)})),delete e.mediaInfos):t.showAttachments=!0,e}.bind(this))),t},_contentReader:function(t,e){var o=e.description,n=[],r=e.popupElements;return r&&r.length?n=r.map(function(t){return t.type!==l.text||t.text?t.type===l.media&&(t.mediaInfos||e.mediaInfos)&&(t.mediaInfos||(t.mediaInfos=e.mediaInfos),t.mediaInfos=this._readMediaInfos(t.mediaInfos)):t.text=e.description,t}.bind(this)):(e.description?n.push({type:l.text,text:e.description}):n.push({type:l.fields}),e.mediaInfos&&e.mediaInfos.length&&n.push({type:l.media,mediaInfos:this._readMediaInfos(e.mediaInfos)}),e.showAttachments&&n.push({type:l.attachments,displayType:d})),n.length&&(o=n),o},_readFieldInfos:function(t){return t&&t.forEach(function(t){var e=t.format&&t.format.dateFormat,o=t.stringFieldOption;e&&(t.format.dateFormat=s.fromJSON(e)),o&&(t.stringFieldOption=i.fromJSON(o))}),t},_writeFieldInfos:function(t){return t.forEach(function(t){var e=t.format&&t.format.dateFormat,o=t.stringFieldOption;e&&(t.format.dateFormat=s.toJSON(e)),o&&(t.stringFieldOption=i.toJSON(o)),t.format||delete t.format}),t},_readMediaInfos:function(t){return t.forEach(function(t){t.type=a.fromJSON(t.type)}),t}});return f});