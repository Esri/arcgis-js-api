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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","./QueryUtil","../../supportClasses/DocumentOptions","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ReportTemplateTypes"],function(t,i,e,n,o,s,r,a){return t(null,{_wizard:null,_pendingJsonObj:null,constructor:function(t){this._wizard=t},notifyShown:function(){if(this._canApplyJson()&&this._pendingJsonObj&&this._pendingJsonObj.sections&&this._pendingJsonObj.sections.length){var t=this._pendingJsonObj;this._pendingJsonObj=null,e.set(this._wizard.domNode,"visibility","visible"),this.fromJson(t),!this._pendingJsonObj&&this._wizard.onPendingDataApplied()}},_canApplyJson:function(){return s.isNodeInLayout(this._wizard.domNode)},fromJson:function(t){if(t=t||{sections:[]},!this._canApplyJson())return this._pendingJsonObj=t,void e.set(this._wizard.domNode,"visibility","hidden");this._pendingJsonObj=null,e.set(this._wizard.domNode,"visibility","visible"),this._wizard.clear(),this._wizard.documentOptions=i.mixin(o.getDefaultDocumentOptions(),t.documentOptions),e.set(this._wizard.stackContainer,"backgroundColor",this._wizard.documentOptions.backgroundColor||this._wizard.viewModel.getDocumentDefaultStyles(this._wizard.theme).backgroundColor),this._wizard.updateLayout();var n=this._wizard.viewModel.dynamicReportInfo;if(n&&n.features.length>1){var s={documentOptions:t.documentOptions,sections:[]};if(n.reportType===a.MULTICOLUMN)t.sections.forEach(function(t){if(function(t){return t.type===r.DETAILS&&t.stack&&t.stack.some(function(t){return"table"===t.id&&(!t.attributes||!t.attributes.dynamicColumns&&!t.attributes.dynamicRows)})}(t))for(var e=0;e<n.features.length;e++)0!==e&&(t=i.clone(t)),t.previewFeatureIndex=e,s.sections.push(t);else s.sections.push(t)});else for(var c=t.sections,d=0;d<n.features.length;d++)0!==d&&(c=i.clone(c)),c.forEach(function(t){t.previewFeatureIndex=d}),s.sections=s.sections.concat(c);t=s}var u=this;t.sections.forEach(function(t){u.addSectionFromJson(t)})},addSectionFromJson:function(t,i,e,n){var o=this._isPageBreakSection(t)?"pageBreak":t.type===r.EMPTY?"empty":"custom";return this._wizard.addSection(o,{json:t},i,e,n)},_isPageBreakSection:function(t){return t.stack&&1===t.stack.length&&"pageBreak"===t.stack[0].id},toJson:function(t){var e={};e.documentOptions=i.clone(this._wizard.documentOptions||{}),e.sections=[];var o=this;return n.getReportElements(this._wizard).forEach(function(i){var n=o._wizard.getElementSection(i);!n||!t&&n.isEmpty()||e.sections.push(n.toJson())}),e}})});