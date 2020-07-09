// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/accessorSupport/decorators","../Widget","./FeatureFields/FeatureFieldsViewModel","../support/uriUtils","../support/widget"],(function(e,t,r,s,i,o,l,d){var a="esri-feature-fields",n="esri-feature-fields__field-header",u="esri-feature-fields__field-data",f="esri-feature-fields__field-data--date",p="esri-widget__table";return function(e){function t(t,r){var s=e.call(this,t,r)||this;return s.attributes=null,s.expressionInfos=null,s.fieldInfos=null,s.viewModel=new o,s.messages=null,s.messagesURIUtils=null,s}return r.__extends(t,e),t.prototype.renderFieldInfo=function(e,t){var r,s=this.viewModel.attributes,i=e.fieldName,o=e.label||i,a=s?null==s[i]?"":s[i]:"",p=!(!e.format||!e.format.dateFormat),c="number"==typeof a&&!p?this._forceLTR(a):l.autoLink(this.messagesURIUtils,a),_=((r={})[f]=p,r);return d.tsx("tr",{key:"fields-element-info-row-"+i+"-"+t},d.tsx("th",{key:"fields-element-info-row-header-"+i+"-"+t,class:n,innerHTML:o}),d.tsx("td",{key:"fields-element-info-row-data-"+i+"-"+t,class:this.classes(u,_),innerHTML:c}))},t.prototype.renderFields=function(){var e=this,t=this.viewModel.formattedFieldInfos;return t.length?d.tsx("table",{class:p,summary:this.messages.fieldsSummary},d.tsx("tbody",null,t.map((function(t,r){return e.renderFieldInfo(t,r)})))):null},t.prototype.render=function(){return d.tsx("div",{class:a},this.renderFields())},t.prototype._forceLTR=function(e){return"&lrm;"+e},r.__decorate([s.aliasOf("viewModel.attributes")],t.prototype,"attributes",void 0),r.__decorate([s.aliasOf("viewModel.expressionInfos")],t.prototype,"expressionInfos",void 0),r.__decorate([s.aliasOf("viewModel.fieldInfos")],t.prototype,"fieldInfos",void 0),r.__decorate([s.property({type:o}),d.renderable(["viewModel.attributes","viewModel.formattedFieldInfos"])],t.prototype,"viewModel",void 0),r.__decorate([s.property(),d.renderable(),d.messageBundle("esri/widgets/Feature/t9n/Feature")],t.prototype,"messages",void 0),r.__decorate([s.property(),d.renderable(),d.messageBundle("esri/widgets/support/t9n/uriUtils")],t.prototype,"messagesURIUtils",void 0),t=r.__decorate([s.subclass("esri.widgets.Feature.FeatureFields")],t)}(i)}));