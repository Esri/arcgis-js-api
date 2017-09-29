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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","./QueryUtil","../../supportClasses/DocumentOptions","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes"],function(t,i,n,e,o,s,r){var a=t(null,{_wizard:null,_pendingJsonObj:null,constructor:function(t){this._wizard=t},notifyShown:function(){if(this._canApplyJson()&&this._pendingJsonObj&&this._pendingJsonObj.sections&&this._pendingJsonObj.sections.length){var t=this._pendingJsonObj;this._pendingJsonObj=null,n.set(this._wizard.domNode,"visibility","visible"),this.fromJson(t),!this._pendingJsonObj&&this._wizard.onPendingDataApplied()}},_canApplyJson:function(){return s.isNodeInLayout(this._wizard.domNode)},fromJson:function(t){if(this._wizard.removeFieldInfoSelection(),t=t||{sections:[]},!this._canApplyJson())return this._pendingJsonObj=t,void n.set(this._wizard.domNode,"visibility","hidden");this._pendingJsonObj=null,n.set(this._wizard.domNode,"visibility","visible"),this._wizard.clear(),this._wizard.documentOptions=i.mixin(o.getDefaultDocumentOptions(),t.documentOptions),n.set(this._wizard.stackContainer,"backgroundColor",this._wizard.documentOptions.backgroundColor||this._wizard.viewModel.getDocumentDefaultStyles(this._wizard.theme||this._wizard.themeContext).backgroundColor),this._wizard.updateLayout();var e=this._wizard.viewModel.dynamicReportInfo;if(e&&e.features.length>1){var s={documentOptions:t.documentOptions,sections:[]};if("esriReportTemplateMultiColumn"==e.reportType)t.sections.forEach(function(t){function n(t){return t.type==r.DETAILS&&t.stack&&t.stack.some(function(t){return"table"==t.id&&(!t.attributes||!t.attributes.dynamicColumns&&!t.attributes.dynamicRows)})}if(n(t))for(var o=0;o<e.features.length;o++)0!=o&&(t=i.clone(t)),t.previewFeatureIndex=o,s.sections.push(t);else s.sections.push(t)});else for(var a=t.sections,d=0;d<e.features.length;d++)0!=d&&(a=i.clone(a)),a.forEach(function(t){t.previewFeatureIndex=d}),s.sections=s.sections.concat(a);t=s}var c=this;t.sections.forEach(function(t){c.addSectionFromJson(t)})},addSectionFromJson:function(t,i,n,e){var o=this._isPageBreakSection(t)?"pageBreak":t.type==r.EMPTY?"empty":"custom",s=this._wizard.addSection(o,{json:t},i,n,e);return s},_isPageBreakSection:function(t){return t.stack&&1==t.stack.length&&"pageBreak"==t.stack[0].id},toJson:function(t){var n={};n.documentOptions=i.mixin({},this._wizard.documentOptions),n.sections=[];var o=this;return e.getReportElements(this._wizard).forEach(function(i){var e=o._wizard.getElementSection(i);!e||!t&&e.isEmpty()||n.sections.push(e.toJson())}),n}});return a});