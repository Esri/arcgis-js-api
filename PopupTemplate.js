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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["./core/Accessor","./core/JSONSupport","./core/kebabDictionary","./core/Collection","./core/lang","./support/Action","dojo/_base/lang"],function(t,e,o,n,r,i,a){var s=o({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),d=o({shortDate:"short-date",shortDateLE:"short-date-le",longDate:"long-date",dayShortMonthYear:"day-short-month-year",longMonthDayYear:"long-month-day-year",shortDateLongTime:"short-date-long-time",shortDateLELongTime:"short-date-le-long-time",shortDateShortTime:"short-date-short-time",shortDateLEShortTime:"short-date-le-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLongTime24:"short-date-long-time-24",shortDateLELongTime24:"short-date-le-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year"}),l=o({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"}),f={attachments:"attachments",fields:"fields",media:"media",text:"text"},c="list",h=e.createSubclass({properties:{actions:{type:n.ofType(i)},content:{value:null,json:{readFrom:["description","popupElements","mediaInfos","showAttachments"]}},fieldInfos:{value:null},overwriteActions:{value:!1},title:{value:""},relatedRecordsInfo:{value:null}},declaredClass:"esri.PopupTemplate",actions:null,content:"",fieldInfos:null,_fieldInfosReader:function(t){return this._readFieldInfos(t)},overwriteActions:!1,title:"",relatedRecordsInfo:null,_relatedRecordsInfoReader:function(t){return t?r.clone(t):t},_dateFormatKebabDict:d,clone:function(){var t=this.actions;return t&&(t=r.clone(t.toArray())),new h({actions:t||[],content:Array.isArray(this.content)?r.clone(this.content):this.content,fieldInfos:this.fieldInfos?r.clone(this.fieldInfos):null,overwriteActions:this.overwriteActions,relatedRecordsInfo:this.relatedRecordsInfo?r.clone(this.relatedRecordsInfo):null,title:this.title})},toJSON:function(){var t={showAttachments:!1,title:this.title};this.fieldInfos&&(t.fieldInfos=this._writeFieldInfos(r.clone(this.fieldInfos))),this.relatedRecordsInfo&&(t.relatedRecordsInfo=r.clone(this.relatedRecordsInfo));var e=this.content;return"string"==typeof e?t.description=e:Array.isArray(e)&&(t.popupElements=r.clone(e),t.popupElements.forEach(function(e){return e.type!==f.attachments||t.showAttachments?e.type!==f.media||t.mediaInfos?e.type!==f.text||t.description?e.type!==f.fields||t.fieldInfos||(e.fieldInfos&&(t.fieldInfos=this._writeFieldInfos(r.clone(e.fieldInfos))),delete e.fieldInfos):(e.text&&(t.description=e.text),delete e.text):(e.mediaInfos&&(t.mediaInfos=r.clone(e.mediaInfos),t.mediaInfos.forEach(function(t){t.type=l.toJSON(t.type)})),delete e.mediaInfos):t.showAttachments=!0,e}.bind(this))),t},_contentReader:function(t,e){var o=e.description,n=[],r=e.popupElements;return r&&r.length?n=r.map(function(t){return t.type!==f.text||t.text?t.type===f.media&&(t.mediaInfos||e.mediaInfos)&&(t.mediaInfos||(t.mediaInfos=e.mediaInfos),t.mediaInfos=this._readMediaInfos(t.mediaInfos)):t.text=e.description,t}.bind(this)):(e.description?n.push({type:f.text,text:e.description}):n.push({type:f.fields}),e.mediaInfos&&e.mediaInfos.length&&n.push({type:f.media,mediaInfos:this._readMediaInfos(e.mediaInfos)}),e.showAttachments&&n.push({type:f.attachments,displayType:c})),n.length&&(o=n),o},_readFieldInfos:function(t){return t&&t.forEach(function(t){var e=t.format&&t.format.dateFormat,o=t.stringFieldOption;e&&(t.format.dateFormat=d.fromJSON(e)),o&&(t.stringFieldOption=s.fromJSON(o))}),t},_writeFieldInfos:function(t){return t.forEach(function(t){var e=t.format&&t.format.dateFormat,o=t.stringFieldOption;e&&(t.format.dateFormat=d.toJSON(e)),o&&(t.stringFieldOption=s.toJSON(o)),t.format||delete t.format}),t},_readMediaInfos:function(t){return t.forEach(function(t){t.type=l.fromJSON(t.type)}),t}});return h});